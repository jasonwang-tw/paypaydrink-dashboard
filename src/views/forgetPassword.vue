<template>
  <div id="account" class="">
    <popup
      :class="popupStatus"
      title="即將重設您的密碼"
      content="密碼重設連結已寄至您的電子郵件地址，請點擊地址中的重設連結設定新密碼。"
      nextPage="/resetPassword"
    />
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>忘記密碼</h4>
        <p>輸入您的電子郵件地址</p>
        <form action="">
          <div class="inputBar">
            <input type="text" placeholder="請輸入電子郵件地址" />
          </div>
          <div class="btn-dark-blue block" @click="popClick">繼續</div>
        </form>
      </div>
    </div>
    <accountFooter />
  </div>
</template>

<script>
  import accountFooter from '@/components/accountFooter.vue'
  import accountLogo from '@/components/accountLogo.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'newAccount',
    components: {
      accountFooter,
      accountLogo,
      popup
    },
    data() {
      return {
        popupStatus: 'hidden'
      }
    },
    methods: {
      popClick: function() {
        this.popupStatus = ''
      }
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
</style>
