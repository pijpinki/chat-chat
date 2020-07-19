const WebSocket = require("ws");
const AddMessageHandler = require("./socker-handlers/add-message-handler");

class WebSocketWrapper {
  constructor({ server }) {
    this.ws = new WebSocket.Server({ server });
  }

  broadcast(data) {
    this.ws.clients.forEach(client => {
      if (client.readyState !== WebSocket.OPEN) {
        return;
      }

      client.send(JSON.stringify(data));
    });
  }

  init() {
    this.ws.on("connection", ws => {
      ws.on("message", message => {
        new AddMessageHandler({ socket: this, data: JSON.parse(message) });
      });
    });
  }
}

module.exports = WebSocketWrapper;
