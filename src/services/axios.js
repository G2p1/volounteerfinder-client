const axios = require("axios");

const url= "https://http://localhost:8080/api";

axios.get(url).then((res) => {
  console.log('no Accept-Encoding status:', res.status);
  })
  .catch((error) => {
    console.error('no Accept-Encoding status:', error.response.status);
  });

const config = {
  headers: {
    'Accept-Encoding': 'gzip, deflate, br'
  }
};

axios.get(url, config).then((res) => {
  console.log('Accept-Encoding status:', res.status);
})
.catch((error) => {
  console.error('Accept-Encoding status:', error.response.status);
});