module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({
      success: false,
      error: 'Method not allowed'
    });
  }

  const accessKey = process.env.WEB3FORMS_API;

  if (!accessKey) {
    return res.status(500).json({
      success: false,
      error: 'WEB3FORMS_API not configured'
    });
  }

  try {
    const body = req.body || {};
    const name = String(body.from_name || '').trim();
    const email = String(body.email || '').trim();
    const message = String(body.message || '').trim();

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    const web3Res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        subject: String(body.subject || 'TootGreen Enquiry').trim(),
        from_name: name,
        email: email,
        message: message
      })
    });

    const data = await web3Res.json();

    if (!web3Res.ok || !data.success) {
      return res.status(500).json({
        success: false,
        error: data.message || 'Web3Forms request failed',
        detail: data
      });
    }

    return res.status(200).json({
      success: true
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: err && err.message ? err.message : 'Unknown server error'
    });
  }
};