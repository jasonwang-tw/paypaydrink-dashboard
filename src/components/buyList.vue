<template>
  <div id="buyList" class="p-5 border rounded-3xl border-lightblue-placeholder">
    <div class="items-center justify-between md:flex">
      <div class="flex items-center">
        <div class="mr-5 overflow-hidden rounded-full userImg">
          <img src="../assets/images/how.jpg" alt="" />
        </div>
        <div>
          <h5 class="mb-2">滴妹好棒棒</h5>
          <router-link to="/drinkShop" class="block text-sm btn-border-light-blue-sm"
            >查看全部配方</router-link
          >
        </div>
      </div>
      <div>飲品優惠，低消100折$30</div>
    </div>
    <hr />
    <!-- <div class="flex justify-between">
          <div>飲品</div>
          <div class="flex">
            <div>數量</div>
            <div>單價</div>
          </div>
        </div> -->
    <div class="grid items-center grid-cols-12">
      <div class="flex col-span-12 mb-5 md:col-span-8 md:mb-0">
        <div class="flex-shrink-0 mr-3 overflow-hidden drinkImg rounded-3xl">
          <img src="../assets/images/product.jpg" alt="" />
        </div>
        <div>
          <h5 class="mb-2">東方不敗</h5>
          <div class="text-sm md:flex">
            <span class="flex-shrink-0 block drinkBefore text-lightblue-500">內含配料 </span
            >粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆
          </div>
          <div class="mt-3 text-sm md:mt-0">
            <span class="drinkBefore text-lightblue-500">規格 </span>冷飲、中杯、三分糖、微冰
          </div>
        </div>
      </div>
      <div class="col-span-5 md:px-5 md:col-span-2 qty">
        <select name="" id="" v-model="selected">
          <option :value="s" v-for="(s, index) in 99">{{ s }}</option>
        </select>
      </div>
      <div class="col-span-5 font-normal text-center md:col-span-1 price text-subyellow-500">
        $60
      </div>
      <div
        class="col-span-2 text-center text-red-500 duration-200 cursor-pointer md:col-span-1 hover:text-red-700"
      >
        刪除
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      selected: Number
    }
  }
</script>

<style lang="scss" scoped>
  .userImg {
    width: 80px;
    height: 80px;
  }
  .drinkImg {
    width: 80px;
    height: 80px;
  }
  .drinkBefore {
    width: 80px;
    display: inline-block;
  }
  @media (max-width: 768px) {
    .drinkBefore {
      width: 100%;
    }
  }
</style>
