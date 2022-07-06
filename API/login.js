import axios from 'axios';

const login = (password, username) => {
  return axios({
    method: 'post',
    url: 'http://94.74.86.174:8080/api/login',
    data: {
      password: password,
      username: username,
    },
  })
    .then((response) => {
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
      // need handling error
    });
};

export default login;