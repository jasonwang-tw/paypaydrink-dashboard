<template>
  <div id="buyList" class="border rounded-3xl p-5 border-lightblue-placeholder">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="userImg rounded-full overflow-hidden mr-5">
          <img src="../assets/images/how.jpg" alt="" />
        </div>
        <div>
          <h5 class="mb-2">滴妹好棒棒</h5>
          <router-link to="/drinkShop" class="btn-border-light-blue-sm block"
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
    <div class="flex items-center justify-between">
      <div class="flex">
        <div class="drinkImg rounded-3xl overflow-hidden mr-3 flex-shrink-0">
          <img src="../assets/images/product.jpg" alt="" />
        </div>
        <div>
          <h5 class="mb-2">東方不敗</h5>
          <div class="flex">
            <span class="drinkBefore text-lightblue-500 flex-shrink-0">內含配料 </span
            >粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆
          </div>
          <div>
            <span class="drinkBefore text-lightblue-500">規格 </span>冷飲、中杯、三分糖、微冰
          </div>
        </div>
      </div>
      <div class="flex items-center ml-5">
        <div class="qty">
          <select name="" id="" v-model="selected">
            <option :value="s" v-for="(s, index) in 99">{{ s }}</option>
          </select>
        </div>
        <div class="price text-subyellow-500 font-normal">$60</div>
        <div class="text-red-500 hover:text-red-700 cursor-pointer duration-200 flex-shrink-0">
          刪除
        </div>
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
    width: 60px;
    height: 60px;
  }
  .drinkImg {
    width: 80px;
    height: 80px;
  }
  .drinkBefore {
    width: 80px;
    display: inline-block;
  }
  .qty {
    width: 100px;
  }
  .price {
    text-align: center;
    width: 150px;
  }
</style>
