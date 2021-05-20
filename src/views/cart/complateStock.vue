<template>
  <div id="complateStock" class="text-center">
    <h2 class="text-2xl md:text-3xl">付款完成</h2>
    <div class="mt-10">
      <img src="../../../src/assets/images/stock.svg" alt="" class="block mx-auto mb-5" />
      <p class="mb-10">您購買的飲品已儲存至寄杯。</p>
      <div class="flex justify-center functionBtn">
        <router-link to="/account/stock" class="btn btn-dark-blue">查看寄杯</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'complateStock'
  }
</script>
<style lang="scss" scoped></style>
