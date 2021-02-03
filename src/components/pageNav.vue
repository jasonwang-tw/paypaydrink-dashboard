<template>
  <div id="pageNav">
    <ul class="pl-0 list-none flex justify-center mt-10">
      <li
        class="mx-2.5 border rounded-full w-10 h-10 flex items-center justify-center border-sub-500 text-sub-500 cursor-pointer active duration-200"
      >
        1
      </li>
      <li
        v-for="(p, index) in 4"
        class="mx-2.5 border rounded-full w-10 h-10 flex items-center justify-center border-sub-500 text-sub-500 cursor-pointer hover:bg-sub-500 hover:text-white duration-200"
      >
        {{ index + 2 }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  .active {
    background-color: var(--color-sub);
    color: white;
  }
</style>
