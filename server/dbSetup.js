const keys = require("./keys");
const pg = require("pg");

const { Pool } = pg;
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort,
});
pgClient.on("error", () => console.log("Lost Postgres connection"));

pgClient.on("connect", (client) => {
  client
    .query("CREATE TABLE IF NOT EXISTS values (number INT)")
    .then(() => console.log("Create table success!"))
    .catch((err) => {
      console.error(err);
    });
});

module.exports = pgClient;
