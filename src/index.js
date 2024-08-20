const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const apiSetUp = require("./routes/index");
const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiSetUp);
  app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
  });
};

setupAndStartServer();
