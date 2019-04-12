<template>
  <el-table
    :data="contentData"
    border
    style="width: 100%">
    <el-table-column
      fixed
      :prop="row.prop"
      :label="row.lable"
      v-for="row in titleData"
      :key="row.id">
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: 'table-list',
    props: {
        titleData: {
          type: Array,
          required: true
        },
        contentData: {
          type: Array,
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
        //tableData: this.listData
      }
    },
    created(){
      //console.log(this.listData)
    }
  }
</script>
