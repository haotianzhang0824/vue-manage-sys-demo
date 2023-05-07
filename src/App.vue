<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect">
    <el-menu-item index="0" style="font-size:22px" @click="goToPage({ path: '/' })">Manager</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="goToPage({ path: '/userinfo' })" :disabled="isButtonDisabledForUser"
      v-if="userRole === 'user' || userRole === 'admin'">用户中心</el-menu-item>
    <el-sub-menu index="2" v-if="userRole === 'user' || userRole === 'admin'">
      <template #title>功能菜单</template>
      <el-menu-item index="2-1" @click="goToPage('/getseat')" :disabled="isButtonDisabledForUser">预定座位</el-menu-item>
      <el-menu-item index="2-2" @click="goToPage('/getbooks')" :disabled="isButtonDisabledForUser">借阅图书</el-menu-item>
      <!-- <el-menu-item index="2-3">更多功能</el-menu-item> -->
      <el-sub-menu index="2-4" v-if="userRole === 'admin'">
        <template #title>管理员功能</template>
        <el-menu-item index="2-4-1" @click="goToPage('/manageseats')"
          :disabled="isButtonDisabledForAdmin">座位管理</el-menu-item>
        <el-menu-item index="2-4-2" @click="goToPage('/managebooks')"
          :disabled="isButtonDisabledForAdmin">图书管理</el-menu-item>
        <el-menu-item index="2-4-3" @click="goToPage('/')" :disabled="isButtonDisabledForAdmin">用户管理</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>

  <div style="height:20px"></div>

  <!-- 路由组件 -->
  <router-view></router-view>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router';

// 判断用户状态
// 可选值: tourist, user, admin
let userRole = ref("admin");
let isButtonDisabledForUser = computed(() => {
  if (userRole.value === 'admin') return false;
  return userRole.value !== 'user';
})
let isButtonDisabledForAdmin = computed(() => {
  return userRole.value !== 'admin';
})

const activeIndex = ref('0')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const router = useRouter();

const goToPage = (route) => {
  router.push(route); // 使用 push 方法跳转到指定路由
  // 或者使用 replace 方法，替换当前路由而不是添加新的历史记录
  // router.replace(route);
};

</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>