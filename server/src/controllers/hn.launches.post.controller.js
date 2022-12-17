const launchesModel = require("../models/hn.launches.model");

const launchesPostController = (req, res) => {
  const launch = req.body;

  //     flightNumber: 100,
  //   mission: "Kepler Exploration X",
  //   rocket: "Explore IS1",
  //   launchDate: new Date("December 27, 2030"),
  //   destination: "Kepler-442 b",
  //   customers: ["ZTM", "NASA"],
  //   upcoming: true,
  //   success: true,

  if (
    !launch.mission ||
    !launch.rocket ||
    !launch.launchDate ||
    !launch.destination
  ) {
    ///
    return res.status(400).json({
      error: "Missing require launch property",
    });
  }
  launch.launchDate = new Date(launch.launchDate);
  //   if (isNaN(launch.launchDate)) {
  //     return res.status(400).json({
  //       error: "Invalid date",
  //     });
  //   }

  if (launch.launchDate.toString() === "Invalid Date") {
    return res.status(400).json({
      error: "Invalid date",
    });
  }

  launchesModel.addNewLaunch(launch);

  return res.status(201).json(launch);
};

module.exports = launchesPostController;
