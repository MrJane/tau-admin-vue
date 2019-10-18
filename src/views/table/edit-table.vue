<template>
    <div class="edit-table">
        <el-table :data="gridData">
            <el-table-column prop="userId" label="学生ID">
                <template scope="scope">
                    <el-input v-if="scope.row.isEdit" size="small" v-model="scope.row.userId" placeholder="流程名称"></el-input>
                    <span v-else>{{ scope.row.userId }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="loginName" label="学生帐号"></el-table-column>
            <el-table-column prop="studentCode" label="学籍号"></el-table-column>
            <el-table-column prop="name" label="学生姓名"></el-table-column>
            <el-table-column prop="orgName" label="学校名称"></el-table-column>
            <el-table-column prop="className" label="班级名称"></el-table-column>
            <el-table-column prop="statusName" label="状态"></el-table-column>
            <el-table-column prop="orgName" label="班级名称"></el-table-column>
            <el-table-column label="操作">
                <template scope="scope">
                    <el-button size="mini" @click="handleSave(scope.$index, scope.row)">{{scope.row.isEdit?'保存':'修改'}}</el-button>
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)" v-if="!scope.row.isEdit">编辑</el-button>
                    <el-button size="mini" @click="handleCancel(scope.$index, scope.row)" v-else="">取消</el-button>
                </template>
            </el-table-column>


        </el-table>
    </div>
</template>

<script>
  import {data} from "./table.mock";

  export default {
    name: "edit-table",
    data() {
      return {
        gridData: data.pageInfo.list
      }
    },
    methods:{
      handleEdit(index,row){
        console.log(index);
        row.isEdit=true;
        console.log(row);
      },
      handleSave(index,row){
        console.log(index);
        console.log(row);
      },
      handleCancel(index,row){
        row.isEdit =false;
        console.log(index);
        console.log(row);
        console.log(row);
      }
    },
    mounted() {
      this.gridData = data.pageInfo.list.map((v)=>{
        this.$set(v,'isEdit',false);
        return v
      })
    }
  }
</script>

<style scoped>

</style>
