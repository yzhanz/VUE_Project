<template>
  <div class="poster">

    <vue-particles color="#03e9f4" class="particles-js"></vue-particles>

    <div class='login'>
      <el-form>
        <h2>用户登录</h2>

        <el-form-item>
          <el-input v-model="user.userName" placeholder="用户名"></el-input>
        </el-form-item>

        <el-form-item>
          <el-input v-model="user.password" placeholder="密码" type="password">password</el-input>
        </el-form-item>

        <el-form-item>
          <el-button  type="primary" class = 'btn1' plain v-on:click="handleLogin()"> 登录
          </el-button>
        </el-form-item>

      </el-form>
    </div>


  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      user: {
        userName: '',
        password: '',
      },
    }
  },
  methods: {
    handleLogin() {
      this.axios({
        method: 'POST',
        url: '/api/v1/public/user/login',
        data: this.user,
      }).then((data) => {
        if(data.data.code === "000000") {
          this.$message.success("登录成功！")
          this.$store.dispatch('common/userName', data.data.data.userName);
          this.$store.dispatch('common/token', data.data.data.token);
          this.$store.dispatch('common/role', data.data.data.role);
          this.$store.dispatch('common/userId', data.data.data.userId);
          this.$router.push('/')
        }else {
          this.$message.error("登陆失败！请检查用户名或密码")
        }
      })
    }
  }
}
</script>

<style>

input::-webkit-input-placeholder {
  color: #03e9f4 !important;
}

input::-ms-input-placeholder {
  color: #03e9f4 !important;
}

.particles-js {
  width: 100%;
  height: calc(100% - 100px);
  position: absolute;

}

h2 {
  text-align: center;
  color: aliceblue;
  margin-bottom: 30px;
  font-family: 'Courier New', Courier, monospace;
}

.btn {
  padding: 10px 20px;
  margin-top: 30px;
  color: #03e9f4;
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 2px;
  background: transparent;
  border: 0;
  outline: none;

}

.poster {
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

.login {
  width: 400px;
  height: 364px;
  background-color: #151617;
  margin: 100px auto;
  border-radius: 10px;
  box-shadow: 0 15px 25px 0 rgba(29, 28, 28, 0.6);
  padding: 40px;
  box-sizing: border-box;
}

.btn:hover {
  border-radius: 5px;
  color: #fff;
  background: #03e9f4;
  box-shadow: 0 0 5px 0 #03e9f4,
  0 0 25px 0 #03e9f4,
  0 0 50px 0 #03e9f4,
  0 0 100px 0 #03e9f4;
  transition: all 1s linear;
}

.btn > span {
  position: absolute;
}

.btn1 > span:nth-child(1) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(left, transparent, #03e9f4);
  left: -100%;
  top: 0px;
  animation: line1 1s linear infinite;
}

@keyframes line1 {

  50%,
  100% {
    left: 100%;
  }
}

.btn > span:nth-child(2) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(top, transparent, #03e9f4);
  right: 0px;
  top: -100%;
  animation: line2 1s 0.25s linear infinite;
}

@keyframes line2 {

  50%,
  100% {
    top: 100%;
  }
}

.btn > span:nth-child(3) {
  width: 100%;
  height: 2px;
  background: -webkit-linear-gradient(left, #03e9f4, transparent);
  left: 100%;
  bottom: 0px;
  animation: line3 1s 0.75s linear infinite;
}

@keyframes line3 {

  50%,
  100% {
    left: -100%;
  }
}

.btn > span:nth-child(4) {
  width: 2px;
  height: 100%;
  background: -webkit-linear-gradient(top, transparent, #03e9f4);
  left: 0px;
  top: 100%;
  animation: line4 1s 1s linear infinite;
}

@keyframes line4 {

  50%,
  100% {
    top: -100%;
  }
}
</style>
