<template>
  <div>
    <input class="title-label title-input" type="text" placeholder="标题" v-model="title">
    <input class="title-label label-input" type="text" placeholder="标签" v-model="label">
    <!--markdown输入域-->
    <div class="container">
      <markdown ref="markdown" class="markdown-input" @on-save="save" theme="OneDark"
                :initialValue="initialValue"></markdown>
      <button class="save-markdown" @click="$refs.markdown.handleSave()">保存</button>
      <button class="cancel-markdown">取消</button>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'HelloWorld',
    data() {
      return {
        initialValue: "",
        title: '',
        label: '',
        noteId: null
      };
    },
    methods: {
//        接收返回值
      save(res) {
        console.log(res)
        this.saveNote(res.htmlValue, res.markdownValue)
      },

//      保存或更新接口
      saveNote(htmlValue, markdownValue) {
//          noteid存在则调用更新接口，否则视为不存在，调用保存接口
        let id = this.noteId
        if (id) {
//            更新
          this.$post('/blog/update', {
            id: id,
            title: this.title,
            label: this.label,
            htmlValue: htmlValue,
            markdownValue: markdownValue
          }).then((res) => {
            console.log(res)
          })
        } else {
//            保存
          this.$post('/blog/save', {
            title: this.title,
            label: this.label,
            htmlValue: htmlValue,
            markdownValue: markdownValue
          }).then((res) => {
            console.log(res)
            this.noteId = res
          })
        }
      }
    },
    mounted() {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .title-label {
    box-sizing: border-box;
    padding: 0 15px 0 30px;
    border: 1px solid #e3e3e3;
    color: #2c3e50;
    outline: none;
    transition: border-color 0.2s ease;
    background-size: 20px;
    vertical-align: middle !important;
    margin: 10px 65px;
  }

  .title-input {
    width: 90%;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
  }

  .label-input {
    width: 90%;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
  }

  input::-webkit-input-placeholder {
    color: #d0d1d4;
  }

  .title-label:focus {
    border-color: #42b983;
  }

  .markdown-input {
    margin: 20px 5vw;
    border: 1px solid #ccc;
  }

  .container button {
    border: 1px solid #ffffff;
    font-size: 17px;
    padding: 5px 30px;
    border-radius: 7px;
    margin: 10px;
    position: absolute;
    transform: translateX(-50%);
  }

  .save-markdown {
    background: #42b983;
    color: #ffffff;
    left: 80%;
  }

  .cancel-markdown {
    color: #5c6370;
    left: 90%;
  }
</style>
