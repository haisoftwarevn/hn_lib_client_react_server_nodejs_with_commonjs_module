const express = require("express");
const launchesRouter = express.Router();

const launchesGetController = require("../controllers/hn.launches.get.controller");
const launchesPostController = require("../controllers/hn.launches.post.controller");
const launchesDeleteController = require("../controllers/hn.launches.delete.controller");
launchesRouter.get("/", launchesGetController);
launchesRouter.post("/", launchesPostController);
launchesRouter.delete("/:id", launchesDeleteController);
module.exports = launchesRouter;
