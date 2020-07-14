<template>
    <div>
        <table>
            <thead>
                <tr>
                    <th>序号</th>
                    <th>姓名</th>
                    <th>性别</th>
                    <th>年龄</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(user,index) in user" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{user.name}}</td>
                    <td>{{user.gender}}</td>
                    <td>{{user.age}}</td>
                    <td>
                        <button @click="showpopup(user.id)">编辑</button>
                        <button @click="deleteById(user.id)">删除</button>
                    </td>
                </tr>
            </tbody>
        </table>


        <div v-show="popup">
            <!--这里是要展示的内容层-->
            <div class="login">
                <form :model="editForm" ref="editFormRef">
                    <section>
                        姓名 <input type="text" name="name" v-model="editForm.name">
                    </section>
                    <section>
                        性别 <input type="text" name="gender" v-model="editForm.gender">
                    </section>
                    <section>
                        年龄 <input type="text" name="age" v-model="editForm.age">
                    </section>
                    <section>
                        <button @click="addEdit(editForm.id)">保存</button>
                        <button>取消</button>
                    </section>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StudentList",
        data(){
            return{
                user:[
                    {name:"杨过",gender:"男",age:30},
                    {name:"小龙女",gender:"女",age:5},
                    {name:"郭靖",gender:"男",age:36},
                    {name:"黄蓉",gender:"女",age:36},
                    {name:"郭襄",gender:"女",age:18},
                ],
                popup:0,
                editForm:{

                }
            }
        },
        created() {
            this.getStudents()
        },
        methods:{
            getStudents(){
                this.$http.get("getStudents")
                    .then(res =>{
                        console.log(res.data)
                        this.user=res.data.data
                    })
            },
            deleteById(id){
                this.$http.delete("delete",{
                    params:{
                        id:id
                    }
                }).then(res =>{
                    console.log(res.data)
                    //刷新页面
                    this.$router.go(0);
                })
            },
            //打开弹出层页面
            showpopup(id) {
                this.$http.get("getStudentsById/"+id).then(res=>{
                    console.log(res.data);
                    this.editForm=res.data.data;
                    this.popup = 1;
                    //this.$router.push("/studentList")
                })
            },
            //关闭弹出层页面
            closepopup() {
                this.popup = 0;
            },
            addEdit(id){
                this.$http.put("update/"+id,this.editForm).then(res =>{
                    console.log(res.data);
                    this.popup=0;
                })
            }
        }
    }
</script>

<style scoped>

    table{
        margin: auto;
    }
    .login {
        position: fixed;
        font-size: 24px;
        height: 320px;
        width: 500px;
        background-color: #dddddd;
        border-radius: 0.25rem;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1000;
    }
</style>