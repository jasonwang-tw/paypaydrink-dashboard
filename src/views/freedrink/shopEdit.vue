<template>
  <div id="shopEdit" class="text-main-500">
    <div class="drinkContainer mx-auto my-20">
      <div class="mb-5 relative">
        <router-link
          to="/free_drink/portal"
          class="absolute no-underline flex items-center hover:text-sup1-500 duration-200"
        >
          <i class="pay-left text-2xl"></i>
          返回
        </router-link>
        <h2 class="mb-0 mx-auto text-center">編輯飲料鋪</h2>
      </div>
      <div class="text-center text-sup1-900">
        開始裝飾您的飲料鋪吧
      </div>
      <div class="my-5">
        <div class="bg-sup3-300 h-60 rounded-3xl relative mb-3 flex items-center justify-center">
          <div class="btn-border-light-blue">
            設定封面照片
          </div>
          <input class="w-full h-full opacity-0 absolute" type="file" name="" id="" />
        </div>
        <label for="">飲料鋪名稱</label>
        <input class="mb-3" type="text" name="" id="" />
        <label for="">飲料鋪介紹</label>
        <textarea class="mb-3" name="" id="" cols="30" rows="7"></textarea>
        <div>
          <h4>設定熱門配方</h4>
          <ul class="pl-0 drinkSet">
            <li v-for="(d, index) in haveDrink" class="list-none flex items-center mb-3">
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
        <div class="btn-dark-blue inline-block text-center">儲存</div>
      </div>
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
      border: 1px solid var(--color-sup3);
      border-radius: 0.25rem;
    }
    // span {
    // }
  }
</style>
