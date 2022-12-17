const path = require("path");
const reactController = (req, res) => {
  res.sendFile(path.join(__dirname, "..", "..", "public", "index.html"));
};

module.exports = reactController;
