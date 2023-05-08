<template>
  <div style=" display: flex; justify-content: center; align-items: center;">
    <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize"
      status-icon labelPosition="right">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="ruleForm.username" style="width: 400px" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" />
      </el-form-item>
      <!-- <el-form-item label="手机号" prop="phone">
        <el-input v-model="ruleForm.phone" />
      </el-form-item>
      <el-form-item label="邮箱" prop="email">
        <el-input v-model="ruleForm.email" />
      </el-form-item>
      <el-form-item label="备注" prop="comment">
        <el-input v-model="ruleForm.comment" />
      </el-form-item>
      <el-form-item label="身份" prop="admin">
        <el-select v-model="ruleForm.admin" placeholder="identity">
          <el-option label="普通用户" value="0" />
          <el-option label="管理员" value="1" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          注册
        </el-button>
        <el-button @click="resetForm(ruleFormRef)">清空</el-button>
      </el-form-item> -->
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
    { required: true, message: '用户名由大写字母、小写字母、数字、下划线或连字符组成，要求3-18位', trigger: 'blur' },
    { min: 3, max: 16, message: '请输入3-16位长度的用户名', trigger: 'blur' },
    { pattern: "^[a-zA-Z0-9_-]{3,16}$", message: '用户名不符合规范' } // 这个表达式验证用户名必须由3到16个字符组成，可以是大写字母、小写字母、数字、下划线或连字符。
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
    { min: 6, max: 18, message: 'Length should be 6 to 18', trigger: 'blur' },
    { pattern: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$" }
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