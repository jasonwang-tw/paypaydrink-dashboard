<template>
  <div id="order" class="text-main-500">
      <!-- 訂單 -->
        <h3 class="text-main-500">訂單</h3>
        <hr />
        <!-- 訂單列表 -->
        <div id="orderList" :class="{ hidden: orderView }">
          <ul class="flex pl-0 mb-5 list-none statusList">
            <li
              class="btn-border-light-blue orderListBtn"
              v-for="(item, index) in orderStatus"
              @click="current = index"
              :class="{ orderActive: index == current }"
            >
              {{ item }}
            </li>
          </ul>
          <ul class="pl-0 list-none order-status">
            <li
              class="p-5 mb-5 border rounded-3xl border-lightblue-placeholder"
              v-for="(item, index) in orderStort"
            >
              <div class="flex justify-between md:items-center">
                <div class="items-center md:flex text-main-500">
                  <div class="flex items-center">
                    <i class="mr-2 text-xl pay-list text-lightblue-500"></i><strong>訂單</strong
                    ><span class="ml-2 text-blue-900">{{ item.orderNumber }}</span>
                  </div>
                  <div v-for="(item_status, index) in item.status" :key="index" class="mt-3 md:mt-0">
                    <div v-if="item_status.name == '直接領取'" class="flex items-center">
                      <div class="mr-5 text-sm md:mx-5 btn-dark-blue-sm-nohover">
                        {{ item_status.name }}
                      </div>
                      <div class="cursor-pointer" @click="QRcodeShow = !QRcodeShow">
                        <i class="mr-2 pay-qr"></i><strong>領取碼</strong>
                      </div>
                    </div>
                    <div v-else-if="item_status.name == '寄杯兌換'" class="flex items-center">
                      <div class="mr-5 text-sm md:mx-5 btn-dark-blue-sm-nohover">
                        {{ item_status.name }}
                      </div>
                      <div class="cursor-pointer" @click="QRcodeShow = !QRcodeShow">
                        <i class="mr-2 pay-qr"></i><strong>領取碼</strong>
                      </div>
                    </div>
                    <div v-else-if="item_status.name == '寄杯'" class="flex items-center">
                      <div class="mr-5 text-sm text-white bg-green-500 md:mx-5 btn-sm">寄杯</div>
                    </div>
                    <div v-else-if="item_status.name == '送禮'" class="flex items-center">
                      <div class="mr-5 text-sm text-white md:mx-5 bg-subyellow-500 btn-sm">送禮</div>
                      <div class="cursor-pointer text-subyellow-500" @click="shareLink = !shareLink">
                        <i class="mr-2 pay-share"></i><strong>分享好友</strong>
                      </div>
                    </div>
                  </div>
                </div>
                <div v-if="item.orderStep == '0'">
                  <div
                    class="bg-white hover:text-red-700 hover:border-red-700 text-sm text-red-500 border-red-500 border py-1 px-2.5 rounded-lg no-underline cursor-pointer"
                    @click="removeOrder = !removeOrder"
                  >
                    取消訂單
                  </div>
                </div>
                <div v-else-if="item.orderStep == '1'">
                  <div class="text-blue-100">
                    已完成
                  </div>
                </div>
                <div v-else-if="item.orderStep == '2'">
                  <div class="text-red-500">
                    已取消
                  </div>
                </div>
              </div>
              <hr />
              <div v-for="(item_status, index) in item.status" :key="index">
                <div v-if="item_status.name == '直接領取' || item_status.name == '寄杯兌換'">
                  <ul class="pl-0 shopPostition">
                    <li
                      class="justify-between block md:flex"
                      v-for="(item_shop, index) in item.shop"
                      :key="index"
                    >
                      <div class="text-left shopInfo text-main-500">
                        <h5 class="mb-2 shopName">
                          {{ item_shop.name }}
                        </h5>
                        <div class="block mt-2">
                          <div>
                            <i class="mr-2 pay-pin text-subyellow-500"></i>
                            <span class="text-sm">{{ item_shop.address }}</span>
                          </div>
                          <div class="flex">
                            <div class="mr-5">
                              <i class="mr-2 pay-tel text-subyellow-500"></i>
                              <span class="text-sm">{{ item_shop.tel }}</span>
                            </div>
                            <div>
                              <i class="mr-2 pay-clock text-subyellow-500"></i>
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
                          class="inline-block mt-3 text-sm md:mt-0 md:mb-5 btn-border-light-blue-sm sm:mb-0"
                          >查看位置</a
                        >
                      </div>
                    </li>
                  </ul>
                  <hr />
                </div>
              </div>
              <div class="items-center justify-between md:flex text-main-500">
                <div class="flex items-center">
                  <div
                    class="text-sm btn-border-light-blue-sm"
                    @click="
                      {
                        detailCurrent = item.orderNumber
                        detailActive()
                      }
                    "
                  >
                    查看訂單
                  </div>
                  <div>
                    <span class="ml-5 mr-2 text-subyellow-500">訂單日期 </span>{{ item.orderTime }}
                  </div>
                </div>
                <div class="flex items-center justify-between mt-3 text-right md:mt-0 md:block">
                  <div><span class="mr-2 text-subyellow-500">付款方式</span>{{ item.pay }}</div>
                  <div class="flex items-center justify-end text-subyellow-500">
                    金額
                    <big class="ml-2"
                      ><strong>${{ item.cash }}</strong></big>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          </pageNav>
        </div>
        <!-- 訂單詳細 -->
        <div id="orderDetails" :class="{ hidden: detailView }">
          <h5>訂單飲品</h5>
          <div class="mb-5 cursor-pointer" @click="detailActive">
            <i class="pay-left"></i>
            返回
          </div>
          <div v-for="(orderItem, index) in viewDetail">
            <div v-if="orderItem.number == detailCurrent">
              <div class="flex items-center mb-5">
                <i class="mr-2 text-xl pay-list text-lightblue-500"></i><strong>訂單</strong>
                {{ orderItem.number }}
              </div>
              <div
                class="p-5 mb-5 border rounded-3xl border-lightblue-placeholder"
                v-for="(shopItem, index) in orderItem.shop"
                :key="index"
              >
                <div class="items-center justify-between md:flex">
                  <div class="flex items-center">
                    <div class="mr-5 overflow-hidden rounded-full userImg">
                      <img src="../../assets/images/how.jpg" alt="" />
                    </div>
                    <div>
                      <h5 class="mb-2">{{ shopItem.shopName }}</h5>
                      <router-link
                        :to="shopItem.shopLink"
                        class="block text-sm btn-border-light-blue-sm"
                        >查看全部配方</router-link
                      >
                    </div>
                  </div>
                  <div class="mt-3 text-blue-900 md:mt-0">{{ shopItem.saleText }}</div>
                </div>
                <hr />
                <div
                  class="flex items-center justify-between mb-5"
                  v-for="(i, index) in shopItem.drink"
                >
                  <div class="w-full mb-5 md:mb-0 md:flex">
                    <div class="flex-shrink-0 hidden mr-3 overflow-hidden drinkImg rounded-3xl md:block">
                      <img src="../../assets/images/product.jpg" alt="" />
                    </div>
                    <div class="w-full">
                      <div class="flex items-center justify-between mb-3">
                        <h5 class="mb-0 mr-5">{{ i.name }}</h5>
                        <div class="text-sm btn-border-remove-sm">我要評價</div>
                      </div>
                      <div class="md:flex">
                        <div class="w-full text-sm">
                          <div class="flex">
                            <span class="flex-shrink-0 drinkBefore text-lightblue-500"
                              >內含配料</span
                            >
                            <div>
                              <span v-for="(ic, index) in i.content" class="flex-wrap flex-shrink-0"
                                >{{ ic }}、</span
                              >
                            </div>
                          </div>
                          <div class="flex mt-2 md:mt-0">
                            <span class="block drinkBefore text-lightblue-500"
                              >規格</span
                            ><span v-for="(id, index) in i.detail"
                              >{{ id.temp }}、{{ id.size }}、{{ id.sugar }}、{{ id.ice }}</span
                            >
                          </div>
                        </div>
                        <div class="flex items-center justify-between flex-shrink-0 mt-1.5 text-sm md:mt-0">
                          <div class="flex font-normal md:mx-10 qty"><span class="block text-lightblue-500 drinkBefore md:hidden">數量</span>x {{ i.qty }}</div>
                          <div class="text-xl font-normal md:mr-5 price text-subyellow-500">${{ i.price }}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="text-right">
                  <p><span class="mr-5 text-lightblue-500">賣場優惠</span>- {{ shopItem.salePrice }}</p>
                  <big class="font-medium text-subyellow-500">$ {{ shopItem.shopTotal }}</big>
                </div>
              </div>
              <div class="text-right">
                <p>小計(6杯飲品)</p>
                <p class="flex items-center justify-end text-sm"><span class="mr-5 text-lightblue-500">折扣碼優惠 9折</span>$330</p>
                <big class="flex items-center justify-end font-medium text-subyellow-500"><span class="mr-5 text-base">總計</span>$ 5787878</big>
              </div>
            </div>
          </div>
        </div>
    <!-- 取消訂單 -->
    <popup :class="{ popupHidden : removeOrder}">
      <template v-slot:title>
        <h4>取消訂單</h4>
      </template>
      <template v-slot:content>
        <p class="mb-10">此操作無法撤消，確定要執行嗎?</p>
      </template>
      <template v-slot:btn>
       <div class="flex justify-center functionBtn">
        <div class="mr-3 btn btn-remove" @click="removeOrder = !removeOrder">取消</div>
        <div class="btn btn-dark-blue">確認</div>
      </div>
      </template>
    </popup>
    <!-- QRCODE -->
    <popup :class="{popupHidden: QRcodeShow}">
      <template v-slot:title>
        <h4>領取碼</h4>
      </template>
      <template v-slot:content>
        <img src="../../../src/assets/images/qr.png" alt="" class="block mx-auto mb-5">
        <div class="flex items-center justify-center">
          <h5><i class="mr-2 text-xl pay-list text-lightblue-500"></i><strong>訂單</strong>
          <span class="ml-2 text-blue-900">001</span></h5>
        </div>
        <p class="mb-10">請12小時內至指定店鋪，出示QRCODE掃描領取飲品。<br>祝您用餐愉快</p>
      </template>
      <template v-slot:btn>
       <div class="flex justify-center functionBtn">
        <div class="btn btn-dark-blue" @click="QRcodeShow = !QRcodeShow">確認</div>
      </div>
      </template>
    </popup>
    <!-- 分享好友 -->
    <popup :class="{popupHidden : shareLink}">
      <template v-slot:title>
        <h4>分享好友</h4>
      </template>
      <template v-slot:content>
        <p>複製以下連結貼給好友，即可完成分享</p>
        <div class="flex mb-10">
          <input id="shareUrl" type="text" value="share url" disabled>
          <div @click="copyUrl" class="flex-shrink-0 text-blue-100 cursor-pointer btn hover:text-main-500">複製連結</div>
        </div>
      </template>
      <template v-slot:btn>
       <div class="flex justify-center functionBtn">
        <div class="btn btn-dark-blue" @click="shareLink = !shareLink">確認</div>
      </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'
  import popup from '@/components/popup.vue'
  import order from '../../../static/resource/order'
  import orderDetails from '../../../static/resource/orderDetails'

  export default {
    name: 'order',
    components: {
      pageNav,
      popup
    },
    data() {
      return {
        current: 0,
        detailCurrent: '001',
        detailView: true,
        orderView: false,
        removeOrder: true,
        QRcodeShow: true,
        shareLink: true,
        orderStatus: ['進行中', '已完成', '已取消'],
        order,
        orderDetails,
      }
    },
    methods: {
      orderOperation: function() {
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
      },
      detailActive: function() {
        this.orderView = !this.orderView
        this.detailView = !this.detailView
        window.scrollTo({ top: 0 })
      },
      copyUrl: function() {
        const copyText = document.getElementById('shareUrl');
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
        /* Copy the text inside the text field */
        document.execCommand("copy");
        alert("複製成功！")
      }
    },
    watch: {},
    computed: {
      orderStort: function() {
        return this.order.filter(result => result.orderStep == this.current)
      },
      viewDetail: function() {
        return this.orderDetails.filter(result => result.orderStep == this.current)
      }
    },
    mounted() {
      this.orderOperation()
    }
  }
</script>

<style lang="scss" scoped>

  .statusList {
    li {
      margin-right: 1rem;
    }
  }
  .userImg {
    width: 80px;
    height: 80px;
  }
  .drinkImg {
    width: 100px;
    height: 100px;
  }
  .drinkBefore {
    width: 70px;
  }
  .orderActive {
    color: white;
    border-color: var(--color-main-500);
    background-color: var(--color-main-500);
  }
  .popupHidden{
    opacity: 0;
    visibility: hidden;
  }
</style>
