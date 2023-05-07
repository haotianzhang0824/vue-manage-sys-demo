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
          <el-button size="small" @click="handleEdit(scope.$index, scope.row)"
            :disabled="ifDisabled(scope.row.owner)">Occupy</el-button>
          <!-- <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button> -->
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

const handleEdit = (index: number, row: Seat) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: Seat) => {
  console.log(index, row)
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