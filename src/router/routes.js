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
        path:'/search',
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