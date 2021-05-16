<template>
  <div id="edit_drink">
    <div class="relative mb-5">
      <router-link
        to="/free_drink/portal"
        class="absolute flex items-center no-underline duration-200 hover:text-blue-500"
      >
        <i class="text-2xl pay-left"></i>
        返回
      </router-link>
      <h2 class="mx-auto mb-0 text-2xl text-center md:text-3xl">新增配方</h2>
    </div>
    <div class="text-center text-blue-900">
      配配飲將依據所添加的茶底&配料酌收食材費，將會在購買飲品付款時收取。
    </div>
    <div class="py-10 drinkProgress">
      <div class="flex justify-between">
        <div class="text-center">
          <div class="mb-2 text-lg font-normal">0ml</div>
          <img src="../../assets/images/drinkCup0.svg" alt="" srcset="" class="inline-block" />
        </div>
        <div class="text-center">
          <div class="mb-2 text-lg font-normal">250ml</div>
          <img src="../../assets/images/drinkCup50.svg" alt="" srcset="" class="inline-block" />
        </div>
        <div class="text-center">
          <div class="mb-2 text-lg font-normal">500ml</div>
          <img src="../../assets/images/drinkCup100.svg" alt="" srcset="" class="inline-block" />
        </div>
      </div>
      <div class="progress bg-lightblue-placeholder w-full block h-2.5 rounded-3xl mt-5">
        <div class="block h-full progressBar bg-main-500 w-36 rounded-3xl">
          <div class="barValue">
            <i class="text-xs pay-arrow_top text-lightblue-500"></i>
            <div class="text-lg font-normal">30ml</div>
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
      <div class="grid grid-cols-12 mt-5 mb-3">
        <div class="md:col-span-8 col-span-full">茶底種類</div>
        <div class="hidden col-span-2 text-center md:block">食材費</div>
      </div>
      <div class="grid items-center grid-cols-12 mb-8">
        <div class="grid grid-cols-12 gap-3 mb-3 col-span-full md:col-span-8 md:mb-0">
          <select name="" id="" class="col-span-6 md:col-span-4">
            <option value="">果汁</option>
          </select>
          <select name="" id="" class="col-span-6 md:col-span-4">
            <option value="">柳橙汁</option>
          </select>
          <select name="" id="" class="col-span-full md:col-span-4">
            <option value="">10ml</option>
          </select>
        </div>
        <div class="col-span-6 text-xl font-normal md:text-center md:col-span-2 text-subyellow-500">
          $60
        </div>
        <div
          class="col-span-6 text-right text-red-500 duration-200 cursor-pointer md:col-span-2 text-rightmd:col-span-4 md:text-center hover:text-red-700"
        >
          刪除
        </div>
      </div>
      <div class="inline-block btn-border-light-blue">增加茶底</div>
    </div>
    <div class="p-5 bg-lightblue-bg rounded-3xl setArea">
      <h4>添加配料</h4>
      <div class="grid grid-cols-12 mt-5 mb-3">
        <div class="md:col-span-8 col-span-full">配料種類</div>
        <div class="hidden col-span-2 text-center md:block">食材費</div>
      </div>
      <div class="grid items-center grid-cols-12 mb-8">
        <div class="grid grid-cols-12 gap-3 mb-3 col-span-full md:col-span-8 md:mb-0">
          <select name="" id="" class="col-span-6 md:col-span-4">
            <option value="">加工食品</option>
          </select>
          <select name="" id="" class="col-span-6 md:col-span-4">
            <option value="">布丁</option>
          </select>
          <select name="" id="" class="col-span-full md:col-span-4">
            <option value="">10ml</option>
          </select>
        </div>
        <div class="col-span-6 text-xl font-normal md:text-center md:col-span-2 text-subyellow-500">
          $60
        </div>
        <div
          class="col-span-6 text-right text-red-500 duration-200 cursor-pointer md:col-span-2 text-rightmd:col-span-4 md:text-center hover:text-red-700"
        >
          刪除
        </div>
      </div>
      <div class="inline-block btn-border-light-blue">增加配料</div>
    </div>
    <div class="p-5 bg-lightblue-bg rounded-3xl setArea">
      <h4>配方資訊</h4>
      <div class="mb-3">
        <div
          class="relative flex items-center justify-center w-24 h-24 overflow-hidden bg-white border border-lightblue-high btn"
        >
          <i class="text-4xl pay-plus text-lightblue-high"></i>
          <input type="file" name="" id="" class="absolute left-0 w-full h-full opacity-0" multiple />
        </div>
        <div class="mt-3 text-sm text-red-500">每張圖片限制最大200kb，格式為.JPEG, .PNG</div>
      </div>
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
      <div class="grid grid-cols-12 drinkTotal">
        <div class="flex items-center col-span-3 md:col-span-1">
          <big class="font-normal">180</big><span class="mx-3">+</span>
        </div>
        <div class="col-span-9 md:col-span-3">
          <input type="text" name="" id="" placeholder="請輸入您要收取的費用" />
        </div>
        <div class="flex items-center md:col-span-3">
          <span class="hidden mx-3 md:inline-block">=</span
          ><span class="mr-3 md:hidden">Total.</span><big class="font-normal">600</big>
        </div>
      </div>
      <div class="inline-block mt-3 text-sm text-red-500">*食材費用加欲收取費用等於平台販售金額</div>
    </div>
    <div class="p-5 bg-lightblue-bg rounded-3xl setArea">
      <h4>客製選項</h4>
      <div class="flex mb-3 drinkSet" v-for="(i, index) in drinkset" :key="index">
        <div class="flex-shrink-0 mr-5 font-normal">{{ i.title }}</div>
        <div class="flex flex-wrap">
          <div v-for="(h, index) in i.selsct" :key="index" class="flex items-center">
            <input
              type="checkbox"
              name="heat"
              :id="h.value"
              :value="h.value"
              v-model="i.drinkSeting"
            />
            <label :for="h.value"></label><span>{{ h.name }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="inline-block text-center btn-dark-blue">儲存配方</div>
  </div>
</template>

<script>
  export default {
    name: 'edit_drink',
    computed: {},
    data() {
      return {
        drinkset: [
          {
            title: '溫度',
            selsct: [
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
            drinkSeting: []
          },
          {
            title: '容量',
            selsct: [
              {
                name: '大杯',
                value: 'large'
              },
              {
                name: '中杯',
                value: 'normal'
              }
            ],
            drinkSeting: []
          },
          {
            title: '冰塊',
            selsct: [
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
            drinkSeting: []
          },
          {
            title: '甜度',
            selsct: [
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
            drinkSeting: []
          }
        ]
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
  // .selectBar {
  //   select {
  //     flex-shrink: 0;
  //     margin-right: 1rem;
  //   }
  //   select:first-child {
  //     width: 200px;
  //   }
  //   select:nth-child(2) {
  //     width: 200px;
  //   }
  //   select:nth-child(3) {
  //     width: 200px;
  //   }
  // }
  .drinkSet {
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
      // margin-right: 2rem;
    }
  }
  // .titleType {
  //   width: 600px;
  //   margin-right: 9rem;
  // }
  @media (max-width: 768px) {
    .drinkProgress {
      width: auto;
    }
  }
</style>
