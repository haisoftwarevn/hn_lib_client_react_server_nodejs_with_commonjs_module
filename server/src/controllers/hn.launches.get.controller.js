const launchesModel = require("../models/hn.launches.model");

const launchesGetController = (req, res) => {
  return res.status(200).json(launchesModel.getAllLaunches());
};

module.exports = launchesGetController;
