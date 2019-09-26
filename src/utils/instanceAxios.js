//ap axios with authorization header 

import axios from 'axios';

export const instanceAxios = () => {
    const token = localStorage.getItem('token');
  
    return axios.create({
      baseURL: 'https://better-reads-bw.herokuapp.com/api/',
      headers: {
        Authorization: token,
      }
    });
  };
