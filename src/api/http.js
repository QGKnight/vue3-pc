import axios from 'axios'
import { Message, Loading } from 'element-ui';
import * as utils from '../utils'
import router from '../router'

let loading;

function startLoading() {    
    loading = Loading.service({
        lock: true,
        text: '加载中...',
        background: 'rgba(0, 0, 0, 0.7)'
    })
}
function endLoading() {    
    loading.close()
}
axios.defaults.timeout = 5000;
let baseApiUrl = window.location.host
if (
    baseApiUrl.indexOf('192.168') !== -1 ||
    baseApiUrl.indexOf('localhost') !== -1
) {
    baseApiUrl = '';
} else {
    baseApiUrl = "";
}
axios.defaults.baseURL = baseApiUrl
// 设置默认请求头
axios.defaults.headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/json;charset=UTF-8'
}
// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
    // 加载
    startLoading()
    const token=utils.storage.get('token');
    if (token){
        config.headers.Authorization = token;
    }   
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
    endLoading()
    return response
}, error => {
    // 错误提醒
    endLoading()
    Message.error(error.response.data)

    const { status } = error.response
    if (status == 401) {
        Message.error('token值无效，请重新登录')
        // 清除token
        utils.storage.remove('token');
        // 页面跳转
        router.push('/index')
    }

    return Promise.reject(error)
})
export default axios;