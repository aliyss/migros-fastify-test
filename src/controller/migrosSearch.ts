import type { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { searchForProduct } from "../utils/search.js";

export default async function migrosSearch(fastify: FastifyInstance) {
  // GET /api/v1/user
  fastify.get(
    "/",
    async function (request: FastifyRequest, reply: FastifyReply) {
      const { query } = request.query as { query: string };
      if (!query) {
        reply.status(400).send({ error: "Query parameter is required" });
        return;
      }
      try {
        const products = await searchForProduct(query);

        reply.send(products);
      } catch (error) {
        console.error("Error searching for products:", error);
        reply
          .status(500)
          .send({ error: "An error occurred while searching for products" });
      }
    },
  );
}
