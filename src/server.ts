import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

const teams = [
  { "id": 1, "name": "Ferrari", "base": "Maranello, Italy" },
  { "id": 2, "name": "Mercedes", "base": "Brackley, United Kingdom" },
  { "id": 3, "name": "Red Bull Racing", "base": "Milton Keynes, United Kingdom" },
  { "id": 4, "name": "McLaren", "base": "Woking, United Kingdom" },
  { "id": 5, "name": "Aston Martin", "base": "Silverstone, United Kingdom" },
  { "id": 6, "name": "Williams", "base": "Grove, United Kingdom" },
  { "id": 7, "name": "Audi", "base": "Hinwil, Switzerland" },
  { "id": 8, "name": "Alpine", "base": "Enstone, United Kingdom" },
  { "id": 9, "name": "Haas", "base": "Kannapolis, United States" },
  { "id": 10, "name": "Racing Bulls", "base": "Faenza, Italy" },
  { "id": 11, "name": "Cadillac", "base": "Fishers, Indiana, United States" }
];

const drivers = [
  { "id": 1, "name": "Lando Norris", "team": "McLaren" },
  { "id": 2, "name": "Oscar Piastri", "team": "McLaren" },
  { "id": 3, "name": "Lewis Hamilton", "team": "Ferrari" },
  { "id": 4, "name": "Charles Leclerc", "team": "Ferrari" },
  { "id": 5, "name": "Max Verstappen", "team": "Red Bull Racing" },
  { "id": 6, "name": "Isack Hadjar", "team": "Red Bull Racing" },
  { "id": 7, "name": "George Russell", "team": "Mercedes" },
  { "id": 8, "name": "Kimi Antonelli", "team": "Mercedes" },
  { "id": 9, "name": "Fernando Alonso", "team": "Aston Martin" },
  { "id": 10, "name": "Lance Stroll", "team": "Aston Martin" },
  { "id": 11, "name": "Alexander Albon", "team": "Williams" },
  { "id": 12, "name": "Carlos Sainz Jr.", "team": "Williams" },
  { "id": 13, "name": "Gabriel Bortoleto", "team": "Audi" },
  { "id": 14, "name": "Nico Hülkenberg", "team": "Audi" },
  { "id": 15, "name": "Pierre Gasly", "team": "Alpine" },
  { "id": 16, "name": "Franco Colapinto", "team": "Alpine" },
  { "id": 17, "name": "Esteban Ocon", "team": "Haas" },
  { "id": 18, "name": "Oliver Bearman", "team": "Haas" },
  { "id": 19, "name": "Liam Lawson", "team": "Racing Bulls" },
  { "id": 20, "name": "Arvid Lindblad", "team": "Racing Bulls" },
  { "id": 21, "name": "Sergio Pérez", "team": "Cadillac" },
  { "id": 22, "name": "Valtteri Bottas", "team": "Cadillac" }
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
