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