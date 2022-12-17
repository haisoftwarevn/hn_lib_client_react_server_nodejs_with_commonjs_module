const HN_CONFIG = require("./utils/hn.config.util");
const app = require("./app");
const http = require("http");
const planetsModel = require("./models/hn.planets.model");
////////////////////////////////////////////
const server = http.createServer(app);
//////////////////////////////////////////
const startServer = async () => {
  await planetsModel.loadPlanetsData();
  ////////////////////////////////////////
  server.listen(HN_CONFIG.port, () => {
    console.log(HN_CONFIG.message);
  });
};

///////////////
startServer();
