// api.service.js

import axios from 'axios';

const apiService = axios.create({
  baseURL: 'https://cityscope-api.smartaraucania.org/apiscope/respData/getData', // Replace this with your actual API server URL
  // Other axios configuration options if needed
});


// Add a request interceptor to handle CORS headers
apiService.interceptors.request.use(
  (config) => {
    // Set the Access-Control-Allow-Origin header to allow requests from all origins
    config.headers['Access-Control-Allow-Origin'] = '*';
    
    // If you have custom headers, add them here
    // config.headers['Custom-Header'] = 'value';

    // If your backend requires authentication, you can add an authentication token here
    // config.headers['Authorization'] = 'Bearer ' + YOUR_AUTH_TOKEN;
    
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default {
  // Define your API methods here
  async getUsers() {
    return apiService.get('/users');
  },

  // Add more API methods if needed
};
