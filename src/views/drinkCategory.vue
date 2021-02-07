<template>
  <div id="drinkCategory">
    <topmenu />
    <div class="my-20">
      <div class="flex justify-center mb-10">
        <div class="contentCard">
          <h2 class="text-main-500">大家常喝</h2>
          <drink :indexClass="['']" />
        </div>
      </div>
      <div class="flex justify-center mb-10">
        <div class="contentCard">
          <h2 class="text-main-500">珍珠奶茶控必點</h2>
          <drink :indexClass="['']" />
        </div>
      </div>
      <div class="flex justify-center mb-10">
        <div class="contentCard">
          <h2 class="text-main-500">餐後解膩</h2>
          <drink :indexClass="['']" />
        </div>
      </div>
    </div>
    
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import drink from '@/components/drink.vue'

  export default {
    name: '',
    components: {
      topmenu,
      footerBar,
      drink
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

<style lang="scss" scoped></style>
