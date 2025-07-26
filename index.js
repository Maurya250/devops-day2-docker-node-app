import { createServer } from 'http';

const PORT = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello from Dockerized Node.js App 🚀');
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});