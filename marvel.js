const axios = require('axios');
const crypto = require('crypto');
require('dotenv').config();

const BASE_URL = 'https://gateway.marvel.com/v1/public';

function getAuthParams() {
  const ts = new Date().getTime();
  const hash = crypto
    .createHash('md5')
    .update(ts + process.env.MARVEL_PRIVATE_KEY + process.env.MARVEL_PUBLIC_KEY)
    .digest('hex');

  return { ts, apikey: process.env.MARVEL_PUBLIC_KEY, hash };
}

async function getCharacters(nameStartsWith) {
  const auth = getAuthParams();
  const response = await axios.get(`${BASE_URL}/characters`, {
    params: {
      ...auth,
      nameStartsWith,
      limit: 5
    }
  });
  return response.data.data.results;
}

module.exports = { getCharacters };
