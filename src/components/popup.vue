<template>
  <div
    id="popup"
    class="fixed top-0 left-0 bg-opacity-50 bg-gray-900 h-full w-full z-20 flex items-center justify-center duration-200"
  >
    <div class="popupContent bg-white rounded-3xl text-center p-5 shadow-xl">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="btn"></slot>
      <!-- <h4 class="text-main-500">{{ title }}</h4>
      <p>{{ content }}</p>
      <router-link :to="nextPage" class="btn-dark-blue inline-block mt-5">確認</router-link> -->
    </div>
  </div>
</template>

<script>
  export default {
    // props: ['title', 'content', 'nextPage']
  }
</script>

<style lang="scss">
  .popupContent {
    width: 500px;
    max-height: 80%;
    overflow-y: auto;
    // &::-webkit-scrollbar {
    //   border-radius: 0 99px 99px 0;
    //   overflow: hidden;
    //   background-color: red;
    //   width: 5px;
    // }
    // &::-webkit-scrollbar-thumb {
    //   background-color: blue;
    // }
  }
</style>
