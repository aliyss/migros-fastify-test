import type { FastifyInstance } from "fastify";
import migrosSearch from "./controller/migrosSearch.js";
import healthCheck from "./controller/healthCheck.js";

export default async function router(fastify: FastifyInstance) {
  fastify.register(healthCheck, { prefix: "/" });
  fastify.register(migrosSearch, { prefix: "/search" });
}
