<template>
  <div
    id="popup"
    class="fixed top-0 left-0 z-20 flex items-center justify-center w-full h-full duration-200 bg-gray-900 bg-opacity-50"
  >
    <div class="p-5 mx-5 text-center bg-white shadow-xl md:mx-0 popupContent rounded-3xl">
      <slot name="title"></slot>
      <slot name="content"></slot>
      <slot name="btn"></slot>
      <!-- <h4 class="text-main-500">{{ title }}</h4>
      <p>{{ content }}</p>
      <router-link :to="nextPage" class="inline-block mt-5 btn-dark-blue">確認</router-link> -->
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
