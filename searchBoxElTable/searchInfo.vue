<template>
  <div class="table">
    <div class="search-Box">
      <el-input   placeholder="请输入关键字" icon="search"  class="search"  v-model="search"></el-input>
    </div>
    <el-table  :data="fileData" border style="width: 100%">
      <el-table-column  prop="id" label="id"></el-table-column>
      <el-table-column prop="key" label="关键字"> </el-table-column>
      <el-table-column   prop="name"  label="姓名"></el-table-column>
    </el-table>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        search: '',  
        tableData: [
          { id: '325t',key: '24324', name: 'gsegseg' },
          {id: '3wt5w35w3',key: '2424',name: 'asgasgsaagagag'},
          {id: '3643t3g43y4453',key: '243',name: 'sggsegsge'},
        ]  
      }
    },
    computed:{
      fileData:function(){
        var search=this.search;
        if(search){
          return  this.tableData.filter(function(dataNews){
            return Object.keys(dataNews).some(function(key){
              return String(dataNews[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.tableData
      }
    }
  }
</script>