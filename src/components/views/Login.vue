<template>
    <div style=" display: flex; justify-content: center; align-items: center;">
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
            :size="formSize" status-icon>
            <el-form-item label="username" prop="username">
                <el-input v-model="ruleForm.username" style="width: 400px"/>
            </el-form-item>
            <el-form-item label="password" prop="password">
                <el-input v-model="ruleForm.password" />
            </el-form-item>
            <el-form-item label="phone" prop="phone">
                <el-input v-model="ruleForm.phone" />
            </el-form-item>
            <el-form-item label="email" prop="email">
                <el-input v-model="ruleForm.email" />
            </el-form-item>
            <el-form-item label="comment" prop="comment">
                <el-input v-model="ruleForm.comment" />
            </el-form-item>
            <el-form-item label="identity" prop="admin">
                <el-select v-model="ruleForm.admin" placeholder="identity">
                    <el-option label="普通用户" value="0" />
                    <el-option label="管理员" value="1" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    Create
                </el-button>
                <el-button @click="resetForm(ruleFormRef)">Reset</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
  
<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    username: '',
    password: '',
    phone: '',
    email: '',
    comment: '',
    admin: ''
})

// 规则表
const rules = reactive<FormRules>({
    username: [
        { required: true, message: 'Please input username', trigger: 'blur' },
        { min: 3, max: 8, message: 'Length should be 3 to 8', trigger: 'blur' },
        {pattern: }
    ],
    password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        { min: 6, max: 18, message: 'Length should be 6 to 18', trigger: 'blur' },
    ],
    phone: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        { min: 6, max: 18, message: 'Length should be 6 to 18', trigger: 'blur' },
    ],
    email: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        { min: 6, max: 18, message: 'Length should be 6 to 18', trigger: 'blur' },
    ],
    comment: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        { min: 6, max: 18, message: 'Length should be 6 to 18', trigger: 'blur' },
    ],
    admin: [
      {
        required: true,
        message: 'Please select Activity zone',
        trigger: 'change',
      },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))
</script>