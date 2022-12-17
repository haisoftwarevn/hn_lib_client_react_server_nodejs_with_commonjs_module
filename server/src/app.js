const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
////////////////////// require
const HN_CONFIG = require("./utils/hn.config.util");
const planetsRouter = require("./routes/hn.planets.router");
const launchesRouter = require("./routes/hn.launches.router");
const reactController = require("./controllers/hn.react.get.controller");
////////////////////// end require

/////////////////// middleware /////
app.use(cors({ origin: HN_CONFIG.api_url }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "..", "public")));
////////////////// end middleware ////

//////////////////////// routes ////
app.use("/planets", planetsRouter);
app.use("/launches", launchesRouter);
app.use("/", reactController);
//////////////////////// end routes///

module.exports = app;
