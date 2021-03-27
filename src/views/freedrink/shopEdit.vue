<template>
  <div id="shopEdit" class="text-main-500">
    <div class="customContainer mx-auto my-20">
      <div class="mb-5 relative">
        <router-link
          to="/free_drink/portal"
          class="absolute no-underline flex items-center hover:text-sup1-500 duration-200"
        >
          <i class="pay-left text-2xl"></i>
          返回
        </router-link>
        <h2 class="mb-0 mx-auto text-center">編輯飲料鋪</h2>
      </div>
      <div class="text-center text-sup1-900">
        配配飲將依據所添加的茶底&配料酌收食材費，將會在購買飲品付款時收取。
      </div>
    </div>
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'shopEdit',
    components: {
      pageNav,
      popup
    },
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
      margin-right: 1.5rem;
      padding-right: 1.5rem;
      span {
        color: var(--color-sub);
        margin-right: 0.5rem;
      }
    }
  }
  .drinkImg {
    width: 100px;
    height: 100px;
  }
  .drinkInfo {
    flex-basis: 55%;
  }
  .drinkOrder {
    text-align: center;
    flex-basis: 15%;
  }
  .drinkBefore {
    width: 80px;
  }
  .popupHidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
