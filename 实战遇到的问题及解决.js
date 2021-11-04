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