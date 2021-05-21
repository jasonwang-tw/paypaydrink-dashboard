<template>
  <div id="cart">
    <topmenu />
    <div class="px-5 mx-auto mt-10 mb-20 md:my-20 customContainer text-main-500">
      <div class="flex items-center mb-20">
        <div class="max-w-2xl w-full mx-auto flex-shrink-0">
          <div class="checkOutProgress h-1 bg-lightblue-bg rounded overflow-hidden mx-auto">
            <div class="bg-main-500 h-full" :style="{ width: widthBar }"></div>
          </div>
          <div class="flex justify-between text-lightblue-500">
            <div
              class="stepPoint text-center"
              :class="{ mainColor: mainStep_1, defaultColor: mainStep_1 }"
            >
              <i class="pay-car block text-3xl text"></i>確認購物車
            </div>
            <div
              class="stepPoint text-center"
              :class="{ mainColor: mainStep_2, defaultColor: mainStep_2 }"
            >
              <i class="pay-credit_card block text-3xl"></i>選擇付款方式
            </div>
            <div
              class="stepPoint text-center"
              :class="{ mainColor: mainStep_3, defaultColor: mainStep_3 }"
            >
              <i class="pay-list1 block text-3xl"></i>訂單完成
            </div>
          </div>
        </div>
      </div>
      <router-view />
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'

  export default {
    name: 'cart',
    components: {
      topmenu,
      footerBar
    },
    data() {
      return {
        mainStep_1: true,
        mainStep_2: '',
        mainStep_3: '',
        widthBar: '0%'
      }
    },
    methods: {},
    watch: {
      $route(to, from) {
        if (to !== from) {
          if (this.$route.path === '/cart/view') {
            this.mainStep_2 = ''
            this.mainStep_3 = ''
            this.widthBar = '0%'
          } else if (this.$route.path === '/cart/checkout') {
            this.mainStep_2 = true
            this.mainStep_3 = ''
            this.widthBar = '50%'
          } else {
            this.mainStep_2 = true
            this.mainStep_3 = true
            this.widthBar = '100%'
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .checkOutProgress {
    width: calc(100% - 90px);
  }

  .stepPoint {
    position: relative;
    margin-top: 20px;
    &::before {
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -29px);
      content: '';
      width: 15px;
      height: 15px;
      display: block;
      background-color: var(--color-lightblue-bg);
    }
  }
  .mainColor:before {
    background-color: var(--color-subyellow);
  }
  .defaultColor {
    color: var(--color-main-500);
  }
</style>
