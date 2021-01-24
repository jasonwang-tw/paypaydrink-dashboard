<template>
  <div id="slideshow">
    <splide :options="options">
      <splide-slide v-for="(item, index) in star" class="mb-20">
        <div class="flex">
          <div class="starImg rounded-full overflow-hidden flex-shrink-0 mr-5">
            <img :src="item.imgSrc" alt="" />
          </div>
          <div class="starInfo text-left">
            <h5 class="starName mb-0">{{item.name}}</h5>
            <div class="starSpeak my-2">{{item.speak}}</div>
            <a class="starPush btn-border-light-blue inline-block" :href="item.pushLink">名人推薦</a>
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
          width: 1300,
          gap: '3rem',
          perPage: 3,
          perMove: 1,
          type: 'loop',
          // autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          focus: 'center',
          fixedWidth: '400px',
          // arrows      : 'slider',
          breakpoints: {
            '1440': {
              width: 900,
              perPage: 3,
              gap: '2rem'
            },
            '900': {
              width: 600,
              perPage: 2,
              gap: '2rem'
            },
            '600': {
              width: 400,
              perPage: 1,
              gap: '2rem'
            },
            '480': {
              width: 360,
              perPage: 1,
              gap: '1rem'
            }
          }
        },
        star: [
          {
            imgSrc: require('../assets/active1.jpg'),
            name: 'Jomen',
            speak: '透過品牌專屬APP，消費者可以隨時下單，隨處購買',
            pushLink: '/'
          },
          {
            imgSrc: require('../assets/active1.jpg'),
            name: '滴妹',
            speak: '透過品牌專屬APP，消費者可以隨時下單，隨處購買',
            pushLink: '/'
          },
          {
            imgSrc: require('../assets/active1.jpg'),
            name: 'HowHow',
            speak: '透過品牌專屬APP，消費者可以隨時下單，隨處購買',
            pushLink: '/'
          },
          {
            imgSrc: require('../assets/active1.jpg'),
            name: 'Jomen',
            speak: '透過品牌專屬APP，消費者可以隨時下單，隨處購買',
            pushLink: '/'
          },
        ]
      }
    }
  }
</script>
<style lang="scss" scoped>
  .starImg{
    width: 100px;
    height: 100px;
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
</style>
