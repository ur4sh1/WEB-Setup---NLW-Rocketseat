import axios from 'axios';

export const api =  axios.create({
  baseURL: ' https://d41f-177-221-132-42.sa.ngrok.io'
})