/**
 * @author blleung
 * @desc 兼容IOS和安卓Input框输入和失焦的时候的操作
 * @param focusName 在组件里  入焦$emit出去的函数名字
 * @param blurName 在组件里 失焦的$emit出去的函数名字
 */
export default (blurName = '', focusName = '') => ({
  data() {
    return {
      bottomTimer: null,
      mixinValue: '' // input框的value值
    }
  },
  methods: {
    mixinFocus(e) {
      setTimeout(function() {
        e.target.scrollIntoView(true)
      }, 500)
      let self = this
      self.bottomTimer = setInterval(function() {
        document.body.scrollTop = document.body.clientHeight
      }, 1000)
      if (focusName) {
        self.$emit(focusName)
        // console.log(focusName)
      }
    },
    mixinBlurs() {
      let self = this
      clearInterval(self.bottomTimer)
      setTimeout(() => {
        window.scrollTo(0, 0)
        if (blurName) {
          self.$emit(blurName, this.mixinValue)
          // console.log(blurName)
        }
      }, 64)
    }
  }
})
