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

  async callSendAPIWithTag(psid, message) {
    let data = {
      recipient: { id: psid },
      message: { text: message },
      messaging_type: 'MESSAGE_TAG',
      tag: 'CONFIRMED_EVENT_UPDATE',
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
  async getInfoUsers(psid) {
    return await axios({
      method: 'GET',
      url: `https://graph.facebook.com/${psid}`,
      params: {
        fields: 'name,first_name,profile_pic,gender',
        access_token: this.token,
      },
    }).then((res) => res.data);
  }
  async getStarted() {
    let data = {
      get_started: { payload: 'chào' },
    };
    return await axios({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messenger_profile',
      params: { access_token: this.token },
      data: data,
    }).catch((error) => {
      if (error.response) {
        console.log('Status code: ', error.response.status);
        console.log('Response: ', error.response.data);
      } else if (error.request) {
        console.log('Request: ', error.request);
      }
    });
  }
  async persistentMenu() {
    let data = {
      persistent_menu: [
        {
          locale: 'default',
          composer_input_disabled: false,
          call_to_actions: [
            {
              type: 'postback',
              title: 'Xem lịch học 📅',
              payload: 'Xem lịch học 📅',
            },
            {
              type: 'postback',
              title: 'Đăng ký nhận tin ⏰',
              payload: 'Đăng ký nhận tin ⏰',
            },
            {
              type: 'postback',
              title: 'Hủy nhận tin 😭',
              payload: 'Hủy nhận tin 😭',
            },
          ],
        },
      ],
    };
    return await axios({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messenger_profile',
      params: { access_token: this.token },
      data: data,
    }).catch((error) => {
      if (error.response) {
        console.log('Status code: ', error.response.status);
        console.log('Response: ', error.response.data);
      } else if (error.request) {
        console.log('Request: ', error.request);
      }
    });
  }
  async sendListAPI(uid, message) {
    let data = {
      recipient: { id: uid },
      message: { text: `` },
    };
    for (let i of message) {
      data.message.text += `\n📌 ${i.title}
     -> Xem chi tiết tại: ${i.url}\n`;
    }
    return await axios({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: { access_token: this.token },
      data: data,
    }).catch((error) => {
      if (error.response) {
        console.log('PSID: ', uid);
        console.log('Status code: ', error.response.status);
        console.log('Response: ', error.response.data);
      } else if (error.request) {
        console.log('Request: ', error.request);
      }
    });
  }
  async sendImageAPI(uid, imageURL) {
    let data = {
      recipient: {
        id: uid,
      },
      message: {
        attachment: {
          type: 'image',
          payload: {
            url: imageURL,
            is_reusable: true,
          },
        },
      },
      messaging_type: 'MESSAGE_TAG',
      tag: 'CONFIRMED_EVENT_UPDATE',
    };
    return await axios({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: { access_token: this.token },
      data: data,
    }).catch((error) => {
      if (error.response) {
        console.log('PSID: ', uid);
        console.log('Status code: ', error.response.status);
        console.log('Response: ', error.response.data);
      } else if (error.request) {
        console.log('Request: ', error.request);
      }
    });
  }
  async sendVideoAPI(uid, videoURL) {
    let data = {
      recipient: {
        id: uid,
      },
      message: {
        attachment: {
          type: 'video',
          payload: {
            url: videoURL,
            is_reusable: true,
          },
        },
      },
    };
    return await axios({
      method: 'POST',
      url: 'https://graph.facebook.com/v7.0/me/messages',
      params: { access_token: this.token },
      data: data,
    }).catch((error) => {
      if (error.response) {
        console.log('PSID: ', uid);
        console.log('Status code: ', error.response.status);
        console.log('Response: ', error.response.data);
      } else if (error.request) {
        console.log('Request: ', error.request);
      }
    });
  }
}

module.exports = new facebookAPI();
