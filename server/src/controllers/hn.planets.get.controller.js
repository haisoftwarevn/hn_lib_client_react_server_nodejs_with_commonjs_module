const planetsModel = require("../models/hn.planets.model");

const planetsGetController = (req, res) => {
  //todo

  return res.status(200).json(planetsModel.planets);
};

module.exports = planetsGetController;
