//init dotenv
require("dotenv").config();

// required lib
const Hapi = require("@hapi/hapi");

// required routes file
const routes = require("./src/routes/__index");

const init = async () => {
  //init database
  const sequelize = new Sequelize(
    process.env.MYSQL_DB,
    process.env.MYSQL_USER,
    process.env.MYSQL_PWD,
    {
      host: process.env.MYSQL_HOST,
      port: process.env.MYSQL_PORT,
      dialect: "mysql",
    },
  );

  sequelize
    .authenticate()
    .then(() => {
      console.log("Success Connect to MYSQL Database");
    })
    .catch((err) => {
      console.log(err);
    });

  //init server
  const server = Hapi.server({
    host: process.env.HOST,
    port: process.env.PORT,
  });

  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
