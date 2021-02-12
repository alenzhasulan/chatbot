import axios from 'axios'


let token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGVuIiwicm9sZXMiOltdLCJpYXQiOjE2MTMwNzEyODIsImV4cCI6MTYxMzA3NDg4Mn0.iHnjynWJCvDjNxZ2XlsLImxiLsGoXI1JR9OAX1d1qHc'
axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers['Authorization'] = 'Bearer ' + token
const endPoint = 'http://188.227.107.45/api/v1/'


export const getChatsAPI = () => {
  return axios.get(endPoint + 'chats');
};

export const getChatAPI = (id) => {
  return axios.get(endPoint + 'chats/' + id);
};

export const updateChatAPI = (data) => {
  return axios.patch(endPoint + 'chats/' + data.id, data);
};

export const getToken = () => {
  return axios.post(endPoint + 'auth/login', {
    username: "alen",
    password: "12345678"
  });
};


