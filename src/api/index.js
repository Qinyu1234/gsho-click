/*
包含应用的所有接口函数
    函数内部调用ajax函数发送请求
    函数返回Promise对象
*/

import ajax from './ajax'
//首页三级分类
// /api/product/getBaseCategoryList
export function getCategoryList(){
    //return ajax.get('/api/product/getBaseCategoryList')
    // return ajax('/api/product/getBaseCategoryList')
    return ajax({
        url:'/product/getBaseCategoryList',
        method:'GET'
    })
}