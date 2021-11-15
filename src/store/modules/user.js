/*
    管理登录用户数据的vuex子模块
*/
import {reqLogin, reqLogin_ajax, reqRegister } from "@/api";

import {getUserTempId,setToken,getToken,removeToken  } from "@/utils/userabout";
    const state = {
        userTempId:getUserTempId(),
        userInfo:[],
        token:getToken()
    }
    const mutations = {
        USERLOGIN(state,userInfo){
            state.userInfo = userInfo
        },
        RECEIVE_TOKEN(state,token){
            state.token = token
        },
        RESET_USERINFO(state){
            state.userInfo = [],
            state.token = ''
        }
    }
    const actions = {
        async userRegister({commit},userInfo){
            console.log(userInfo)
           const result = await reqRegister(userInfo)
           if(result.code === 200){
               return 'ok'
           }else{
               return Promise.reject(new Error('Failed'))
           }
        },
        async userLogin({commit},userInfo){
            const result = await reqLogin(userInfo)
            // const result1 = await reqLogin_ajax(userInfo)
            // console.log(result1)
            if(result.code === 200){
                commit('USERLOGIN',result.data)
                commit('RECEIVE_TOKEN',result.data.succ.token)
                setToken(result.data.succ.token)
                return 'ok'
            }else{
                return Promise.reject(new Error('faild'))
            }
        },
        resetUserInfo({commit}){
            removeToken()//先清空localstorage中的token
            commit('RESET_USERINFO')
        }
    }
    const getters = {
        users(state){
            return state.userInfo.user
        },
        succ(state){
            return state.userInfo.succ
        }
    }
export default{
    state,
    mutations,
    actions,
    getters
}