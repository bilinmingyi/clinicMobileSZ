<!--  输入和有下拉框的组件 -->
<template>
  <div class="select">
    <p>医生名称</p>
    <input type="text" name="makeupCo" placeholder="请选择或输入医生名称" v-model="doctorName" @focus="inputFocus($event)" @blur="inputBlur">
    <select name="makeupCoSe" v-model="select" @change="changeF()">
      <option id="1" :value="'java'">java</option>
      <option id="2" :value="'c++'">c++</option>
      <option id="3" :value="'python'">python</option>
    </select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      doctorName: "梁医生",
      select:'',
      bottomTimer:null
    };
  },
  methods: {
    changeF(){
      this.doctorName = this.select;
      window.scrollTo(0,0)
    },
    inputFocus(e){
       setTimeout(function() {
        e.target.scrollIntoView(true);
      }, 500);
      let self = this;
      self.bottomTimer = setInterval(function() {
        document.body.scrollTop = document.body.clientHeight;
      }, 1000);
      this.$emit("inputFocus");
    },
    inputBlur(){
      console.log(window)
 let self = this;
      clearInterval(self.bottomTimer);
      setTimeout(() => {
        window.scrollTo(0,0)
        self.$emit("inputBlur");
      }, 64);
    }
  },
  created() {}
};
</script>
<style lang="scss" scoped>
[contenteditable="true"], input, textarea {
  -webkit-user-select: auto!important;
  -khtml-user-select: auto!important;
  -moz-user-select: auto!important;
  -ms-user-select: auto!important;
  -o-user-select: auto!important;
  user-select: auto!important;
}
/* placeHolder样式 */
::-webkit-input-placeholder, {
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
  line-height: 96px;
  @extend %aglinItem;
  padding: 0px 30px;
  background: $bgwhite2;
  select {
    border: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    background: url("../../assets/images/xiangshang@2x.png") no-repeat scroll right center;
    background-size: 56px 56px;
    flex: 1;
    height: 56px;
  }
  option{
    border:1px solid red;
  }
  select::-ms-expand { display: none; }
  p {
    margin-right: 24px;
    font-size: 32px;
    color: $grayColor;
  }
  input {
    position: absolute;
    left: 182px;
    flex:1;
    @extend %normalTitle;
  }
}
</style>
