/*
    管理首页相关数据的vuex子模块
    
*/
import {reqSearchList} from "@/api";
const state = {
    searchList:{}
}
const mutations = {
    RECEIVE_SEARCH_LIST(state,searchList){
        state.searchList = searchList
    },
}
const actions = {
    /*
    获取三级分类的异步action*/
    async getSearchList({commit},searchParams){
        //不想删除search组件中的options中的属性
        searchParams = {...searchParams} //浅拷贝,数组只拷贝引用
        Object.keys(searchParams).forEach((item)=>{
            if(searchParams[item] === "" || (Array.isArray(searchParams[item])&&searchParams[item].length ===0)){
                delete searchParams[item]
            }
        })
            //发异步ajax请求(调用接口请求函数)
        console.log(JSON.stringify(searchParams))
        const result = await reqSearchList(searchParams)
            //如果请求成功了,得到数据提交mutation
        if(result.code === 200){
            commit('RECEIVE_SEARCH_LIST',result.data)
        }
    },
}
const getters = {
    goodsList(state){
        return state.searchList.goodsList || []
    },
    trademarkList(state){
        return state.searchList.trademarkList || []
    },
    attrsList(state){
        return state.searchList.attrsList || []
    },
    total(state){
        return state.searchList.total || 0
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}