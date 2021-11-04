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
  components: {
    Header,
    Footer
  }
}
</script>

<style lange="less" scoped>
</style>