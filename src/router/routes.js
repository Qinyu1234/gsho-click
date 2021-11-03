import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

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
        path:'/register',
        component:Register
    },
    {
        path:'/login',
        component:Login
    },
]