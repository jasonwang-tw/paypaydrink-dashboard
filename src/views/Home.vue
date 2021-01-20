<template>
  <div id="home">
    <topmenu />
    <div class="topBanner relative">
      <h1 class="indexTitle lg:text-7xl text-main-500 text-6xl container m-auto xl:py-20 xl:px-60 py-20 px-10">
        <span class="font-light">配配</span><span>飲</span><br /><span
          class="lg:text-5xl text-4xl text-sub-500"
          >您專屬的飲品魔法師</span
        >
      </h1>
      <div class="drinkCup absolute"></div>
    </div>
    <div class="saleActive container m-auto text-center relative z-10 text-main-500">
      <h1 class="text-white">優惠活動</h1>
      <p class="mt-3 text-sub-500">快揪好友，省錢趁現在！</p>
      <div class="flex justify-center mt-10">
        <carousel />
      </div>
    </div>
    <div class="drinkMagic text-center mt-32 relative z-0">
      <div class="magicBg absolute w-full"></div>
      <!-- <img src="../assets/gradientBg.png" alt="" srcset="" class="absolute z-0 center" /> -->
      <div class="relative text-main-500">
        <img src="../assets/drink1.png" alt="" srcset="" class="mx-auto mb-10">
        <h2 class="">配配飲的魔法</h2>
        <p class="mt-3">我們堅持經典也擁抱創新，只是希望能看到您滿足的笑容 :D</p>
        <ul
          class="magicList grid gap-5 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:px-20 md:px-10 px-5 py-10"
        >
          <li class="flex p-8 rounded-xl" v-for="item in magic" :key="item">
            <div class="icon mr-5 text-sub-500">
              <i :class="item.icon" class="text-5xl"></i>
            </div>
            <div class="infotext text-left">
              <h3 class="text-xl">{{ item.title }}</h3>
              <p class="mt-2 text-gray-600">{{ item.text }}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="text-center mt-20 relative text-main-500">
      <img src="../assets/drink2.png" alt="" srcset="" class="mx-auto mb-10">
      <h2 class="">立即體驗</h2>
      <p class="mt-3">搜尋離你最近的PayPayDrink服務據點，開始不一樣的生活</p>
      <shopPosition />
    </div>
    <div class="downApp bg-main-500 md:mt-52">
      <div class="container m-auto text-center relative py-16">
        <img
          src="../assets/downhand.svg"
          alt=""
          srcset=""
          class="downhand absolute bottom-0 md:block hidden"
        />
        <h2 class="text-white font-extrabold">
          立即下載<span class="text-sub-500 ml-3">配配飲</span>
        </h2>
        <p class="text-white mt-3 mb-6">客製屬於您的飲品</p>
        <img src="../assets/appDown.png" alt="" srcset="" class="block m-auto" />
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  // @ is an alias to /src
  import topmenu from '@/components/topmenu'
  import carousel from '@/components/carousel'
  import shopPosition from '@/components/shopPosition'
  import footerBar from '@/components/footerBar'

  export default {
    name: 'Home',
    components: {
      topmenu,
      carousel,
      shopPosition,
      footerBar
    },
    data() {
      return {
        magic: [
          {
            icon: 'pay-mobile',
            title: '一機在手，威力無窮',
            text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限'
          },
          {
            icon: 'pay-Cheers',
            title: '歡迎光臨，您想喝什麼呢?',
            text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限'
          },
          {
            icon: 'pay-clock',
            title: '可以半糖少冰嗎?',
            text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限'
          },
          {
            icon: 'pay-mobile',
            title: '還等到天荒地老，海枯石爛嗎?',
            text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限'
          },
          {
            icon: 'pay-mobile',
            title: '多元支付，比便利商店還方便！',
            text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限'
          },
          {
            icon: 'pay-qrcode',
            title: '自己喝還是請客，掃碼一次搞定',
            text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限'
          },
          {
            icon: 'pay-happy',
            title: '進入口中的瞬間，給您滿足的笑容',
            text: '透過品牌專屬APP，消費者可以隨時下單，隨處購買，今天的我無極限'
          }
        ]
      }
    }
    // methods: {
    //   cityToArea(i) {
    //     console.log(this.indexOf());
    //   },
    // },
  }
</script>
<style lang="scss" scoped>
  .topBanner {
    height: 1000px;
    background-image: url(../assets/topBannerBg.jpg);
    background-position: center center;
    background-size: cover;
  }
  .magicList {
    li {
      background-color: #f3f8ff;
    }
  }
  .indexTitle {
    letter-spacing: 1rem;
  }
  .drinkCup {
    width: 100%;
    height: 1050px;
    bottom: -80px;
    background-image: url(../assets/drinkCup.png);
    background-position: left center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  .saleActive {
    margin-top: -330px;
  }
  .downhand {
    left: 250px;
  }
  .magicBg{
    height: 1600px;
    top: 50%;
    transform: translateY(-50%);
    background-image: url(../assets/gradientBg.png),url(../assets/magicBg.png);
    background-repeat: no-repeat;
    background-position: center;
    background-size: auto,cover;
  }
  @media (max-width: 1440px) {
    .drinkCup {
      bottom: -100px;
    }
    .saleActive {
      margin-top: -250px;
    }
    .downhand {
      left: 50px;
    }
  }
  @media (max-width: 996px) {
    .topBanner {
      height: 800px;
    }
    .drinkCup {
      bottom: -170px;
    }
    .indexTitle {
      letter-spacing: 0.5rem;
    }
    .saleActive {
      margin-top: -250px;
    }
    .downhand {
      left: -50px;
    }
  }
  @media (max-width: 480px) {
    .drinkCup {
      height: 500px;
      bottom: 100px;
      background-position: -300px center;
      background-size: cover;
      // bottom: -100px;
    }
    .indexTitle {
      letter-spacing: 0rem;
    }
  }
</style>
