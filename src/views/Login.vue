<template>
    <div id="login">
        <mt-header id="header" title="合适的,才是最好的">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
            <router-link to="/login" slot="right">登录|</router-link>
            <router-link to="/register" slot="right">注册</router-link>
        </mt-header>
        <div id="login_inp">
            <p class="login">
                <input type="text" maxlength="12" placeholder="用户名">
            </p>
            <p class="login">
                <input id="pawd" type="text" maxlength="12" placeholder="密码">
            </p>
            <p class="enter">
                <button onclick="login()">登录</button>
            </p>
        </div>
        <p id="question">
            <router-link to="/">遇到问题?</router-link>
        </p>
    </div>
</template>
<style scoped>
    #login{
        color: #fff;
        font-size: 1rem;
        width: 100%;
        height: 667px;
        background:url(../assets/image/bg2.jpg);
    }
    a{
        text-decoration: none;
    }
    #header{
        color:#999;
        background-color:transparent;
    }
    #login_inp{
        border-radius: 5rem;
        margin: 12rem auto;
        padding: 2rem 0 0 2rem;
        width: 240px;
        height: 20%;
        background:rgba(102, 107, 112,.25);
    }
    .login{
        margin: .6rem auto;
    }
    #question{
        margin-top: 15rem;
        padding-right: .5rem;
        font-size: .85rem;
        text-align: right;
    }
    #question>a{
        color: #999;
    }
    button{
        outline: 0;
        color: #999;
        padding: .2rem .8rem;
        border: 0;
        border-radius:5px;
        background: rgb(57, 67, 85);
    }
    input{
        outline: 0;
        width: 80%;
        font-size:.9rem;
        color: #999;
        border: .5px solid rgb(6, 68, 68);
        padding: 5px;
        border-radius: 2rem;
        background: rgb(57, 67, 85);
    }
</style>