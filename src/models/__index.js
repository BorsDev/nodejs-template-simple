require("dotenv").config();
const Sequelize = require("sequelize");
const db = {};

//establish connection to db
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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//mysql model
db.user = require("./contoh.model")(sequelize, Sequelize);

module.exports = db;
