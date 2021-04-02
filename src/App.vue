<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  html,
  body {
    /* serve */
    font-family: 'Noto Sans TC', sans-serif;
    font-weight: 400;
    /* padding: 0;
  margin: 0; */
  }
  select:focus,
  input:focus,
  textarea:focus {
    outline: 0;
    box-shadow: 0 0 1px 0.2rem var(--color-focus);
  }
  select {
    background-image: url(assets/images/selectDownArrow.svg);
    background-repeat: no-repeat;
    background-size: 12px auto;
    background-position: calc(100% - 15px) center;
  }
  strong {
    font-weight: bold;
  }
  big {
    font-size: 1.5rem;
  }
  textarea::placeholder {
    color: var(--color-sup3);
  }
  .customContainer {
    max-width: 960px;
  }
</style>
