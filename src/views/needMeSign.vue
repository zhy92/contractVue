<template>
  <div class="about">
    <h1>This is an me page</h1>
    <search-form />
    <table-list :list-data="listData" />
    <pager-list :page-info="pageInfo" />
  </div>
</template>
<script>
export default {
  name: "needMeSign",
  data() {
    return {
      listData: {},
      pageInfo: {}
    }
  },
  beforeCreate(){
    const that = this;
    let data = {};
    that.$http(that.$api.tablelists(),data).then(function(xhr){
      that.listData = xhr.data.data;
      console.log(that.listData);
    })
    that.$http(that.$api.pageInfo(),data).then(function(xhr){
      that.pageInfo = xhr.data.data;
      console.log(that.pageInfo);
    })
  }
}
</script>