<template>
  <div id="complate" class="text-center">
    <h2 class="text-2xl md:text-3xl">付款完成</h2>
    <div class="mt-10">
      <img src="../../../src/assets/images/qr.png" alt="" class="block mx-auto mb-5" />
      <div class="flex items-center justify-center">
        <h5>
          <i class="mr-2 text-xl pay-list text-lightblue-500"></i><strong>訂單</strong>
          <span class="ml-2 text-blue-900">001</span>
        </h5>
      </div>
      <p class="mb-10">請12小時內至指定店鋪，出示QRCODE掃描領取飲品。<br />祝您用餐愉快</p>
      <div class="flex justify-center functionBtn">
        <router-link to="/account/order" class="btn btn-dark-blue">查看訂單</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'complate'
  }
</script>
<style lang="scss" scoped></style>
