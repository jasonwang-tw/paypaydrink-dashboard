<template>
  <div id="portal" class="text-main-500">
    <div class="customContainer mx-auto my-20">
      <div class="flex items-center justify-between">
        <h2>飲品自由配</h2>
        <router-link to="/free_drink/edit" class="btn-border-light-blue">新增配方</router-link>
      </div>
      <hr />
      <div class="flex pb-10">
        <div class="userImg rounded-full overflow-hidden mr-10">
          <img src="../../assets/how.jpg" alt="" />
        </div>
        <div class="flex-grow">
          <h5 class="mb-0">HowHow</h5>
          <ul class="masterInfo flex pl-0 list-none py-5">
            <li>
              <span><i class="pay-start"></i></span>4.5
            </li>
            <li><span>關注</span>3,547</li>
            <li><span>配方</span>47</li>
            <li><span>售出飲品</span>4,998杯</li>
          </ul>
          <div class="p-5 bg-sup3-300 rounded-xl w-full">
            <h4 class="font-normal">配方進帳</h4>
            <div>錢包餘額</div>
            <div class="flex items-center justify-between">
              <div class="mr-10 text-2xl font-normal text-sub-500">NT$204,751</div>
              <div class="flex">
                <div class="btn-dark-blue mr-2.5" @click="getCash = !getCash">提款</div>
                <div class="btn-border-light-blue">交易紀錄</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-between p-5">
        <h3 class="drinkInfo mb-0">我的配方</h3>
        <div class="drinkOrder">已售出</div>
        <div class="drinkOrder">販售金額</div>
        <div class="drinkOrder">操作</div>
      </div>
      <div
        class="flex items-center justify-between p-5 rounded-xl border border-sup3-400 mb-5"
        v-for="(i, index) in 5"
      >
        <div class="drinkInfo flex items-center">
          <div class="drinkImg rounded-lg overflow-hidden mr-5 flex-shrink-0">
            <img src="../../assets/product.jpg" alt="" />
          </div>
          <div>
            <h5 class="mb-2">東方不敗</h5>
            <div class="flex">
              <span class="drinkBefore text-sup3-500 flex-shrink-0">內含配料</span>
              <span>粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆粉圓、布丁、紅豆</span>
            </div>
            <div class="flex">
              <span class="drinkBefore text-sup3-500">規格</span>
              <span>冷飲、中杯、三分糖、微冰</span>
            </div>
          </div>
        </div>
        <div class="drinkOrder font-normal">2</div>
        <div class="price text-sub-500 font-normal drinkOrder">$60</div>
        <div class="flex items-center drinkOrder justify-center">
          <div class="text-sup1-100 hover:text-sup1-900 cursor-pointer duration-200 mr-3">上架</div>
          <router-link to="/free_drink/edit" class="cursor-pointer duration-200 mr-3"
            >編輯</router-link
          >
          <div class="text-red-500 hover:text-red-700 cursor-pointer duration-200">刪除</div>
        </div>
      </div>
      <pageNav class="pt-5" />
    </div>
    <!-- 提款 -->
    <popup :class="{ popupHidden: getCash }">
      <template v-slot:title>
        <h4>提款</h4>
      </template>
      <template v-slot:content>
        <div class="text-left mb-10">
          <div class="flex items-center mb-3">
            <span class="w-28">錢包餘額</span>
            <h3 class="text-sub-500 mb-0">NT$204,751</h3>
          </div>
          <label for="" class="mb-3 block">選擇撥款銀行</label>
          <select name="" id="" class="mb-3">
            <option value="">**** 7878 中國信託商業銀行</option>
            <option value="">**** 7878 國泰世華商業銀行</option>
          </select>
          <input type="text" name="" id="" placeholder="請輸入提款金額" />
          <div class="flex pt-3">
            <span class="w-28">提款手續費</span><span class="text-sub-500 font-semibold">$15</span>
          </div>
        </div>
      </template>
      <template v-slot:btn>
        <div class="functionBtn flex justify-center">
          <div class="btn btn-remove mr-3" @click="getCash = !getCash">取消</div>
          <div class="btn btn-dark-blue">確認提款</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'portal',
    components: {
      pageNav,
      popup
    },
    data() {
      return {
        selected: '',
        getCash: true
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
        color: var(--color-sup1-100);
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
