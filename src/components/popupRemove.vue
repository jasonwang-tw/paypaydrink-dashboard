<template>
  <div
    id="popupRemove"
    class=" fixed top-0 left-0 bg-opacity-50 bg-gray-900 h-full w-full z-20 flex items-center justify-center duration-200"
  >
    <div class="bg-white rounded-3xl text-center p-5 shadow-xl popupContent">
      <h3>{{ title }}?</h3>
      <div class="mb-5">此操作無法撤消，確定要執行嗎?</div>
      <div class="functionBtn flex justify-center">
        <div class="btn btn-remove mr-3" @click="remove">取消</div>
        <div class="btn btn-dark-blue">確認</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      remove: Function
    },
    methods: {},
    data() {
      return {}
    }
  }
</script>

<style lang="scss" scoped>
  .popupContent {
    width: 500px;
  }
</style>
