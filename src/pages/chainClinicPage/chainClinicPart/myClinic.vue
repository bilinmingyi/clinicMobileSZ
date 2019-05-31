<template>
  <div class="clinic">
    <div v-for="(item,index) in clinicsList" :key="index" :class="['clinic-item',{'has-rihgt-margin':(index%2)==0}]">
      <img :src="item.clinic_logo!==''?item.clinic_logo:defaultClinic" alt="">
      <p>{{item.clinic_name}}</p>
      <div class="clinic-toggle" @click="toggleClinic(item)">进入机构</div>
    </div>
    <div class="no-data" v-if="noData&&isComplete">
      <img src="@/assets/images/Rectangle@2x.png" alt="">
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import { changeClinic } from "@/fetch/api"
export default {
  data() {
    return {
      clinicList: [1, 2, 3, 4, 5, 6, 7],
      defaultClinic: require('@/assets/images/menzhen@2x.png'),
      isComplete: false
    }
  },
  computed: {
    ...mapState(['clinicsList']),
    noData() {
      return this.clinicsList.length === 0
    }
  },
  methods: {
    ...mapActions(['getActClinic']),
    toggleClinic(item) {
      this.$Message.confirm('确认进入到该机构么？', () => {
        let params = {
          user_id: item.user_id,
          clinic_id: item.clinic_id
        }
        changeClinic(params).then(res => {
          if (res.code === 1000) {
            this.$router.push({ name: "homePage" })
          } else {
            this.$Message.infor("切换机构失败！！！" + res.msg);
          }
        })
      })
    }
  },
  async created() {
    //   //兜底 防止某些手机有刷新功能 不刷新不会请求
    if (this.clinicsList.length === 0) {
      await this.getActClinic()
    }
    this.isComplete = true
  }
}
</script>
<style lang="scss" scoped>
.clinic {
  overflow: auto;
  padding: 0px 30px;
  width: 100vw;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 150px;
  &-item {
    width: 336px;
    z-index: 98;
    height: 360px;
    background: $bgwhite2;
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
    margin-top: 30px;
    img {
      @include sameWH(164px);
    }
    p {
      margin-top: 17px;
      height: 40px;
      width: 284px;
      text-align: center;
      font-weight: 600;
      @include textEllipsis(40px, 284px);
      color: $grayColor;
    }
  }
  &-toggle {
    @include deepButton(64px, 240px);
    border-radius: 32px;
    margin-top: 24px;
  }
  .has-rihgt-margin {
    margin-right: 18px;
  }
  &::after {
    clear: both;
  }
  .no-data {
    @extend %flexMidCenter;
    width: 100%;
    img {
      @include sameWH(420px);
    }
  }
}
</style>
