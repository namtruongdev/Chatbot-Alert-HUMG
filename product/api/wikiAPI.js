"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Wiki {
  constructor() {}

  async query(q) {
    try {
      const response = await _axios.default.get("https://vi.wikipedia.org/w/api.php?action=query&list=search&srsearch=".concat(q, "&format=json"));
      const rg = /<([^\<]*?)>/g;
      let result = response.data.query.search[0].snippet;
      return result.replace(rg, '');
    } catch (error) {
      console.error(error);
    }
  }

}

module.exports = new Wiki();