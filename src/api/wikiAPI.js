import axios from 'axios';

class Wiki {
  constructor() {}
  async query(q) {
    try {
      const response = await axios.get(
        `https://vi.wikipedia.org/w/api.php?action=query&list=search&srsearch=${q}&format=json`
      );
      const rg = /<([^\<]*?)>/g;
      let result = response.data.query.search[0].snippet;
      return result.replace(rg, '');
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Wiki();
