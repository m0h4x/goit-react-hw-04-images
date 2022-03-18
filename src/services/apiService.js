const axios = require('axios');
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '25069580-db92d955714ee250824c2e025';

async function fetchImages(text, page) {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return data;
  } catch (error) {
    console.error(`Нет результатов поиска по данному запросу`);
  }
}

const api = { fetchImages };
export default api;
