<template>
  <div id="order" class="text-main-500">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <!-- 訂單 -->
      <div class="mainInfo col-span-8">
        <h3 class="text-main-500">訂單</h3>
        <hr />
        <!-- 訂單列表 -->
        <div id="orderList">
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
                  <div
                    class="text-sm btn-border-light-blue-sm"
                    @click="
                      {
                        detailCurrent = item.orderNumber
                      }
                    "
                  >
                    查看訂單
                  </div>
                  <div>
                    <span class="text-sub-500 ml-5 mr-2">訂單日期 </span>{{ item.orderTime }}
                  </div>
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
        <!-- 訂單詳細 -->
        <div id="orderDetails" class="detailhidden">
          <h5>訂單飲品</h5>
          <div class="mb-5">返回</div>
          <div v-for="(orderItem, index) in viewDetail">
            <div v-if="orderItem.number == detailCurrent">
              <div class="flex items-center mb-5">
                <i class="pay-list text-sup3-500 mr-2 text-xl"></i><strong>訂單</strong>
                {{ orderItem.number }}
              </div>
              <div
                class="p-5 border rounded-xl border-sup3-400 mb-5"
                v-for="(shopItem, index) in orderItem.shop"
                :key="index"
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <div class="userImg rounded-full overflow-hidden mr-5">
                      <img src="../assets/how.jpg" alt="" />
                    </div>
                    <div>
                      <h5 class="mb-2">{{ shopItem.shopName }}</h5>
                      <router-link
                        :to="shopItem.shopLink"
                        class="btn-border-light-blue-sm block text-sm"
                        >查看全部配方</router-link
                      >
                    </div>
                  </div>
                  <div>{{ shopItem.saleText }}</div>
                </div>
                <hr />
                <div
                  class="flex items-center justify-between mb-5"
                  v-for="(i, index) in shopItem.drink"
                >
                  <div class="flex w-full">
                    <div class="drinkImg rounded-lg overflow-hidden mr-3 flex-shrink-0">
                      <img src="../assets/product.jpg" alt="" />
                    </div>
                    <div class="w-full">
                      <div class="flex items-center mb-2 justify-between">
                        <h5 class="mb-0 mr-5">{{ i.name }}</h5>
                        <div class="btn-border-remove-sm text-sm">我要評價</div>
                      </div>
                      <div class="flex">
                        <div class="w-full">
                          <div class="flex">
                            <span class="drinkBefore text-sup3-500 flex-shrink-0 drinkBefore"
                              >內含配料</span
                            >
                            <div>
                              <span v-for="(ic, index) in i.content" class="flex-shrink-0 flex-wrap"
                                >{{ ic }}、</span
                              >
                            </div>
                          </div>
                          <span class="drinkBefore text-sup3-500 drinkBefore inline-block"
                            >規格</span
                          ><span v-for="(id, index) in i.detail"
                            >{{ id.temp }}、{{ id.size }}、{{ id.sugar }}、{{ id.ice }}</span
                          >
                        </div>
                        <div class="flex justify-between flex-shrink-0">
                          <div class="qty mx-10 font-normal">x {{ i.qty }}</div>
                          <div class="price text-sub-500 font-normal mr-5">${{ i.price }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="text-right">
                  <p>- {{ shopItem.salePrice }}</p>
                  <big class="font-normal">$ {{ shopItem.shopTotal }}</big>
                </div>
              </div>
              <div class="text-right">
                <p>小計(6杯飲品)</p>
                <p><small>折扣碼優惠 9折</small>$330</p>
                <big class="font-normal"></big>
              </div>
            </div>
          </div>
        </div>
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
      },
      viewDetail: function() {
        return this.orderDetails.filter(result => result.orderStep == this.current)
      },
      cc: function() {
        for (let od = 0; od < this.orderDetails.length; od++) {
          const od_element = this.orderDetails[od]

          for (let os = 0; os < od_element.shop.length; os++) {
            const os_element = od_element.shop[os]

            for (let sd = 0; sd < os_element.drink.length; sd++) {
              const sd_element = os_element.drink[sd]
              sd_element.drinkTotal = sd_element.qty * sd_element.price

              let sum = (os_element.shopTotal += sd_element.drinkTotal)
              os_element.shopTotal = sum - os_element.salePrice
            }
          }
        }
      }
    },
    data() {
      return {
        current: 0,
        detailCurrent: '001',
        orderStatus: ['進行中', '已完成', '已取消'],
        order: [
          {
            orderStep: 0,
            orderNumber: '001',
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
            orderNumber: '002',
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
            orderNumber: '003',
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
            orderNumber: '004',
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
            orderNumber: '005',
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
            orderNumber: '006',
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
        ],
        orderDetails: [
          {
            orderStep: 0,
            number: '001',
            shop: [
              {
                shopName: '滴妹好棒棒',
                shopLink: '/drinkShop',
                saleText: '飲品優惠，低消100折$30',
                drink: [
                  {
                    name: '東方不敗',
                    photo: '',
                    content: [
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆'
                    ],
                    detail: [
                      {
                        temp: '冷飲',
                        size: '中杯',
                        sugar: '三分糖',
                        ice: '微冰'
                      }
                    ],
                    qty: 99,
                    price: 60,
                    drinkTotal: 0
                  },
                  {
                    name: '東方不敗',
                    photo: '',
                    content: ['粉圓', '布丁', '紅豆', '粉圓'],
                    detail: [
                      {
                        temp: '冷飲',
                        size: '中杯',
                        sugar: '三分糖',
                        ice: '微冰'
                      }
                    ],
                    qty: 59,
                    price: 70,
                    drinkTotal: 0
                  }
                ],
                salePrice: '345',
                shopTotal: 0
              }
            ],
            total: 0
          },
          {
            orderStep: 0,
            number: '002',
            shop: [
              {
                shopName: '滴妹好棒棒',
                shopLink: '/drinkShop',
                saleText: '飲品優惠，低消100折$30',
                drink: [
                  {
                    name: '東方不敗',
                    photo: '',
                    content: [
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆'
                    ],
                    detail: [
                      {
                        temp: '冷飲',
                        size: '中杯',
                        sugar: '三分糖',
                        ice: '微冰'
                      }
                    ],
                    qty: '9',
                    price: '60',
                    drinkTotal: 0
                  },
                  {
                    name: '東方不敗',
                    photo: '',
                    content: [
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆'
                    ],
                    detail: [
                      {
                        temp: '冷飲',
                        size: '中杯',
                        sugar: '三分糖',
                        ice: '微冰'
                      }
                    ],
                    qty: 9,
                    price: 60,
                    drinkTotal: 0
                  }
                ],
                salePrice: '345',
                shopTotal: 0
              }
            ],
            total: 0
          },
          {
            orderStep: 0,
            number: '003',
            shop: [
              {
                shopName: '滴妹好棒棒',
                shopLink: '/drinkShop',
                saleText: '飲品優惠，低消100折$30',
                drink: [
                  {
                    name: '東方不敗',
                    photo: '',
                    content: [
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆'
                    ],
                    detail: [
                      {
                        temp: '冷飲',
                        size: '中杯',
                        sugar: '三分糖',
                        ice: '微冰'
                      }
                    ],
                    qty: 69,
                    price: 60,
                    drinkTotal: 0
                  }
                ],
                salePrice: '345',
                shopTotal: 0
              }
            ],
            total: 0
          },
          {
            orderStep: 0,
            number: '004',
            shop: [
              {
                shopName: '滴妹好棒棒',
                shopLink: '/drinkShop',
                saleText: '飲品優惠，低消100折$30',
                drink: [
                  {
                    name: '東方不敗',
                    photo: '',
                    content: [
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆'
                    ],
                    detail: [
                      {
                        temp: '冷飲',
                        size: '中杯',
                        sugar: '三分糖',
                        ice: '微冰'
                      }
                    ],
                    qty: 10,
                    price: 60,
                    drinkTotal: 0
                  }
                ],
                salePrice: '345',
                shopTotal: 0
              }
            ],
            total: 0
          },
          {
            orderStep: 1,
            number: '005',
            shop: [
              {
                shopName: '滴妹好棒棒',
                shopLink: '/drinkShop',
                saleText: '飲品優惠，低消100折$30',
                drink: [
                  {
                    name: '東方不敗',
                    photo: '',
                    content: [
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆'
                    ],
                    detail: [
                      {
                        temp: '冷飲',
                        size: '中杯',
                        sugar: '三分糖',
                        ice: '微冰'
                      }
                    ],
                    qty: 39,
                    price: 60,
                    drinkTotal: 0
                  }
                ],
                salePrice: '345',
                shopTotal: 0
              }
            ],
            total: 0
          },
          {
            orderStep: 2,
            number: '006',
            shop: [
              {
                shopName: '滴妹好棒棒',
                shopLink: '/drinkShop',
                saleText: '飲品優惠，低消100折$30',
                drink: [
                  {
                    name: '東方不敗',
                    photo: '',
                    content: [
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆',
                      '粉圓',
                      '布丁',
                      '紅豆'
                    ],
                    detail: [
                      {
                        temp: '冷飲',
                        size: '中杯',
                        sugar: '三分糖',
                        ice: '微冰'
                      }
                    ],
                    qty: 79,
                    price: 60,
                    drinkTotal: 0
                  }
                ],
                salePrice: '345',
                shopTotal: 0
              }
            ],
            total: 0
          }
        ]
      }
    },
    mounted() {
      // this.cc()
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
  .userImg {
    width: 60px;
    height: 60px;
  }
  .drinkImg {
    width: 80px;
    height: 80px;
  }
  .drinkBefore {
    width: 80px;
  }
  .orderActive {
    color: white;
    border-color: var(--color-main-500);
    background-color: var(--color-main-500);
  }
  .detailhidden {
    transform: translateY(30px);
  }
</style>
