<template>
  <div class="login h-100 d-flex j-center a-center">
    <div class="d-flex a-stretch j-center form-container">
      <div class="d-flex a-center j-center flex-column panel">
        <h1 class="font-weight m-0">已有帐号？</h1>
        <p class="font ">请使用您的帐号进行登录</p>
        <button class="ghost" id="login" @click="login">登录</button>
      </div>
      <div class="d-flex a-center j-center flex-column form">
        <h1 class="font-weight m-0">注册</h1>
        <div class="social-container">
          <div class="social">
            <i class="iconfont icon-shejiao-weixin"></i>
          </div>
          <div class="social"><i class="iconfont icon-shejiao-QQ"></i></div>
        </div>
        <span class="font-sm">或使用邮箱注册</span>
        <el-input class="" v-model="form.username" placeholder="用户名" />
        <el-input class="" v-model="form.email" placeholder="电子邮箱" />
        <el-input class="" v-model="form.password" placeholder="密码" />
        <button @click="singup">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: ''
      }
    };
  },
  components: {},
  computed: {},
  mounted() {},
  methods: {
    login() {
      this.$router.push('/login');
    },
    signup() {}
  }
};
</script>
<style lang="scss" scoped>
.login {
  .form-container {
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    overflow: hidden;
    width: 768px;
    min-height: 480px;
    .form {
      padding: 0 50px;
      .social-container {
        margin: 20px 0;
        .social {
          border: 1px solid #ddd;
          border-radius: 50%;
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin: 0 5px;
          height: 40px;
          width: 40px;
        }
      }
      .el-input {
        margin: 8px 0;
      }
      .forget-password {
        color: #333;
        font-size: 14px;
        text-decoration: none;
        margin: 15px 0;
        cursor: pointer;
      }
    }
    .panel {
      background: #ff416c;
      background: linear-gradient(to right, #ff4b2b, #ff416c) no-repeat 0 0 /
        cover;
      color: #fff;
      padding: 0 40px;
      text-align: center;
      p {
        line-height: 20px;
        letter-spacing: 0.5px;
        margin: 20px 0 30px;
      }
    }
    .form,
    .panel {
      box-sizing: border-box;
      width: 384px;
    }
  }
  button {
    border-radius: 20px;
    border: 1px solid #ff4b2b;
    background: #ff4b2b;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    cursor: pointer;
  }
  button:active {
    transform: scale(0.95);
  }
  button:focus {
    outline: none;
  }
  button.ghost {
    background: transparent;
    border-color: #fff;
  }
}
</style>
