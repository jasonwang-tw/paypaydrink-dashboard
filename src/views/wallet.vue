<template>
  <div id="wallet" class="text-main-500">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <div class="flex justify-between items-center">
          <h3 class="text-main-500 mb-0">我的錢包</h3>
        </div>
        <hr />
        <div class="p-5 bg-sup3-300 rounded-xl w-full mb-5">
          <div>錢包餘額</div>
          <div class="flex items-center justify-between">
            <div class="mr-10 text-2xl font-normal text-sub-500">NT$204,751</div>
            <div class="flex">
              <div class="btn-dark-blue" @click="getCash = !getCash">提款</div>
            </div>
          </div>
        </div>
        <ul class="pl-0 list-none flex mb-5 statusList">
          <li
            class="btn-border-light-blue orderListBtn mr-4"
            v-for="(item, index) in walletStatus"
            @click=";[(current = index)], [(currentStatus = item)]"
            :class="{ walleActive: index == current }"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="list-none pl-0">
          <li
            class="bg-sup3-300 p-5 rounded-xl mb-5 flex justify-between items-center"
            v-for="(item, index) in walletFilter"
          >
            <div>{{ item.date }}<br />{{ item.time }}</div>
            <div>
              <b>{{ item.drinkName }}</b
              ><br />{{ item.orderNumber }}
            </div>
            <div>{{ item.sum }}</div>
            <div>{{ item.status }}</div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 提款 -->
    <popup :class="{ popupHidden: getCash }">
      <template v-slot:title>
        <h4>提款</h4>
      </template>
      <template v-slot:content>
        <div class="text-left mb-10">
          <div class="flex items-center mb-3">
            <span class="w-32">錢包餘額</span>
            <b class="text-sub-500 mb-0 text-2xl">NT$204,751</b>
          </div>
          <label for="" class="mb-3 block">選擇撥款銀行</label>
          <select name="" id="" class="mb-3">
            <option value="">**** 7878 中國信託商業銀行</option>
            <option value="">**** 7878 國泰世華商業銀行</option>
          </select>
          <input type="text" name="" id="" placeholder="請輸入提款金額" />
          <div class="flex pt-3">
            <span class="w-32">提款手續費</span><span class="text-sub-500 font-semibold">$15</span>
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
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import profileMenu from '@/components/profileMenu.vue'
  import popup from '@/components/popup.vue'

  export default {
    name: 'wallet',
    components: {
      topmenu,
      footerBar,
      profileMenu,
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
            drinkName: '東方不敗',
            orderNumber: 'TW20110130',
            sum: '150',
            status: '配方收入'
          },
          {
            date: '2021-1-22',
            time: '10:20',
            drinkName: '東方不敗',
            orderNumber: 'TW20110130',
            sum: '150',
            status: '提領中'
          },
          {
            date: '2021-1-25',
            time: '13:30',
            drinkName: '東方不敗',
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
  .customContainer {
    max-width: 960px;
  }
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
