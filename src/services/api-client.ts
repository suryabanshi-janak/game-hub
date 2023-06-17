import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd8e3052b58c24190a743f4e2d3a1e4eb',
  },
});
