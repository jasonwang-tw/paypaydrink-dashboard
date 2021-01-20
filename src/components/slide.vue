<template>
  <splide :options="options">
    <splide-slide v-for="item in slideCard" :key="item">
      <img :src="item.imgLink" />
    </splide-slide>
  </splide>
</template>

<script>
// 註冊本地組件
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: 'slide',
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        // width: 1300,
        // gap: '1rem',
      },
      slideCard: [
        {
          imgLink: require('../assets/logo.png'),
        },
        {
          imgLink: require('../assets/logo.png'),
        },
        {
          imgLink: require('../assets/logo.png'),
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
// @import "../../node_modules/@splidejs/splide/dist/css/themes/splide-default.min.css";
@import url(https://res.cloudinary.com/cally-cannon/raw/upload/v1609946205/CDN/splide-default.min.css);
</style>
