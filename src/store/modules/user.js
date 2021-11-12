/*
    管理登录用户数据的vuex子模块
*/
import {getUserTempId  } from "@/utils/userabout";
    const state = {
        userTempId:getUserTempId()
    }
    const mutations = {}
    const actions = {}
    const getters = {}
export default{
    state,
    mutations,
    actions,
    getters
}