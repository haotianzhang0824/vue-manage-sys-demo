<template>
    <div id="main_container" style="width: 60%; margin-left: 20%;margin-top:50px">
        <el-radio-group v-model="size">
            <el-radio label="large">Large</el-radio>
            <el-radio>Default</el-radio>
            <el-radio label="small">Small</el-radio>
        </el-radio-group>

        <el-descriptions title="用户信息" direction="vertical" :column="4" :size="size" border>
            <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
            <el-descriptions-item label="电话">18100000000</el-descriptions-item>
            <el-descriptions-item label="邮箱" :span="2">Suzhou</el-descriptions-item>
            <el-descriptions-item label="座位预定信息">
                school
                <!-- <el-tag size="small">School</el-tag> -->
            </el-descriptions-item>
            <el-descriptions-item label="图书借阅信息">
                <span>No.1188;&nbsp;&nbsp;</span>
                <span>Wuzhong Avenue;&nbsp;&nbsp;</span>
                <span>Wuzhong District;&nbsp;&nbsp;</span>
            </el-descriptions-item>
        </el-descriptions>

        <div id="option_box">
            <el-row class="mb-4">
                <el-button>退出登录</el-button>
                <el-button type="primary">修改信息</el-button>
                <el-button type="success">维护中</el-button>
                <el-button type="info">维护中</el-button>
                <el-button type="warning">维护中</el-button>
                <el-button type="danger">联系管理员</el-button>
            </el-row>
        </div>

    </div>
</template>
  
<script setup lang="ts">
import { computed, ref } from 'vue'

const size = ref('')
const blockMargin = computed(() => {
    const marginMap = {
        large: '32px',
        default: '28px',
        small: '24px',
    }
    return {
        marginTop: marginMap[size.value] || marginMap.default,
    }
})

</script>
  
<style scoped>
.el-descriptions {
    margin-top: 20px;
}
</style>