<template>
  <div id="bankCard" class="text-main-500">
    <topmenu />
    <div class="customContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <div class="flex justify-between items-center">
          <h3 class="text-main-500 mb-0">信用卡</h3>
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
        <div class="flex justify-between items-center">
          <h3 class="text-main-500 mb-0">銀行帳號</h3>
          <div class="btn-border-light-blue flex items-center" @click="bank = !bank">
            <i class="pay-add mr-3"></i>
            <div>增加銀行帳號</div>
          </div>
        </div>
        <hr />
        <ul class="list-none pl-0 text-main-500">
          <li
            class="flex items-center justify-between mb-5 bg-sup3-300 p-5 rounded-xl"
            v-for="(i, index) in 5"
          >
            <div class="">
              <div class="flex items-center mb-5">
                <div>
                  <div class="text-xl font-medium mb-2">台北富邦商業銀行</div>
                  <div class="text-xl font-medium">**** 7848</div>
                </div>
                <div class="text-sub-500 mx-3">已驗證</div>
                <div class="btn-dark-blue-sm-nohover">預設</div>
              </div>
              <div class="flex">
                <div class="mr-5">
                  <span class="text-sup1-900 mr-3">戶名</span>
                  <strong>周*倫</strong>
                </div>
                <div>
                  <span class="text-sup1-900 mr-3">所屬</span>
                  <strong>台北市 / 城中分行</strong>
                </div>
              </div>
            </div>
            <div class="flex">
              <div class="duration-200 cursor-pointer hover:text-sup1-500 mr-3">設定為預設</div>
              <div class="duration-200 cursor-pointer text-red-500 hover:text-red-700">刪除</div>
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
    <!-- 新增銀行帳戶 -->
    <popup :class="{ popup: bank }">
      <template v-slot:title>
        <h4>新增銀行帳戶</h4>
      </template>
      <template v-slot:content>
        <input type="text" name="" id="" placeholder="姓名" class="mb-3" />
        <input type="text" name="" id="" placeholder="身分證字號" class="mb-3" />
        <label for="" class="mb-3 block text-left">生日/公司核准設立日期</label>
        <input type="date" name="" id="" placeholder="姓名" class="mb-3" />
        <label for="" class="mb-3 block text-left">戶籍地址/公司地址</label>
        <div class="flex mb-3">
          <select name="city" id="" class="mr-3" v-model="selcetCity">
            <option :value="i.CityName" v-for="(i, index) in taiwan">{{ i.CityName }}</option>
          </select>
          <select name="city" id="">
            <option :value="i.AreaName" v-for="(i, index) in fileterArea">{{ i.AreaName }}</option>
          </select>
        </div>
        <input type="text" name="" id="" placeholder="郵遞區號" class="mb-3" />
        <input type="text" name="" id="" placeholder="詳細地址" class="mb-5" />
      </template>
      <template v-slot:btn>
        <div class="functionBtn flex justify-center">
          <div class="btn btn-remove mr-3" @click="bank = !bank">取消</div>
          <div class="btn btn-dark-blue">新增</div>
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
    name: 'bank',
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
