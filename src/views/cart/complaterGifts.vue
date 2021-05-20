<template>
  <div id="complaterGifts" class="text-center">
    <h2 class="text-2xl md:text-3xl">付款完成</h2>
    <div class="mt-10">
      <img src="../../../src/assets/images/gifts.svg" alt="" class="block mx-auto mb-5" />

      <h5>
        立即複製連結或輸入好友電子郵件，邀請他吧！
      </h5>
      <div class="max-w-xl mx-auto mt-10 pb-10">
        <div class="flex mb-5">
          <input
            class="mr-3"
            type="text"
            name=""
            id="shareUrl"
            value="https://paypaydrink.com/sharer.php?u=https%3A%2F%"
          />
          <div class="btn-border-light-blue flex-shrink-0" @click="copyUrl">複製連結</div>
        </div>
        <div class="flex">
          <input
            class="mr-3"
            type="text"
            name=""
            id=""
            value=""
            placeholder="輸入好友電子郵件地址"
          />
          <div class="btn btn-dark-blue flex-shrink-0">發送邀請</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'complaterGifts',
    methods: {
      copyUrl() {
        const copyText = document.getElementById('shareUrl')
        /* Select the text field */
        copyText.select()
        copyText.setSelectionRange(0, 99999) /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand('copy')
        alert('複製成功！')
      }
    }
  }
</script>
<style lang="scss" scoped></style>
