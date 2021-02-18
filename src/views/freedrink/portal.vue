<template>
  <div id="portal">
    <div class="customContainer mx-auto my-20 text-main-500">
      <h2>自由配</h2>
      新增配方
      <div class="userImg rounded-full overflow-hidden mr-5">
        <img src="../../assets/how.jpg" alt="" />
      </div>
      滴妹好棒棒 4.5 關注 3,547 配方 47 售出飲品 4,998杯 配方進帳餘額 NT$204,751 提款
      <hr />
      我的配方 已售出 販售金額 操作
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <div class="drinkImg rounded-lg overflow-hidden mr-3 flex-shrink-0">
            <img src="../../assets/product.jpg" alt="" />
          </div>
          <div>
            <h5 class="mb-2">東方不敗</h5>
            <div><span class="drinkBefore text-sup3-500">內含配料 </span>粉圓、布丁、紅豆</div>
            <div><span class="drinkBefore text-sup3-500">規格 </span>冷飲、中杯、三分糖、微冰</div>
          </div>
        </div>
        <div class="flex items-center">
          <div>2</div>
          <div class="price text-sub-500 font-normal">$60</div>
          <div class="text-red-500 hover:text-red-700 cursor-pointer duration-200">編輯</div>
          <div class="text-red-500 hover:text-red-700 cursor-pointer duration-200">上架</div>
        </div>
      </div>
      <pageNav />
    </div>
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'

  export default {
    name: 'portal',
    components: {
      pageNav
    },
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
</style>
