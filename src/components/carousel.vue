<template>
  <div id="slideshow">
    <splide :options="options">
      <splide-slide
        v-for="(item, index) in slideCard"
        :key="index"
        class="flex justify-center items-center rounded-3xl overflow-hidden bg-white shadow-xl mb-10"
      >
        <router-link to="/">
          <img :src="item.imgSrc" />
        </router-link>
      </splide-slide>
      <!-- <template v-slot:controls>
        <div class="splide__progress">
          <div class="splide__progress__bar">
          </div>
        </div>
        <div class="splide__autoplay">
          <button class="splide__play">Play</button>
          <button class="splide__pause">Pause</button>
        </div>
    </template> -->
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
          width: 1900,
          // autoWidth: true,
          gap: '3rem',
          perPage: 3,
          perMove: 1,
          type: 'loop',
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          focus: 'center',
          fixedWidth: 400,
          // arrows      : 'slider',
          breakpoints: {
            '1440': {
              width: 900,
              perPage: 3,
              gap: '2rem'
            },
            '768': {
              width: 768,
              perPage: 2,
              gap: '2rem'
            },
            '480': {
              width: 480,
              perPage: 1,
              gap: '1rem'
            },
            '375': {
              width: 375,
              fixedWidth: 300,
              perPage: 1,
              gap: '1rem'
            }
          }
        },
        slideCard: [
          {
            imgSrc: require('../assets/images/active1.jpg')
          },
          {
            imgSrc: require('../assets/images/active1.jpg')
          },
          {
            imgSrc: require('../assets/images/active2.jpg')
          },
          {
            imgSrc: require('../assets/images/active3.jpg')
          },
          {
            imgSrc: require('../assets/images/active2.jpg')
          },
          {
            imgSrc: require('../assets/images/active3.jpg')
          }
        ]
      }
    }
  }
</script>
<style lang="scss" scoped></style>
