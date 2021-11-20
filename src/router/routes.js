import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";
import Center from "@/pages/Center";
import MyOrder from "@/pages/Center/MyOrder";
import GroupOrder from "@/pages/Center/GroupOrder";

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
    {
        name:'addcartsuccess',
        path:'/addcartsuccess',
        component:AddCartSuccess
    },
    {
        name:'shopcart',
        path:'/shopcart',
        component:ShopCart
    },
    {
        name:'trade',
        path:'/trade',
        component:Trade,
        //只有从购物车才能进入支付页面
        beforeEnter:(to,from,next)=>{
            if(from.path === '/shopcart'){
                next()
            }else{
                next('/')
            }
        }
    },
    {
        name:'pay',
        path:'/pay',
        component:Pay
    },
    {
        name:'center',
        path:'/center',
        component:Center,
        redirect:'/center/myorder',
        children:[
            {
                name:'myorder',
                path:'myorder',
                component:MyOrder
            },
            {
                name:'grouporder',
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'',
                redirect:'myorder',
            }
        ]
        
    },
]