<template>
    <div id="main_container" style="width:60%; margin-left: 20%;text-align: center;">
        <img src="../../assets/logo.png" alt="首页logo图片" style="width: 100%;">
        <h1>manager from zht</h1>
        <p>welcome to manager zht, select your option:</p>
        <div id="option_box" style="width:80%; margin-left: 10%;">
            <el-row class="mb-4">
                <el-button class="option_button">账号登录</el-button>
                <el-button type="danger" class="option_button" @click="goToPage('/userinfo')">账号信息</el-button>
                <el-button type="warning" class="option_button" @click="goToPage('/getseat')">预定座位</el-button>
                <el-button type="info" class="option_button" @click="goToPage('/getbooks')">借阅图书</el-button>
                <el-button type="success" class="option_button">功能维护中</el-button>
                <el-button type="primary" class="option_button">联系管理员</el-button>
            </el-row>
        </div>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPage = (route) => {
  router.push(route); // 使用 push 方法跳转到指定路由
  // 或者使用 replace 方法，替换当前路由而不是添加新的历史记录
  // router.replace(route);
};
</script>

<style>
.option_button {
    width: 100px;
}
/* 下面的样式让选项div居中。 */
#main_container {
    position: relative;
}
#option_box {
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>