import app from "./app.js";

const FASTIFY_PORT = Number(process.env.PORT) || 10000;

app.listen({ port: FASTIFY_PORT });

console.log(
  `🚀  Fastify server running on port http://localhost:${FASTIFY_PORT}`,
);
