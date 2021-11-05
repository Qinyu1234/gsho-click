<template>
  <div class="type-nav">
    <div class="container">
      <h2 class="all">全部商品分类</h2>
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
      <div class="sort">
        <div class="all-sort-list2" @click="toSearch">
          <div class="item" v-for="c1 in categoryList" :key="c1.categoryId">
            <h3>
              <!-- <a href="javascript:" @click="$router.push(`search?categoryName=${c1.categoryName}&categoryId=${c1.categoryId}`)">{{c1.categoryName}}</a> -->
              <a href="javascript:" :data-category1Name="c1.categoryName" :data-category1Id="c1.categoryId">{{c1.categoryName}}</a>
              <!-- <router-link :to="`search?categoryName=${c1.categoryName}&categoryId=${c1.categoryId}`">{{c1.categoryName}}</router-link> -->
            </h3>
            <div class="item-list clearfix">
              <div class="subitem">
                <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                  <dt>
                    <!-- <a href="javascript:" @clicl="$router.push(`search?categoryName=${c2.categoryName}&categoryId=${c2.categoryId}`)">{{c2.categoryName}}</a> -->
                    <a href="javascript:" :data-category2Name="c2.categoryName" :data-category2Id="c2.categoryId">{{c2.categoryName}}</a>
                    <!-- <router-link :to="`search?categoryName=${c2.categoryName}&categoryId=${c2.categoryId}`">{{c2.categoryName}}</router-link> -->
                  </dt>
                  <dd>
                    <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                      <a href="javascript:" :data-category3Name="c3.categoryName" :data-category3Id="c3.categoryId">{{c3.categoryName}}</a>
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
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  name: "TypeNav",
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
    toSearch(event){
      const target = event.target
      if(target.tagName.toUpperCase() ==='A'){
        const {category1name,category1id,category2name,category2id,category3name,category3id,} = target.dataset
        console.dir(target.dataset)
        const query = {}
        if(category1name){
          query.category1Name=category1name
        }else if(category2name){
          query.category2Name = category2name       
        }else if(category3name){
          query.category3Name = category3name       
        }
        if(category1id){
          query.category1Id = category1id
        }else if(category2id){
          query.category2Id = category2id       
        }else if(category3id){
          query.category3Id = category3id       
        }
        
        this.$router.push({
          name:'search',
          query
        })
      }
    }
  }
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

          &:hover {
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