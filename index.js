const http = require('http');

const PORT = process.env.PORT || 3000;  // Important for Render

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from Dockerized Node.js App 🚀');
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});