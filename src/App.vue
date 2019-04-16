<template>
  <div id="app">
    <!--头部-->
    <div class="head">
      <span>blog</span>
      <!--搜索框-->
      <div>
        <input class="head-search" type="text">
      </div>
    </div>

    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  #app {
    margin-top: 80px;
  }

  .head {
    height: 50px;
    width: 100vw;
    border-bottom: 1px solid #dcdcdc;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    position: fixed;
    top: 0;
  }

  .head-search {
    height: 30px;
    line-height: 30px;
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    border-radius: 15px;
    margin-right: 10px;
    transition: border-color 0.2s ease;
    background: #fff url(./assets/search.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
  }

  .head-search:focus {
    border-color: #42b983;
  }
</style>
