<!--  
  父组件通过ref获取子组件的值得例子 代码比较简洁和简单  父组件和子组件
  布局要规范 最外层的div要用relative布局  要不window.scrollTo(0,0)会去到头部 
  兼容 输入框的情况 和  输入下拉框的情况
  涉及到input框的值的问题 子组件负责操作 切换也是子组件切换  父组件只需要其值即可
  因为需要用到Input框里面的值 如果是blur失焦后父组件获取其值的话 父组件获取值有问题（已经验证过的--子组件用watch监听的话就没问题 但是太过于复杂） 或者onchange不断传值 也麻烦例如
  console.log(this.$refs.mark.inputValue)
  console.log(this.$refs.doctor.inputValue)
  console.log(this.doctorName)
  因为要兼容下拉选择框和输入框的值
  父组件用下面的方法获取值和改变值就可以
  console.log(this.$refs.mark.inputValue)
  console.log(this.$refs.doctor.inputValue)
  输入和有下拉框的组件
  下拉框组件数组的数据格式[{key:'xx',value:'xx'}]
 -->
<template>
  <div class="select" :class="[{'no-padding':isNopadding}]">
    <slot name="leftTitle">
      <p>{{title}}</p>
    </slot>

    <input type="text" name="makeupCo" :placeholder="placeHolder" v-model="inputValue" @focus="inputFocus($event)" @blur="inputBlur" v-if="isShowInput">
    <select name="makeupCoSe" v-model="select" @change="changeF()" @blur="selectBlur" v-if="isShowSelect" :selected="select">
      <option v-for="(item,index) in selectArray" :key="index" :id="index" :value="item.value">{{item.value}}</option>
    </select>
    <slot name="rightValue"></slot>
  </div>
</template>
<script>
export default {
  name: "blmyInputSelect",
  props: {
    isShowSelect: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: "医生名称"
    },
    placeHolder: {
      type: String,
      default: "请选择或输入医生名称"
    },
    isShowInput: {
      type: Boolean,
      default: true
    },
    isNopadding: {
      type: Boolean,
      default: false
    },
    selectArray: {
      type: Array,
      default: () => []
    },
    //控制是否滚到头部还是底部两种情况 之前的话 默认是头部
    isPullTop: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      inputValue: "梁医生",
      select: "",
      bottomTimer: null
    }
  },
  methods: {
    changeF() {
      this.inputValue = this.select
      this.$emit("selectChange", this.select)
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 64)

    },
    inputFocus(e) {
      setTimeout(function () {
        e.target.scrollIntoView(true)
      }, 500)
      let self = this
      self.bottomTimer = setInterval(function () {
        document.body.scrollTop = document.body.clientHeight
      }, 1000)
      this.$emit("inputFocus")
    },
    inputBlur() {
      let self = this
      clearInterval(self.bottomTimer)
      setTimeout(() => {
        window.scrollTo(0, 0)
        self.$emit("inputBlur", this.inputValue)
      }, 64)
    },
    selectBlur() {
      //布局合理的话 window.scrollTo(0,0)就可以解决了 relative布局
      if (this.isPullTop) {
        window.scrollTo(0, 0)
      } else {
        let bottom = document.body.clientHeight;
        window.scrollTo(0, bottom)
      }
    }
  },
  created() {
    this.inputValue = this.modelValue
    this.select = this.modelValue
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
    height: 56px;
    width: 530px;
    font-size: 32px;
  }
  option {
    border: 1px solid red;
  }
  select::-ms-expand {
    display: none;
  }
  p {
    // width: 182px;

    margin-right: 24px;
    font-size: 32px;
    color: $grayColor;
  }
  input {
    position: absolute;
    left: 182px;
    height: 100%;
    width: 400px;
    @include commonBorder();
    @extend %normalTitle;
  }
}
// 兼容左右两边没用下横线的样式
.no-padding {
  padding: 0 !important;
  select {
    padding-left: 18px;
    flex: 1;
  }
  input {
    border: 0px;
  }
}
</style>
