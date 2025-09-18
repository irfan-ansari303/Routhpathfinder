import axios from 'axios';

const API = axios.create({
  baseURL: 'https://routhfinder.onrender.com', // Adjust if your backend is deployed or on another port
  headers: {
    'Content-Type': 'application/json'
  }
});



export default API;
