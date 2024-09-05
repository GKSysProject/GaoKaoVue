<template>
        <el-container>
          <el-aside width="20%"  style="background-color:paleturquoise">
            <el-scrollbar>
              <el-menu :default-openeds="['1', '3']">
                  <el-menu-item-group>
                    <router-link to="/ranking">
                        <el-menu-item index="1-1">一分一段</el-menu-item>
                    </router-link>
                    <router-link to="/schoolMap">
                        <el-menu-item index="1-2">分布地图</el-menu-item>
                    </router-link>
                    <router-link to="/enrollmentPlan">
                        <el-menu-item index="1-3">招生计划</el-menu-item>
                    </router-link>
                    <router-link to="schoolMap">
                        <el-menu-item index="1-4">专业变化</el-menu-item>
                    </router-link>
                  </el-menu-item-group>
              </el-menu>
            </el-scrollbar>
            
          </el-aside>
  
          
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
  </template>
  
  <script>
  export default {
    
  };
  </script>
  
  <style>
  a {
    text-decoration: none;
  }
  .el-menu-item {
      background-color:paleturquoise;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh; /* 视口高度 */
  }
  .el-aside {
    background-color: paleturquoise;
    position: fixed;
    left: 0;
    height: 100vh; /* 视口高度 */
    z-index: 1;
  }
  .el-main {
    position: fixed;
    left: 20%;
    height: 100vh; /* 视口高度 */
    width: 80%;
    height: calc(100vh - 70px); /* 与头部高度一致 */
    overflow-y: auto;

}
  .el-menu-item.is-active {
    color: #2c3e50;
    background-color: azure;
  }
 
  </style>
  