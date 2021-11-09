const { startsWith } = require("core-js/core/string")
const { mock } = require("mockjs")

1,路由重复跳转错误
    相同参数&相同的路由,重复点击会提示
        //vue-router.esm.js:2066 Uncaught (in promise) NavigationDuplicated: 
            //Avoided redundant navigation to current location: "/search/asd?keyword=ASD".
        //this.$router.push(location,oncomplete?,onAbort?)
        this.$router.push(location).then(oncomplete).catch(onAbort)
2,路由中meta的使用
    // 1,routes路由里设置meta:{ xxx:true} 默认为flase
    // 2,需要隐藏的数据里添加v-show="!$route.meta.xxx"
3,前后台数据相互
    //npm i axios nprogress(进度条)
    1,axios.create //设置baseURL
    2,axios.interceptors.require.use() //设置拦截器
      axios.interceptors.response.use() //返回成功的response.data和失败的Promise.reject(error)
4,多模块数据管理
    state
    actions
    mutations
    getters
    modules //多模块
        cart.js     //购物车模块
        products.js //产品模块

    /* index中store数据总状态!!!
        {
            home:{
                categoryList:[]
            },
            user:{
                userInfo:[]
            },
            asd:'xxx'
        }
    */

5,多模块mapState
        mapState({
            funName:state => state.home.funName
        })
6,点击分类项跳转到搜索界面,携带分类id于分类名称
    //1,实现:使用声明式导航 router-link
        //问题:显示太慢 
        //原因:router-link太多了,产生了太多的组件对象
    //2,编程式导航代替声明是导航 $router.push("")
        //好处:现实的更快,因为不再残生router-link组件对象
        //缺点:每个分类都绑定了点击监听,数量太多了 ==> 能不能只绑定一个?
    //3,时间委托/委派/代理
        //给所有分类的父项绑定点击监听,通过event.target得到分类项
        //只用绑定一个点击监听了
        //问题:不知道点击的是那个分类项 data(标签的自定义属性)
            //:data-xxx="" 然后从event.target.dataset里取xxx的值
7,轮播
    //npm i swiper@5 vue-awesome-swiper
8,页面加载后执行
    //vm.$nextTick( [callback] )
    //将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。
    new Vue({
        methods: {
            example: function () {
                // 修改数据
                this.message = 'changed'
                // DOM 还没有更新
                this.$nextTick(function () {
                    // DOM 现在更新了
                    // `this` 绑定到当前实例
                    this.doSomethingElse()
                })
            }
        }
    })
9,mock接口
    不会发请求(浏览器中network没记录),被拦截了
10,search插件里
    //1,搜索条件
        //关键字搜索 keyword
        //分类搜索category1Id category2Id category3Id
    //2,初始化搜索
        //在created中搜集参数数据,并发请求
方法,
    startsWith //字符串是否已xxx开始
    let Str = "www.runoob.com"
    Str.startsWith("www") //true
问题:
    1,Object.xxx报错,但数据样式完整显示
        //使用v-if处理一下
    2,搜索页面添加别的搜索条件,不会再发请求
        //原因,从搜索跳转到搜索,搜索组件对象不会重新创建,初始化的狗子不会重新发执行=> 不再发请求
        //解决,监视路由参数的变化 watch:$store
    3,删除分类数据和关键字条件,地址栏还有参数数据
        //原因:删除时没有去处路径上的参数数据
        //解决,重新跳转到当前search,不再携带删除的条件对应的参数
    4,叉掉参数,搜索框中还有搜索信息
        //解决,使用全局事件总线,叉掉参数时,删除搜索信息
            //main里面全局绑定 beforeCreate(){Vue.prototype.$bus = this }
            //this.$bus.$emit('xxx')
            //this.$bus.$on('xxx',()={ sss = ''})
        //注意,绑定后需要在Header组件销毁之前解绑事件监听beforeDestory



git网页打开太慢
    // #speed up git
    // 140.82.113.3 github.com
    // 199.232.69.194 github.global-ssl.fastly.Net
    // 195.199.108.153 assets-cdn.github.com

项目结构
    -public
        --css
        --images
        --indexe
    -src
        --components
            --Headers.vue
            --Footer.vue
            --TypeNav.vue
        --pages
        --api
        --store
        --router
        --app.vue
        --main.js


