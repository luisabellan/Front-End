//axios with authorization header 

import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
  
    return axios.create({
      baseURL: 'https://better-reads-bw.herokuapp.com/api/auth/',
      headers: {
        Authorization: token,
      }
    });
  };
