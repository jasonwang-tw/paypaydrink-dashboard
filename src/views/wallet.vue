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
          <div class="btn-border-light-blue flex items-center" @click="card = !card">
            <i class="pay-add mr-3"></i>
            <div>增加信用卡</div>
          </div>
        </div>
        <hr />
        <ul class="pl-0 list-none grid gap-3 grid-cols-2 mb-10 text-main-500">
          <li class="bg-sup3-300 p-5 rounded-xl" v-for="(i, index) in 5">
            <div class="flex justify-between mb-16">
              <div class="btn-dark-blue-sm-nohover">預設</div>
              <img src="../../src/assets/visa.svg" alt="" />
            </div>
            <div class="flex justify-between">
              <div class="text-xl font-medium">**** 4986</div>
              <div class="flex">
                <div class="duration-200 cursor-pointer hover:text-sup1-500 mr-3">設定為預設</div>
                <div class="duration-200 cursor-pointer text-red-500 hover:text-red-700">刪除</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 新增信用卡 -->
    <popup :class="{ popup: card }">
      <template v-slot:title>
        <h4>新增信用卡</h4>
      </template>
      <template v-slot:content>
        <div class="bg-sup3-300 p-3 mb-5 rounded-lg">
          <span class="text-sup1-900"
            >當你進行信用卡驗證時，我們會先向發卡銀行授權$1元，<br />並在5天內退還給你</span
          >
        </div>
        <input type="text" name="" id="" placeholder="持有者姓名" class="mb-3" />
        <input type="text" name="" id="" placeholder="信用卡號碼" class="mb-3" />
        <div class="flex mb-5">
          <input type="text" name="" id="" placeholder="有效期限" class="mr-3" />
          <input type="text" name="" id="" placeholder="CVV" />
        </div>
      </template>
      <template v-slot:btn>
        <div class="functionBtn flex justify-center">
          <div class="btn btn-remove mr-3" @click="card = !card">取消</div>
          <div class="btn btn-dark-blue">確認</div>
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
  import taiwan from '../../static/resource/CityCountyData'

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
        taiwan,
        selcetCity: '臺北市',
        fileterArea: '',
        card: true,
        bank: true
      }
    },
    methods: {
      area: function() {
        this.taiwan.forEach(fd => {
          if (fd.CityName == this.selcetCity) {
            this.fileterArea = fd.AreaList
          }
        })
      }
    },
    watch: {
      selcetCity: 'area'
    },
    computed: {},
    mounted() {
      this.area()
    }
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
</style>
