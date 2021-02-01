<template>
  <div id="home">
    <topmenu />
    <div class="profileContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-3 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-9">
        <h3 class="text-main-500">個人資料</h3>
        <div class="profileImg flex items-center no-underline ml-20 my-10">
          <div class="userImg overflow-hidden rounded-full bg-white mr-5 flex-shrink-0">
            <img src="../../src/assets/how.jpg" alt="" />
          </div>
          <div>
            <div class="btn-border-light-blue relative w-40">
              <i class="pay-upload mr-3"></i>
              <span class="">上傳大頭貼</span>
              <input type="file" class="top-0 left-0 h-full w-full absolute opacity-0" />
            </div>
            <small class="text-sup1-100">檔案限制最大500kb ，格式為.JPEG, .PNG</small>
          </div>
        </div>
        <form action="" class="profileForm">
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">帳號</label>
            <div class="text-main-500">Dimeiisgreat@gmail.com</div>
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">密碼</label>
            <div class="flex items-center">
              <div class="text-main-500 mr-5">*******</div>
              <div class="btn-border-light-blue">變更</div>
            </div>
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">手機</label>
            <div class="flex items-center">
              <div class="text-main-500 mr-5">0987-576-789</div>
              <div class="btn-border-light-blue">變更</div>
            </div>
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">暱稱</label>
            <input type="text" value="滴妹好棒棒" class="text-main-500" />
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">性別</label>
            <div class="flex items-center">
              <input type="radio" name="gender" id="man" class="mr-3"/>
              <label for="man" class="mr-5">男生</label>
              <input type="radio" name="gender" id="woman" class="mr-3" />
              <label for="woman">女生</label>
            </div>
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">生日</label>
            <input type="date" />
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5"></label>
            <div><button type="submit" class="btn-dark-blue">儲存</button></div>
          </div>
        </form>
      </div>
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import profileMenu from '@/components/profileMenu.vue'

  export default {
    name: 'home',
    components: {
      topmenu,
      footerBar,
      profileMenu
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
  .mainInfo {
    .userImg {
      width: 150px;
      height: 150px;
    }
  }
  .profileContainer {
    max-width: 960px;
  }
  .profileForm {
    label {
      width: 50px;
      color: var(--color-sub);
      &[for='man'],
      &[for='woman'] {
        color: var(--color-main-500);
      }
    }
    input[type='radio'] {
      width: 20px;
      height: 20px;
    }
  }
</style>
