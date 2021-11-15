/*
axios二次封装
    1,通配通用的基础路径和超时
    2,显示请求进度条
    3,成功返回的数据不再是response,而直接是相应体数据response.data
    4,统一处理请求错误,具体请求也可以选择处理或不处理
*/
import axios from "axios";
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
import store from '@/store'
// 1,通配通用的基础路径和超时
const service = axios.create({
    baseURL:'http://39.99.186.36/api', //基础路径
    timeout:2000,

})

//添加请求拦截器
service.interceptors.request.use((config)=>{
    //显示请求进度条,发请求前
    NProgress.start()
    let userTempId = store.state.user.userTempId
    if(userTempId){
        config.headers.userTempId = userTempId
    }
    let token = store.state.user.token
    if(token){
        config.headers.token = token
    }
    console.log(config.headers)
    return config
})

//添加响应拦截器
service.interceptors.response.use(
    response =>{//请求成功返回的回调
        //隐藏响应进度条,收到成功请求后
        NProgress.done()

        return response.data
    },
    error =>{//请求失败返回的回调
        //隐藏响应进度条,收到失败请求后
        NProgress.done()

        //统一错误提示
        //alert(error.message || '未知请求错误')
        
        //throw error
        return Promise.reject(error)
    },
    )

//暴露serve
export default service