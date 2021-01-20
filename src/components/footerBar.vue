<template>
  <div id="footerBar">
    <div class="max-w-3xl m-auto py-10 text-center">
      <img src="../assets/footer_logo.svg" alt="" class="block m-auto" />
      <div class="pt-5">
        <router-link
          v-for="(item, index) in footerMenu"
          :key="index"
          :to="item.link"
          class="no-underline hover:text-sup1-100 px-3"
          >{{ item.name }}</router-link
        >
      </div>
      <hr />
      <div class="content block lg:flex justify-between p-5 lg:p-0">
        <div class="us block sm:flex text-left">
          <h5 class="mr-10 text-sub-500 mb-5">聯絡我們</h5>
          <ul class="list-none pl-0 text-left">
            <li>台北市中山區中山北路三段92號5樓</li>
            <li>
              <a href="mailto:evan@wiidreamthinker.com" class="hover:text-sup1-100"
                >service@wiidreamthinker.com</a
              >
            </li>
            <li>
              <a href="tel:0965177683" class="hover:text-sup1-100">0965-177-683</a>
            </li>
          </ul>
        </div>
        <div class="social block sm:flex lg:mt-0 mt-10 text-left text-main-500">
          <h5 class="mr-10 text-sub-500 mb-5">Follow US</h5>
          <ul class="list-none pl-0 flex">
            <li class="px-3">
              <a href="#" class="no-underline hover:text-sup1-100"
                ><i class="pay-fb text-lg"></i
              ></a>
            </li>
            <li class="px-3">
              <a href="#" class="no-underline hover:text-sup1-100"
                ><i class="pay-ig text-lg"></i
              ></a>
            </li>
            <li class="px-3">
              <a href="#" class="no-underline hover:text-sup1-100"
                ><i class="pay-yt text-lg"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div class="coptRight">© 2020 PayPayDrink</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        footerMenu: [
          {
            link: '/',
            name: '飲料故事'
          },
          {
            link: '/',
            name: '優惠活動'
          },
          {
            link: '/',
            name: '魔法秘訣'
          },
          {
            link: '/',
            name: '立即體驗'
          },
          {
            link: '/privacy',
            name: '隱私政策'
          },
          {
            link: '/terms',
            name: '使用條款'
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped></style>
