<template>
  <div class="about">
    <h1>This is an ot page</h1>
  </div>
</template>
<script>
  export default{
    name: "needOther",
    data(){
      return {
        hashParams: {}
      }
    },
    mounted(){
      // this.hashParams.data = location.search
      console.log(this.$route.query,"hashParams")
    },
    watch: {
      '$route' (to, from) {
        console.log(this.$route.query,"hashParams")// 对路由变化作出响应...
      }
    }
  }
</script>