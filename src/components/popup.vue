<template>
  <div
    id="popup"
    class="fixed top-0 left-0 bg-opacity-50 bg-gray-900 h-full w-full z-10 flex items-center justify-center duration-200"
  >
    <div class="popupContent bg-white rounded-3xl text-center p-5 shadow-xl" role="alert">
      <h4 class="text-main-500">{{ title }}</h4>
      <p>{{ content }}</p>
      <router-link :to="nextPage" class="btn-dark-blue inline-block mt-5">確認</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['title', 'content', 'nextPage']
  }
</script>

<style lang="scss" scoped>
  .popupContent {
    width: 500px;
  }
</style>
