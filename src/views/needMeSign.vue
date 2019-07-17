<template>
  <div class="about">
    <h1>This is an me page</h1>
    <search-form />
    <table-list :title-data="tableTitle" :content-data="tableContent" @btnClickEvent="btnClickEvent" />
    <pager-list :page-info="pageInfo" @pageChange="pageChange" />
  </div>
</template>
<script>
export default {
  name: "needMeSign",
  data() {
    return {
      tableTitle: [],
      tableContent: [],
      pageInfo: {},
      myarr: [{
        "name":"a",
        "key":"1",
        "id":"0",
        "type": "1"
      },{
        "name":"b",
        "key":"2",
        "id":"1",
        "type": "0"
      },{
        "name":"c",
        "key":"3",
        "id":"2",
        "type": "1"
      }]
    }
  },
  beforeCreate(){
    const that = this;
    let data = {},
        pathCode;
    that.$http(that.$api.tablelists(),data).then(function(xhr){
      that.tableTitle = xhr.data.data.rowTitle;
    })
    that.$http(that.$api.tableData(),data).then(function(xhr){
      that.tableContent = xhr.data.list;
      let pageInfo = {};
      pageInfo.pageSizeSelect = [10];
      pageInfo.pageSize = xhr.data.pageSize;
      pageInfo.layout = "total, sizes, prev, pager, next, jumper"
      pageInfo.total = xhr.data.total;
      that.pageInfo = pageInfo;
    })
    pathCode = that.$store.getters.getPath;
    console.log(pathCode)
    // that.$http(that.$api.pageInfo(),data).then(function(xhr){
    //   that.pageInfo = xhr.data.data;
    //   console.log(that.pageInfo);
    // })
  },
  created(){
    const that = this;
    that.dodel(that.myarr,"1")
    console.log(that.myarr,"++++++")
  },
  methods: {
    pageChange(page){
      const that = this;
      that.$alert(`这是一段内容${ page }`, '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          that.$store.dispatch('changeHistoryPath',6)
          let pathCode = that.$store.getters.getPath;
          console.log(pathCode)

          // this.$message({
          //   type: 'info',
          //   message: `action: ${ action }`
          // });
        }  
      });
    },
    btnClickEvent(type){
      const that = this;
      that.$alert(`这是一段内容${ type }`, '标题名称', {
        confirmButtonText: '确定',
        callback: action => {
          that.$store.dispatch('changeHistoryPath',6)
          let pathCode = that.$store.getters.getPath;
          console.log(pathCode)

          // this.$message({
          //   type: 'info',
          //   message: `action: ${ action }`
          // });
        }  
      });
    },
    dodel(arr,todel){
			var arridx;
			arr.forEach(function(item,index){
				if(item.id == todel && item.type == "0"){
					arridx = arr.indexOf(item)
					return false;
				}
			})
			arr.splice(arridx,1)
      console.log(arr)
		}
  }
}
</script>