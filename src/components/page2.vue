<template>
  <div class="page_one">
    <div class="fixed">
      <h3 class="l">配置中心</h3>
      <div class="r">
        <el-select clearable v-model="dateValue" placeholder="日期" @change="currentSel">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.label">
          </el-option>
        </el-select>
        <el-input v-model="search" style="display: inline-block;"
          placeholder="请输入搜索内容">
        </el-input>
        <el-row>
        <el-button type="primary" @click="test">搜索</el-button>
        </el-row>
      </div>
    </div>
    <div class="table_m">
      <el-table
        ref="multipleTable"
        :data="tables.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        tooltip-effect="dark"
        style="width: 100%"
        @selection-change="handleSelectionChange">
        <el-table-column
          type="selection"
          width="55">
        </el-table-column>
        <el-table-column
          prop="date"
          label="日期"
          width="120">
          <!-- 高亮匹配
          <template slot-scope="scope">    
             <span class="col-cont" v-html="showDate(scope.row.date)" ></span>
          </template> -->
       </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="120">
          <!-- 高亮匹配
          <template slot-scope="scope">    
             <span class="col-cont" v-html="showDate(scope.row.name)" ></span>
          </template> -->
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
          <!-- 高亮匹配
          <template slot-scope="scope">    
             <span class="col-cont" v-html="showDate(scope.row.address)" ></span>
          </template> -->
        </el-table-column>
      </el-table>
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tables.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '2016-05-03'
      }, {
        value: '选项2',
        label: '2016-05-04'
      }, {
        value: '选项3',
        label: '2016-05-05'
      }],
      value: '',
      dateValue: '',
      options2: [{
        value: '选项1',
        label: '王小虎'
      }, {
        value: '选项2',
        label: '王虎'
      }],
      value2: '',
      tableData3:[],
      multipleSelection: [],
      currentPage:1,
      pagesize:5,
      productList:[],
      search:''
    }
  },
  mounted () {
    this.getGoodsList()
  },
computed: {
    filterShoppingList: function () {
        // `this` points to the vm instance
        var value = this.value;
        var productList = this.tableData3;
        if(value != ''){
          return productList.filter(function (row, index) {
              return row.date === value
          });
        }else{
          return productList.filter(function (row, index) {
              return row.date
          });
        }
        return productList.filter(function (row, index) {
              return row.date
          });
    },
    // 模糊搜索
    tables () {
      const search = this.search
      if (search) {
        return this.filterShoppingList.filter(data => {
          return Object.keys(data).some(key => {
            return String(data[key]).toLowerCase().indexOf(search) > -1
          })
        })
      }
      return this.filterShoppingList
    }
  },
  methods: {
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    handleSizeChange: function (size) {
        this.pagesize = size;
    },
    handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
    },
    filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
    },
    currentSel(){
      this.currentPage = 1
    },
    getGoodsList () {
      var that = this
      this.axios.get('/api/tableData3', {
      }).then(function (response) {
      // 将接收到的数据传递到data的数据
        console.log(response);
        that.tableData3 = response.data.data
      }).catch(function (response) {

      });
    },
    test:function(){
      alert(this.value)

      this.value=this.dateValue;
    }

    //高亮匹配
//     showDate(val) {
//       val = val + '';
//       if (val.indexOf(this.search) !== -1 && this.search !== '') {
//          return val.replace(this.search, '<font color="#409EFF">' + this.search + '</font>')
//       } else {
//          return val
//       }
//     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
