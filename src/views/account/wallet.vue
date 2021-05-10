<template>
  <div id="wallet" class="text-main-500">
    <div class="flex items-center justify-between">
      <h3 class="mb-0 text-main-500">我的錢包</h3>
    </div>
    <hr />
    <div class="w-full p-5 mb-5 bg-lightblue-bg rounded-3xl">
      <div>錢包餘額</div>
      <div class="flex items-center justify-between">
        <div class="mr-10 text-2xl font-normal text-subyellow-500">NT$204,751</div>
        <div class="flex">
          <div class="btn-dark-blue" @click="getCash = !getCash">提款</div>
        </div>
      </div>
    </div>
    <ul class="flex pl-0 mb-5 overflow-x-scroll list-none md:overflow-auto statusList">
      <li
        class="flex-shrink-0 mr-4 btn-border-light-blue orderListBtn"
        v-for="(item, index) in walletStatus"
        @click=";[(current = index)], [(currentStatus = item)]"
        :class="{ walleActive: index == current }"
      >
        {{ item }}
      </li>
    </ul>
    <ul class="pl-0 list-none">
      <li
        class="grid items-center grid-cols-2 p-5 mb-5 md:grid-cols-12 bg-lightblue-bg rounded-3xl"
        v-for="(item, index) in walletFilter"
      >
        <div
          class="flex justify-between col-span-2 pb-3 mb-3 border-b md:justify-center md:mb-0 md:pb-0 md:border-none border-lightblue-high md:col-span-6 text-lightblue-500"
        >
          <div class="mr-5">{{ item.date }} {{ item.time }}</div>
          <div>
            <div v-if="item.status === '配方收入'">
              <div class="inline-block text-sm text-white bg-subyellow-500 btn-sm">
                {{ item.status }}
              </div>
            </div>
            <div v-if="item.status === '提領中'">
              <div class="inline-block text-sm text-white bg-blue-500 btn-sm">
                {{ item.status }}
              </div>
            </div>
            <div v-if="item.status === '已提款'">
              <div class="inline-block text-sm text-white bg-blue-900 btn-sm">
                {{ item.status }}
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-1 mb-3 md:col-span-4">
          <span class="text-sm text-lightblue-500">{{ item.orderType }}</span
          ><br />
          <span class="">{{ item.orderNumber }}</span>
        </div>
        <div class="col-span-1 text-lg text-right md:col-span-2 md:text-center text-subyellow-500">
          $ {{ item.sum }}
        </div>
      </li>
    </ul>
    <!-- 提款 -->
    <popup :class="{ popupHidden: getCash }">
      <template v-slot:title>
        <h4>提款</h4>
      </template>
      <template v-slot:content>
        <div class="mb-10 text-left">
          <div class="flex items-center mb-3">
            <span class="w-32">錢包餘額</span>
            <span class="mb-0 text-2xl text-subyellow-500">NT$204,751</span>
          </div>
          <label for="" class="block mb-3">選擇撥款銀行</label>
          <select name="" id="" class="mb-3">
            <option value="">**** 7878 中國信託商業銀行</option>
            <option value="">**** 7878 國泰世華商業銀行</option>
          </select>
          <input type="text" name="" id="" placeholder="請輸入提款金額" />
          <div class="flex pt-3">
            <span class="w-32">提款手續費</span><span class="text-subyellow-500">$15</span>
          </div>
        </div>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="getCash = !getCash">取消</div>
          <div class="btn btn-dark-blue">確認提款</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import popup from '@/components/popup.vue'

  export default {
    name: 'wallet',
    components: {
      popup
    },
    data() {
      return {
        walletStatus: ['全部', '配方收入', '提領中', '已提款'],
        currentStatus: '',
        current: 0,
        getCash: true,
        wallet: [
          {
            date: '2021-1-30',
            time: '00:20',
            orderType: '銷售編號',
            orderNumber: 'TW20110130',
            sum: '150',
            status: '配方收入'
          },
          {
            date: '2021-1-22',
            time: '10:20',
            orderType: '提款編號',
            orderNumber: 'TW20110130',
            sum: '150',
            status: '提領中'
          },
          {
            date: '2021-1-25',
            time: '13:30',
            orderType: '提款編號',
            orderNumber: 'TW20110130',
            sum: '200',
            status: '已提款'
          }
        ]
      }
    },
    methods: {},
    watch: {
      currentStatus() {
        if (this.currentStatus === '全部') {
          this.currentStatus = ''
        }
      }
    },
    computed: {
      walletFilter() {
        return this.wallet.filter(res => res.status.match(this.currentStatus))
      }
    },
    mounted() {}
  }
</script>

<style lang="scss" scoped>
  .userimg {
    width: 60px;
    height: 60px;
  }
  .popup {
    opacity: 0;
    visibility: hidden;
  }
  .walleActive {
    background-color: var(--color-main-500);
    border-color: var(--color-main-500);
    color: white;
  }
  .popupHidden {
    opacity: 0;
    visibility: hidden;
  }
</style>
