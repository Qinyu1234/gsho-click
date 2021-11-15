import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes"
import store from "@/store";

//缓存原本的push方法
const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
//指定新的push方法
VueRouter.prototype.push = function(location, onResolve, onReject) {
    //如果制定了成功或失败回调
    if (onResolve || onReject){
        //直接调用原本的push方法
        //return originalPush(location, onResolve, onReject) //this变为了不是router而是underfind
        return originalPush.call(this, location, onResolve, onReject)  //this是VueRouter.prototype
    }
    //没有指定成功或失败回调,必须用catch处理
    return originalPush.call(this, location).catch((err) => {
        //如果是重复导航产生的错误,不再向外传递错误
        if (VueRouter.isNavigationFailure(err)) {
            // resolve err
            return err
        }
    //如果是其他原因导致的错误,将错误传递下去
    // rethrow error
    return Promise.reject(err)
  })
}

VueRouter.prototype.replace = function(location, onResolve, onReject) {
    if (onResolve || onReject){
        return originalReplace.call(this, location, onResolve, onReject)
    }
    return originalReplace.call(this, location).catch((err) => {
        if (VueRouter.isNavigationFailure(err)) {
            return err
        }
    return Promise.reject(err)
  })
}
Vue.use(VueRouter)

const router = new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
      }
})

router.beforeEach(async(to, from, next) =>{
    //to:即将进入的路由目标对象
    //from当前导航正要离开的路由对象
    //next() 
        //没有参数,放行 
        //next(false) 不放行
        //next('/') 或 next({path:'/'})跳转到一个不通的地址,当前导航被中断,然后进行一个新的导航
    //获取token
    let token = store.state.user.token 
    console.log('token---',token)
    if(token){
        if(to.path === 'login'){
            //登录过了,又想去登录页面,直接跳转到首页
            next('/')
        }else{
            //此时代表登录了,去得不是登录页,那我们要根据token发请求获取用户的真正信息
            //发api 那用户信息 reqLogin(应该是获取登录的api,懒得写了) token在headers中 
            let hasUserInfo = !!store.state.user.userInfo.succ
            if(hasUserInfo){
                console.log('hasUserInfo---',!!store.state.user.userInfo.succ)
                next()
            }else{
                try {
                    //await store.dispatch('userLogin')
                    next() 
                } catch (error) {
                    conso.log('token过期了')
                    store.dispatch('resetUserInfo')
                    //取到之前想去但没有去成的地方,需要和登录逻辑配饰使用
                    next('/login?redirect='+to.patch)
                }
            }
        }
    }else{
        next()
    }
})
export default router