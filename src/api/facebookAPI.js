require('dotenv').config();
import axios from 'axios';

class facebookAPI {
  constructor() {
    this.token = process.env.FB_PAGE_TOKEN;
  }

  async sendMarkSeen(psid) {
    let data = {
      recipient: { id: psid },
      sender_action: 'mark_seen',
    };
    return await axios({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: { access_token: this.token },
      data: data,
    }).catch((error) => {
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
      recipient: { id: psid },
      sender_action: 'typing_on',
    };
    return await axios({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: { access_token: this.token },
      data: data,
    }).catch((error) => {
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
      recipient: { id: psid },
      message: { text: message },
    };
    return await axios({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: { access_token: this.token },
      data: data,
    }).catch((error) => {
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
    return await axios({
      method: 'GET',
      url: `https://graph.facebook.com/${psid}`,
      params: {
        fields: 'first_name',
        access_token: this.token,
      },
    }).then((res) => res.data.first_name);
  }
}

module.exports = new facebookAPI();
