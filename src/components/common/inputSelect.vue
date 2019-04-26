<!--  
  布局要规范 最外层的div要用relative布局  要不window.scrollTo(0,0)会去到头部 
   兼容 输入框的情况 和  输入下拉框的情况
  输入和有下拉框的组件
 -->
<template>
  <div class="select">
    <p>{{title}}</p>
    <input
      type="text"
      name="makeupCo"
      :placeholder="placeHolder"
      v-model="inputValue"
      @focus="inputFocus($event)"
      @blur="inputBlur"
      v-if="isShowInput"
    >
    <select name="makeupCoSe" v-model="select" @change="changeF()" @blur="selectBlur" v-if="isShowSelect" :selected="select">
      <option id="1" :value="'java'">java</option>
      <option id="2" :value="'c++'">c++</option>
      <option id="3" :value="'python'">python22</option>
      <option id="4" :value="'热门'">热门</option>
    </select>
  </div>
</template>
<script>
export default {
  props:{
    isShowSelect:{
      type:Boolean,
      default:true
    },
    modelValue:{
      type:String,
      default:''
    },
    title:{
      type:String,
      default:'医生名称'
    },
    selectList:{
      type:Array,
      default:()=>[]
    },
    placeHolder:{
      type:String,
      default:'请选择或输入医生名称'
    },
    isShowInput:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      inputValue: "梁医生",
      select: "",
      bottomTimer: null
    };
  },
  methods: {
    changeF() {
      this.inputValue = this.select;
      window.scrollTo(0, 0);
      console.log(this.select)
      this.$emit('selectChange')
    },
    inputFocus(e) {
      setTimeout(function() {
        e.target.scrollIntoView(true);
      }, 500);
      let self = this;
      self.bottomTimer = setInterval(function() {
        document.body.scrollTop = document.body.clientHeight;
      }, 1000);
      this.$emit("inputFocus");
    },
    inputBlur() {
      let self = this;
      clearInterval(self.bottomTimer);
      setTimeout(() => {
        window.scrollTo(0, 0);
        self.$emit("inputBlur");
      }, 64);
    },
    selectBlur() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    this.inputValue = this.modelValue;
    this.select = this.modelValue;
    console.log(  this.select )
  }
};
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
.select {
  position: relative;
  width: 100%;
  height: 96px;
  @extend %aglinItem;
  padding: 0px 30px;
  background: $bgwhite2;
  @include commonBorder();
  select {
    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: url("../../assets/images/xiangshang@2x.png") no-repeat scroll
      right center;
    background-size: 56px 56px;
    flex: 1;
    height: 56px;
    font-size: 32px;
  }
  option {
    border: 1px solid red;
  }
  select::-ms-expand {
    display: none;
  }
  p {
    margin-right: 24px;
    font-size: 32px;
    color: $grayColor;
  }
  input {
    position: absolute;
    left: 182px;
    height: 100%;
    width:400px;
     @include commonBorder();
    @extend %normalTitle;
  }
}
</style>
