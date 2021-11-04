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