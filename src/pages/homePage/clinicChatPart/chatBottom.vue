<template>
  <div class="chat-bottom">
    <div class="reply">
      <div @click="showReply"><span class="leftIcon iconfont">&#xe612;</span></div>
      <input class="serach-input" type="text" @focus="hideFunc"  v-model="sendContent">
      <div class="ml24 pr16">
        <img src="@/assets/images/tianjia@2x.png" alt @click="addFunc" :class="{'translateImg':showFuc}" v-show="showIcon">
  <div class="send " v-show="!showIcon" @click="sendMessage">发送</div>
      </div>
    
    </div>
    <div class="function" v-show="showFuc">
      <div class="function-content mr64">
        <img src="@/assets/images/zhaopian@2x.png" alt>
        <p>照片</p>
      </div>
      <!-- <div class="function-content mr64">
        <img src="@/assets/images/huifu@2x.png" alt>
        <p>快捷回复</p>
      </div> -->
      <div class="function-content mr64" >
        <img src="@/assets/images/liangjie@2x.png" alt @click="goDocRecommond">
        <p>预约链接</p>
      </div>
      <!-- <div class="function-content">
        <img src="@/assets/images/tuijiang@2x.png" alt>
        <p>商品推荐</p>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["showFuc"],
  data() {
    return {
      sendContent:''
    };
  },
  computed:{
    showIcon(){
      return this.sendContent=='';
    }
  },
  methods: {
    addFunc() {
      this.$emit('addFunc')
    },
    hideFunc() {
      this.$emit('hideFunc')
    },
    showReply(){
      this.$emit('showReply')
    },
    goDocRecommond(){
          this.$router.push({name:'docRecommondPage'})
    },
    sendMessage(){
      this.$emit('sendMessage',this.sendContent);
      this.sendContent='';
    }
  }
};
</script>
<style lang="scss" scoped>
.chat-bottom {
  @include psFixed(112px);
  background: $bgwhite2;
  .reply {
    padding: 16px 0 16px 16px;
    @extend %aglinItem;
    input {
      width: 540px;
      height: 80px;
      @extend %normalTitle;
      background: rgba(249, 249, 249, 1);
      border-radius: 16px;
      border: 1px solid rgba(151, 151, 151, 1);
    }
    img {
      width: 68px;
      height: 68px;
    }
    .translateImg{
      transform: rotate(45deg);
    }
  }
  .function {
    width: 100%;
    @include commonBorder(top);
    height: 224px;
    background: $bgwhite2;
    @extend %aglinItem;
    padding: 28px 56px;
    &-content {
      p {
        padding-top: 16px;
        text-align: center;
        font-size: 28px;
        color: $simpleGray;
      }
      img {
        @extend %mediumIcon;
      }
    }
  }
}
.send{
  @include deepButton(68px,68px);
  border-radius: 16px;
  font-size: 24px;
}
.leftIcon{
  font-size: 64px;
  color: $gray3;
  padding-right: 20px;
}

</style>

