import Vue from "vue"
import VueRouter from "vue-router"
import HelloWorld from "../components/HelloWorld";
import Login from "../components/Login";

Vue.use(VueRouter)

const routes=[
    {
        path: "/hello",
        component: HelloWorld
    },
    {
        path: "/login",
        component: Login
    }
]

const router=new VueRouter({
    mode:"history",
    routes
})

export default router