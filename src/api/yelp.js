import axios from 'axios';

// axios instance with preset options
export default axios.create({
  // to enable cors with CORS Anywhere
  baseURL: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer i9HCS4nwuIt44bw-N7g4STeUYPn-Zsf8iyDHOpUuScdcP5jJWfDMETO3HMcDEVjnJB3hna0PFwIehKIjZUYhg6lO1wgivGpE2WZ_Q6JPxdiSDnFLp9KJqaUdCw--XnYx',

    // to bypass CORS check
    'X-Requested-With': 'XMLHttpRequest',
  },
});
