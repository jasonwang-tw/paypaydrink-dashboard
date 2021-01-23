<template>
  <div id="home">
    <topmenu />
    <div class="container mx-auto">
      <div class="flex items-center justify-center mt-10">
        <div class="waiter mr-5">
          <img src="../../src/assets/waiter.png" alt="" />
        </div>
        <div class="hello text-4xl font-bold text-main-500">
          您好 Jason，<br />請問今天想喝點什麼?
        </div>
      </div>
      <ul class="mainDrink list-none grid grid-cols-4 gap-5">
        <li v-for="(item, index) in mainDrink">
          <router-link :to="item.link" class="no-underline block text-center bg-gray-600 rounded-lg">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import topmenu from '@/components/topmenu.vue'

  export default {
    name: 'home',
    components: {
      topmenu
    },
    data() {
      return {
        mainDrink: [
          {
            link: '/',
            name: '紅茶'
          },
          {
            link: '/',
            name: '綠茶'
          },
          {
            link: '/',
            name: '水果茶'
          },
          {
            link: '/',
            name: '鮮奶茶'
          },
          {
            link: '/',
            name: '抹茶'
          },
          {
            link: '/',
            name: '珍珠奶茶'
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
</style>
