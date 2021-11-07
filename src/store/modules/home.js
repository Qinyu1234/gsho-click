/*
    管理首页相关数据的vuex子模块
*/

//import { reqBannerList } from "@/api"

//import {reqCategoryList} from "@/api";
const state = {
    categoryList:[],
    bannerList:[],
}
const mutations = {
    RECEIVE_CATEGORY_LIST(state,categoryArr){
        state.categoryList = categoryArr
    },
    RECEIVE_BANNER_LIST(state,bannerArr){
        state.bannerList = bannerArr
    },
}
const actions = {
    /*
    获取三级分类的异步action*/
    async getCategoryList({commit}){
            //发异步ajax请求(调用接口请求函数)
        //const result0 = await reqCategoryList()
            //如果请求成功了,得到数据提交mutation
        const result = {
            "code": 200,
            "message": "成功",
            "data": [
                {
                    "categoryChild": [
                        {
                            "categoryChild": [
                                {
                                    "categoryName": "电子书1",
                                    "categoryId": 1
                                }
                            ],
                            "categoryName": "电子书刊1",
                            "categoryId": 1
                        }
                    ],
                    "categoryName": "图书、音像、电子书刊1",
                    "categoryId": 1
                },
                {
                    "categoryChild": [
                        {
                            "categoryChild": [
                                {
                                    "categoryName": "电子书2",
                                    "categoryId": 1
                                }
                            ],
                            "categoryName": "电子书刊2",
                            "categoryId": 1
                        }
                    ],
                    "categoryName": "图书、音像、电子书刊2",
                    "categoryId": 2
                },
                {
                    "categoryChild": [
                        {
                            "categoryChild": [
                                {
                                    "categoryName": "电子书3",
                                    "categoryId": 1
                                }
                            ],
                            "categoryName": "电子书刊3",
                            "categoryId": 1
                        }
                    ],
                    "categoryName": "图书、音像、电子书刊3",
                    "categoryId": 3
                }
            ],
            "ok": true
        }

        if(result.code === 200){
            const categoryArr = result.data
            commit('RECEIVE_CATEGORY_LIST',categoryArr)
        }
    },
    async getBannerList({commit}){
            //发异步ajax请求(调用接口请求函数)
        //const result = await reqBannerList()
            //如果请求成功了,得到数据提交mutation
        const result = {
            "code": 200,
            "message": "成功",
            "data": [
                {
                    "categoryChild": [
                        {
                            "categoryChild": [
                                {
                                    "categoryName": "电子书1",
                                    "categoryId": 1
                                }
                            ],
                            "categoryName": "电子书刊1",
                            "categoryId": 1
                        }
                    ],
                    "categoryName": "图书、音像、电子书刊1",
                    "categoryId": 1
                },
                {
                    "categoryChild": [
                        {
                            "categoryChild": [
                                {
                                    "categoryName": "电子书2",
                                    "categoryId": 1
                                }
                            ],
                            "categoryName": "电子书刊2",
                            "categoryId": 1
                        }
                    ],
                    "categoryName": "图书、音像、电子书刊2",
                    "categoryId": 2
                },
                {
                    "categoryChild": [
                        {
                            "categoryChild": [
                                {
                                    "categoryName": "电子书3",
                                    "categoryId": 1
                                }
                            ],
                            "categoryName": "电子书刊3",
                            "categoryId": 1
                        }
                    ],
                    "categoryName": "图书、音像、电子书刊3",
                    "categoryId": 3
                }
            ],
            "ok": true
        }

        if(result.code === 200){
            const bannerArr = result.data
            commit('RECEIVE_BANNER_LIST',bannerArr)
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