<template>
  <div>
    <common-header :titleName="'添加评论'"></common-header>
    <div class="add">
      <p class="add-title">{{platformTitle}}</p>
      <p class="add-subtitle">添加评论</p>
      <textarea rows="5" class="add-textarea" v-model="comment"></textarea>
      <div class="add-submit">提交评论</div>
      <div class="add-cancel" @click="cancel">取消并返回</div>
    </div>
  </div>
</template>

<script>
import commonHeader from "@/components/common/commonHeader";
export default {
  props: ["platformTitle"],
  data() {
    return {
      comment:''
    };
  },
  methods:{
    cancel(){
      this.$router.go(-1)
    }
  },
  components: {
    commonHeader
  }
};
</script>
<style lang="scss" scoped>
.add {
  padding: 40px 30px;
  &-title {
    font-size: 36px;
    font-weight: 600;
  }
  &-subtitle {
    color: $grayColor;
    padding: 14px 0;
    color: #646464;
    font-size: 28px;
  }
  &-textarea {
     border: 2px solid #979797;
    border-radius: 8px;
    width: 100%;
    padding: 10px;
    font-size: 30px;
    outline: none;
  }
  &-submit {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #5096e0;
    border-radius: 60px;
    color: #fff;
    margin: 20px auto;
    font-size: 30px;
    text-align: center;
  }
  &-cancel {
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #fff;
    border: #cccccc solid 2px;
    border-radius: 60px;
    color: #646464;
    margin: 20px auto;
    font-size: 30px;
    text-align: center;
  }
}
</style>


