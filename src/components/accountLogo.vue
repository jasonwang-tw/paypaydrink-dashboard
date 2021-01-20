<template>
  <div class="accountLogo text-center pt-10">
    <div
      class="btnBack cursor-pointer mb-10 flex mx-auto items-center text-main-500 hover:text-sup1-100 duration-200 px-8"
      onClick="javascript:history.back()"
    >
      <i class="pay-arrow_left text-2xl"></i>返回
    </div>
    <router-link to="/" class="accountLogo inline-block m-auto">
      <img src="../assets/logo.svg" alt="" />
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'accountLogo',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .accountLogo {
    img {
      width: 150px;
    }
  }
  .btnBack {
    max-width: 500px;
  }
</style>
