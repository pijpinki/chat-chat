const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const messagesRouter = require("./routers/messages-router");

class Express {
  constructor() {
    this.app = express();
  }

  init() {
    this.app.use(express.json());
    this.app.use(cors());
    this.app.use(morgan("dev"));
    this.app.use("/app", express.static(`${__dirname}/public/`));

    this.app.use("/messages", messagesRouter);

    this.app.use((req, res) => {
      res.status(404).send({ message: "Page not found" });
    });
  }
}

module.exports = Express;
