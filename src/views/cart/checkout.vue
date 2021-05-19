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
        <div class="btn-border-light-blue-sm">選擇店鋪</div>
      </div>
      <div
        class="items-center justify-between pt-3 mt-5 border-t md:border-none border-lightblue-high md:p-5 md:flex md:bg-lightblue-bg md:rounded-3xl"
      >
        <div class="mb-5 md:mb-0">
          <div class="mb-2 text-lg font-normal">配配飲一號店</div>
          <ul class="grid grid-cols-12 pl-0 list-none shopPosition">
            <li class="col-span-12 md:col-span-6">
              <i class=" pay-pin text-subyellow-500"></i>
              台北市大安區仁愛路四段345巷6弄78號
            </li>
            <li class="col-span-6 md:col-span-3">
              <i class="pay-tel text-subyellow-500"></i>02-2456-7891
            </li>
            <li class="col-span-6 md:col-span-3">
              <i class=" pay-clock text-subyellow-500"></i>24H 全年無休
            </li>
          </ul>
        </div>
        <a href="/" target="_blank" class="flex-shrink-0 btn-border-light-blue-sm">查看位置</a>
      </div>
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
      <div class="inline-block w-40 text-center btn-dark-blue">付款</div>
    </div>
  </div>
</template>

<script>
  import countResult from '@/components/countResult.vue'

  export default {
    name: 'checkout',
    components: {
      countResult
    },
    data() {
      return {
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
        cardDefault: 4897
      }
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
</style>
