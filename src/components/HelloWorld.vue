<template>
  <div id="app">
    <div class="container">
      <markdown @on-save="save" theme="OneDark" :initialValue="initialValue"></markdown>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data() {
      return {
        initialValue: ""
      };
    },
    methods: {
      save(res) {
        console.log(res)

      },
      saveNote(){
//        axios.get('192.168.0.117:8080/blog/save', {
//          params: {
//            content: '宝宝吃屎'
//          },
//          withCredentials: false,
//        }).then(res => {
//          console.log(res)
//        })
      this.$post('/blog/save',{
          content:'宝宝吃屎'
      }).then((res)=>{
          console.log(res)
      })
      }
    },
    mounted() {
      this.saveNote()
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    margin: 20px auto;
    border: 1px solid #ccc;
  }
</style>
