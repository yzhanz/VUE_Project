import axios from 'axios';
import store from '../store';
function initFn(params, callback, argument) {
  // 如果没有参数
  if (typeof argument === 'function') {
    callback = argument;
    params = {};
  }
  // 对象合并,确定最终参数
  return {
    nparams: params,
    callback: callback
  };
}

function page(params, callback) {
  var obj = initFn(params, callback, arguments[1]);
  callback = obj.callback;
  axios.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token') ||
    localStorage.getItem('token') ||
    store.state.common.token;
  axios.get('/api/v1/public/business/page',{params:params}).then((data) =>{
    if(callback) callback(data.data)
  })
}

function dic(params, callback) {
  var obj = initFn(params, callback, arguments[1]);
  callback = obj.callback;
  axios.defaults.headers.common['Authorization'] =
    sessionStorage.getItem('token') ||
    localStorage.getItem('token') ||
    store.state.common.token;
  axios.get('/api/v1/public/dic/query/by-type',{params:params}).then((data) =>{
    if(callback) callback(data.data)
  })
}



const myAxios = {
  page,dic
};
export default {
  page,dic,
  install(Vue) {
    Vue.prototype.$axios = myAxios;
    Vue.prototype.axios = axios;
  }
};
