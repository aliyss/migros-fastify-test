import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";

export default async function healthCheck(fastify: FastifyInstance) {
  fastify.get(
    "/",
    async function (_request: FastifyRequest, reply: FastifyReply) {
      reply.send({ status: "ok" });
    },
  );
}
