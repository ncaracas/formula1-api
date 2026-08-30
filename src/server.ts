import fastify from "fastify";

const server = fastify({ logger: true });

const teams = [
  { id: 1, name: "Ferrari", base: "Maranello, Italy" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
];

const drivers = [
  { id: 1, name: "Lewis Hamilton", team: "Mercedes" },
  { id: 2, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 3, name: "Charles Leclerc", team: "Ferrari" },
];

server.get("/teams", async (req, res) => {
  res.type("application/json").code(200);
  return teams;
});

server.get("/drivers", async (req, res) => {
  res.type("application/json").code(200);
  return drivers;
});

interface DriverParams {  
  id: string;
}

server .get<{ Params: DriverParams }>("/drivers/:id", async (req, res) => {
  const driverId = parseInt(req.params.id);
  const driver = drivers.find((d) => d.id === driverId);

  if (!driver) {
    res.type("application/json").code(404);
    return { error: "Driver not found" };
  }

  res.type("application/json").code(200);
  return driver;
});

server.listen({ port: 3333 }, () => {
  console.log("Server running on http://localhost:3333");
});
