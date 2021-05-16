<template>
  <div id="slideshow">
    <splide :options="options">
      <splide-slide v-for="(item, index) in star" :key="index" class="mb-20">
        <div class="flex flex-wrap justify-center md:flex-nowrap">
          <div class="flex-shrink-0 mb-5 overflow-hidden rounded-full starImg md:mr-5 md:mb-0">
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="starInfo md:text-left">
            <h5 class="mb-0 starName">{{ item.name }}</h5>
            <div class="my-5 starSpeak">{{ item.speak }}</div>
            <router-link class="inline-block starPush btn-border-light-blue" to="/drinkShop"
              >名人推薦</router-link
            >
          </div>
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
    data() {
      return {
        options: {
          // rewind: true,
          width: 1440,
          gap: '3rem',
          perPage: 3,
          perMove: 1,
          type: 'loop',
          // autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          focus: 'center',
          fixedWidth: '420px',
          // arrows      : 'slider',
          breakpoints: {
            '1280': {
              width: 1160,
              perPage: 3,
              fixedWidth: 500,
              gap: '3rem'
            },
            '1024': {
              width: 960,
              fixedWidth: 500,
              perPage: 2,
              gap: '3rem'
            },
            '768': {
              width: 720,
              fixedWidth: 680,
              perPage: 1,
              gap: '2rem'
            },
            '480': {
              width: 440,
              fixedWidth: 280,
              perPage: 1,
              gap: '3rem'
            },
            '414': {
              width: 414,
              fixedWidth: 300,
              perPage: 1,
              gap: '1rem'
            },
            '375': {
              width: 335,
              fixedWidth: 240,
              perPage: 1,
              gap: '3rem'
            },
            '320': {
              width: 280,
              fixedWidth: 200,
              perPage: 1,
              gap: '3rem'
            }
          }
        },
        star: [
          {
            imgSrc: require('../assets/images/active1.jpg'),
            name: 'Jomen',
            speak: '透過品牌專屬APP，消費者可以隨時下單，隨處購買',
            pushLink: '/'
          },
          {
            imgSrc: require('../assets/images/active1.jpg'),
            name: '滴妹',
            speak: '透過品牌專屬APP，消費者可以隨時下單，隨處購買',
            pushLink: '/'
          },
          {
            imgSrc: require('../assets/images/active1.jpg'),
            name: 'HowHow',
            speak: '透過品牌專屬APP，消費者可以隨時下單，隨處購買',
            pushLink: '/'
          },
          {
            imgSrc: require('../assets/images/active1.jpg'),
            name: 'Jomen',
            speak: '透過品牌專屬APP，消費者可以隨時下單，隨處購買',
            pushLink: '/'
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .starImg {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
