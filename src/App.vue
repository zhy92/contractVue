<template>
  <el-container id="app">
    <el-header>
      <Header msg="已选择的企业"></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Nav navData=""></Nav>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Home from './views/Home.vue'

export default {
  name: 'app',
  components: {
    Header,
    Nav,
    Home
  }
}
</script>
