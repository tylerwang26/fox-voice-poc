const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8080;
const GEMINI_KEY = process.env.GEMINI_API_KEY || '';

const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')
  .replace('__GEMINI_KEY_PLACEHOLDER__', GEMINI_KEY);

http.createServer((req, res) => {
  if (req.url === '/health') {
    return res.writeHead(200).end('ok');
  }
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}).listen(PORT, () => console.log(`Fox Voice PoC on :${PORT}`));
