module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.MAILCHIMP_TOKEN;
  const listId = process.env.MAILCHIMP_LIST_ID;

  if (!token || !listId) {
    return res.status(500).json({ error: 'Mailchimp not configured yet' });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Extract datacenter from token (format: key-dc e.g. abc123-us1)
  const dc = token.split('-').pop();
  const url = `https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email_address: email,
        status: 'pending' // sends double opt-in confirmation email
      })
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ ok: true });
    }

    // Already subscribed is fine
    if (data.title === 'Member Exists') {
      return res.status(200).json({ ok: true, already: true });
    }

    return res.status(400).json({ error: data.detail || 'Signup failed' });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};
