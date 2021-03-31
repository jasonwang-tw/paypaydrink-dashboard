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
          <li class="bg-sup3-300 p-5 rounded-3xl relative" v-for="(c, index) in cardInfo">
            <div class="h-24">
              <div v-if="c.default === true">
                <div class="inline-block btn-dark-blue-sm-nohover text-sm">預設</div>
              </div>
              <div class="absolute top-0 right-0 p-5">
                <div v-if="c.type === 'visa'">
                  <img src="../../src/assets/images/visa.svg" alt="" />
                </div>
                <div v-else-if="c.type === 'jcb'">
                  <img src="../../src/assets/images/jcb.svg" alt="" />
                </div>
                <div v-else-if="c.type === 'master'">
                  <img src="../../src/assets/images/master.svg" alt="" />
                </div>
              </div>
            </div>
            <div class="flex justify-between items-center">
              <div class="text-xl font-medium">**** {{ c.lastNumber }}</div>
              <div class="flex">
                <div v-if="c.default === false">
                  <div
                    class="duration-200 cursor-pointer hover:text-sup1-500 mr-3"
                    @click="cahngeDefaultCI(), [(c.default = true)]"
                  >
                    設定為預設
                  </div>
                </div>
                <div
                  class="duration-200 cursor-pointer text-red-500 hover:text-red-700"
                  @click=";[(del = !del)], [(delTitle = '信用卡')]"
                >
                  刪除
                </div>
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
            class="flex items-center justify-between mb-5 bg-sup3-300 p-5 rounded-3xl"
            v-for="(b, index) in bankAccount"
          >
            <div class="">
              <div class="flex items-start mb-5">
                <div>
                  <div class="font-medium mb-2">{{ b.bankName }}</div>
                  <div class="text-xl font-medium">**** {{ b.lastNumber }}</div>
                </div>
                <div v-if="b.verification === true">
                  <div class="text-sup1-100 mx-3">已審核</div>
                </div>
                <div v-else-if="b.verification === false">
                  <div class="text-sub-500 mx-3">審核中</div>
                </div>
                <div v-if="b.default === true">
                  <div class="btn-dark-blue-sm-nohover text-sm">預設</div>
                </div>
              </div>
              <div class="flex">
                <div class="mr-5">
                  <small class="text-sup1-900 mr-3">戶名</small>
                  <b>{{ b.accountName }}</b>
                </div>
                <div>
                  <small class="text-sup1-900 mr-3">所屬</small>
                  <b>{{ b.city }} / {{ b.branch }}</b>
                </div>
              </div>
            </div>
            <div class="flex">
              <div v-if="b.default === false && b.verification === true">
                <div
                  class="duration-200 cursor-pointer hover:text-sup1-500 mr-3"
                  @click="cahngeDefaultBA(), [(b.default = true)]"
                >
                  設定為預設
                </div>
              </div>
              <div
                class="duration-200 cursor-pointer text-red-500 hover:text-red-700"
                @click=";[(del = !del)], [(delTitle = '帳戶')]"
              >
                刪除
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
        <div class="bg-sup3-300 p-3 mb-5 rounded-3xl">
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
        <input type="text" name="" id="" placeholder="詳細地址" class="" />
        <h4 class="my-3">輸入帳戶資訊</h4>
        <label for="" class="mb-3 block text-left">選擇銀行</label>
        <select class="mb-3" name="" id="">
          <option value="" v-for="(bank, index) in bankList" :value="bank">{{ bank }}</option>
        </select>
        <div class="flex mb-3">
          <div class="w-full mr-3">
            <label for="" class="mb-3 block text-left">選擇銀行縣市</label>
            <select name="" id="">
              <option :value="t.CityName" v-for="(t, index) in taiwan">{{ t.CityName }}</option>
            </select>
          </div>
          <div class="w-full">
            <label for="" class="mb-3 block text-left">選擇分行</label>
            <select name="" id="">
              <option value="" v-for="(b, index) in bankBranch" :value="b">{{ b }}</option>
            </select>
          </div>
        </div>
        <input class="mb-3" type="text" name="" id="" placeholder="請輸入帳戶名" />
        <input type="text" name="" id="" placeholder="請輸入帳戶號碼" />
      </template>
      <template v-slot:btn>
        <div class="functionBtn flex justify-center mt-10">
          <div class="btn btn-remove mr-3" @click="bank = !bank">取消</div>
          <div class="btn btn-dark-blue">送出</div>
        </div>
      </template>
    </popup>
    <!-- 刪除信用卡 -->
    <popup :class="{ popup: del }">
      <template v-slot:title>
        <h4>刪除{{ delTitle }}</h4>
      </template>
      <template v-slot:content>
        <p class="mb-10">此操作無法撤消，確定要執行嗎?</p>
      </template>
      <template v-slot:btn>
        <div class="functionBtn flex justify-center">
          <div class="btn btn-remove mr-3" @click="del = !del">取消</div>
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
        bank: true,
        del: true,
        delTitle: '',
        bankList: ['台北富邦商業銀行', '國泰世華商業銀行', '中國信託商業銀行'],
        bankBranch: ['城中分行', '小港分行', '一中分行'],
        cardInfo: [
          {
            default: true,
            type: 'visa',
            lastNumber: 7789
          },
          {
            default: false,
            type: 'jcb',
            lastNumber: 4867
          },
          {
            default: false,
            type: 'master',
            lastNumber: 7048
          }
        ],
        bankAccount: [
          {
            bankName: '台北富邦商業銀行',
            city: '台北市',
            branch: '城中分行',
            lastNumber: 7789,
            default: true,
            verification: true,
            accountName: '周截倫'
          },
          {
            bankName: '國泰世華商業銀行',
            city: '高雄市',
            branch: '小港分行',
            lastNumber: 7789,
            default: false,
            verification: true,
            accountName: '周截倫'
          },
          {
            bankName: '國泰世華商業銀行',
            city: '台中',
            branch: '中港分行',
            lastNumber: 7789,
            default: false,
            verification: true,
            accountName: '周截倫'
          },
          {
            bankName: '中國信託商業銀行',
            city: '台中市',
            branch: '一中分行',
            lastNumber: 7789,
            default: false,
            verification: false,
            accountName: '周截倫'
          }
        ]
      }
    },
    methods: {
      area: function() {
        this.taiwan.forEach(fd => {
          if (fd.CityName == this.selcetCity) {
            this.fileterArea = fd.AreaList
          }
        })
      },
      cahngeDefaultBA() {
        this.bankAccount.forEach(ba => {
          ba.default = false
        })
      },
      cahngeDefaultCI() {
        this.cardInfo.forEach(ci => {
          ci.default = false
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
  .userimg {
    width: 60px;
    height: 60px;
  }
  .popup {
    opacity: 0;
    visibility: hidden;
  }
</style>
