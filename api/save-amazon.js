module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.GIT_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'GIT_TOKEN not configured in Vercel' });
  }

  const { content } = req.body;
  if (!content) {
    return res.status(400).json({ error: 'No content provided' });
  }

  const REPO   = 'Tootgreen/tootgreen';
  const FILE   = 'amazon-urls.json';
  const BRANCH = 'main';
  const apiUrl = `https://api.github.com/repos/${REPO}/contents/${FILE}`;
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Accept': 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    'Content-Type': 'application/json'
  };

  try {
    let sha = null;
    const existing = await fetch(`${apiUrl}?ref=${BRANCH}`, { headers });
    if (existing.ok) {
      const data = await existing.json();
      sha = data.sha;
    }

    const encoded = Buffer.from(content, 'utf8').toString('base64');
    const body = {
      message: 'Update Amazon URLs',
      content: encoded,
      branch: BRANCH,
      ...(sha ? { sha } : {})
    };

    const pushRes = await fetch(apiUrl, {
      method: 'PUT',
      headers,
      body: JSON.stringify(body)
    });

    if (!pushRes.ok) {
      const err = await pushRes.json();
      return res.status(pushRes.status).json({ error: err.message || 'GitHub API error' });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
