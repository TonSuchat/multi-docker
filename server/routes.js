const setupRoutes = (app, pgClient, redisClient, redisPublisher) => {
  app.get("/", (_req, res) => {
    res.send("Hello Suchat");
  });

  app.get("/values/all", async (_req, res) => {
    const values = await pgClient.query("SELECT * FROM values");
    res.send(values.rows);
  });

  app.get("/values/current", async (_req, res) => {
    redisClient.hgetall("values", (_err, values) => res.send(values));
  });

  app.post("/values", async (req, res) => {
    const index = req.body.index;
    if (+index > 40) return res.status(422).send("Index to high");
    redisClient.hset("values", index, "Nothing yet!");
    redisPublisher.publish("insert", index);
    pgClient.query("INSERT INTO values(number) VALUES($1)", [index]);
    res.send({ working: true });
  });
};

module.exports = {
  setupRoutes,
};
