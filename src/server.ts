import { app } from './app';

const port = process.env.PORT || 3333;
const host = ("RENDER" in process.env) ? '0.0.0.0' : 'localhost';

if (!port) {
  throw new Error("A variável de ambiente PORT não está definida!");
}

app
  .listen({
    port: Number(port),
    host: host,
  })
  .then(() => {
    console.log(`HTTP Server Running on http://${host}:${port}`);
  });