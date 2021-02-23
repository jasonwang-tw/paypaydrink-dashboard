<template>
  <div id="portal">
    <topmenu />
    <div class="customContainer mx-auto my-20 text-main-500">
      <div class="flex pb-10">
        <div class="userImg rounded-full overflow-hidden mr-10">
          <img src="../../src/assets/how.jpg" alt="" />
        </div>
        <div class="flex-grow">
          <h5 class="mb-0">HowHow</h5>
          <ul class="masterInfo flex pl-0 list-none py-5">
            <li>
              <span><i class="pay-start"></i></span>4.5
            </li>
            <li><span>關注</span>3,547</li>
            <li><span>配方</span>47</li>
            <li><span>售出飲品</span>4,998杯</li>
          </ul>
        </div>
      </div>
      <pageNav class="pt-5" />
    </div>
    <footerBar />
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'
  import footerBar from '@/components/footerBar.vue'
  import pageNav from '@/components/pageNav.vue'

  export default {
    name: 'portal',
    components: {
      topmenu,
      footerBar,
      pageNav
    },
    // props: {
    //   select: selected
    // },
    data() {
      return {
        selected: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .customContainer {
    max-width: 960px;
  }
  .userImg {
    width: 120px;
    height: 120px;
  }
  .masterInfo {
    li {
      margin-right: 1.5rem;
      padding-right: 1.5rem;
      span {
        color: var(--color-sup1-100);
        margin-right: 0.5rem;
      }
    }
  }
  .drinkImg {
    width: 100px;
    height: 100px;
  }
  .drinkInfo {
    flex-basis: 55%;
  }
  .drinkOrder {
    text-align: center;
    flex-basis: 15%;
  }
  .drinkBefore {
    width: 80px;
  }
</style>
