<template>
  <div id="checkout">
    <router-link to="/cart/view" class="absolute no-underline mt-1.5 hover:text-blue-900"
      ><i class="pay-left"></i>上一步</router-link
    >
    <h2 class="text-2xl md:text-3xl text-center">結帳</h2>
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
      <template v-if="getDefault === 'receive'">
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
            <div class="flex items-center">
              <a
                :href="getShop.mapLink"
                target="_blank"
                class="flex-shrink-0 btn-border-light-blue-sm mr-5"
                >查看位置</a
              >
              <div
                class="text-red-500 hover:text-red-700 duration-200 cursor-pointer"
                @click="getShop = ''"
              >
                刪除
              </div>
            </div>
          </div>
        </template>
      </template>
    </div>
    <div class="p-5 mb-10 border rounded-3xl border-lightblue-placeholder">
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
      <template v-if="payOutDefault === 'card'">
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
                /><label class="round mr-3" :for="'card_' + c.id"
                  ><i class="pay-click text-xs"></i
                ></label>
                <div>
                  <span class="tracking-widest mr-3">****</span><b>{{ c.lastNumber }}</b>
                </div>
              </div>
            </div>
            <router-link to="/account/bank_creditCard" class="btn-border-light-blue-sm inline-block"
              ><i class="mr-3 pay-plus"></i>增加信用卡</router-link
            >
          </div>
        </div>
      </template>
      <template v-else-if="payOutDefault === 'payPoint'">
        <div class="flex mb-5 items-center">
          <div class="mr-10 font-semibold">以PayPayPoint支付</div>
          <div class="text-subyellow-100 flex items-center">
            <span class="mr-3 hidden md:block">目前點數</span>
            <div class="coin-icon">
              P
            </div>
            {{ payPoint }}
          </div>
        </div>
        <div class="flex">
          <div class="mr-3">
            <input
              type="text"
              name=""
              id=""
              value=""
              v-model="usePoint"
              placeholder="請輸入欲支付點數"
            />
          </div>
          <div class="flex-shrink-0 btn-light-blue" @click="usePoint = payPoint">全部使用</div>
        </div>
      </template>
    </div>
    <div class="p-5 border rounded-3xl border-lightblue-placeholder">
      <div class="items-center md:flex">
        <h3 class="text-xl md:mb-0 md:text-2xl">選擇優惠</h3>
        <div class="flex md:ml-5">
          <div
            v-for="(t, index) in saleType"
            :key="index"
            class="mr-2.5"
            @click=";(saleCodeEnter = ''), (useCoupon = '')"
          >
            <input
              type="radio"
              class="hidden"
              v-model="saleDefault"
              :value="t.id"
              name="sale"
              :id="'sale_' + t.id"
            />
            <label :for="'sale_' + t.id" class="btn-border-light-blue-sm">{{ t.type }}</label>
          </div>
        </div>
      </div>
      <template v-if="saleDefault === 'saleCode'">
        <hr />
        <div class="md:flex">
          <div class="mb-3 md:mb-0">
            <div class="mt-2">請輸入折扣碼</div>
          </div>
          <div class="flex">
            <div class="flex-grow mr-3 md:mx-3">
              <input type="text" name="" id="" value="" v-model="saleCodeEnter" />
              <div class="text-sm text-red-500 mt-2">
                <i class="pay-warn mr-3"></i> 錯誤訊息提示
              </div>
            </div>
            <div class="flex-shrink-0">
              <div class="btn-dark-blue">使用</div>
            </div>
          </div>
        </div>
      </template>
      <template v-if="saleDefault === 'ticket'">
        <hr />
        <div>
          <div class="btn-border-light-blue-sm inline-block" @click="popupSale = !popupSale">
            選擇優惠卷
          </div>
          <template v-if="useCoupon">
            <div class="mt-5 p-5 bg-lightblue-bg rounded-3xl md:w-2/5 text-left">
              <div class="font-bold text-lg">{{ useCoupon.name }}</div>
              <span class="text-lightblue-500 text-sm inline-block"
                ><span class="mr-3">使用期限</span>{{ useCoupon.data }}</span
              >
              <hr class="my-3" />
              <p class="noticeText text-blue-900 text-sm">
                {{ useCoupon.text }}
              </p>
              <div class="flex items-center justify-between mt-5 w-full">
                <router-link to="/helpCenter/page1" class="text-subyellow-500 text-sm no-underline"
                  ><i class="pay-help mr-3"></i>使用說明</router-link
                >
                <div>
                  <div class="btn-remove text-sm" @click="useCoupon = ''">取消使用</div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
    <div class="text-right">
      <countResult />
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
        <selectShop @PassData="passShop" :clickShop="getShop" />
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="btn btn-dark-blue" @click="popupShop = true">確認</div>
        </div>
      </template>
    </popup>
    <!-- 選擇優惠卷 -->
    <popup :class="{ popupHidden: popupSale }" class="w-1/2">
      <template v-slot:title>
        <h4>選擇優惠卷</h4>
      </template>
      <template v-slot:content>
        <ul class="pl-0 list-none text-main-500 grid grid-cols-1 gap-5 sm:grid-cols-1">
          <li
            class="p-5 bg-lightblue-bg rounded-3xl mb-5 text-left"
            v-for="(c, index) in ticketFilter"
          >
            <div class="font-bold text-lg">{{ c.name }}</div>
            <span class="text-lightblue-500 text-sm inline-block"
              ><span class="mr-3">使用期限</span>{{ c.data }}</span
            >
            <hr class="my-3" />
            <p class="noticeText text-blue-900 text-sm">
              {{ c.text }}
            </p>
            <div class="flex items-center justify-between mt-5 w-full">
              <router-link to="/helpCenter/page1" class="text-subyellow-500 text-sm no-underline"
                ><i class="pay-help mr-3"></i>使用說明</router-link
              >
              <div class="ticketUse">
                <input
                  type="radio"
                  name="ticket"
                  :id="c.sn"
                  :value="c"
                  v-model="useCoupon"
                  class="hidden"
                />
                <label :for="c.sn" class="btn-dark-blue text-sm"
                  ><i class="pay-click text-xs mr-3"></i>使用優惠</label
                >
              </div>
            </div>
          </li>
        </ul>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="btn btn-dark-blue" @click="popupSale = true">確認</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import countResult from '@/components/countResult.vue'
  import selectShop from '@/components/selectShop.vue'
  import popup from '@/components/popup.vue'
  import coupon from '../../../static/resource/coupon'

  export default {
    name: 'checkout',
    components: {
      countResult,
      selectShop,
      popup
    },
    data() {
      return {
        saleCodeEnter: '',
        coupon,
        useCoupon: '',
        getShop: '',
        popupShop: true,
        payPoint: 289,
        usePoint: '',
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
        complateLink: '',
        popupSale: true,
        saleType: [
          {
            type: '無',
            id: 'noCode'
          },
          {
            type: '折扣碼',
            id: 'saleCode'
          },
          {
            type: '優惠卷',
            id: 'ticket'
          }
        ],
        saleDefault: 'noCode'
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
    computed: {
      ticketFilter() {
        return this.coupon.filter(cf => cf.type === 'Check' && !cf.use)
      }
    },
    watch: {
      getDefault: {
        handler: 'orderTo',
        immediate: true
      }
    },
    created() {},
    mounted() {}
  }
</script>

<style lang="scss">
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
  .checkOutinBar {
    width: 50%;
  }
  .ticketUse label i {
    display: none;
  }
  .ticketUse input:checked + label {
    background-color: var(--color-blue-100);
    i {
      display: inline-block;
    }
  }
  .popupHidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
