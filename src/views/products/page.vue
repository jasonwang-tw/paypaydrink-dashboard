<template>
  <div id="drinkPage">
    <topmenu />
    <div class="customContainer mx-auto my-20">
      <div class="grid grid-cols-2 gap-10">
        <div>
          <splide :options="primaryOptions" ref="primary">
            <splide-slide v-for="(item, index) in drinkTop">
              <div class="">
                <img :src="item.imgSrc" alt="" />
              </div>
            </splide-slide>
          </splide>
          <splide :options="secondaryOptions" ref="secondary">
            <splide-slide v-for="(item, index) in drinkTop">
              <div class="">
                <img :src="item.imgSrc" alt="" />
              </div>
            </splide-slide>
          </splide>
        </div>
        <div>2</div>
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import { Splide, SplideSlide } from '@splidejs/vue-splide'

  export default {
    name: 'drinkPage',
    components: {
      topmenu,
      footerBar,
      Splide,
      SplideSlide
    },
    data() {
      return {
        primaryOptions: {
          type: 'fade',
          heightRatio: 0.5,
          pagination: false,
          arrows: false,
          cover: true
        },
        secondaryOptions: {
          rewind: true,
          fixedWidth: 100,
          // fixedHeight: 64,
          isNavigation: true,
          gap: 20,
          focus: 'center',
          pagination: false,
          cover: true,
          breakpoints: {
            '600': {
              fixedWidth: 66,
              fixedHeight: 40
            }
          }
        },
        drinkTop: [
          {
            drinkLink: '/',
            imgSrc: require('../../assets/tea1.png'),
            name: '古道茶鄉',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../../assets/tea2.png'),
            name: '初戀的滋味',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../../assets/tea3.png'),
            name: '致青春',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../../assets/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          },
          {
            drinkLink: '/',
            imgSrc: require('../../assets/active1.jpg'),
            name: '東方不敗',
            price: '60',
            rating: '4.7',
            sold: '145,78'
          }
        ]
      }
    },
    mounted() {
      this.$refs.primary.sync(this.$refs.secondary.splide)
    }
  }
</script>

<style lang="scss" scoped>
  .customContainer {
    max-width: 960px;
  }
  .userimg {
    width: 60px;
    height: 60px;
  }
</style>
