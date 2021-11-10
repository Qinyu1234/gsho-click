import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";

export default [
    {
        path:'/',
        component:Home
    },
    {
        name:'search',
        path:'/search/:keyword?',//?代表一个或0个
        component:Search
    },
    {
        name:'register',
        path:'/register',
        component:Register,
        meta:{
            isHideFooter:true
        }
    },
    {
        name:'login',
        path:'/login',
        component:Login,
        meta:{
            isHideFooter:true
        }
    },
    {
        name:'detail',
        path:'/detail/:skuId',
        component:Detail
    },
]