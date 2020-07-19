const http = require("http");
const Express = require("./express");
const WebSocketWrapper = require("./web-socket-wrapper");
const connection = require("./database/connection");

async function main() {
  await connection.init();

  const express = new Express();

  express.init();

  const server = http.createServer(express.app);

  const webSocketWrapper = new WebSocketWrapper({ server });

  webSocketWrapper.init();

  server.listen(8080, err => {
    err && console.error("error", err);
    console.info("Server started");
  });
}

main().catch(console.error);
