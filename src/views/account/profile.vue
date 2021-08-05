<template>
  <div id="profile" class="text-main-500">
    <h3 class="text-main-500">個人資料</h3>
    <hr />
    <div
      class="flex flex-wrap items-center justify-center my-10 no-underline md:justify-start profileImg"
    >
      <div class="flex-shrink-0 mx-5 md:mx-0 md:mr-10">
        <div class="overflow-hidden bg-white rounded-full userImg">
          <img src="../../../src/assets/images/default.jpg" alt="" />
        </div>
      </div>
      <div class="mt-5">
        <div class="relative w-40 mx-auto md:mx-0 btn-border-light-blue">
          <i class="mr-3 pay-upload"></i>
          <span class="">上傳大頭貼</span>
          <input type="file" class="absolute top-0 left-0 w-full h-full opacity-0" />
        </div>
        <small class="text-blue-100">檔案限制最大500kb ，格式為.JPEG, .PNG</small>
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
          <div class="mr-5 text-main-500">*******</div>
          <div class="btn-border-light-blue" @click="password = false">變更</div>
        </div>
      </div>
      <div class="flex items-center my-5">
        <label for="" class="flex-shrink-0 mr-5">手機</label>
        <div class="flex items-center">
          <div class="mr-5 text-main-500">0987-576-789</div>
          <div class="btn-border-light-blue " @click="phone = false">變更</div>
        </div>
      </div>
      <div class="flex items-center my-5">
        <label for="" class="flex-shrink-0 mr-5">暱稱</label>
        <input type="text" value="滴妹好棒棒" class="text-main-500" />
      </div>
      <div class="flex items-center my-5">
        <label for="" class="flex-shrink-0 mr-5">性別</label>
        <div class="flex items-center">
          <div class="flex items-center mr-5">
            <input type="radio" name="gender" id="man" class="round hidden" />
            <label for="man" class="round mr-3"><i class="pay-click text-xs"></i></label
            ><span>男生</span>
          </div>
          <div class="flex items-center">
            <input type="radio" name="gender" id="woman" class="round hidden" />
            <label for="woman" class="round mr-3"><i class="pay-click text-xs"></i></label
            ><span>女生</span>
          </div>
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
    <!-- changePassword -->
    <popup :class="{ popup: password }">
      <template v-slot:title>
        <h4>變更密碼</h4>
      </template>
      <template v-slot:content>
        <div class="inputBar"><input type="text" placeholder="輸入原密碼" /></div>
        <div class="inputBar"><input type="text" placeholder="輸入新密碼" /></div>
        <div class="inputBar"><input type="text" placeholder="再次輸入新密碼" /></div>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="password = true">取消</div>
          <div class="btn btn-dark-blue" @click=";(password = true), (complate_msg = false)">
            確認
          </div>
        </div>
      </template>
    </popup>
    <!-- editPhone -->
    <popup :class="{ popup: phone }">
      <template v-slot:title>
        <h4>變更手機號碼</h4>
      </template>
      <template v-slot:content>
        <div class="p-5 mb-5 text-blue-900 bg-lightblue-bg rounded-3xl">
          請確認您的手機號碼是否輸入正確，我們將傳送驗證簡訊，請輸入收到簡訊裡的驗證碼以利完成變更。
        </div>
        <div class="inputBar"><input type="text" placeholder="輸入手機號碼" /></div>
        <div class="flex items-center mb-5">
          <input type="text" placeholder="輸入驗證碼" class="mr-5" />
          <div class="flex-shrink-0 btn-border-light-blue">發送驗證碼</div>
        </div>
      </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="mr-3 btn btn-remove" @click="phone = true">取消</div>
          <div class="btn btn-dark-blue" @click=";(phone = true), (complate_msg = false)">確認</div>
        </div>
      </template>
    </popup>
    <!-- change Complate -->
    <popup :class="{ popup: complate_msg }">
      <template v-slot:title>
        <h4>變更完成</h4>
      </template>
      <template v-slot:content> </template>
      <template v-slot:btn>
        <div class="flex justify-center functionBtn">
          <div class="btn btn-dark-blue" @click="complate_msg = true">確認</div>
        </div>
      </template>
    </popup>
  </div>
</template>

<script>
  import popup from '@/components/popup.vue'

  export default {
    name: 'profile',
    components: {
      popup
    },
    methods: {},
    data() {
      return {
        password: true,
        phone: true,
        complate_msg: true
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
    max-width: 980px;
  }
  .profileForm {
    label {
      width: 50px;
      color: var(--color-subyellow);
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

  .inputBar {
    display: block;
    margin-bottom: 1rem;
  }

  // control
  .popup {
    opacity: 0;
    visibility: hidden;
  }
</style>
