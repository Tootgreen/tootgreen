// Vercel serverless function — proxies Etsy v3 API to avoid CORS
module.exports = async function handler(req, res) {
  const apiKey   = process.env.ETSY_API_KEY;
  const shopName = process.env.ETSY_SHOP_NAME || 'TootGreen';

  if (!apiKey) {
    return res.status(500).json({ error: 'ETSY_API_KEY not configured' });
  }

  try {
    const url = `https://openapi.etsy.com/v3/application/shops/${shopName}/listings/active?limit=100&includes[]=Images&includes[]=MainImage`;
    const etsyRes = await fetch(url, {
      headers: { 'x-api-key': apiKey }
    });

    if (!etsyRes.ok) {
      const text = await etsyRes.text();
      return res.status(etsyRes.status).json({ error: text });
    }

    const data = await etsyRes.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};