/*
包含应用的所有接口函数
    函数内部调用ajax函数发送请求
    函数返回Promise对象
*/

import ajax from './ajax'
import mockAjax from './mockAjax'
//首页三级分类
// /api/product/getBaseCategoryList
export function reqCategoryList_old(){
    //return ajax.get('/api/product/getBaseCategoryList')
    // return ajax('/api/product/getBaseCategoryList')
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'GET'
    })
}

//广告轮播列表
export const reqBannerList_old =() => ajax('/cms/banner')


//mock接口函数
export const reqCategoryList = ()=> mockAjax('/categoryList')
export const reqBannerList = () => mockAjax('/bannerList')
export const reqRecommends = ()=> mockAjax('/recommends')
export const reqFloors = ()=> mockAjax('/floors')

export const reqSearchList = (searchParams)=>mockAjax({
    url:'/searchList',
    mothod:'post',
    searchParams
})
//获取详情数据
export const reqaddToCart_ajax = (skuId,skuNum)=>ajax({
    url:`/addToCart/${skuId}/${skuNum}`,
    method:'post'
})

//Mock.mock('/mock/detail/:skuId',{code:200,data:detail})
export const reqDetailInfo = (skuId)=> mockAjax('/detail/:skuId')


//添加更新购物车数据
export const reqAddOrUpdataCart = (skuId,skuNum)=>mockAjax({
    url:`/addOrUpdataCart/:skuId/:skuNum`,
    method:'post'
})

//获取购物车列表/api/cart/cartList
export const reqCartList = ()=> mockAjax('/cart/cartList')

//注册:/api/user/passport/register post
export const reqRegister = (userInfo)=> mockAjax({
    url:'/register',
    method:'post',
    data:userInfo
})

//登录 /api/user/passport/login
export const reqLogin = (userInfo) => mockAjax({
    url:'/login',
    method:'post',
    data:userInfo
})

export const reqLogin_ajax = (userInfo) => ajax({
    url:'/login',
    method:'post',
    data:userInfo
})

//获取订单交易页信息 /api/order/auth/trade

export const reqTrade = ()=>mockAjax(`/order/auth/trade`)

//获取我的订单列表 /api/order/auth/{page}/{limit}

export const reqPage = (page,limit)=>mockAjax(`/order/auth/:page/:limit`)
