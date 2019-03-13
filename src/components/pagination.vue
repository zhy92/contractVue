<template>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="pageInfo.pageSizeSelect"
      :page-size="pageInfo.pageSize"
      :layout="pageInfo.layout"
      :total="pageInfo.total">
    </el-pagination>
  </div>
</template>
<script>
  export default {
    name: 'pagination',
    props: {
      pageInfo: {
        type: Object,
        required: true
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
    data() {
      return {
        currentPage: 1
      };
    }
  }
</script>