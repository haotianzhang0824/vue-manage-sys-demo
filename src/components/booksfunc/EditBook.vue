<template>
    <div style="width: 60%; margin-left: 20%; text-align: center;">
        <!-- 负责设置尺寸的按钮 -->
        <el-radio-group v-model="labelPosition" label="label position">
            <el-radio-button label="left">Left</el-radio-button>
            <el-radio-button label="right">Right</el-radio-button>
            <el-radio-button label="top">Top</el-radio-button>
        </el-radio-group>
        <div style="margin: 20px"></div>
        <!-- 表单数据 -->
        <el-form :label-position="labelPosition" label-width="100px" :model="bookInfo"
            style="max-width: 460px; margin: 0 auto;">
            <el-form-item label="图书id">
                <el-input v-model="bookInfo.id" disabled />
            </el-form-item>
            <el-form-item label="图书书名">
                <el-input v-model="bookInfo.name" />
            </el-form-item>
            <el-form-item label="图书位置">
                <el-input v-model="bookInfo.location" />
            </el-form-item>
            <el-form-item label="图书描述">
                <el-input v-model="bookInfo.description" />
            </el-form-item>
            <el-form-item label="当前借阅者">
                <el-input v-model="bookInfo.borrower" value="0" />
            </el-form-item>
        </el-form>
        <br>
        <el-button type="info" round>重置</el-button>
        <el-button type="primary" round>提交</el-button>
        <br><br>
        <hr />
    </div>
</template>
  
<script lang="ts" setup>

import { reactive, ref } from 'vue'

const labelPosition = ref('top')

const bookInfo = reactive({
    id: '',
    name: '',
    location: '',
    description: '',
    borrower: ''
})
</script>