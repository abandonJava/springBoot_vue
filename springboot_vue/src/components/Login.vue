<template>
    <div>
        <form :model="loginForm" ref="loginFormRef">
            <section>
                用户名 <input type="text" name="userName" v-model="loginForm.username">
            </section>
            <section>
                密码 <input type="password" name="passWord" v-model="loginForm.password">
            </section>
            <section>
                <input type="submit" value="提交" @click.prevent="login">
            </section>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                loginForm:{
                    username:"",
                    password:""
                }
            }
        },
        methods:{
            login(){
                console.log(typeof this.loginForm.username)
                this.$http.get("login",{
                    params: {
                        username: this.loginForm.username,
                        password: this.loginForm.password
                    }
                }).then(res => {
                    console.log(res);
                    if(res.status === 200){
                        console.log(this);
                        this.$store.dispatch("recordUserInfo",res.data.data.userName);
                        this.$router.push({
                            path:"/hello",
                            query:{data:res.data}
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>

    section{
        margin-top: 20px;
    }
</style>