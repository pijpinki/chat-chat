const express = require("express");
const MessageModel = require("../database/models/MessageModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const messages = await MessageModel.find().limit(20);

    res.send(
      messages.map(message => ({
        _id: message._id,
        message: message.message,
        created: message._id.getTimestamp()
      }))
    );
  } catch (e) {
    console.error(e);
    res.send(e, 500);
  }
});

module.exports = router;
