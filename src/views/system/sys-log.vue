<template>
    <div class="sys-log">
        <div class="container">
            <div class="header">
                <div class="desc-text">系统日志
                </div>
                <div class="notice">
                    <!--                    <a href="">12313</a>-->
                </div>
                <div class="search-line"></div>
                <div class="btn-group">
                    <el-button icon="el-icon-search" size="mini" type="success">刷新</el-button>
                    <el-button icon="el-icon-delete" size="mini" type="danger">删除</el-button>
                    <el-button size="mini" type="success">刷新</el-button>
                    <el-dropdown size="small" split-button>更多
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item>黄金糕</el-dropdown-item>
                            <el-dropdown-item>狮子头</el-dropdown-item>
                            <el-dropdown-item>螺蛳粉</el-dropdown-item>
                            <el-dropdown-item>双皮奶</el-dropdown-item>
                            <el-dropdown-item>蚵仔煎</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <div class="search-box"></div>
            </div>
            <div class="grid-table">
                <el-checkbox-group v-model="checkboxVal">
                    <el-checkbox :key="label" :label="label" v-for="label in defaultHeadOptions">{{label}}</el-checkbox>
<!--                    <el-checkbox label="banana">banana</el-checkbox>-->
<!--                    <el-checkbox label="orange">orange</el-checkbox>-->
                </el-checkbox-group>
                <el-table :data="gridData" style="width: 100%">
<!--                    <el-table-column prop="date" label="日期"></el-table-column>-->
                    <el-table-column :prop="col" :label="col" v-for="(col,index) in tableHead" :key="col"></el-table-column>
<!--                    <el-table-column prop="address" label="地址"></el-table-column>-->
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
    import {data} from './log.mock'
  export default {
    name: "sys-log",
    data() {
      return {
        checkboxVal:Object.keys(data.pageInfo.list[0]),
        gridData: data.pageInfo.list,
        defaultHeadOptions:Object.keys(data.pageInfo.list[0]),
        tableHead:Object.keys(data.pageInfo.list[0])
      }
    },
    mounted() {
      console.log(this.tableHead,'head');
    },
    watch:{
      checkboxVal(value){
        // this.tableHead=this.checkboxVal  //不能直接赋值，不然勾选之后表头循序会乱，需要利用defautHeadOptions循环
        this.tableHead = this.defaultHeadOptions.filter(key=>value.indexOf(key)>=0);
        console.log(value);
        // this.tableHead = this.defaultCheckedKeys.filter(i => valArr.indexOf(i) >= 0)
      }
    }
  }
</script>

<style lang="scss" scoped>
    .container {
        .header {
            height: 45px;
            position: relative;
            padding-bottom: 11px;
            display: flex;
            width: 100%;
            /*background: #42b983;*/
            .desc-text {
                margin-top: 5px;
                font-weight: 700;
                margin-bottom: 3px;
                font-size: 15px;
                color: #607d8b;
                white-space: nowrap;
                border-bottom: 2px solid #009688;
            }
            .search-line {
                flex: 1
            }
        }
        .grid-table {
        }
    }
</style>
