<template>
    <!--头部左侧整体布局-->

    <div class="tauger">
        <aside class="aside-nav">
            <div class="nav-logo">
                <img src="../assets/log.png" alt="">
            </div>
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span slot="title">导航三</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
            </el-menu>
        </aside>
        <main class="tauger-main">
            <header class="main-header">
                <span class="header-text">支持前端、后台业务代码扩展的快速开发框架</span>
                <div class="header-links">
                    <div>框架文档</div>
                    <div>框架文档</div>
                    <div>框架文档</div>
                </div>
            </header>
            <div class="main-path">
                <ul>
                    <li class="active">首页
                        <i class="icon-romve ivu-icon ivu-icon-md-close-circle"></i>
                    </li>
                    <li>首页</li>
                </ul>
            </div>
            <div class="main-content">
                <router-view></router-view>
            </div>
        </main>
    </div>
</template>

<script>
  export default {
    name: "Index",
    methods: {
      handleOpen (key, path) {
        console.log(key);
        console.log(path);
      },
      handleClose () {
      }
    }
  }
</script>

<style lang="scss" scoped>
    body {
        height: 100%;
        width: 100%;
    }
    .tauger-header {
    }
    .aside-nav {
        height: 100%;
        position: absolute;
        width: 200px;
        float: left;
        overflow: hidden;
        /*background: red;*/
        .nav-logo {
            height: 60px;
            img {
                /*width: 100%;*/
                height: 100%;
            }
        }
    }
    .tauger-main {
        min-width: 800px;
        right: 0;
        display: inline-block;
        position: absolute;
        margin: 0;
        left: 199px;
        box-sizing: border-box;
        height: 100%;
        /*background: goldenrod;*/
        .main-header {
            display: flex;
            /*justify-content: center;*/
            height: 60px;
            width: 100%;
            background: #03535e;
            align-items: center;
            justify-content: space-between;
            color: #b0b0b0;
            .header-text {
                margin-left: 20px;
                color: #dcdfe6;
            }
            .header-links {
                display: flex;
                margin-right: 20px;
                > div {
                    height: 100%;
                    padding: 20px 10px;
                    position: relative;
                    cursor: pointer;
                    z-index: 3;
                }
            }
        }
        .main-path {
            position: relative;
            width: 100%;
            display: inline-block;
            border-bottom: 2px solid #eee;
            ul {
                display: flex;
                height: 32px;
                align-items: center;
                li {
                    position: relative;
                    height: 100%;
                    float: left;
                    padding: 0 20px;
                    min-width: 80px;
                    border-right: 1px solid #eee;
                    box-sizing: border-box;
                    line-height: 32px;
                    font-size: 12px;
                    text-align: center;
                    cursor: pointer;
                    &.active, &:hover {
                        background: goldenrod;
                        color: #fff;
                    }
                    i {
                        position: absolute;
                        display: block;
                        width: 10px;
                        height: 10px;
                        border-radius: 50%;
                        /*background: red;*/
                        top: 5px;
                        right: 6px;
                    }
                }
            }
        }
        .main-content{
            position: absolute;
            bottom: 0;
            width: 100%;
            /*background: red;*/
            top: 92px;
            padding: 15px;
            box-sizing: border-box;
        }
    }
</style>
