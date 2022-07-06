import axios from 'axios';

const register = (email, password, username) => {
  return axios({
    method: 'post',
    url: 'http://94.74.86.174:8080/api/register',
    data: {
      email: email,
      password: password,
      username: username,
    },
  })
    .then((response) => {
      return response.data.statusCode;
    })
    .catch(function (error) {
      console.log(error);
      // need handling error
    });
};

export default register;