<template>
  <div id="checkout">
    <buyList />
    <div class="p-5 my-10 border rounded-3xl border-lightblue-placeholder">
      <div class="items-center md:flex">
        <h3 class="text-xl md:mb-0 md:text-2xl">領取方式</h3>
        <div class="flex md:ml-5">
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
        <div class="mr-5 text-lg font-semibold">選擇領取店鋪</div>
        <div class="btn-border-light-blue-sm">選擇店鋪</div>
      </div>
      <div class="items-center justify-between pt-3 mt-5 border-t md:border-none border-lightblue-high md:p-5 md:flex md:bg-lightblue-bg md:rounded-3xl">
        <div class="mb-5 md:mb-0">
          <div class="mb-2 text-lg font-normal">配配飲一號店</div>
          <ul class="grid grid-cols-12 pl-0 list-none shopPosition">
            <li class="col-span-12 md:col-span-6">
              <i class=" pay-pin text-subyellow-500"></i>
              台北市大安區仁愛路四段345巷6弄78號
            </li>
            <li class="col-span-6 md:col-span-3"><i class="pay-tel text-subyellow-500"></i>02-2456-7891</li>
            <li class="col-span-6 md:col-span-3"><i class=" pay-clock text-subyellow-500"></i>24H 全年無休</li>
          </ul>
        </div>
        <a href="/" target="_blank" class="flex-shrink-0 btn-border-light-blue-sm">查看位置</a>
      </div>
    </div>
    <div class="p-5 border rounded-3xl border-lightblue-placeholder">
      <div class="items-center md:flex">
        <h3 class="text-xl md:mb-0 md:text-2xl">付款方式</h3>
        <div class="flex md:ml-5">
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
        <div class="mr-5 text-lg font-semibold">選擇信用卡</div>
        <div>
          <div class="mb-5">
            <div><input type="radio" name="card" id="" /><span>**** 4893</span></div>
            <div><input type="radio" name="card" id="" /><span>**** 4893</span></div>
          </div>
          <div class="btn-border-light-blue-sm">增加信用卡</div>
        </div>
      </div>
    </div>
    <div class="justify-between md:flex">
      <div>
        <div class="items-center my-10 md:flex">
          <div class="mb-3">請輸入折扣碼</div>
          <div class="flex">
            <div class="flex-grow mr-5 md:mx-5">
              <input type="text" name="" id="" value="PAYPATDRINK" />
            </div>
            <div class="btn-dark-blue">使用</div>
          </div>
        </div>
      </div>
      <div class="text-right">
        <countResult />
      </div>
    </div>
    <div class="text-right">
      <div class="inline-block w-40 text-center btn-dark-blue">付款</div>
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
