<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  body{
    margin: 0;
  }
  *{
    box-sizing: border-box;
  }
#app {
  margin-top: 80px;
}
</style>
