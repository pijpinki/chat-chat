const mongoose = require("mongoose");

class Connection {
  constructor() {
    const USERNAME = "editor";
    const PASSWORD = "UqhtuwF3IGI6gOc3";
    const DATABASE_NAME = "database";
    const CONNECT_URL = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.c8cdd.mongodb.net/${DATABASE_NAME}`;

    this.connection = mongoose.connect(CONNECT_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
  }

  async init() {
    try {
      await this.connection;
    } catch (e) {
      console.error("Database connection error");
      console.error(e);
      process.exit(1);
    }
  }
}

module.exports = new Connection();
