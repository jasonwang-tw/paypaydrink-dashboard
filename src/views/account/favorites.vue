<template>
  <div id="favorites" class="text-main-500">
    <h3 class="">收藏清單</h3>
    <hr />
    <ul class="pl-0 list-none" v-for="(i, index) in 3">
      <li class="mb-5 border-b border-lightblue-placeholder">
        <div class="flex items-center justify-between mb-5">
          <div class="flex items-center">
            <div class="mr-3 overflow-hidden rounded-full userimg">
              <img src="../../../src/assets/images/how.jpg" alt="" />
            </div>
            <div class="drinkinfo">
              <div class="mb-2 text-lg font-normal md:text-xl userName">howhow</div>
              <router-link
                to="/drinkShop"
                class="inline-block text-sm no-underline allDrink btn-border-light-blue-sm"
                >查看全部配方</router-link
              >
            </div>
          </div>
          <div class="text-lg cursor-pointer text-lightblue-500" @click="listToggleBtn">
            <i class="p-5 pay-toggle"></i>
          </div>
        </div>
        <ul class="h-full pl-0 list-none duration-200 drinkList listClose">
          <li class="p-5 mt-3 overflow-hidden bg-lightblue-bg rounded-3xl" v-for="(i, index) in 5">
            <div class="items-center justify-between md:flex">
              <div class="flex mr-3">
                <div class="flex-shrink-0 mr-3 overflow-hidden userimg rounded-2xl">
                  <img src="../../../src/assets/images/product.jpg" alt="" />
                </div>
                <div class="drinkinfo">
                  <h5 class="mb-2 userName">東方不敗</h5>
                  <div class="flex text-sm">
                    <span class="flex-shrink-0 text-lightblue-500">內含配料</span
                    ><span class="ml-3">粉圓、布丁、紅豆粉圓</span>
                  </div>
                </div>
              </div>
              <div class="flex justify-center flex-shrink-0 mt-5 btnGroup">
                <div class="mr-5 buyAgain">
                  <router-link
                    to="/products/page"
                    class="text-blue-100 no-underline duration-200 hover:text-blue-500"
                  >
                    再次訂購
                  </router-link>
                </div>
                <div
                  class="text-red-500 duration-200 cursor-pointer delfavorit hover:text-red-700"
                  @click="del = !del"
                >
                  取消收藏
                </div>
              </div>
            </div>
          </li>
        </ul>
      </li>
    </ul>
    <pageNav />

    <popup :class="{ popup: del }">
      <template v-slot:title>
        <h4>刪除收藏</h4>
      </template>
      <template v-slot:content>
        <p class="mb-10">此操作無法撤消，確定要執行嗎?</p>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="del = !del">取消</div>
          <div class="btn btn-dark-blue">確認</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'favorites',
    components: {
      pageNav,
      popup
    },
    methods: {
      listToggleBtn: function(e) {
        let i = e.target.parentNode.parentNode.nextSibling
        i.classList.toggle('listClose')
      },
    },
    data() {
      return {
        drinkToggle: true,
        del: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userimg {
    width: 80px;
    height: 80px;
  }
  .drinkList {
    li:last-child {
      margin-bottom: 1rem;
    }
  }
  // status change
  .popup {
    opacity: 0;
    visibility: hidden;
  }
  .listClose {
    visibility: hidden;
    transform: translateY(-5%);
    opacity: 0;
    height: 0px;
    overflow: hidden;
  }
</style>
