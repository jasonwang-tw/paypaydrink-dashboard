<template>
  <div id="drinkPage">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div class="col-span-1">
        <splide :options="primaryOptions" ref="primary" id="primary">
          <splide-slide v-for="(item, index) in drinkTop" :key="index">
            <div class="w-full h-full imgMain">
              <img :src="item.imgSrc" alt="" />
            </div>
          </splide-slide>
        </splide>
        <splide :options="secondaryOptions" ref="secondary" id="secondary">
          <splide-slide
            v-for="(item, index) in drinkTop"
            :key="index"
            class="overflow-hidden imgContent rounded-3xl"
          >
            <div class="w-full h-full rounded-3xl bg-lightblue-bg">
              <img :src="item.imgSrc" alt="" />
            </div>
          </splide-slide>
        </splide>
      </div>
      <div class="pt-10 text-main-500">
        <h1>東方不敗</h1>
        <div class="mb-8 text-blue-900">
          <span class="">配方編號</span>
          <span class="ml-3">3345678</span>
        </div>
        <ul class="flex pl-0 text-lg font-normal list-none drinkInfo text-subyellow-500">
          <li><i class="pay-start"></i> {{ info.rating }}</li>
          <li>{{ info.people }} 人評價</li>
          <li>已出售 {{ info.buy }}</li>
        </ul>
        <div class="flex items-center my-3">
          <div class="mr-10 text-2xl font-normal text-subyellow-500">$60</div>
          <div class="flex items-center text-blue-900 bg-lightblue-bg px-5 py-2.5 rounded-xl">
            <i class="mr-2 text-blue-100 pay-click_outline"></i>
            <span>飲品優惠，低消100折$30</span>
          </div>
        </div>
        <div>
          <span class="">內含配料</span>
          <span class="ml-3 text-subyellow-500">粉圓、布丁、紅豆</span>
        </div>
        <hr />
        <div class="flex items-center mb-3 drinkDetail" v-for="(i, index) in detail">
          <span class="mr-3">{{ i.name }}</span>
          <div class="mr-3" v-for="(value, index) in i.value">
            <input
              :id="value"
              class="hidden drinkbtn"
              type="radio"
              :name="i.nameValue"
              :value="i.text[index]"
            />
            <label :for="value" class="block btn-border-light-blue-lightblue-sm">{{
              i.text[index]
            }}</label>
          </div>
        </div>
        <hr />
        <div class="flex items-center justify-between">
          <div class="flex items-center cursor-pointer">
            <i class="mr-2 pay-love_outline"></i>
            <div>收藏</div>
          </div>
          <div class="flex items-center">
            <div>數量</div>
            <div class="mx-5">
              <select name="" id="" class="buySelect">
                <option :value="index" v-for="(n, index) in 99">{{ index + 1 }}</option>
              </select>
            </div>
            <div class="btn-dark-blue">加入購物車</div>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-20" />
    <div class="grid grid-cols-1 gap-10 md:grid-cols-12">
      <div class="col-span-1 md:col-span-4">
        <div class="flex masterStore text-main-500">
          <div class="flex-shrink-0 mr-5 overflow-hidden rounded-full userImg">
            <img src="../../assets/images/how.jpg" alt="" />
          </div>
          <div>
            <div class="mb-5 text-xl font-normal">HowHow</div>
            <div>
              <i class="mr-2 pay-users storeIcon text-subyellow-500"></i>
              <span>1,385 關注</span>
            </div>
            <div>
              <i class="mr-2 pay-drink storeIcon text-subyellow-500"></i>
              <span>已上架 134 種配方</span>
            </div>
            <div class="flex mt-3">
              <div
                class="mr-3 text-sm text-red-400 duration-200 border border-red-400 cursor-pointer btn-sm hover:border-red-700 hover:text-red-700"
              >
                關注
              </div>
              <router-link to="/drinkShop" class="text-sm btn-border-light-blue-sm"
                >查看全部配方</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 md:col-span-8 text-main-500">
        <h3>飲品介紹</h3>
        <div class="drinkContent">
          <p>
            特製的紅茶搭配契作的柳營鮮乳，口感滑順、奶香醇厚。
            可選擇搭配紅茶：伯爵紅茶、台灣靛紅。特製的台灣純綠搭配契作的柳營鮮乳，口感滑順、奶香醇厚。
          </p>
        </div>
        <hr class="my-10" />
        <div class="items-center justify-between mb-4 md:flex">
          <div class="flex items-center">
            <h3 class="mb-0">評價</h3>
            <div class="flex items-center ml-5 ratingStar text-subyellow-500">
              <div class="mr-2 text-xl">
                <i class="pay-start"></i>
                <span class="font-normal">4.5</span>
              </div>
              <span>/ 5</span>
            </div>
          </div>
          <div
            class="flex items-center mt-3 overflow-x-scroll md:mt-0 ratingfilter md:overflow-x-auto"
          >
            <div v-for="(star, index) in comment.text" :key="index" class="flex-shrink-0">
              <input
                type="radio"
                name="comment"
                :id="comment.value[index]"
                class="hidden ratingBtn"
              />
              <label
                :for="comment.value[index]"
                class="inline-block btn-border-light-blue-lightblue-sm"
              >
                <i class="mr-2 pay-start"></i>{{ star }}
              </label>
            </div>
          </div>
        </div>
        <ul class="pl-0 list-none comment">
          <li
            class="flex p-5 mb-5 border rounded-3xl border-lightblue-high"
            v-for="(c, index) in 5"
          >
            <div class="flex-shrink-0 mr-3 overflow-hidden rounded-full userImg">
              <img src="../../assets/images/how.jpg" alt="" />
            </div>
            <div>
              <div class="font-normal username">Howhow</div>
              <div class="userRating text-subyellow-500"><i class="mr-2 pay-start"></i>3</div>
              <div class="text-blue-900 commentText">
                <p>
                  特製的紅茶搭配契作的柳營鮮乳，口感滑順、奶香醇厚。
                  可選擇搭配紅茶：伯爵紅茶、台灣靛紅。特製的台灣純綠搭配契作的柳營鮮乳，口感滑順、奶香醇厚。
                </p>
              </div>
              <small class="text-lightblue-500">2020-07-18 17:59</small>
            </div>
          </li>
        </ul>
        <pageNav />
      </div>
    </div>
  </div>
</template>

<script>
  import pageNav from '@/components/pageNav.vue'
  import { Splide, SplideSlide } from '@splidejs/vue-splide'

  export default {
    name: 'drinkPage',
    components: {
      pageNav,
      Splide,
      SplideSlide
    },
    data() {
      return {
        primaryOptions: {
          rewind: true,
          type: 'fade',
          fixedWidth: '100%',
          fixedHeight: 450,
          pagination: false,
          arrows: true,
          cover: true
        },
        secondaryOptions: {
          width: '100%',
          fixedWidth: 100,
          fixedHeight: 100,
          isNavigation: true,
          gap: 15,
          // focus: 'center',
          pagination: false,
          cover: true,
          arrows: false,
          breakpoints: {
            // '600': {
            //   fixedWidth: 66,
            //   fixedHeight: 40
            // }
          }
        },
        info: {
          rating: '4.5',
          people: '4',
          buy: '554'
        },
        comment: {
          text: ['全部', '1', '2', '3', '4', '5'],
          value: ['rating_all', 'rating_1', 'rating_2', 'rating_3', 'rating_4', 'rating_5']
        },
        drinkTop: [
          {
            imgSrc: require('../../assets/images/tea1.png')
          },
          {
            imgSrc: require('../../assets/images/tea2.png')
          },
          {
            imgSrc: require('../../assets/images/tea3.png')
          },
          {
            imgSrc: require('../../assets/images/active1.jpg')
          },
          {
            imgSrc: require('../../assets/images/active1.jpg')
          }
        ],
        // test: true,
        detail: [
          {
            name: '溫度',
            nameValue: 'temp',
            text: ['冷飲', '常溫', '熱飲'],
            value: ['cool', 'warm', 'hot']
          },
          {
            name: '容量',
            nameValue: 'size',
            text: ['中杯', '大杯'],
            value: ['normal', 'big']
          },
          {
            name: '甜度',
            nameValue: 'sugar',
            text: ['無糖', '三分', '半分', '正常'],
            value: ['zero ', 'third', 'five', 'ten']
          },
          {
            name: '冰塊',
            nameValue: 'ice',
            text: ['去冰', '微冰', '少冰', '正常'],
            value: ['no ', 'little', 'half', 'all']
          }
        ]
      }
    },
    methods: {
      isActive: function() {}
    },
    mounted: function() {
      this.$refs.primary.sync(this.$refs.secondary.splide)
    }
  }
</script>

<style lang="scss" scoped>
  #primary {
    border-radius: 2rem;
    margin-bottom: 2rem;
    overflow: hidden;
    background-color: var(--color-lightblue-light-bg);
  }
  // #secondary {
  // }
  .buySelect {
    width: 100px;
  }
  .drinkbtn:checked + label,
  .ratingBtn:checked + label {
    color: white;
    border-color: var(--color-main-500);
    background-color: var(--color-main-500);
  }
  .drinkInfo {
    li {
      margin-right: 1rem;
      padding-right: 1rem;
      border-right: 1px solid var(--color-lightblue-high);
    }
    li:last-child {
      border: none;
    }
  }
  .ratingfilter {
    div {
      margin-right: 0.5rem;
    }
    div:last-child {
      margin-right: 0px;
    }
  }
  .comment {
    .userImg {
      width: 50px;
      height: 50px;
    }
  }
  .masterStore {
    position: sticky;
    top: 100px;
    .userImg {
      width: 80px;
      height: 80px;
    }
  }
  .ratingfilter {
    .avtice {
      color: white;
      border-color: var(--color-main-500);
      background-color: var(--color-main-500);
    }
  }
  .ratingStar {
    letter-spacing: 0.1rem;
  }
  .storeIcon {
    text-align: center;
    width: 30px;
    display: inline-block;
  }
  .imgContent {
    // width: 100px;
    // height: 100px;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .imgMain {
    // width: 450px;
    // height: 450px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .splide--nav > .splide__track > .splide__list > .splide__slide.is-active {
    border-color: var(--color-subyellow);
  }
</style>
