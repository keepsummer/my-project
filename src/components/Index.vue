<template>
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">

        <el-menu router :default-openeds="['0','1']">
<!--          :default-openeds="['0','1']" 默认展开导航栏,index 为0,1-->
<!--          $router 是取index.js里面的router 固定语法-->
          <el-submenu  v-for="(item,index) in $router.options.routes" :index="index+''" :key="index">
            <template slot="title" ><i class="el-icon-message"></i>{{item.name}}</template>
            <el-menu-item-group v-for="(item1,index2) in item.children" :key="index2">
<!--              :key 是解决vue不报warnning的-->
<!--              index标签是用来路由到页面的,如果点击页面1 就跳转到page1-->
              <el-menu-item :index="item1.path" :class="$route.path == item1.path?'is-active':''" >{{item1.name}}</el-menu-item>
<!--              :class="$route.path == item1.path?'is-active':''" 选中导航栏中的页面，使其变成选中状态-->
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>

    </el-container>
</template>
<!--设置动态路由导航栏-->
<!--1、<el-menu> 添加router  5行-->
<!--2、添加<router-view></router-view> 18行-->
<!--3、<el-menu-item :index="item1.path">{{item1.name}}</el-menu-item> 12行-->
<script>
export default {
  name: "index"
}
</script>

<style scoped>

</style>
