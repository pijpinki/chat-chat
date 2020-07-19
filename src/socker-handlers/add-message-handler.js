const BaseHadler = require("./base-handler");
const MessageModel = require("../database/models/MessageModel");

class AddMessageHandle extends BaseHadler {
  async handle() {
    const { message } = this.data;

    const messageRow = await MessageModel.create({ message });

    this.socket.broadcast({
      _id: messageRow._id,
      message: messageRow.message,
      created: messageRow._id.getTimestamp()
    });
  }
}

module.exports = AddMessageHandle;
