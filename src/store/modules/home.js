/*
    管理首页相关数据的vuex子模块
*/

//import { reqBannerList } from "@/api"

//import {reqCategoryList} from "@/api";
import {reqRecommends,reqFloors,reqCategoryList,reqBannerList} from "@/api";
const state = {
    categoryList:[],
    bannerList:[],
    recommendList:[],
    floorList:[]
}
const mutations = {
    RECEIVE_CATEGORY_LIST(state,categoryArr){
        state.categoryList = categoryArr
    },
    RECEIVE_BANNER_LIST(state,bannerArr){
        state.bannerList = bannerArr
    },
    RECEIVE_RECOMMEND_LIST(state,recommendArr){
        state.recommendList = recommendArr
    },
    RECEIVE_FLOOR_LIST(state,floorArr){
        state.floorList = floorArr
    },
}
const actions = {
    /*
    获取三级分类的异步action*/
    async getCategoryList({commit}){
            //发异步ajax请求(调用接口请求函数)
        const result = await reqCategoryList()
            //如果请求成功了,得到数据提交mutation
        if(result.code === 200){
            const categoryArr = result.data
            commit('RECEIVE_CATEGORY_LIST',categoryArr)
        }
    },
    async getBannerList({commit}){
            //发异步ajax请求(调用接口请求函数)
        const result = await reqBannerList()
            //如果请求成功了,得到数据提交mutation
        if(result.code === 200){
            const bannerArr = result.data
            commit('RECEIVE_BANNER_LIST',bannerArr)
        }
    },
    async getReqCommendList({commit}){
        //发异步ajax请求(调用接口请求函数)
        const result = await reqRecommends()
            //如果请求成功了,得到数据提交mutation
        
        if(result.code === 200){
            const recommendArr = result.data
            commit('RECEIVE_RECOMMEND_LIST',recommendArr)
        }
    },
    async getFloorList({commit}){
        //发异步ajax请求(调用接口请求函数)
        const result = await reqFloors()
            //如果请求成功了,得到数据提交mutation
        
        if(result.code === 200){
            const refloorArr = result.data
            commit('RECEIVE_FLOOR_LIST',refloorArr)
        }
    },
}
const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}