import { AsyncStorage, Alert } from 'react-native';
import queryString from 'query-string';
import Config from './Config';

const request = {};

request.get = (api, params) => new Promise(async (resolve, reject) => {
  let completeUrl = Config.server + api;
  if (params) {
    completeUrl = `${completeUrl}?${queryString.stringify(params)}`
  }
  console.log('GET from:', completeUrl);

  let myHeaders = {};

  let currentUser = await AsyncStorage.getItem('user');
  currentUser = JSON.parse(currentUser);

  if (currentUser && currentUser.token) {
    myHeaders = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    });
  }else {
    reject({msg: '当前未登录'});
  }
  const options = {
    method: 'GET',
    headers: myHeaders,
  };

  //开始计时, 20秒内无response视为无法连接
  const requestTimer = setTimeout(function() {
    reject("暂时无法连接到服务器, 过会再试试吧");
  }, 10000);

  // resolve(
  fetch(completeUrl, options)
    .then((res) => {
      clearTimeout(requestTimer);
      return res.json();
    })
    .then((responseJson) => resolve(responseJson))
    .catch((error) => {
      console.error(error);
    })
  // );
});

request.post = (api, body) => new Promise(async (resolve, reject) => {
  const completeUrl = Config.server + api;
  
  myHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  });

  console.log(body);

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
  };

  console.log('POST TO: ', completeUrl, options);

  const requestTimer = setTimeout(() => {
    reject({ success: false, msg: 'Can\'t connect to server now, try it again later.' });
  }, 10000);

  resolve(
    fetch(completeUrl, options)
      .then((res) => {
        clearTimeout(requestTimer);
        return res.json();
      })
      .then(responseJson => responseJson)
      .catch((error) => {
        console.error(error);
      }),
  );
});

request.login = (api, body) => new Promise((resolve, reject) => {
  const completeUrl = Config.server + api;

  const myHeaders = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  });

  const options = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(body),
  };
  console.log('POST to: ', completeUrl, options);

  // const that = this;
  const requestTimer = setTimeout(function(){
    reject({ success: false, msg: 'Can\'t connect to server now, try it again later.' });
  }, 10000);

  resolve(
    fetch(completeUrl, options)
      .then((res) => {
        clearTimeout(requestTimer);
        return res.json();
      })
      .then(responseJson => responseJson)
      .catch((error) => {
        console.error(error);
      }),
  );
});

export default request;