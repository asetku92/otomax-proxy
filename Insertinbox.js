import fetch from 'node-fetch';

export default async function handler(req, res) {
  const target = 'http://91.99.163.28:5000/InsertInbox' + (req.url.split('?')[1] ? ('?' + req.url.split('?')[1]) : '');

  if (req.method.toUpperCase() === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    return res.status(204).end();
  }

  const init = {
    method: req.method,
    headers: { 'Content-Type': 'application/json' },
    body: req.method === 'POST' ? JSON.stringify(req.body) : undefined
  };

  const response = await fetch(target, init);
  const data = await response.json();

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(response.status).json(data);
}