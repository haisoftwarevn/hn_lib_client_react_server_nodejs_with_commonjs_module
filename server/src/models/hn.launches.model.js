const launches = new Map();

let latestFlightNumber = 100;

const launch = {
  flightNumber: 100,
  mission: "Kepler Exploration X",
  rocket: "Explore IS1",
  launchDate: new Date("December 27, 2030"),
  destination: "Kepler-442 b",
  customers: ["ZTM", "NASA"],
  upcoming: true,
  success: true,
};

launches.set(launch.flightNumber, launch);

const addNewLaunch = (launch) => {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      customers: ["Hai Nam", "Nasa"],
      flightNumber: latestFlightNumber,
      upcoming: true,
      success: true,
    })
  );
};

const getAllLaunches = () => {
  return Array.from(launches.values());
};

const existsLaunchWithId = (launchId) => {
  return launches.has(launchId);
};

const abortLaunchById = (launchId) => {
  const aborted = launches.get(launchId);
  aborted.upcoming = false;
  aborted.success = false;

  return aborted;
};

module.exports = {
  getAllLaunches,
  existsLaunchWithId,
  abortLaunchById,
  addNewLaunch,
};
