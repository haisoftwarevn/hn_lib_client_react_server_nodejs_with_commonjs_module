const express = require("express");
const planetsRouter = express.Router();

//////
const planetsGetController = require("../controllers/hn.planets.get.controller");
const planetsPostController = require("../controllers/hn.planets.post.controller");

////////

planetsRouter.get("/", planetsGetController);
planetsRouter.post("/", planetsPostController);

module.exports = planetsRouter;
