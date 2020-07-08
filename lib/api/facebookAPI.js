"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('dotenv').config();

class facebookAPI {
  constructor() {
    this.token = process.env.FB_PAGE_TOKEN;
  }

  async sendMarkSeen(psid) {
    let data = {
      recipient: {
        id: psid
      },
      sender_action: 'mark_seen'
    };
    return await (0, _axios.default)({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: {
        access_token: this.token
      },
      data: data
    }).catch(error => {
      if (error.response) {
        console.log('PSID: ', psid);
        console.log('Status code: ', error.response.status);
        console.log('Response: ', error.response.data);
      } else if (error.request) {
        console.log('Request: ', error.request);
      }
    });
  }

  async sendTyping(psid) {
    let data = {
      recipient: {
        id: psid
      },
      sender_action: 'typing_on'
    };
    return await (0, _axios.default)({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: {
        access_token: this.token
      },
      data: data
    }).catch(error => {
      if (error.response) {
        console.log('PSID: ', psid);
        console.log('Status code: ', error.response.status);
        console.log('Response: ', error.response.data);
      } else if (error.request) {
        console.log('Request: ', error.request);
      }
    });
  }

  async callSendAPI(psid, message) {
    let data = {
      recipient: {
        id: psid
      },
      message: {
        text: message
      }
    };
    return await (0, _axios.default)({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: {
        access_token: this.token
      },
      data: data
    }).catch(error => {
      if (error.response) {
        console.log('PSID: ', psid);
        console.log('Status code: ', error.response.status);
        console.log('Response: ', error.response.data);
      } else if (error.request) {
        console.log('Request: ', error.request);
      }
    });
  }

  async getSenderName(psid) {
    return await (0, _axios.default)({
      method: 'GET',
      url: "https://graph.facebook.com/".concat(psid),
      params: {
        fields: 'first_name',
        access_token: this.token
      }
    }).then(res => res.data.first_name);
  }

  async getGender(psid) {
    return await (0, _axios.default)({
      method: 'GET',
      url: "https://graph.facebook.com/".concat(psid),
      params: {
        fields: 'gender',
        access_token: this.token
      }
    }).then(res => res.data.gender);
  }

}

module.exports = new facebookAPI();