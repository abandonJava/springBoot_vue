import Vue from "vue"
import VueRouter from "vue-router"
import HelloWorld from "../components/HelloWorld";
import Login from "../components/Login";
import StudentList from "../components/StudentList";


Vue.use(VueRouter)

const routes=[
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/hello",
        component: HelloWorld
    },
    {
        path: "/login",
        component: Login
    },
    {
        path:"/studentList",
        component:StudentList
    }
]

const router=new VueRouter({
    mode:"history",
    routes
})

export default router