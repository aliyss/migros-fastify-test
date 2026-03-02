import type { FastifyInstance } from "fastify";
import migrosSearch from "./controller/migrosSearch.ts";

export default async function router(fastify: FastifyInstance) {
  fastify.register(migrosSearch, { prefix: "/search" });
}
