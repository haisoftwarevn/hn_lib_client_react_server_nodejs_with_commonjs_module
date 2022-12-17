const launchesModel = require("../models/hn.launches.model");

const launchesDeleteController = (req, res) => {
  const launchId = Number(req.params.id);

  if (!launchesModel.existsLaunchWithId(launchId)) {
    return res.status(404).json({
      error: "Launch not found",
    });
  }

  const aborted = launchesModel.abortLaunchById(launchId);
  return res.status(200).json(aborted);
};

module.exports = launchesDeleteController;
