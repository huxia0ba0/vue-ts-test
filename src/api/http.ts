import axios from 'axios'


// 环境的切换
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = 'www.ceshi.come';
} else if (process.env.NODE_ENV == 'production') {
  // axios.defaults.baseURL = 'https://www.production.com';
}

// 设置请求超时
axios.defaults.timeout = 10000;

// post请求头的设置

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';


// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export function get(url: string, params: any): any {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res);
    }).catch(err => {
      reject(err)
    })
  });
}

export function post(url: string, params: any): any {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data)
      })
  });
}



