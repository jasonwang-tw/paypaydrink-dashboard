<template>
  <div class="accountFooter flex flex-col justify-between mt-32">
    <div class="container mx-auto relative">
      <ul class="rules list-none flex justify-between text-main-500 w-40 mx-auto pl-0">
        <li><router-link to="/privacy" class="hover:text-sup1-100">隱私政策</router-link></li>
        <li><router-link to="/terms" class="hover:text-sup1-100">使用條款</router-link></li>
      </ul>
      <img
        src="../assets/loginBg.svg"
        alt=""
        srcset=""
        class="absolute bottom-0 right-24 -bottom-5 hidden xl:block"
      />
    </div>
    <hr />
    <div class="accountFooterBottom text-center">
      <p class="text-main-500">© 2020 PayPayDrink</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'accountFooter',
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .rules {
    a {
      text-decoration: none;
    }
  }
</style>
