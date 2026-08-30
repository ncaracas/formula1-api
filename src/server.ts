import fastify from "fastify";

const server = fastify({ logger: true });

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);
  return [{ id: 1, name: "Ferrari" }];
});

server.listen({ port: 3333 }, () => {
  console.log("Server running on http://localhost:3333");
});
