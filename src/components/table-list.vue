<template>
  <el-table
    :data="contentData"
    border
    style="width: 100%">
    <el-table-column
      :label="row.lable"
      v-for="row in titleData"
      :key="row.id">
      <template slot-scope="scope">
        <div v-if="row.prop == 'contractName'">
          <span style="margin-left: 10px">{{ scope.row[row.prop] }}</span>
        </div>
        <div v-else-if="row.prop == 'state'">
          <span v-if="scope.row[row.prop] == '1'">待我签署</span>
          <span v-else-if="scope.row[row.prop] == '2'">审批中</span>
          <span v-else-if="scope.row[row.prop] == '3'">待他人签署</span>
          <span v-else-if="scope.row[row.prop] == '4'">待确认</span>
          <span v-else-if="scope.row[row.prop] == '5'">签署完成</span>
          <span v-else-if="scope.row[row.prop] == '6'">已拒签</span>
          <span v-else-if="scope.row[row.prop] == '7'">已撤销</span>
          <span v-else-if="scope.row[row.prop] == '8'">草稿箱</span>
          <span v-else-if="scope.row[row.prop] == '10'">已拒绝</span>
          <span v-else></span>
        </div>
        <div v-else-if="row.prop == 'operationList'">
          <el-button 
            data-key="123"
            v-for="(btn,index) in scope.row.operationList" 
            :key="index"  
            @click="handleClick(scope.row,btn,$event)" 
            type="text" 
            size="small">
            {{btn.operationName}}
          </el-button>
        </div>
        <div v-else>
          <span style="margin-left: 10px">{{ scope.row[row.prop] }}</span>
        </div>
      </template>
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
      handleClick(row,btn,event) {
        event.target.setAttribute("data-abc","abc")
        let val = {
          "row": row,
          "btn": btn
        }
        console.log(row,btn);
        this.$emit('btnClickEvent',val)
      }
    },
    data() {
      return {
        //tableData: this.listData
      }
    },
    created(){
      console.log(this.titleData,"888")
    },
    mounted(){
      console.log(this.titleData,"999")
    }
  }
</script> 
