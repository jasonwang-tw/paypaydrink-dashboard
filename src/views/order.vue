<template>
  <div id="favorites">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <h3 class="text-main-500">訂單</h3>
        <hr />
        <ul class="pl-0 list-none flex mb-5">
          <li class="btn-border-light-blue order-active">進行中</li>
          <li class="btn-border-light-blue mx-3">已完成</li>
          <li class="btn-border-light-blue">已取消</li>
        </ul>
        <ul class="order-status list-none pl-0">
          <li class="border p-5 rounded-lg border-sup3-400 mb-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center text-main-500">
                <div>
                  <i class="pay-order text-sup3-500 mr-2"></i><strong>訂單</strong
                  ><span class="ml-2 text-sup1-900">TOREWQ20201206001</span>
                </div>
                <div class="text-sm btn-dark-blue-sm-nohover mx-5">直接領取</div>
                <div class="cursor-pointer"><i class="pay-qr mr-2"></i><strong>領取碼</strong></div>
              </div>
              <div class="text-red-500 cursor-pointer duration-200 hover:text-red-700">
                取消訂單
              </div>
            </div>
            <hr />
            <ul class="shopPostition pl-0">
              <li class="block sm:flex justify-between">
                <div class="shopInfo text-left text-main-500">
                  <div class="shopName text-xl font-bold">
                    配配飲 一號店
                  </div>
                  <div class="block mt-2">
                    <div>
                      <i class="pay-pin mr-2 text-sub-500"></i>
                      <span class="text-sm">台北市大安區仁愛路四段345巷6弄78號</span>
                    </div>
                    <div class="flex">
                      <div class="mr-5">
                        <i class="pay-tel mr-2 text-sub-500"></i>
                        <span class="text-sm">02-2456-7891</span>
                      </div>
                      <div>
                        <i class="pay-clock mr-2 text-sub-500"></i>
                        <span class="text-sm">24H 全年無休</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shopLink">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm btn-border-light-blue-sm inline-block mb-5 sm:mb-0"
                    >查看位置</a
                  >
                </div>
              </li>
            </ul>
            <hr />
            <div class="flex justify-between items-center text-main-500">
              <div class="flex items-center">
                <div class="text-sm btn-border-light-blue-sm">查看訂單內容</div>
                <div><span class="text-sub-500 ml-5 mr-2">訂單日期 </span>2020-12-06</div>
              </div>
              <div class="text-right">
                <div><span class="text-sub-500 mr-2">付款方式</span> 信用卡</div>
                <div class="flex items-center justify-end text-sub-500">
                  金額 <big class="ml-2"><strong>$297</strong></big>
                </div>
              </div>
            </div>
            <div></div>
          </li>
          <li class="border p-5 rounded-lg border-sup3-400 mb-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center text-main-500">
                <div>
                  <i class="pay-order text-sup3-500 mr-2"></i><strong>訂單</strong
                  ><span class="ml-2 text-sup1-900">TOREWQ20201206001</span>
                </div>
                <div class="text-sm btn-dark-blue-sm-nohover mx-5">寄杯兌換</div>
                <div class="cursor-pointer"><i class="pay-qr mr-2"></i><strong>領取碼</strong></div>
              </div>
              <div class="text-red-500 cursor-pointer duration-200 hover:text-red-700">
                取消訂單
              </div>
            </div>
            <hr />
            <ul class="shopPostition pl-0">
              <li class="block sm:flex justify-between">
                <div class="shopInfo text-left text-main-500">
                  <div class="shopName text-xl font-bold">
                    配配飲 一號店
                  </div>
                  <div class="block mt-2">
                    <div>
                      <i class="pay-pin mr-2 text-sub-500"></i>
                      <span class="text-sm">台北市大安區仁愛路四段345巷6弄78號</span>
                    </div>
                    <div class="flex">
                      <div class="mr-5">
                        <i class="pay-tel mr-2 text-sub-500"></i>
                        <span class="text-sm">02-2456-7891</span>
                      </div>
                      <div>
                        <i class="pay-clock mr-2 text-sub-500"></i>
                        <span class="text-sm">24H 全年無休</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="shopLink">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-sm btn-border-light-blue-sm inline-block mb-5 sm:mb-0"
                    >查看位置</a
                  >
                </div>
              </li>
            </ul>
            <hr />
            <div class="flex justify-between items-center text-main-500">
              <div class="flex items-center">
                <div class="text-sm btn-border-light-blue-sm">查看訂單內容</div>
                <div><span class="text-sub-500 ml-5 mr-2">訂單日期 </span>2020-12-06</div>
              </div>
              <div class="text-right">
                <div><span class="text-sub-500 mr-2">付款方式</span> 信用卡</div>
                <div class="flex items-center justify-end text-sub-500">
                  金額 <big class="ml-2"><strong>$0</strong></big>
                </div>
              </div>
            </div>
            <div></div>
          </li>
          <li class="border p-5 rounded-lg border-sup3-400 mb-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center text-main-500">
                <div>
                  <i class="pay-order text-sup3-500 mr-2"></i><strong>訂單</strong
                  ><span class="ml-2 text-sup1-900">TOREWQ20201206001</span>
                </div>
                <div class="text-sm bg-green-500 btn-sm mx-5 text-white">寄杯</div>
              </div>
              <div class="text-red-500 cursor-pointer duration-200 hover:text-red-700">
                取消訂單
              </div>
            </div>
            <hr />
            <div class="flex justify-between items-center text-main-500">
              <div class="flex items-center">
                <div class="text-sm btn-border-light-blue-sm">查看訂單內容</div>
                <div><span class="text-sub-500 ml-5 mr-2">訂單日期 </span>2020-12-06</div>
              </div>
              <div class="text-right">
                <div><span class="text-sub-500 mr-2">付款方式</span> 信用卡</div>
                <div class="flex items-center justify-end text-sub-500">
                  金額 <big class="ml-2"><strong>$2,977</strong></big>
                </div>
              </div>
            </div>
            <div></div>
          </li>
          <li class="border p-5 rounded-lg border-sup3-400 mb-5">
            <div class="flex justify-between items-center">
              <div class="flex items-center text-main-500">
                <div>
                  <i class="pay-order text-sup3-500 mr-2"></i><strong>訂單</strong
                  ><span class="ml-2 text-sup1-900">TOREWQ20201206001</span>
                </div>
                <div class="text-sm bg-sub-500 text-white btn-sm mx-5">送禮</div>
                <div class="cursor-pointer text-sub-500"><i class="pay-share mr-2"></i><strong>分享好友</strong></div>
              </div>
              <div class="text-red-500 cursor-pointer duration-200 hover:text-red-700">
                取消訂單
              </div>
            </div>
            <hr />
            <div class="flex justify-between items-center text-main-500">
              <div class="flex items-center">
                <div class="text-sm btn-border-light-blue-sm">查看訂單內容</div>
                <div><span class="text-sub-500 ml-5 mr-2">訂單日期 </span>2020-12-06</div>
              </div>
              <div class="text-right">
                <div><span class="text-sub-500 mr-2">付款方式</span> 信用卡</div>
                <div class="flex items-center justify-end text-sub-500">
                  金額 <big class="ml-2"><strong>$7,845</strong></big>
                </div>
              </div>
            </div>
            <div></div>
          </li>
        </ul>
        <pageNav />
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  shopPosition
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import profileMenu from '@/components/profileMenu.vue'
  import pageNav from '@/components/pageNav.vue'
  import shopPosition from '@/components/shopPosition.vue'

  export default {
    name: 'favorites',
    components: {
      topmenu,
      footerBar,
      profileMenu,
      pageNav,
      shopPosition
    },
    data() {
      return {
        mainDrink: [
          {
            link: '/',
            name: '紅茶',
            bg: require('../assets/drinkBg/1.jpg')
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
  .order-active{
    color: white;
    background-color: var(--color-sup1-100);
  }
</style>
