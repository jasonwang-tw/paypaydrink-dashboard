<template>
  <div id="favorites" class="text-main-500">
    <h3 class="">收藏清單</h3>
    <hr />
    <ul class="list-none pl-0" v-for="(i, index) in 3">
      <li class="border-b mb-5 border-sup3-400">
        <div class="flex items-center mb-5 justify-between">
          <div class="flex items-center">
            <div class="userimg rounded-full overflow-hidden mr-3">
              <img src="../../../src/assets/images/how.jpg" alt="" />
            </div>
            <div class="drinkinfo">
              <div class="userName text-xl font-normal mb-2 ">howhow</div>
              <router-link
                to="/drinkShop"
                class="allDrink no-underline btn-border-light-blue-sm text-sm inline-block"
                >查看全部配方</router-link
              >
            </div>
          </div>
          <div class="text-sup3-500 text-lg cursor-pointer" @click="listToggleBtn">
            <i class="pay-toggle p-5"></i>
          </div>
        </div>
        <ul class="drinkList list-none pl-0 duration-200 listClose h-full">
          <li class="bg-sup3-300 p-5 mt-3 rounded-3xl overflow-hidden" v-for="(i, index) in 5">
            <div class="flex items-center justify-between">
              <div class="flex items-center mr-3">
                <div class="userimg rounded-3xl overflow-hidden mr-3 flex-shrink-0">
                  <img src="../../../src/assets/images/product.jpg" alt="" />
                </div>
                <div class="drinkinfo">
                  <div class="userName font-normal mb-2">東方不敗</div>
                  <div class="text-sm flex">
                    <span class="flex-shrink-0">內含配料</span
                    ><span class="ml-3">粉圓、布丁、紅豆粉圓</span>
                  </div>
                </div>
              </div>
              <div class="btnGroup flex flex-shrink-0">
                <div class="buyAgain mr-5">
                  <router-link
                    to="/products/page"
                    class="text-sup1-100 no-underline duration-200 hover:text-sup1-500"
                  >
                    再次訂購
                  </router-link>
                </div>
                <div
                  class="delfavorit text-red-500 cursor-pointer duration-200 hover:text-red-700"
                  @click="removeBtn"
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
    <popupRemove :class="{ popup: popupRemove }" title="刪除收藏" :remove="removeBtn" />
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'
  import popupRemove from '@/components/popupRemove.vue'

  export default {
    name: 'favorites',
    components: {
      pageNav,
      popupRemove
    },
    methods: {
      listToggleBtn: function(e) {
        let i = e.target.parentNode.parentNode.nextSibling
        i.classList.toggle('listClose')
      },
      removeBtn: function() {
        this.popupRemove = !this.popupRemove
      }
    },
    data() {
      return {
        drinkToggle: true,
        popupRemove: true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userimg {
    width: 60px;
    height: 60px;
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
  }
</style>
