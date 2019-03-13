<template>
  <el-table
    :data="tableData.rowContent"
    border
    style="width: 100%">
    <el-table-column
      fixed
      :prop="row.prop"
      :label="row.lable"
      width="150"
      v-for="row in tableData.rowTitle"
      :key="row.id">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'table-list',
    props: {
        listData: {
          type: Object,
          required: true
        }
    },  
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
    data() {
      return {
        tableData: this.listData
      }
    },
    created(){
      //console.log(this.listData)
    }
  }
</script>
