<template>
  <div id="checkout">
    <div class="customContainer xl:mx-auto my-20 text-main-500">
      <buyList />
      <div class="border rounded-3xl p-5 border-sup3-400 my-10">
        <div class="flex items-center">
          <h3 class="mb-0">領取方式</h3>
          <div class="flex ml-5">
            <div>
              <input type="radio" class="hidden" name="method" id="receive" />
              <label for="receive" class="btn-border-light-blue-sm">直接領取</label>
            </div>
            <div class="mx-2.5">
              <input type="radio" class="hidden" name="method" id="sendCup" />
              <label for="sendCup" class="btn-border-light-blue-sm">寄杯</label>
            </div>
            <div>
              <input type="radio" class="hidden" name="method" id="gifts" />
              <label for="gifts" class="btn-border-light-blue-sm">送禮</label>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex items-center">
          <div class="font-normal text-lg mr-5">選擇領取店鋪</div>
          <div class="btn-border-light-blue-sm">選擇店鋪</div>
        </div>
        <div class="flex items-center justify-between bg-sup3-300 p-5 rounded-3xl mt-5">
          <div>
            <div class="font-normal text-lg mb-2">配配飲一號店</div>
            <ul class="pl-0 list-none flex shopPosition">
              <li>
                <i class="pay-pin text-sub-500"></i>
                台北市大安區仁愛路四段345巷6弄78號
              </li>
              <li><i class="pay-tel text-sub-500"></i>02-2456-7891</li>
              <li><i class="pay-clock text-sub-500"></i>24H 全年無休</li>
            </ul>
          </div>
          <a href="/" target="_blank" class="btn-border-light-blue-sm">查看位置</a>
        </div>
      </div>
      <div class="border rounded-3xl p-5 border-sup3-400">
        <div class="flex items-center">
          <h3 class="mb-0">付款方式</h3>
          <div class="flex ml-5">
            <div>
              <input type="radio" class="hidden" name="pay" id="creditCard" />
              <label for="creditCard" class="btn-border-light-blue-sm">信用卡</label>
            </div>
            <div class="mx-2.5">
              <input type="radio" class="hidden" name="pay" id="PayPoint" />
              <label for="PayPoint" class="btn-border-light-blue-sm">PayPayPoint</label>
            </div>
          </div>
        </div>
        <hr />
        <div class="flex">
          <div class="font-normal text-lg mr-5">選擇信用卡</div>
          <div>
            <div class="mb-5">
              <div><input type="radio" name="card" id="" /><span>**** 4893</span></div>
              <div><input type="radio" name="card" id="" /><span>**** 4893</span></div>
            </div>
            <div class="btn-border-light-blue-sm">增加信用卡</div>
          </div>
        </div>
      </div>
      <div class="flex justify-between">
        <div>
          <div class="flex items-center my-10">
            <div>請輸入折扣碼</div>
            <div class="mx-5"><input type="text" name="" id="" value="PAYPATDRINK" /></div>
            <div class="btn-dark-blue">使用</div>
          </div>
        </div>
        <div class="text-right">
          <countResult />
        </div>
      </div>
      <div class="text-right">
        <div class="btn-dark-blue inline-block w-40 text-center">付款</div>
      </div>
    </div>
  </div>
</template>

<script>
  import buyList from '@/components/buyList.vue'
  import countResult from '@/components/countResult.vue'

  export default {
    name: 'checkout',
    components: {
      buyList,
      countResult
    },
    data() {
      return {}
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
