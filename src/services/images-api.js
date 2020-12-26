import axios from 'axios';

const API_KEY = '19042677-37d14c32a93614679ae39c658';
const BASE_URL = 'https://pixabay.com/api/';

const fetchImages = ({ query = '', currentPage = 1 }) => {
  return axios
    .get(
      `${BASE_URL}?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};

const api = {
  fetchImages,
};

export default api;
