
// apiService.js
import axios from 'axios';

const BASE_URL = ' https://cityscope-api.smartaraucania.org/apiscope/respData'; // Replace with your API base URL

export default {
  getUsers() {
    return axios.get(`${BASE_URL}/getData`);
  },

  // Add more methods for other API endpoints as needed
};
