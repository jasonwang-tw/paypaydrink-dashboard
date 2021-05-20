<template>
  <div id="checkout">
    <h2 class="text-2xl md:text-3xl">結帳</h2>
    <div class="p-5 my-10 border rounded-3xl border-lightblue-placeholder">
      <div class="items-center md:flex">
        <h3 class="text-xl md:mb-0 md:text-2xl">領取方式</h3>
        <div class="flex md:ml-5">
          <div class="mr-2.5" v-for="(g, index) in getType" :key="index">
            <input
              type="radio"
              class="hidden"
              name="method"
              v-model="getDefault"
              :value="g.id"
              :id="'type_' + g.id"
            />
            <label :for="'type_' + g.id" class="btn-border-light-blue-sm">{{ g.type }}</label>
          </div>
        </div>
      </div>
      <hr />
      <div class="flex items-center">
        <div class="mr-5 text-lg font-semibold">選擇領取店鋪</div>
        <div class="btn-border-light-blue-sm" @click="popupShop = false">選擇店鋪</div>
      </div>
      <template v-if="getShop === ''">
        <h4 class="my-5 text-lightblue-500">請選擇領取店鋪</h4>
      </template>
      <template v-else>
        <div
          class="items-center justify-between pt-3 mt-5 border-t md:border-none border-lightblue-high md:p-5 md:flex md:bg-lightblue-bg md:rounded-3xl"
        >
          <div class="mb-5 md:mb-0 flex-grow">
            <div class="mb-2 text-lg font-normal">{{ getShop.name }}</div>
            <ul class="grid grid-cols-12 pl-0 list-none shopPosition">
              <li class="col-span-12 md:col-span-12">
                <i class=" pay-pin text-subyellow-500"></i>
                {{ getShop.postition }}
              </li>
              <li class="col-span-6 md:col-span-3">
                <i class="pay-tel text-subyellow-500"></i>{{ getShop.tel }}
              </li>
              <li class="col-span-6 md:col-span-3">
                <i class=" pay-clock text-subyellow-500"></i>{{ getShop.openTime }}
              </li>
            </ul>
          </div>
          <a :href="getShop.mapLink" target="_blank" class="flex-shrink-0 btn-border-light-blue-sm"
            >查看位置</a
          >
        </div>
      </template>
    </div>
    <div class="p-5 border rounded-3xl border-lightblue-placeholder">
      <div class="items-center md:flex">
        <h3 class="text-xl md:mb-0 md:text-2xl">付款方式</h3>
        <div class="flex md:ml-5">
          <div v-for="(t, index) in payOutType" :key="index" class="mr-2.5">
            <input
              type="radio"
              class="hidden"
              v-model="payOutDefault"
              :value="t.id"
              name="pay"
              :id="'type_' + t.id"
            />
            <label :for="'type_' + t.id" class="btn-border-light-blue-sm">{{ t.type }}</label>
          </div>
        </div>
      </div>
      <hr />
      <div class="flex">
        <div class="mr-5 text-lg font-semibold">選擇信用卡</div>
        <div>
          <div class="mb-5">
            <div class="flex items-center mb-3" v-for="(c, index) in cardNumber" :key="index">
              <input
                type="radio"
                name="card"
                :id="'card_' + c.id"
                :value="c.id"
                v-model="cardDefault"
                class="round hidden"
              /><label class="round mr-3" :for="'card_' + c.id"><i class="pay-click"></i></label>
              <div>
                <span class="tracking-widest mr-3">****</span><b>{{ c.lastNumber }}</b>
              </div>
            </div>
          </div>
          <div class="btn-border-light-blue-sm inline-block">增加信用卡</div>
        </div>
      </div>
    </div>
    <div class="justify-between md:flex">
      <div>
        <div class="items-center my-10 md:flex">
          <div class="mb-3 md:mb-0">請輸入折扣碼</div>
          <div class="flex">
            <div class="flex-grow mr-5 md:mx-5">
              <input type="text" name="" id="" value="PAYPATDRINK" />
            </div>
            <div class="btn-dark-blue">使用</div>
          </div>
        </div>
      </div>
      <div class="text-right">
        <countResult />
      </div>
    </div>
    <div class="text-right">
      <router-link :to="complateLink" class="inline-block w-40 text-center btn-dark-blue"
        >付款</router-link
      >
    </div>
    <!-- 選擇領取店鋪 -->
    <popup :class="{ popupHidden: popupShop }">
      <template v-slot:title>
        <h4>選擇領取店鋪</h4>
      </template>
      <template v-slot:content>
        <!-- 店鋪元件 -->
        <selectShop @PassData="passShop" />
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="btn btn-dark-blue" @click="popupShop = true">確認</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import countResult from '@/components/countResult.vue'
  import selectShop from '@/components/selectShop.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'checkout',
    components: {
      countResult,
      selectShop,
      popup
    },
    data() {
      return {
        getShop: '',
        popupShop: true,
        getType: [
          {
            type: '直接領取',
            id: 'receive'
          },
          {
            type: '寄杯',
            id: 'sendCup'
          },
          {
            type: '送禮',
            id: 'gifts'
          }
        ],
        getDefault: 'receive',
        payOutType: [
          {
            type: '信用卡',
            id: 'card'
          },
          {
            type: 'PayPayPoint',
            id: 'payPoint'
          }
        ],
        payOutDefault: 'card',
        cardNumber: [
          {
            id: 4897,
            lastNumber: 4897
          },
          {
            id: 4898,
            lastNumber: 4898
          }
        ],
        cardDefault: 4897,
        complateLink: ''
      }
    },
    methods: {
      passShop(e) {
        this.getShop = e
      },
      orderTo() {
        if (this.getDefault === 'receive') {
          this.complateLink = '/cart/complate/'
        } else if (this.getDefault === 'sendCup') {
          this.complateLink = '/cart/complateStock/'
        } else if (this.getDefault === 'gifts') {
          this.complateLink = '/cart/complaterGifts/'
        }
      }
    },
    watch: {
      getDefault: 'orderTo'
    },
    mounted() {
      this.orderTo()
    }
  }
</script>

<style lang="scss" scoped>
  .shopPosition {
    i {
      margin-right: 0.5rem;
    }
    li {
      margin-right: 1rem;
    }
  }
  input[type='radio']:checked + label {
    color: white;
    border-color: var(--color-main-500);
    background-color: var(--color-main-500);
  }
  .popupHidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
