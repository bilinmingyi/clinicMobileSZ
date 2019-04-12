<template>
  <div>
    <common-header :titleName="'设置'"></common-header>
    <div class="settle-title">
     <textarea rows="5"  v-model="comment" :placeholder="'请输入快捷回复'"></textarea>
     <div class="settle-button" @click="quickReply">添加快捷回复</div>
    </div>
    <section class="settle-content">
<p class="detail-content" v-for="(item,index) in defaultReply" :key="index"><span>{{item.replyName}}</span><img src="@/assets/images/sc@2x.png" alt @click="delReply(item)"></p>
    </section>
    </div>
</template>
<script>
import commonHeader from "@/components/common/commonHeader";
import {mapState,mapMutations} from "vuex";
export default {
  data(){
    return{
      comment:''
    }
  },
  computed:{
    ...mapState(['defaultReply'])
  },
  methods:{
    ...mapMutations(['addReplySet','deleteReply']),
    quickReply(){
      if(this.comment==''){
        return
      }
      this.addReplySet(this.comment);
      this.comment = '';
    },
    delReply(item){
      this.deleteReply(item)
    }
  },
  components:{
    commonHeader
  },
  created(){
    // console.log(this.defaultReply)
  }
}
</script>
<style lang="scss" scoped>
.settle-title{
  position:fixed;
  top:88px;
  left:0;
  height:384px;
  width:100%;
  background:$bgwhite2;
  padding:32px 40px;
  textarea{
  width:686px;
  height:184px;
  border-radius:8px;
  border:2px solid $deepBlue;
  font-size:32px;
  padding:20px;
  }
  .settle-button{
    width:560px;
    height:80px;
    line-height:80px;
    text-align:center;
    background:$deepBlue;
    border-radius:40px;
    border:1px solid $deepBlue;
    font-size:30px;
    color:$bgwhite2;
    margin:40px 64px 0px 62px;
  }
}
.settle-content{
  margin-top:492px;
   background:$bgwhite2;
}
.detail-content{
    margin-left:32px;
    margin-right: 32px;
    padding-right:32px;
    @include commonBorder();
    @extend %aglinItem;
    min-height: 96px;
    span{
      width: 500px;
      display: block;
    }
    @extend %normalTitle;
     display:flex;
     justify-content: space-between;
        img{
          margin-left:88px;
     @extend %searchIcon;
   }
}

</style>

