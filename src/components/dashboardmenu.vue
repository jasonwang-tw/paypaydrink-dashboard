<template>
  <!-- eslint-disable-next-line vue/max-attributes-per-line -->
  <div id="nav">
    <ul>
      <li
        v-for="item in router"
        :key="item"
        class="border border-main-100 py-2 px-4 bg-main-100"
      >
        <router-link :to="item.link">{{ item.name }}</router-link> |
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'dashboardmenu',
    data() {
      return {
        router: [
          {
            link: '/',
            name: 'Home'
          },
          {
            link: '/dashboard',
            name: 'dashboard'
          }
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  // h3 {
  //   margin: 40px 0 0;
  // }
  // ul {
  //   list-style-type: none;
  //   padding: 0;
  // }
  // li {
  //   display: inline-block;
  //   margin: 0 10px;
  // }
  // a {
  //   color: #42b983;
  // }
</style>
