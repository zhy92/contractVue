<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu
        default-active="/needMeSign"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        :router=true
        >
        <el-menu-item v-for="(nav,index) in navData" :key="index"  :index="nav.navRoute">
          <icon-svg :icon-class="nav.navIcon" />
          <span slot="title">{{nav.navName}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import navApi from "../router/nav"
export default {
  name: "Nav",
  props: {
    msg: navApi
  },
  data() {
    return {
      navData: navApi
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.el-menu-item{
  text-align: left;
}
</style>
