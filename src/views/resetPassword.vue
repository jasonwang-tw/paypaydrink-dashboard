<template>
  <div id="account" class="">
    <popup
      :class="popupStatus"
      title="設定完成"
      content="密碼已重設完成，現在開始將使用新密碼登入囉。"
      nextPage="/"
    />
    <accountLogo />
    <div class="accountContainer m-auto block text-center px-10">
      <div class="entyForm pt-14">
        <h4>重設密碼</h4>
        <p>請於下方輸入新密碼</p>
        <form action="">
          <div class="inputBar">
            <input type="password" placeholder="請輸入新密碼" />
          </div>
          <div class="inputBar">
            <input class="inputError" type="password" placeholder="請再次輸入新密碼" />
            <span class="error text-left w-full inline-block">* 密碼不相符，請重新輸入</span>
          </div>
          <div class="btn-dark-blue block" @click="popClick">重新設定密碼</div>
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
