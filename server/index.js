// express app setup
const app = require("./appSetup");

// postgres client setup
const pgClient = require("./dbSetup");

// redis client setup
const { redisClient, redisPublisher } = require("./redisSetup");

// express route handles
const routes = require("./routes");
routes.setupRoutes(app, pgClient, redisClient, redisPublisher);
