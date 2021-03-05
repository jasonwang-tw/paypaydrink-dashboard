<template>
  <div id="order">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <h3 class="text-main-500">訂單</h3>
        <hr />
        <ul class="pl-0 list-none flex mb-5 statusList">
          <li
            class="btn-border-light-blue orderListBtn order-active"
            v-for="(item, index) in orderStatus"
            @click="current = index"
            :class="{ orderActive: index == current }"
          >
            {{ item }}
          </li>
        </ul>
        <ul class="order-status list-none pl-0">
          <li
            class="border p-5 rounded-lg border-sup3-400 mb-5"
            v-for="(item, index) in orderStort"
            :key="index"
          >
            <div class="flex justify-between items-center">
              <div class="flex items-center text-main-500">
                <div class="flex items-center">
                  <i class="pay-list text-sup3-500 mr-2 text-xl"></i><strong>訂單</strong
                  ><span class="ml-2 text-sup1-900">{{ item.orderNumber }}</span>
                </div>
                <div v-for="(item_status, index) in item.status" :key="index">
                  <div v-if="item_status.name == '直接領取'" class="flex items-center">
                    <div class="text-sm btn-dark-blue-sm-nohover mx-5">
                      {{ item_status.name }}
                    </div>
                    <div class="cursor-pointer">
                      <i class="pay-qr mr-2"></i><strong>領取碼</strong>
                    </div>
                  </div>
                  <div v-else-if="item_status.name == '寄杯兌換'" class="flex items-center">
                    <div class="text-sm btn-dark-blue-sm-nohover mx-5">
                      {{ item_status.name }}
                    </div>
                    <div class="cursor-pointer">
                      <i class="pay-qr mr-2"></i><strong>領取碼</strong>
                    </div>
                  </div>
                  <div v-else-if="item_status.name == '寄杯'">
                    <div class="text-sm bg-green-500 btn-sm mx-5 text-white">寄杯</div>
                  </div>
                  <div v-else-if="item_status.name == '送禮'" class="flex items-center">
                    <div class="text-sm bg-sub-500 text-white btn-sm mx-5">送禮</div>
                    <div class="cursor-pointer text-sub-500">
                      <i class="pay-share mr-2"></i><strong>分享好友</strong>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="item.orderStep == '0'">
                <div class="text-red-500 cursor-pointer duration-200 hover:text-red-700">
                  取消訂單
                </div>
              </div>
            </div>
            <hr />
            <div v-for="(item_status, index) in item.status" :key="index">
              <div v-if="item_status.name == '直接領取' || item_status.name == '寄杯兌換'">
                <ul class="shopPostition pl-0">
                  <li
                    class="block sm:flex justify-between"
                    v-for="(item_shop, index) in item.shop"
                    :key="index"
                  >
                    <div class="shopInfo text-left text-main-500">
                      <div class="shopName text-xl font-bold">
                        {{ item_shop.name }}
                      </div>
                      <div class="block mt-2">
                        <div>
                          <i class="pay-pin mr-2 text-sub-500"></i>
                          <span class="text-sm">{{ item_shop.address }}</span>
                        </div>
                        <div class="flex">
                          <div class="mr-5">
                            <i class="pay-tel mr-2 text-sub-500"></i>
                            <span class="text-sm">{{ item_shop.tel }}</span>
                          </div>
                          <div>
                            <i class="pay-clock mr-2 text-sub-500"></i>
                            <span class="text-sm">{{ item_shop.time }}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="shopLink">
                      <a
                        :href="item_shop.map"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="text-sm btn-border-light-blue-sm inline-block mb-5 sm:mb-0"
                        >查看位置</a
                      >
                    </div>
                  </li>
                </ul>
                <hr />
              </div>
            </div>
            <div class="flex justify-between items-center text-main-500">
              <div class="flex items-center">
                <div class="text-sm btn-border-light-blue-sm">查看訂單內容</div>
                <div><span class="text-sub-500 ml-5 mr-2">訂單日期 </span>{{ item.orderTime }}</div>
              </div>
              <div class="text-right">
                <div><span class="text-sub-500 mr-2">付款方式</span>{{ item.pay }}</div>
                <div class="flex items-center justify-end text-sub-500">
                  金額
                  <big class="ml-2"
                    ><strong>${{ item.cash }}</strong></big
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
        <pageNav />
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import profileMenu from '@/components/profileMenu.vue'
  import pageNav from '@/components/pageNav.vue'

  export default {
    name: 'order',
    components: {
      topmenu,
      footerBar,
      profileMenu,
      pageNav
    },
    methods: {},
    computed: {
      orderStort: function() {
        return this.order.filter(result => result.orderStep == this.current)
      }
    },
    data() {
      return {
        current: 0,
        orderStatus: ['進行中', '已完成', '已取消'],
        order: [
          {
            orderStep: 0,
            orderNumber: 'TOREWQ20201206001',
            status: [
              {
                name: '直接領取',
                qrcode: '',
                shareLink: ''
              }
            ],
            orderTime: '2020-12-06',
            pay: '信用卡',
            cash: '297',
            shop: [
              {
                name: '配配飲 一號店',
                address: '台北市大安區仁愛路四段345巷6弄78號',
                tel: '02-2456-7891',
                time: '24H 全年無休',
                map: '/'
              }
            ]
          },
          {
            orderStep: 0,
            orderNumber: 'TOREWQ20201206001',
            status: [
              {
                name: '寄杯兌換',
                qrcode: '',
                shareLink: ''
              }
            ],
            orderTime: '2020-12-06',
            pay: '信用卡',
            cash: '0',
            shop: [
              {
                name: '配配飲 一號店',
                address: '台北市大安區仁愛路四段345巷6弄78號',
                tel: '02-2456-7891',
                time: '24H 全年無休',
                map: '/'
              }
            ]
          },
          {
            orderStep: 0,
            orderNumber: 'TOREWQ20201206001',
            status: [
              {
                name: '寄杯',
                qrcode: '',
                shareLink: ''
              }
            ],
            orderTime: '2020-12-06',
            pay: '信用卡',
            cash: '0',
            shop: [
              {
                name: '',
                address: '',
                tel: '',
                time: '',
                map: ''
              }
            ]
          },
          {
            orderStep: 0,
            orderNumber: 'TOREWQ20201206001',
            status: [
              {
                name: '送禮',
                qrcode: '',
                shareLink: '/'
              }
            ],
            orderTime: '2020-12-06',
            pay: '信用卡',
            cash: '0',
            shop: [
              {
                name: '',
                address: '',
                tel: '',
                time: '',
                map: ''
              }
            ]
          },
          {
            orderStep: 1,
            orderNumber: 'TOREWQ20201206001',
            status: [
              {
                name: '送禮',
                qrcode: '',
                shareLink: '/'
              }
            ],
            orderTime: '2020-12-06',
            pay: '信用卡',
            cash: '123',
            shop: [
              {
                name: '',
                address: '',
                tel: '',
                time: '',
                map: ''
              }
            ]
          },
          {
            orderStep: 2,
            orderNumber: 'TOREWQ20201206001',
            status: [
              {
                name: '送禮',
                qrcode: '',
                shareLink: '/'
              }
            ],
            orderTime: '2020-12-06',
            pay: '信用卡',
            cash: '7575',
            shop: [
              {
                name: '',
                address: '',
                tel: '',
                time: '',
                map: ''
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .customContainer {
    max-width: 960px;
  }
  .statusList {
    li {
      margin-right: 1rem;
    }
  }
  .orderActive {
    color: white;
    border-color: var(--color-main-500);
    background-color: var(--color-main-500);
  }
</style>
