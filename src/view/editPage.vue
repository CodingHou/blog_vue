<template>
  <div>
    <!--头部-->
    <div class="head">
      <span>blog</span>
      <!--搜索框-->
      <div>
        <input class="head-search" type="text">
      </div>
    </div>

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
            htmlValue: htmlValue,
            markdownValue: markdownValue
          }).then((res) => {
            console.log(res)
          })
        } else {
//            保存
          this.$post('/blog/save', {
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
    background: #fff url(../assets/search.png) 8px 5px no-repeat;
    background-size: 20px;
    vertical-align: middle !important;
  }

  .head-search:focus {
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
