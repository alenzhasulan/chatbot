import axios from 'axios'



axios.defaults.headers['Access-Control-Allow-Origin'] = "*"
axios.defaults.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbGVuIiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sImlhdCI6MTYwNjY2ODUyNiwiZXhwIjoxNjA2NjcyMTI2fQ.6tGNualp3evGqPUh4aiJ0I3eGtLS9OuMCtNi4FrTptQ'
const endPoint = 'http://localhost:8181/api/v1/'


export const getChatsAPI = () => {
  return axios.get(endPoint + 'chats');
};

export const getChatAPI = (id) => {
  return axios.get(endPoint + 'chats/' + id);
};