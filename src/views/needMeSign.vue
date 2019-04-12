<template>
  <div class="about">
    <h1>This is an me page</h1>
    <search-form />
    <table-list :title-data="tableTitle" :content-data="tableContent" />
    <pager-list :page-info="pageInfo" @pageChange="pageChange" />
  </div>
</template>
<script>
export default {
  name: "needMeSign",
  data() {
    return {
      listData: {},
      tableTitle: [],
      tableContent: [],
      pageInfo: {}
    }
  },
  beforeCreate(){
    const that = this;
    let data = {};
    that.$http(that.$api.tablelists(),data).then(function(xhr){
      that.listData = xhr.data.data;
      that.tableTitle = xhr.data.data.rowTitle;
      that.tableContent = xhr.data.data.rowContent;
      console.log(that.listData);
    })
    that.$http(that.$api.pageInfo(),data).then(function(xhr){
      that.pageInfo = xhr.data.data;
      console.log(that.pageInfo);
    })
  },
  methods: {
    pageChange(page){
      this.$alert(`这是一段内容${ page }`, '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          this.$message({
            type: 'info',
            message: `action: ${ action }`
          });
        }  
      });
    }
  }
}
</script>