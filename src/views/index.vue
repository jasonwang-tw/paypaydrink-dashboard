<template>
  <div id="home">
    <topmenu />
    <div class="mx-auto">
      <div class="py-0 mainArea lg:py-10">
        <div class="items-center justify-center mt-5 mb-10 text-center md:flex lg:my-10">
          <div class="w-1/2 mx-auto mb-5 text-center waiter md:w-auto md:mx-0">
            <img src="../../src/assets/images/waiter.png" alt="" />
          </div>
          <div class="text-2xl font-bold hello text-main-500 md:text-4xl md:text-left">
            您好 HowHow <br />請問今天想喝點什麼?
          </div>
        </div>
        <ul
          class="container grid grid-cols-1 gap-5 px-10 mx-auto list-none mainDrink md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <li v-for="(item, index) in mainDrink" class="duration-200">
            <router-link
              :to="item.link"
              :style="'background-image: url(' + item.bg + ');'"
              class="flex items-center justify-center text-2xl font-bold text-white no-underline rounded-3xl"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="py-16 text-center saleBanner text-main-500">
        <h2 class="text-2xl md:text-3xl">優惠活動</h2>
        <span class="block mb-10 text-subyellow-500">快揪好友，省錢趁現在！</span>
        <div class="flex justify-center">
          <carousel />
        </div>
      </div>
      <div class="py-16 text-center starman text-main-500">
        <h2 class="text-2xl md:text-3xl">名人堂</h2>
        <span class="block mb-10 text-subyellow-500">瞧瞧名人都喝啥</span>
        <div class="flex justify-center">
          <starman />
        </div>
      </div>
      <div class="py-16 text-center top10 text-main-500">
        <h2 class="text-2xl md:text-3xl">熱銷排行TOP10</h2>
        <span class="block mb-10 text-subyellow-500">銷售排行看這邊</span>
        <div class="flex justify-center">
          <drink>
            <template v-slot:topNumber="props">
              <div class="absolute text-center text-white indexNumber">
                {{ props.index + 1 }}
              </div>
            </template>
          </drink>
        </div>
      </div>
      <div class="mb-20 text-center">
        <router-link to="/products" class="btn-light-blue">查看更多飲品</router-link>
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import carousel from '@/components/carousel.vue'
  import starman from '@/components/starman.vue'
  import drink from '@/components/drink.vue'

  export default {
    name: 'home',
    components: {
      topmenu,
      footerBar,
      carousel,
      starman,
      drink
    },
    data() {
      return {
        mainDrink: [
          {
            link: '/search',
            name: '紅茶',
            bg: require('../assets/images/drinkBg/1.jpg')
          },
          {
            link: '/',
            name: '珍珠奶茶',
            bg: require('../assets/images/drinkBg/2.jpg')
          },
          {
            link: '/',
            name: '水果茶',
            bg: require('../assets/images/drinkBg/3.jpg')
          },
          {
            link: '/',
            name: '鮮奶茶',
            bg: require('../assets/images/drinkBg/4.jpg')
          },
          {
            link: '/',
            name: '抹茶',
            bg: require('../assets/images/drinkBg/5.jpg')
          },
          {
            link: '/',
            name: '綠茶',
            bg: require('../assets/images/drinkBg/6.jpg')
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  // .hello {
  //   line-height: 3rem;
  // }
  .mainArea {
    background-image: url(../assets/images/mainBg.png);
    background-repeat: no-repeat;
    background-size: auto 100%;
    background-position: calc(50% + 120px) center;
  }
  .mainDrink {
    li {
      &:hover {
        // margin-top: -1rem;
        transform: translateY(-1rem);
      }
      a {
        height: 150px;
        // background-image: url(../assets/images/drinkBg/1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }
  .indexNumber {
    width: 40px;
    height: 47px;
    padding-top: 7px;
    background-image: url(../assets/images/indexNumber.png);
    transform: translate(20px, 0px);
    z-index: 1000;
  }
</style>
