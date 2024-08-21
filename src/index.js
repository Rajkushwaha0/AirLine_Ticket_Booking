const express = require("express");
const { PORT } = require("./config/serverConfig");
const bodyParser = require("body-parser");
const apiSetUp = require("./routes/index");
const db = require("./models/index");

const setupAndStartServer = async () => {
  //create the express object
  const app = express();

  //body parser
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  //express router
  app.use("/api", apiSetUp);

  //app listen
  app.listen(PORT, async () => {
    console.log(`Server Started at port ${PORT}`);
    if (process.env.SYNC_DB) {
      db.sequelize.sync({ alert: true });
    }
  });
};

setupAndStartServer();
