<template>
    <div>
        <TypeNav/>
        <ListContainer/>
        <TodayRecommend/>
        <Rank/>
        <Like/>
        <Floor/>
        <Brand/>
    </div>
</template>
<script>
import ListContainer from "./ListContainer";
import TodayRecommend from "./TodayRecommend";
import Brand from "./Brand";
import Floor from "./Floor";
import Like from "./Like";
import Rank from "./Rank";

/*
    1,dispatch()触发请求的异步action调用 ==>数据从后台接口请求到vuex的state中
    2,store.state /mapState()读取vuex的state数据 ==> 数据从state到组件的computed
    3,在模板中动态显示
*/ 

    export default {
        name:'Home',
        components:{
            ListContainer,
            TodayRecommend,
            Brand,
            Floor,
            Like,
            Rank
        }
    }
</script>

<style lang="less" scoped>
    
</style>