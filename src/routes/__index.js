// require dari controller yg bersangkutan
const { contohController } = require("../controllers/contoh.controller");

const routes = [
  {
    method: "GET",
    path: "/",
    handler: contohController,
  },
];

module.exports = routes;
