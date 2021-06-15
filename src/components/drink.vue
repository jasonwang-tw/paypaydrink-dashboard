<template>
  <div id="slideshow">
    <splide :options="options">
      <splide-slide v-for="(item, index) in drinkTop" :key="index">
        <slot name="topNumber" :index="index"></slot>
        <div class="pt-5">
          <router-link
            to="/products/page"
            class="no-underline border border-lightblue-high block rounded-3xl overflow-hidden drinkHover bg-white"
          >
            <div class="drinkMainImg -mt-1">
              <img :src="item.imgSrc" alt="" />
            </div>
            <div class="drinkInfo text-left p-2 sm:p-5">
              <div class="drinkName text-md sm:text-xl font-normal text-main-500">
                {{ item.name }}
              </div>
              <div class="drinkPrice text-md sm:text-xl text-subyellow-500 my-2">
                $ {{ item.price }}
              </div>
              <div class="flex justify-between text-sm sm:text-lg">
                <div class="rating text-subyellow-500">
                  <i class="pay-start mr-2"></i>{{ item.rating }}
                </div>
                <div class="sold">
                  <span class="text-subyellow-500 mr-2">售出 </span>{{ item.sold }}
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </splide-slide>
    </splide>
  </div>
</template>

<script>
  // 註冊本地組件
  import { Splide, SplideSlide } from '@splidejs/vue-splide'

  export default {
    name: 'slide',
    components: {
      Splide,
      SplideSlide
    },
    // props: {
    //   indexClass: String
    // },
    data() {
      return {
        options: {
          rewind: true,
          width: 1440,
          gap: '2.5rem',
          perPage: 5,
          perMove: 1,
          // type: 'loop',
          // autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          // focus: 'center',
          fixedWidth: 255,
          // arrows      : 'slider',
          breakpoints: {
            '1280': {
              width: 1240,
              fixedWidth: 255,
              perPage: 3,
              gap: '2rem'
            },
            '1024': {
              width: 960,
              fixedWidth: 255,
              perPage: 3,
              gap: '2rem'
            },
            '768': {
              width: 720,
              fixedWidth: 255,
              perPage: 1,
              gap: '2rem'
            },
            '480': {
              width: 440,
              fixedWidth: 150,
              perPage: 1,
              gap: '1rem'
            },
            '414': {
              width: 374,
              fixedWidth: 150,
              perPage: 1,
              gap: '1rem'
            },
            '375': {
              width: 320,
              fixedWidth: 150,
              perPage: 1,
              gap: '1rem'
            },
            '320': {
              width: 260,
              fixedWidth: 150,
              perPage: 1,
              gap: '1rem'
            }
          }
        },
        drinkTop: [
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/tea1.png'),
            name: '古道茶鄉',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/tea2.png'),
            name: '初戀的滋味',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/tea3.png'),
            name: '致青春',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../assets/images/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          }
        ]
      }
    }
  }
</script>
<style lang="scss">
  .drinkMainImg {
    height: 255px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .drinkHover:hover {
    // margin-top: -1rem;
    transform: translateY(-1rem);
  }
  .splide__pagination {
    top: calc(100% + 10px);
  }
  @media (max-width: 480px) {
    .drinkMainImg {
      height: 150px;
    }
    .splide__arrow {
      width: 1.5rem;
      height: 1.5rem;
      font-size: .75rem;
    }
  }
</style>
