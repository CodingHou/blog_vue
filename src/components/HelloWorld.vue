<template>
 <div>
   <div id="main">
     <!--<mavon-editor style="height: 1000px" :ishljs="true" v-model="value"/>-->
   </div>
   <div>
     <mark-down/>
   </div>
 </div>
</template>

<script>
  import MarkDown from 'vue-meditor'

  export default {
    name: 'HelloWorld',
    components:{
      MarkDown
    },
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  blockquote{
    border: 5px solid red;
  }
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
