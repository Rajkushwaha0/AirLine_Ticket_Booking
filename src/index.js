const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: ture }));

  app.listen(PORT, () => {
    console.log(`Server Started at port ${PORT}`);
  });
};

setupAndStartServer();
