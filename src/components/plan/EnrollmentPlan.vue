<template>
    <el-header style="height: 30px;">
        <SearchSchool @search="search" style="position: fixed;"></SearchSchool>
    </el-header>
    <el-main>
        <el-table 
            :data="tableData"
            >
        <el-table-column prop="schoolName" label="学校" width="160"></el-table-column>
        <el-table-column prop="identificationCode" label="学校标识码" width="110"></el-table-column>
        <el-table-column prop="competentDepartment" label="主管部门" width="100"></el-table-column>
        <el-table-column prop="location" label="所在地" width="100"></el-table-column>
        <el-table-column prop="qualification" label="办学层次" width="100"></el-table-column>
        <el-table-column prop="notes" label="办学性质" width="100"></el-table-column>
        <el-table-column label="学校信息" width="130">
            <template v-slot="scope">
                <el-button type="primary" style="margin-left: 16px" @click="drawer = true;handleClick(scope.row)">查看详情</el-button>
            </template>
        </el-table-column>
      </el-table>
        <el-drawer v-model="drawer" title="I am the title" :with-header="false">
                        <span>Hi there!</span>
        </el-drawer>
    </el-main>
</template>

<script setup>
import { ref } from 'vue';
import SearchSchool from '../search/SearchSchool.vue';

const tableData = ref([]);
const drawer = ref(false);

const search = (data) => {
  tableData.value = data;
};

const handleClick = (row) => {
  console.log(row.schoolName);
};
</script>

<style>

</style>