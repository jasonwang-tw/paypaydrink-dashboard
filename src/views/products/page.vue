<template>
  <div id="drinkPage" class="mx-auto mb-20 md:my-20 customContainer">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div class="col-span-1">
        <splide :options="primaryOptions" ref="primary" id="primary">
          <splide-slide v-for="(item, index) in drinkTop" :key="index">
            <div class="w-full h-full imgMain">
              <img :src="item.imgSrc" alt="" />
            </div>
          </splide-slide>
        </splide>
        <splide :options="secondaryOptions" ref="secondary" id="secondary" class="px-5">
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
      <div class="md:pt-10 px-5">
        <h1 class="text-2xl md:text-3xl">東方不敗</h1>
        <div class="mb-8 text-blue-900">
          <span class="">配方編號</span>
          <span class="ml-3">3345678</span>
        </div>
        <ul class="flex pl-0 md:text-lg list-none drinkInfo text-subyellow-500">
          <li><i class="pay-start"></i> {{ info.rating }}</li>
          <li>{{ info.people }} 人評價</li>
          <li>已出售 {{ info.buy }}</li>
        </ul>
        <div class="flex items-center my-3">
          <div class="mr-10 text-2xl font-semibold text-subyellow-500">$60</div>
          <div class="flex items-center text-blue-900 bg-lightblue-bg px-5 py-2.5 rounded-xl">
            <i class="mr-2 text-blue-100 pay-click_outline text-xl"></i>
            <span>飲品優惠，低消100折$30</span>
          </div>
        </div>
        <div>
          <span class="">內含配料</span>
          <span class="ml-3 text-subyellow-500">粉圓、布丁、紅豆</span>
        </div>
        <hr />
        <div class="flex items-center mb-3 drinkDetail" v-for="(i, index) in filter_detail">
          <span class="mr-3">{{ i.name }}</span>
          <div class="mr-3" v-for="(value, v_index) in i.value" :key="v_index">
            <input
              :id="value"
              class="hidden drinkbtn"
              type="radio"
              v-model="i.current_detail"
              :name="i.nameValue"
              :value="value"
            />
            <label :for="value" class="block btn-border-light-blue-lightblue-sm">{{
              i.text[v_index]
            }}</label>
          </div>
        </div>
        <hr />
        <div class="flex items-center justify-center md:justify-between flex-wrap">
          <div
            class="cursor-pointer md:mb-0 mb-5"
            @click=";(favorites = !favorites), (like = !message.like)"
          >
            <div v-if="favorites === true" class="flex items-center text-red-500">
              <i class="mr-2 pay-love"></i>
              <div>已收藏</div>
            </div>
            <div v-if="favorites === false" class="flex items-center">
              <i class="mr-2 pay-love_outline"></i>
              <div>收藏</div>
            </div>
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
    <div class="px-5">
      <hr class="md:my-20 my-10" />
    </div>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-12 px-5">
      <div class="col-span-1 md:col-span-4">
        <div class="flex masterStore">
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
            <div class="flex mt-3 justify-between">
              <div @click="like = !like" class="text-sm mr-3 cursor-pointer duration-200">
                <div
                  v-if="like === true"
                  class="text-white btn-sm border-red-400 bg-red-400 border hover:border-red-700 hover:bg-red-700"
                >
                  已關注
                </div>
                <div
                  v-if="like === false"
                  class="text-red-400 border border-red-400 btn-sm hover:border-red-700 hover:text-red-700"
                >
                  關注
                </div>
              </div>
              <router-link to="/drinkShop" class="text-sm btn-border-light-blue-sm"
                >查看全部配方</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-1 md:col-span-8">
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
            <div v-for="(star, index) in comment" :key="index" class="flex-shrink-0">
              <input
                type="radio"
                name="comment"
                v-model="index = current_filter"
                :value="star.value"
                :id="star.value"
                class="hidden ratingBtn"
              />
              <label
                :for="star.value"
                class="inline-block border cursor-pointer btn-sm border-lightblue-high text-lightblue-500 hover:border-subyellow-500 hover:text-subyellow-500"
              >
                <i class="mr-2 pay-start"></i>{{ star.text }}
              </label>
            </div>
          </div>
        </div>
        <div class="comment">
          <div v-if="filter_comment.length === 0">
            <h5 class="text-lightblue-500 text-center my-10">此篩選目前沒任何評價</h5>
          </div>
          <template v-else>
            <div
              class="flex p-5 mb-5 border rounded-3xl border-lightblue-high"
              v-for="(cu, index) in filter_comment"
              :key="index"
            >
              <div class="flex-shrink-0 mr-3 overflow-hidden rounded-full userImg">
                <img :src="cu.photo" alt="" />
              </div>
              <div>
                <div class="font-normal username">{{ cu.name }}</div>
                <div class="userRating text-subyellow-500">
                  <i
                    class="mr-2 pay-start"
                    v-for="(item, index) in cu.rating_text"
                    :key="index"
                  ></i>
                </div>
                <div class="text-blue-900 commentText">
                  <p>{{ cu.text }}</p>
                </div>
                <small class="text-lightblue-500">{{ cu.date }}</small>
              </div>
            </div>
          </template>
        </div>
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
          cover: true,
          breakpoints: {
            '480': {
              fixedHeight: 250
            }
          }
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
        favorites: false,
        like: false,
        info: {
          rating: '4.5',
          people: '4',
          buy: '554'
        },
        comment: [
          {
            text: '全部',
            value: 'rating_all'
          },
          {
            text: 1,
            value: 'rating_1'
          },
          {
            text: 2,
            value: 'rating_2'
          },
          {
            text: 3,
            value: 'rating_3'
          },
          {
            text: 4,
            value: 'rating_4'
          },
          {
            text: 5,
            value: 'rating_5'
          }
        ],
        current_filter: 'rating_all',
        comment_user: [
          {
            name: 'Howhow',
            photo: require('../../assets/images/how.jpg'),
            text:
              '特製的紅茶搭配契作的柳營鮮乳，口感滑順、奶香醇厚。 可選擇搭配紅茶：伯爵紅茶、台灣靛紅。特製的台灣純綠搭配契作的柳營鮮乳，口感滑順、奶香醇厚。',
            rating_text: 1,
            rating: 'rating_1',
            date: '2020-07-18 17:59'
          },
          {
            name: 'Howhow',
            photo: require('../../assets/images/how.jpg'),
            text:
              '特製的紅茶搭配契作的柳營鮮乳，口感滑順、奶香醇厚。 可選擇搭配紅茶：伯爵紅茶、台灣靛紅。特製的台灣純綠搭配契作的柳營鮮乳，口感滑順、奶香醇厚。',
            rating_text: 2,
            rating: 'rating_2',
            date: '2020-07-18 17:59'
          }
        ],
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
        detail: [
          {
            name: '溫度',
            nameValue: 'temp',
            text: ['冷飲', '常溫', '熱飲'],
            value: ['cool', 'warm', 'hot'],
            current_detail: 'cool'
          },
          {
            name: '容量',
            nameValue: 'size',
            text: ['中杯', '大杯'],
            value: ['normal', 'big'],
            current_detail: 'normal'
          },
          {
            name: '甜度',
            nameValue: 'sugar',
            text: ['無糖', '三分', '半分', '正常'],
            value: ['zero', 'third', 'five', 'ten'],
            current_detail: 'zero'
          },
          {
            name: '冰塊',
            nameValue: 'ice',
            text: ['去冰', '微冰', '少冰', '正常'],
            value: ['no', 'little', 'half', 'all'],
            current_detail: 'no'
          }
        ]
      }
    },
    methods: {},
    computed: {
      filter_comment() {
        if (this.current_filter === 'rating_all') {
          return this.comment_user
        } else {
          return this.comment_user.filter(result => result.rating == this.current_filter)
        }
      },
      filter_detail() {
        if (this.detail[0].current_detail === 'cool') {
          return this.detail
        } else {
          return this.detail.filter(d_data => d_data.name !== '冰塊')
        }
      }
    },
    mounted() {
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
  .drinkbtn:checked + label {
    color: white;
    border-color: var(--color-main-500);
    background-color: var(--color-main-500);
  }
  .ratingBtn:checked + label {
    color: white;
    border-color: var(--color-subyellow);
    background-color: var(--color-subyellow);
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
  // .ratingfilter {
  //   .avtice {
  //     color: white;
  //     border-color: var(--color-subyellow);
  //     background-color: var(--color-subyellow);
  //   }
  // }
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
