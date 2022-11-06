<template>
<div class="student-table-component">
  <!--面包屑-->
  <el-row>
    <el-col :span="4" >
      <el-breadcrumb separator="/">
        <el-breadcrumb-item v-for="item in levelList" :key="item.path" :to="item.path">{{item.meta.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
  <br>
  <!--搜索框-->
  <el-row class="drug-table-condition">
    <el-col :span="4" :offset="1">
      <el-input v-model="PageReq.userName" placeholder="用户名称" clearable/>
    </el-col>
    <el-col :span="4" :offset="1">
      <el-select v-model="PageReq.params.role" placeholder="请选择用户角色">
        <el-option
          v-for="item in dic.role"
          :key="item.dicText"
          :label="item.dicText"
          :value="item.dicText">
        </el-option>
      </el-select>
    </el-col>
    <el-col :span="3" :offset="2">
      <el-button type="primary"  style="width: 100%;" @click="page()" icon="el-icon-search">查询</el-button>
    </el-col>
  </el-row>
  <br>
  <!--头部按钮-->
<!--  <el-row>-->
<!--    <el-col :span="3" :offset="10">-->
<!--      <el-button type="primary" icon="el-icon-upload2"  size="small" @click="InsertWithModel">-->
<!--        信息添加-->
<!--      </el-button>-->
<!--    </el-col>-->
<!--  </el-row>-->

</div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      levelList:[],
      resultList: [],
      resultCount: 0,
      PageReq: {
        page: 1,
        size: 5,
        tableName:'sys_user',
        params: {}
      },
      dic: {
        role : []
      }
    }
  },
  created() {
    this.getBreadcrumb()
    this.page()
    this.getDic()
  },
  methods: {
    getBreadcrumb() {
      let matched = this.$route.matched.filter(item => item.name)
      const first = matched[0];
      if (first && first.name.trim().toLocaleLowerCase() !== 'Home'.toLocaleLowerCase()) {
        matched = [{ path: '/Home', meta: { title: 'Home' }}].concat(matched)
      }
      this.levelList = matched
    },
    page() {
      this.$axios.page(this.PageReq, (data) => {
        if(data.code = '000000') {
          this.resultList = data.data.dataList
          this.resultCount = data.data.total
        }
      })
    },
    handleSizeChange(size) {
      this.PageReq.size = size;
      this.page();
    },
    handleCurrentChange(page) {
      this.PageReq.page = page
      this.page();
    },
    getDic() {this.$axios.dic('role', (data) => {this.dic.role = data.data})}
  }
}
</script>

<style scoped>

</style>
