<template>
  <div id="app">
    <img src="./assets/logo.png">

    {{#if_eq routerAnimate "fade"}}
      <transition name="fade">
    {{/if_eq}}

        <router-view></router-view>

    {{#if_eq routerAnimate "fade"}}
    </transition>
    {{/if_eq}}

  </div>
</template>

<script>

export default {
  name: "App",
};
</script>

<style lang="scss">
@import "./style/common";
</style>
