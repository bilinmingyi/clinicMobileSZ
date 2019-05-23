<template>
<div>
  <div class="home-top">
    <div class="top-left">
      <img :src="clinicLogo" alt>
    </div>
    <div class="top-mid">
      <p class="black-title pb16">{{clinic.name}}</p>
      <!-- <p class="gray-font">服务剩余时间：{{clinic.rest}}</p> -->
      <p class="gray-font">诊所类型：{{clinic.type|clinicType}}</p>
    </div>
    <!-- <div class="top-right">服务详情</div> -->
  </div>
  <hr class="full-screen-hr"></hr>
  <div class="home-mid">
    <div class="mid-left flex-mid-center flex-one">
      <img src="@/assets/images/lx2.png" alt="">
      <span class="subtitle">联系代表</span>
    </div>
    <div class=" flex-mid-center flex-one" @click="goPatientInfo">
      <div class="fix-img">
      <img :src="patientLogo" alt="" >
      <span class="fix-icon" v-show="unReadNum>0">{{unReadNum}}</span>
      </div>
      <span class="subtitle">患者信息</span>
    </div>

  </div>
</div>
</template>

<script>
import { mapState } from 'vuex';
import { unRead,isShowPatient } from "@/fetch/api";
export default {
  data() {
    return {
      haveInfo:false,
      imglogo1:require('@/assets/images/ly.png'),
      imglogo2:require('@/assets/images/ly2.png'),
      menzhenlogo:require('@/assets/images/menzhen@2x.png'),
      unReadNum:'',
      clinics:{}
    };
  },
  computed:{
    ...mapState(['clinic']),
    patientLogo(){
      return this.haveInfo==false?this.imglogo1:this.imglogo2;
    },
    clinicLogo(){
      return this.clinic.logo!==''? this.clinic.logo:this.menzhenlogo;
    }
  },
  methods:{
    goPatientInfo(){
      if(this.haveInfo==false){
        return
      }
      this.$router.push({name:'patientInfoPage'})
    },
    getUnRead(){
    let params={
      session_type:'CLINIC_PATIENT'
    }
    unRead(params).then(res=>{
      if(res.code===1000){
          let self= this;
          try{
        self.unReadNum = res.data.unread_count;
          } catch(e){
             self.unReadNum = 0
          }
      }else{
        this.$Message.infor(res.msg);
      }
    })
    }
  },
  created(){
    isShowPatient().then(res=>{
      if(res.code===1000){
             let self= this;
        self.haveInfo = res.data;
        if(self.haveInfo){
          this.getUnRead();
        }
      }else{
        this.$Message.infor(res.msg);
      }
    })
  }
};
</script>
<style lang="scss" scoped>
.home-top {
  padding: 40px 36px 48px 36px;
  width: 100%;
  height: 184px;
  background: $bgwhite2;
  @extend %flexMidCenter;
  .top-left {
    img {
      border-radius: 100px;
      @extend %mediumIcon;
    }
  }
  .top-mid{
    padding-left: 20px;
    flex: 1;
  }
  .top-right {
  @include simpleButton(68px,124px);
  }
}
 .home-mid{
    width: 100%;
    height: 148px;
    background: $bgwhite2;
    display: flex;
    .mid-left{
      flex: 1;
      width: 50%;
      @include commonBorder(right)
    }
    img{
      width: 64px;
      height: 64px;
    }
    .subtitle{
      @extend %normalTitle;
      padding-left: 20px;
    }
    .fix-img{
      position: relative;
        .fix-icon{
        position: absolute;
        top: 5px;
        right: 5px;
        // @extend %searchIcon;
        text-align: center;
        min-width: 44px;
        min-height:44px;
        @extend %aglinItem;
        justify-content: center;
        content: "";
        -webkit-transform: translate(50%, -50%);
        transform: translate(50%, -50%);
        // border: 3px solid #fff;
        border-radius: 100px;
        color:$bgwhite2;
        background: $redColor;
        }
    }
  }
</style>


