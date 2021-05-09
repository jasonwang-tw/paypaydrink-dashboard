<template>
  <div id="portal">
    <div class="customContainer mx-auto my-20 text-main-500">
      <div class="mb-5 relative">
        <router-link
          to="/free_drink/portal"
          class="absolute no-underline flex items-center hover:text-blue-500 duration-200"
        >
          <i class="pay-left text-2xl"></i>
          返回
        </router-link>
        <h2 class="mb-0 mx-auto text-center">新增配方</h2>
      </div>
      <div class="text-center text-blue-900">
        配配飲將依據所添加的茶底&配料酌收食材費，將會在購買飲品付款時收取。
      </div>
      <div class="drinkProgress py-10">
        <div class="flex justify-between">
          <div class="text-center">
            <div class="font-normal text-lg mb-2">0ml</div>
            <img src="../../assets/images/drinkCup0.svg" alt="" srcset="" class="inline-block" />
          </div>
          <div class="text-center">
            <div class="font-normal text-lg mb-2">250ml</div>
            <img src="../../assets/images/drinkCup50.svg" alt="" srcset="" class="inline-block" />
          </div>
          <div class="text-center">
            <div class="font-normal text-lg mb-2">500ml</div>
            <img src="../../assets/images/drinkCup100.svg" alt="" srcset="" class="inline-block" />
          </div>
        </div>
        <div class="progress bg-lightblue-placeholder w-full block h-2.5 rounded-3xl mt-5">
          <div class="progressBar bg-main-500 h-full block w-36 rounded-3xl">
            <div class="barValue">
              <i class="pay-arrow_top text-lightblue-500 text-xs"></i>
              <div class="font-normal text-lg">30ml</div>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-center mt-24">
          目前食材費<big class="ml-5 font-normal text-subyellow-500">$180</big>
        </div>
      </div>
      <div class="p-5 bg-lightblue-bg rounded-3xl setArea">
        <h4>選擇茶底</h4>
        <span class="text-red-500">*請至少選擇一種茶底</span>
        <div class="flex mt-5 mb-3">
          <div class="titleType">茶底種類</div>
          <div>食材費</div>
        </div>
        <div class="flex items-center justify-between selectBar mb-3">
          <div>
            <select name="" id="">
              <option value="">果汁</option>
            </select>
            <select name="" id="">
              <option value="">柳橙汁</option>
            </select>
            <select name="" id="">
              <option value="">10ml</option>
            </select>
          </div>
          <div class="text-subyellow-500 font-normal">$60</div>
          <div class="text-red-500 duration-200 hover:text-red-700 cursor-pointer">刪除</div>
        </div>
        <div class="btn-border-light-blue inline-block">增加茶底</div>
      </div>
      <div class="p-5 bg-lightblue-bg rounded-3xl setArea">
        <h4>添加配料</h4>
        <div class="flex mt-5 mb-3">
          <div class="titleType">配料種類</div>
          <div>食材費</div>
        </div>
        <div class="flex items-center justify-between selectBar mb-3">
          <div>
            <select name="" id="">
              <option value="">加工食品</option>
            </select>
            <select name="" id="">
              <option value="">布丁</option>
            </select>
            <select name="" id="">
              <option value="">10ml</option>
            </select>
          </div>
          <div class="text-subyellow-500 font-normal">$60</div>
          <div class="text-red-500 duration-200 hover:text-red-700 cursor-pointer">刪除</div>
        </div>
        <div class="btn-border-light-blue inline-block">增加配料</div>
      </div>
      <div class="p-5 bg-lightblue-bg rounded-3xl setArea">
        <h4>編輯配方資訊</h4>
        <div class="mb-3">
          <input type="text" name="" id="" placeholder="配方名稱" />
        </div>
        <div class="mb-3">
          <select name="" id="">
            <option value="">選擇飲品分類</option>
          </select>
        </div>
        <div class="mb-3">
          <textarea name="" id="" cols="30" rows="5" placeholder="配方介紹"></textarea>
        </div>
        <div class="mt-5 mb-3">設定販售金額</div>
        <div class="flex items-center drinkTotal">
          <div class="flex items-center"><big class="font-normal mr-5">180</big>+</div>
          <div><input type="text" name="" id="" placeholder="請輸入您要收取的費用" /></div>
          <div>
            <span class="flex items-center">=<big class="font-normal ml-5">60</big></span>
          </div>
        </div>
        <small class="text-red-500 mt-3 inline-block">*食材費用加欲收取費用等於平台販售金額</small>
      </div>
      <div class="p-5 bg-lightblue-bg rounded-3xl setArea">
        <h4>客製選項</h4>
        <div class="flex items-center drinkSet">
          <div class="mr-5 font-normal">溫度</div>
          <div v-for="(h, index) in heat" :key="index" class="flex items-center">
            <input
              type="checkbox"
              name="heat"
              :id="h.value"
              :value="h.value"
              v-model="drinkSeting.heat"
            />
            <label :for="h.value"></label><span>{{ h.name }}</span>
          </div>
        </div>
        <div class="flex items-center drinkSet">
          <div class="mr-5 font-normal">容量</div>
          <div v-for="(c, index) in cup" :key="index" class="flex items-center">
            <input
              type="checkbox"
              name="cup"
              :id="c.value"
              :value="c.value"
              v-model="drinkSeting.cup"
            />
            <label :for="c.value"></label><span>{{ c.name }}</span>
          </div>
        </div>
        <div class="flex items-center drinkSet">
          <div class="mr-5 font-normal">冰塊</div>
          <div v-for="(i, index) in ice" :key="index" class="flex items-center">
            <input
              type="checkbox"
              name="cup"
              :id="i.value"
              :value="i.value"
              v-model="drinkSeting.ice"
            />
            <label :for="i.value"></label><span>{{ i.name }}</span>
          </div>
        </div>
        <div class="flex items-center drinkSet">
          <div class="mr-5 font-normal">甜度</div>
          <div v-for="(s, index) in sugar" :key="index" class="flex items-center">
            <input
              type="checkbox"
              name="cup"
              :id="s.value"
              :value="s.value"
              v-model="drinkSeting.sugar"
            />
            <label :for="s.value"></label><span>{{ s.name }}</span>
          </div>
        </div>
      </div>
      <div class="btn-remove inline-block text-center mr-5">取消</div>
      <div class="btn-dark-blue inline-block text-center">儲存配方</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'portal',
    computed: {},
    data() {
      return {
        heat: [
          {
            name: '冰',
            value: 'cool'
          },
          {
            name: '溫',
            value: 'warm'
          },
          {
            name: '熱',
            value: 'hot'
          }
        ],
        cup: [
          {
            name: '大杯',
            value: 'large'
          },
          {
            name: '中杯',
            value: 'normal'
          }
        ],
        ice: [
          {
            name: '去冰',
            value: 'ice_no'
          },
          {
            name: '微冰',
            value: 'ice3'
          },
          {
            name: '少冰',
            value: 'ice5'
          },
          {
            name: '正常',
            value: 'ice10'
          }
        ],
        sugar: [
          {
            name: '無糖',
            value: 'sugar_no'
          },
          {
            name: '微糖',
            value: 'sugar3'
          },
          {
            name: '半糖',
            value: 'sugar5'
          },
          {
            name: '正常',
            value: 'sugar10'
          }
        ],
        drinkSeting: {
          heat: [],
          cup: [],
          ice: [],
          sugar: []
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userImg {
    width: 120px;
    height: 120px;
  }
  .masterInfo {
    li {
      margin-right: 1rem;
    }
  }
  .drinkImg {
    width: 100px;
    height: 100px;
  }
  .drinkInfo {
    flex-basis: 60%;
  }
  .progressBar {
    position: relative;
    .barValue {
      right: 0;
      top: 20px;
      text-align: center;
      position: absolute;
      transform: translateX(50%);
    }
  }
  .drinkProgress {
    width: 650px;
    margin: 0 auto;
  }
  .setArea {
    margin-bottom: 2rem;
  }
  .selectBar {
    select {
      flex-shrink: 0;
      margin-right: 1rem;
    }
    select:first-child {
      width: 200px;
    }
    select:nth-child(2) {
      width: 200px;
    }
    select:nth-child(3) {
      width: 200px;
    }
  }
  .drinkSet {
    margin-bottom: 1rem;
    input {
      display: none;
      &:checked + label {
        background-image: url(../../assets/images/click.svg);
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 70% 70%;
      }
    }
    label {
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
      background-color: #fff;
      border: 1px solid var(--color-lightblue);
      border-radius: 0.25rem;
    }
    span {
      width: 50px;
    }
  }
  .drinkTotal {
    > div {
      margin-right: 2rem;
    }
  }
  .titleType {
    width: 600px;
    margin-right: 9rem;
  }
</style>
