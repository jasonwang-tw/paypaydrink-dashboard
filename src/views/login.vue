<template>
  <div id="account" class="">
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>歡迎回來</h4>
        <p>使用您的電子郵件地址登入。</p>
        <form action="">
          <div class="inputBar"><input type="text" placeholder="請輸入電子郵件地址" /></div>
          <div class="inputBar"><input type="password" placeholder="請輸入密碼" /></div>
          <button class="btn-dark-blue">登入</button>
        </form>
        <p class="text-main-500 mt-10">
          還沒用過 配配飲 嗎？
          <router-link to="/newaccount" class="text-sub-500 hover:text-sub-100">建立帳號</router-link>，還是
          <router-link to="/forgetPassword" class="text-sub-500 hover:text-sub-100">忘記密碼</router-link>？ 
        </p>
        <p class="my-5 text-xl">或</p>
        <div class="social md:flex justify-between block">
          <button class="btnFb beforeIcon">
            使用FaceBook登入
          </button>
          <button class="btnGoogle beforeIcon">
            使用Google登入
          </button>
        </div>
      </div>
    </div>
    <accountFooter />
  </div>
</template>

<script>
  import accountFooter from '@/components/accountFooter.vue'
  import accountLogo from '@/components/accountLogo.vue'

  export default {
    name: 'login',
    components: {
      accountFooter,
      accountLogo
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .accountContainer {
    max-width: 500px;
  }
  .entyForm {
    .inputBar {
      margin-bottom: 1rem;
    }
  }
  .social {
    button {
      color: white;
      flex-basis: 49%;
      // transition-duration: .2s;
    }
    .btnFb {
      background-color: #4267b2;
      &:hover {
        background-color: #5481db;
      }
      &:before {
        content: '\e90e';
      }
    }
    .btnGoogle {
      background-color: #df4b31;
      &:hover {
        background-color: #f16951;
      }
      &:before {
        content: '\e91e';
      }
    }
  }
</style>
