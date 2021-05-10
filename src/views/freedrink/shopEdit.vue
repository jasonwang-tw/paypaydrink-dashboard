<template>
  <div id="shopEdit" class="text-main-500">
    <div class="relative mb-5">
      <router-link
        to="/free_drink/portal"
        class="absolute flex items-center no-underline duration-200 hover:text-blue-500"
      >
        <i class="text-2xl pay-left"></i>
        返回
      </router-link>
      <h2 class="mx-auto mb-0 text-2xl text-center md:text-3xl">編輯飲料鋪</h2>
    </div>
    <div class="text-center text-blue-900">
      開始裝飾您的飲料鋪吧
    </div>
    <div class="my-5">
      <div class="relative flex items-center justify-center mb-3 bg-lightblue-bg h-60 rounded-3xl">
        <div class="btn-border-light-blue">
          設定封面照片
        </div>
        <input class="absolute w-full h-full opacity-0" type="file" name="" id="" />
      </div>
      <label for="">飲料鋪名稱</label>
      <input class="mb-3" type="text" name="" id="" />
      <label for="">飲料鋪介紹</label>
      <textarea class="mb-3" name="" id="" cols="30" rows="7"></textarea>
      <div>
        <h4>設定熱門配方</h4>
        <ul class="pl-0 drinkSet">
          <li v-for="(d, index) in haveDrink" class="flex items-center mb-3 list-none">
            <input
              type="checkbox"
              name="drinkSet"
              :id="d.value"
              :value="d.value"
              v-model="hotDrink"
            />
            <label :for="d.value"></label><span>{{ d.name }}</span>
          </li>
        </ul>
      </div>
      <div class="inline-block text-center btn-dark-blue">儲存</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'shopEdit',
    components: {},
    data() {
      return {
        haveDrink: [
          {
            name: '東方不敗',
            value: 'drink1'
          },
          {
            name: '甜蜜蜜',
            value: 'drink2'
          },
          {
            name: '愛在西元前',
            value: 'drink3'
          }
        ],
        hotDrink: []
      }
    }
  }
</script>

<style lang="scss" scoped>
  .drinkContainer {
    max-width: 800px;
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
    // span {
    // }
  }
</style>
