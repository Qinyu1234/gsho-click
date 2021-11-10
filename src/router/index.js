import Vue from "vue";
import VueRouter from "vue-router";

import routes from "./routes"

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

export default new VueRouter({
    mode:'history',
    routes,
    scrollBehavior (to, from, savedPosition) {
        // return 期望滚动到哪个的位置
        return { x: 0, y: 0 }
      }
})