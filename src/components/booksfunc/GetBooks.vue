<template>
    <div id="main_container" style="width: 80%; margin-left: 10%;">
        <el-table :data="filterTableData" border style="width: 100%">

            <el-table-column label="book-id" prop="id" />
            <el-table-column label="book-name" prop="name" />
            <el-table-column label="location" prop="location" />
            <el-table-column label="description" prop="description" />
            <el-table-column label="borrower" prop="borrower" />

            <el-table-column align="right">
                <template #header>
                    <el-input v-model="search" size="small" placeholder="Type book name to search" />
                </template>
                <template #default="scope">
                    <el-button size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                    <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
</template>
  
<script lang="ts" setup>
import { computed, ref } from 'vue'

interface Book {
    id: string,
    name: string,
    location: string,
    description: string,
    borrower: string
}

const search = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !search.value ||
            data.name.toLowerCase().includes(search.value.toLowerCase())
    )
)
const handleEdit = (index: number, row: Book) => {
    console.log(index, row)
}
const handleDelete = (index: number, row: Book) => {
    console.log(index, row)
}

const ifBorrowed = (data) => {
    if (data == '0') return "no"
    else return "yes"
}

const tableData: Book[] = [
    {
        id: "10010",
        name: "book_name",
        location: "new_location",
        description: "book_description",
        borrower: "0"
    },
    {
        id: "10010",
        name: "book_name2",
        location: "new_location",
        description: "book_description2",
        borrower: "0"
    },
    {
        id: "10010",
        name: "book_name",
        location: "new_location",
        description: "book_description",
        borrower: "0"
    },
    {
        id: "10010",
        name: "book_name",
        location: "new_location",
        description: "book_description",
        borrower: "0"
    },
]
</script>