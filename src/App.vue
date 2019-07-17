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
  },
  created(){
    debugger
    console.log(this.$store)
    
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store") ) {
        this.$store.replaceState(Object.assign({}, this.$store.state,JSON.parse(sessionStorage.getItem("store"))))
    } 

    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload",()=>{
        sessionStorage.setItem("store",JSON.stringify(this.$store.state))
    })
  }
}
</script>
