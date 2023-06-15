import { api } from './api';

export const AuthService = {
  login: (username, password) => {
    return api.post('/auth/signin', { username, password })
      .then(response => {
        if (response.data.token) {
          
          localStorage.setItem('user', JSON.stringify(response.data));
        }
        return response.data;
      });
  },

  logout: () => {
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },
  register: (username, email, password)=>{
    return api.post('/auth/signup', {
      username,
      email,
      password,
    });
  }
  
};
