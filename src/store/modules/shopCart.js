/*
    管理首页相关数据的vuex子模块
    
*/
import {reqAddOrUpdataCart,reqCartList} from "@/api";
const state = {
    shopCartList:[]
}
const mutations = {
    RECEIVE_SHOPCARTLIST(state,shopCartList){
        state.shopCartList = shopCartList
    }
}
const actions = {
    /*
    获取三级分类的异步action*/
    async addOrUpdataCart({commit},{skuId,skuNum}){
        //不想删除search组件中的options中的属性
        const result = await reqAddOrUpdataCart(skuId,skuNum)
            //如果请求成功了,得到数据提交mutation
            console.log('addOrUpdataCart--------',+result.code)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('this Trantions is Failed'))
        }
    },
    async getCartList({commit}){
        const result = await reqCartList()
        if(result.code === 200){
            console.log('getCartList---',JSON.stringify(result.data))
            commit('RECEIVE_SHOPCARTLIST',result.data)
        }
    },
    updateCartChecked({commit},{skuId,isChecked}){},
    async updateCartCheckedAll({commit,dispatch,state},isChecked){
        let promises = []
        state.shopCartList.forEach(item => {
            if(item.isChecked === isChecked) return
            let promise = dispatch('updateCartChecked',{skuid:item.skuId,isChecked})
            promises.push(promise)
        });
        return Promise.all(promises)
    }
}
const getters = {
}

export default{
    state,
    mutations,
    actions,
    getters
}