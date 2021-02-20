<template>
  <div id="portal">
    <div class="customContainer mx-auto my-20 text-main-500">
      <div class="flex items-center justify-between mb-5">
        <router-link to="/free_drink/portal">返回</router-link>
        <h2 class="mb-0">新增配方</h2>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'portal',
    components: {},
    // props: {
    //   select: selected
    // },
    data() {
      return {
        selected: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .customContainer {
    max-width: 960px;
  }
  .userImg {
    width: 120px;
    height: 120px;
  }
  .masterInfo {
    li {
      margin-right: 1rem;
    }
  }
  .drinkImg {
    width: 100px;
    height: 100px;
  }
  .drinkInfo {
    flex-basis: 60%;
  }
</style>
