<template>
  <div id="home">
    <topmenu />
    <div class="container mx-auto">
      <div class="mainArea py-10">
        <div class="flex items-center justify-center my-10">
          <div class="waiter mr-5">
            <img src="../../src/assets/waiter.png" alt="" />
          </div>
          <div class="hello text-4xl font-bold text-main-500">
            您好 HowHow <br />請問今天想喝點什麼?
          </div>
        </div>
        <ul class="mainDrink list-none grid grid-cols-4 gap-5">
          <li v-for="(item, index) in mainDrink" class="duration-200">
            <router-link
              :to="item.link"
              :style="'background-image: url(' + item.bg + ');'"
              class="no-underline rounded-lg text-2xl font-bold flex justify-center items-center text-white"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="saleBanner py-16 text-center text-main-500">
        <h2 class="text-4xl">優惠活動</h2>
        <span class="mb-10 block text-sub-500">快揪好友，省錢趁現在！</span>
        <div class="flex justify-center">
          <carousel />
        </div>
      </div>
      <div class="starman py-16 text-center text-main-500">
        <h2 class="text-4xl">名人堂</h2>
        <span class="mb-10 block text-sub-500">瞧瞧名人都喝啥</span>
        <div class="flex justify-center">
          <starman />
        </div>
      </div>
      <div class="top10 py-16 text-center text-main-500">
        <h2 class="text-4xl">熱銷排行TOP10</h2>
        <span class="mb-10 block text-sub-500">銷售排行看這邊</span>
        <div class="flex justify-center">
          <drink />
        </div>
      </div>
      <div class="text-center mb-20">
        <router-link to="/" class="btn-light-blue">查看更多飲品</router-link>
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
            link: '/',
            name: '紅茶',
            bg: require('../assets/drinkBg/1.jpg')
          },
          {
            link: '/',
            name: '珍珠奶茶',
            bg: require('../assets/drinkBg/2.jpg')
          },
          {
            link: '/',
            name: '水果茶',
            bg: require('../assets/drinkBg/3.jpg')
          },
          {
            link: '/',
            name: '鮮奶茶',
            bg: require('../assets/drinkBg/4.jpg')
          },
          {
            link: '/',
            name: '抹茶',
            bg: require('../assets/drinkBg/5.jpg')
          },
          {
            link: '/',
            name: '綠茶',
            bg: require('../assets/drinkBg/6.jpg')
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .hello {
    line-height: 3rem;
  }
  .mainArea {
    background-image: url(../assets/mainBg.png);
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
        // background-image: url(../assets/drinkBg/1.jpg);
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
      }
    }
  }
</style>
