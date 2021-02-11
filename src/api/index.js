import axios from 'axios'


let token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGVuIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTYxMzA2MzkyNCwiZXhwIjoxNjEzMDY3NTI0fQ.U35Te92tzsl-FnkKznzZWlbeQ1gfQFjoHgmDxv6oetk'
axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers['Authorization'] = 'Bearer ' + token
const endPoint = 'http://localhost:8181/api/v1/'


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


