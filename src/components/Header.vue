<template>
  <el-row>
    <el-col :span="2"><div class="grid-content bg-purple-dark"></div></el-col>
    <el-col :span="2" :offset="14"><div class="grid-content bg-purple-dark"></div>邹海洋</el-col>
    <el-col :span="2"><div class="grid-content bg-purple-dark">{{msg}}</div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple-dark">我的账户</div></el-col>
    <el-col :span="2"><div class="grid-content bg-purple-dark">退出登录</div></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

