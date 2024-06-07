//init dotenv
require("dotenv").config();

// required lib
const Hapi = require("@hapi/hapi");

// required routes file
const routes = require("./src/routes/__index");

const init = async () => {
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
