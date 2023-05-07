<template>
    <div id="main_container" style="width: 60%; margin-left: 20%;">
      <el-table :data="tableData" border style="width: 100%">
  
        <el-table-column label="seat-id" width="180">
          <template #default="scope">
            <div style="display: flex; align-items: center">
              <el-icon>
                <Location />
              </el-icon>
              <span style="margin-left: 10px">{{ scope.row.id }}</span>
            </div>
          </template>
        </el-table-column>
  
        <el-table-column label="location" width="180">
          <template #default="scope">
            {{ scope.row.location }}
          </template>
        </el-table-column>
  
        <el-table-column label="occupied" width="180">
          <template #default="scope">
            {{ (scope.row.owner == 0) ? "no" : "yes" }}
          </template>
        </el-table-column>
  
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button size="small" type="success" @click="handleFree(scope.$index)">释放</el-button>
            <el-button size="small" type="primary" @click="handleEdit(scope.$index, scope.row)">修改</el-button>
            <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
  
      </el-table>
    </div>
  </template>
    
  <script lang="ts" setup>
  import { Timer } from '@element-plus/icons-vue'
  
  interface Seat {
    id: string
    location: string
    remark: string
    owner: string
  }
  
  // 这个函数用来判断座位是否被占领。
  const ifDisabled = (owner) => {
    if (owner != "0") return true;
    else return false
  }

  // 释放选择座位
  const handleFree = (id:number) => {
    console.log("释放座位");
  }
  // 编辑座位
  const handleEdit = (index: number) => {
    console.log("执行修改座位信息函数");
  }
  // 删除座位
  const handleDelete = (index: number) => {
    console.log("执行删除座位函数");
  }
  // 添加座位
  const handleAdd = () => {
    console.log("执行添加座位信息函数。");
  }
  
  const tableData: Seat[] = [
    {
      id: "1001",
      location: "A01",
      remark: "nice seat",
      owner: "none"
    },
    {
      id: "1001",
      location: "A01",
      remark: "nice seat",
      owner: "none"
    },
    {
      id: "1001",
      location: "A01",
      remark: "nice seat",
      owner: "0"
    },
    {
      id: "1001",
      location: "A01",
      remark: "nice seat",
      owner: "0"
    },
  ]
  </script>