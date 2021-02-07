<template>
  <div id="drinkPage">
    <topmenu />
    <div class="customContainer mx-auto my-20">
      fdgfdgdfg
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'

  export default {
    name: 'drinkPage',
    components: {
      topmenu,
      footerBar,
    },
    data() {
      return {
        mainDrink: [
          {
            link: '/',
            name: '紅茶',
            bg: require('../assets/drinkBg/1.jpg')
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .customContainer {
    max-width: 960px;
  }
  .userimg {
    width: 60px;
    height: 60px;
  }
</style>
