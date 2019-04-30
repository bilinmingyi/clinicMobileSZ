<template>
  <div class="common-input">
    <div class="input-box">
      <img src="@/assets/images/sousuo@2x.png">
      <input class="serach-input" type="text" :placeholder="placeholder" v-model="inputText" @input="focusIuq" @blur="inputBlur" @focus="focus">
    </div>
    <div class="search-button ml26" @click="query" v-if="isShowButton">{{buttonName}}</div>
  </div>
</template>
<script>
export default {
  name: "blmyInputSearch",
  props: {
    placeholder: {
      type: String,
      default: "患者姓名/患者手机号码"
    },
    buttonName: {
      type: String,
      default: "搜索"
    },
    isShowButton: {
      type: Boolean,
      default: true
    },
    postionA: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      inputText: ""
    }
  },
  methods: {
    query() {
      var self = this
      self.$emit("query", this.inputText)
    },
    focusIuq() {
      var self = this
      self.$emit("onInput", this.inputText)
    },
    focus() {},
    inputBlur() {
      var self = this
      self.$emit("inputBlur", this.inputText)
    }
  }
}
</script>
<style lang="scss" scoped>
[contenteditable="true"],
input,
textarea {
  -webkit-user-select: auto !important;
  -khtml-user-select: auto !important;
  -moz-user-select: auto !important;
  -ms-user-select: auto !important;
  -o-user-select: auto !important;
  user-select: auto !important;
}
.common-input {
  width: 100%;
  height: 96px;
  @extend %aglinItem;
  padding: 0 30px;
  .input-box {
    flex: 1;
    height: 64px;
    position: relative;
    img {
      @extend %searchIcon;
      position: absolute;
      top: 12px;
      left: 24px;
    }
    .serach-input {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: rgba(237, 237, 237, 1);
      padding-left: 60px;
      font-size: 28px;
      line-height: 32px;
    }
  }
  .search-button {
    @include deepButton(64px, 104px);
  }
  /* placeHolder样式 */
  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    font-size: 32px;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    font-size: 32px;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    font-size: 32px;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    font-size: 32px;
  }
}
</style>


