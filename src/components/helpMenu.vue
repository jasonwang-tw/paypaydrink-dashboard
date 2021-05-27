<template>
  <div
    id="helpMenu"
    class="fixed z-10 w-full px-5 md:w-auto md:px-0 md:sticky bg-lightblue-bg md:bg-white md:top-20"
  >
    <ul class="flex pl-0 overflow-x-scroll list-none md:block md:overflow-x-auto">
      <li v-for="(i, index) in helpMenu" class="flex-shrink-0">
        <router-link
          :to="i.link"
          class="no-underline text-main-500 duration-200 hover:text-blue-900 mx-2 md:my-2.5 px-2 py-2.5 md:px-4 block md:rounded-lg overflow-hidden"
          >{{ i.name }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'helpMenu',
    data() {
      return {
        helpMenu: [
          {
            name: 'help_1',
            link: '/helpCenter/page1'
          },
          {
            name: 'help_2',
            link: '/helpCenter/page2'
          }
        ]
      }
    }
  }
</script>

<style lang="scss">
  #helpMenu {
    .router-link-exact-active {
      color: var(--color-blue-100);
      background-color: var(--color-lightblue-bg);
    }
  }
  @media (max-width: 768px) {
    #helpMenu {
      // top: 63px;
      .router-link-exact-active {
        position: relative;
        &:after {
          content: ' ';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background-color: var(--color-blue-100);
          border-radius: 20%;
        }
      }
    }
  }
</style>
