class BaseHandler {
  constructor({ socket, data }) {
    this.socket = socket;
    this.data = data;

    this.handle().catch(console.error);
  }

  async handle() {
    throw new Error("Method not implemented");
  }
}

module.exports = BaseHandler;
