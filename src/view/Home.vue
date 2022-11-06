<template>
  <div>
    <el-container>
      <el-header class="page-header" >
        <br>
        <el-dropdown>
          <span class="el-dropdown-link">
            欢迎您：{{userName}}<i class="el-icon-arrow-down el-icon--right"/>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item @click.native="Myessage">个人信息</el-dropdown-item>
            <el-dropdown-item @click.native="Login">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside class="page-menu">
          <!--        菜单-->
          <el-menu
            :default-active="$route.path"
            :router=true
            class="el-menu-vertical-demo">
            <el-submenu class="b" :index="item.path" v-for="(item,index) in menu" :key="index" v-if="item.children.length>0">
              <template slot="title">
                <i :class="item.icon"/>
                <span>{{item.name}}</span>
              </template>
              <el-menu-item-group class="a">
                <el-menu-item v-for="(i,index) in item.children" :key="index" :index="i.path" :route="i.path">
                  {{i.name}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item style="background-color: #ffe6f0" :index="item.path" v-for="(item,index) in menu" :key="index" v-if="item.children.length === 0"
                          :route="item.path">
              <i :class="item.icon"/>
              <span>{{item.name}}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main class="page-main">
          <el-divider/>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import menu from "../router/menu";
import store from "../store"

export default {
  name: "Home",
  data() {
    return {
      name: '',
      menu: [],
      userName: '使用者'
    };
  },
  created() {
    this.userName = store.state.common.userName;
    this.role = store.state.common.role;
    if(store.state.common.role === '管理员' ) {
      this.menu = menu
    }
  },
  methods:{
    Myessage(){
      this.$router.push("User")
    },
    Login(){
      sessionStorage.clear()
      localStorage.clear();
      this.$store.dispatch('common/userName', "");
      this.$store.dispatch("common/role", "")
      this.$router.push("/")
    },

  }
}
</script>

<style scoped>
@import "../assets/css/main.css";
</style>
