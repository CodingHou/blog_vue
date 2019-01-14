<template>
  <div>
    <button>保存</button>
    <div id="main">
      <!--<mavon-editor ref="mk" v-model="value"/>-->
      <mark-down @on-save="save"/>

    </div>
  </div>
</template>

<script>
  import MarkDown from 'vue-meditor'

  export default {
    name: 'editBlog',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      onSave(mv,hv,theme) {
        console.log(mv,hv,theme)
      }
    },
    components: {
      MarkDown
    }
  }
</script>
<style>

</style>
