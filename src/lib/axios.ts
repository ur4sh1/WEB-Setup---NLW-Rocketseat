import axios from 'axios';

export const api =  axios.create({
  baseURL: 'https://3590-177-221-132-98.sa.ngrok.io'
})