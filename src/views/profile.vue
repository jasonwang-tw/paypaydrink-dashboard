<template>
  <div id="profile" class="text-main-500">
    <topmenu />
    <div class="profileContainer grid grid-cols-12 gap-10 mx-auto my-20">
      <div class="profileMenu col-span-4 px-10">
        <profileMenu />
      </div>
      <div class="mainInfo col-span-8">
        <h3 class="text-main-500">個人資料</h3>
        <hr />
        <div class="profileImg flex items-center no-underline my-10">
          <div class="userImg overflow-hidden rounded-full bg-white mr-10 flex-shrink-0">
            <img src="../../src/assets/images/how.jpg" alt="" />
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
              <div class="btn-border-light-blue" @click="popupFixed(), editPassword()">變更</div>
            </div>
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">手機</label>
            <div class="flex items-center">
              <div class="text-main-500 mr-5">0987-576-789</div>
              <div class="btn-border-light-blue " @click="popupFixed(), editPhone()">變更</div>
            </div>
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">暱稱</label>
            <input type="text" value="滴妹好棒棒" class="text-main-500" />
          </div>
          <div class="flex items-center my-5">
            <label for="" class="flex-shrink-0 mr-5">性別</label>
            <div class="flex items-center">
              <input type="radio" name="gender" id="man" class="mr-3" checked />
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
    <!-- changePassword -->
    <div
      class="fixed top-0 left-0 bg-opacity-50 bg-gray-900 h-full w-full z-20 flex items-center justify-center duration-200"
      :class="{ popup: popupStatus }"
    >
      <!-- editPassword -->
      <div
        id="editPassword"
        class="bg-white rounded-3xl text-center p-5 shadow-xl"
        :class="{ passwordPopup: password }"
      >
        <h3>變更密碼</h3>
        <div class="inputBar"><input type="text" placeholder="輸入原密碼" /></div>
        <div class="inputBar"><input type="text" placeholder="輸入新密碼" /></div>
        <div class="inputBar"><input type="text" placeholder="再次輸入新密碼" /></div>
        <div class="functionBtn flex justify-center pt-5">
          <div class="btn btn-remove mr-3" @click="popupFixed(), editPassword()">取消</div>
          <div class="btn btn-dark-blue" @click="editPassword(), complatemag()">確認變更</div>
        </div>
      </div>
      <!-- editPhone -->
      <div
        id="editPhone"
        class="bg-white rounded-3xl text-center p-5 shadow-xl"
        :class="{ phonePopup: phone }"
      >
        <h3>變更手機號碼</h3>
        <div class="p-5 bg-sup3-300 rounded-3xl mb-5 text-sup1-900">
          請確認您的手機號碼是否輸入正確，我們將傳送驗證簡訊，
          請輸入收到簡訊裡的驗證碼以利完成變更。
        </div>
        <div class="inputBar"><input type="text" placeholder="輸入手機號碼" /></div>
        <div class="flex items-center mb-10">
          <input type="text" placeholder="輸入驗證碼" class="mr-5" />
          <div class="flex-shrink-0 btn-border-light-blue">發送驗證碼</div>
        </div>
        <div class="functionBtn flex justify-center">
          <div class="btn btn-remove mr-3" @click="popupFixed(), editPhone()">取消</div>
          <div class="btn btn-dark-blue" @click="editPhone(), complatemag()">確認變更</div>
        </div>
      </div>
      <!-- change Complate -->
      <div
        id="complateMsg"
        class="bg-white rounded-3xl text-center p-5 shadow-xl"
        :class="{ msgPopup: mag }"
      >
        <h3>變更完成</h3>
        <div class="w-full mb-10"></div>
        <div class="functionBtn flex justify-center">
          <div class="btn btn-dark-blue" @click="popupFixed(), complatemag()">確認</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import profileMenu from '@/components/profileMenu.vue'

  export default {
    name: 'profile',
    components: {
      topmenu,
      footerBar,
      profileMenu
    },
    methods: {
      popupFixed: function() {
        this.popupStatus = !this.popupStatus
      },
      editPassword: function() {
        this.password = !this.password
      },
      editPhone: function() {
        this.phone = !this.phone
      },
      complatemag: function() {
        this.mag = !this.mag
      }
    },
    data() {
      return {
        popupStatus: true,
        password: true,
        phone: true,
        mag: true
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
  #editPassword,
  #editPhone,
  #complateMsg {
    width: 100%;
    max-width: 540px;
    .inputBar {
      display: block;
      margin-bottom: 1rem;
    }
  }
  // .functionBtn {
  //   .btn {
  //     width: 150px;
  //   }
  // }
  // control
  .popup {
    opacity: 0;
    visibility: hidden;
  }
  .passwordPopup,
  .phonePopup,
  .msgPopup {
    display: none;
  }
</style>
