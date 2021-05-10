<template>
  <div id="drinkList">
    <div class="flex justify-center mb-10">
      <div class="contentCard">
        <h2 class="text-2xl md:text-3xl text-main-500">大家常喝</h2>
        <drink :indexClass="['']" />
      </div>
    </div>
    <div class="flex justify-center mb-10">
      <div class="contentCard">
        <h2 class="text-2xl md:text-3xl text-main-500">珍珠奶茶控必點</h2>
        <drink :indexClass="['']" />
      </div>
    </div>
    <div class="flex justify-center mb-10">
      <div class="contentCard">
        <h2 class="text-2xl md:text-3xl text-main-500">餐後解膩</h2>
        <drink :indexClass="['']" />
      </div>
    </div>
  </div>
</template>

<script>
  import drink from '@/components/drink.vue'

  export default {
    name: 'drinkList',
    components: {
      drink
    },
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .userimg {
    width: 60px;
    height: 60px;
  }
</style>
