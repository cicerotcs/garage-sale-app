const CustomApi = require("./custom-api");
const { StatusCodes } = require("http-status-codes");

class DuplicatedUsernameError extends CustomApi {
  constructor(message) {
    super(message);

    this.StatusCodes = StatusCodes.BAD_REQUEST;
  }
}

module.exports = DuplicatedUsernameError;
