<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="hideFirst" @mouseenter="showFirst">
        <h2 class="all">全部商品分类</h2>
        <transition name="slide">
          <div class="sort" v-show="isShowFirst">
            <div class="all-sort-list2" @click="toSearch" >
              <div class="item" :class="{active:currentIndex===index}" @mouseenter="showSubList(index)" v-for="(c1,index) in categoryList" :key="c1.categoryId">
                <h3>
                  <!-- <a href="javascript:" @click="$router.push(`search?categoryName=${c1.categoryName}&categoryId=${c1.categoryId}`)">{{c1.categoryName}}</a> -->
                  <a href="javascript:" :data-categoryName="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
                  <!-- <router-link :to="`search?categoryName=${c1.categoryName}&categoryId=${c1.categoryId}`">{{c1.categoryName}}</router-link> -->
                </h3>
                <div class="item-list clearfix">
                  <div class="subitem">
                    <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                      <dt>
                        <!-- <a href="javascript:" @clicl="$router.push(`search?categoryName=${c2.categoryName}&categoryId=${c2.categoryId}`)">{{c2.categoryName}}</a> -->
                        <a href="javascript:" :data-categoryName="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                        <!-- <router-link :to="`search?categoryName=${c2.categoryName}&categoryId=${c2.categoryId}`">{{c2.categoryName}}</router-link> -->
                      </dt>
                      <dd>
                        <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                          <a href="javascript:" :data-categoryName="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
                          <!-- <a href="javascript:" @clicl="$router.push(`search?categoryName=${c3.categoryName}&categoryId=${c3.categoryId}`)">{{c3.categoryName}}</a> -->
                          <!-- <router-link :to="`search?categoryName=${c3.categoryName}&categoryId=${c3.categoryId}`">{{c3.categoryName}}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>  
        </transition> 
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
// import _ from 'lodash'
import throttle from 'lodash/throttle' //减小打包文件
export default {
  name: "TypeNav",
  created(){ //1次更新
    const path = this.$route.path
    if(path !== '/'){
      this.isShowFirst = false
    }
  },
  mounted(){ //再初始显示之后更新数据=>导致多更新一次
    // const path = this.$route.path
    // if(path === '/'){
    //   this.isShowFirst = true
    // }else{
    //   this.isShowFirst = false
    // }

  },
  data(){
    return{
      currentIndex:-1,
      isShowFirst:this.$route.path === '/'
    }
  },
  computed:{
    //...mapState(['categoryList']),//不可以,单模块编程 等同于 this.$store.state.categoryList
    // categoryList(){
    //   return this.$store.state.home.categoryList
    // }
    ...mapState({
      categoryList:state => state.home.categoryList
    })
  },
  methods:{
    showFirst(){
      this.isShowFirst = true
    },
    hideFirst(){
      this.currentIndex = -1
      // 如果当前不是首页, 需要隐藏
        if (this.$route.path !== '/') {
          this.isShowFirst = false
        }
    },
    toSearch(event){
      const target = event.target
      if(target.tagName.toUpperCase() ==='A'){
        const {categoryname,category1id,category2id,category3id,} = target.dataset

        const location = {
          name:'search',
          params:this.$route.params,
          query:{},
        };
        if(categoryname){
          location.query.categoryName=categoryname
        }else if(category1id){
          location.query.category1Id = category1id
        }else if(category2id){
          location.query.category2Id = category2id       
        }else if(category3id){
          location.query.category3Id = category3id       
        }
        
        // this.$router.push({
        if(this.$route.name === "search"){
          this.$router.replace(location)
        }else{
          this.$router.push(location)
        }

        this.hideFirst()
      }
    },
    //showSubList(){//这个事件监听回调函数调用的频率太高了
    //showSubList:_.throttle(function (index){
    showSubList:throttle(function (index){
        this.currentIndex = index
        },100,{
          trailing:false
        })
      }
      
  // }
};
</script>
<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

    //制定过渡的样子

    //指定隐藏时的样子
    &.slide-enter-active, &.slide-leave-active {
      transition: all .5s;
    }
    &.slide-enter, &.slide-leave-to {
      opacity: 0;
      height:0;
    }
    &.slide-enter-to, &.slide-leave{
      opacity: 1;
      height:461px;
    }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          &.active {
            background-color:rgb(233, 200, 13);
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>