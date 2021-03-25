<template>
  <div id="portal" class="text-main-500">
    <div class="customContainer mx-auto my-20">
      <div class="flex items-center justify-between">
        <h2>飲料鋪</h2>
        <div class="flex">
          <div class="btn-border-light-blue mr-3">讀取自配方</div>
          <div class="btn-border-light-blue mr-3">編輯飲料鋪</div>
          <router-link to="/free_drink/edit" class="btn-border-light-blue">新增配方</router-link>
        </div>
      </div>
      <hr />
      <div class="flex">
        <div class="userImg rounded-full overflow-hidden mr-10">
          <img src="../../assets/how.jpg" alt="" />
        </div>
        <div class="flex flex-grow items-center justify-between">
          <div>
            <h5 class="mb-0">HowHow</h5>
            <ul class="masterInfo flex pl-0 list-none p-3">
              <li>
                <span><i class="pay-start"></i></span>4.5
              </li>
              <li><span>關注</span>3,547</li>
              <li><span>配方</span>47</li>
              <li><span>售出飲品</span>4,998杯</li>
            </ul>
          </div>
          <div class="flex">
            <router-link to="/wallet" class="btn-dark-blue">我的錢包</router-link>
          </div>
        </div>
      </div>
      <hr />
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
