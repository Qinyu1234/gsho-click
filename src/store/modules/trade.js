import { reqTrade } from "@/api"

/*
    管理首页相关数据的vuex子模块
    
*/
const state = {
    tradeInfo:{}
}
const mutations = {
    RECIVE_GETTRADEINFO(state,tradeInfo){
        state.tradeInfo = tradeInfo
    }
}
const actions = {
    async getTradeInfo({commit}){
        const result = await reqTrade()
        if(result.code === 200){
            commit('RECIVE_GETTRADEINFO',result.data)
        }
    },
}
const getters = {
    userAddressList(){
        return state.tradeInfo.userAddressList || []
    },
    detailArrayList(){
        return state.tradeInfo.detailArrayList || []
    }
}

export default{
    state,
    mutations,
    actions,
    getters
}