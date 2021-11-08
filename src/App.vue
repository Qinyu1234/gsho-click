<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <!-- 部分页面 底部不显示 -->
    <!-- <Footer v-show="$route.path"></Footer> -->
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  mounted(){
    //测试异步获取三级分类列表
    // getCategoryList().then(result =>{
    //     console.log(result)
    // })

    //分发请求获取分类列表的异步action 
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getBannerList')

  },
  components: {
    Header,
    Footer
  },
}
</script>

<style lange="less" scoped>
</style>