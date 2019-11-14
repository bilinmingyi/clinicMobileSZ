<template>
  <div class="entry-detail">
    <article-detail>
      <template slot="entryCourse" v-if="haveBtn">
        <div class="btn mt-20px" @click="goEntry">我要报名</div>
      </template>
    </article-detail>
  </div>
</template>

<script>
import { articleDetail } from "@/components/common";
export default {
  props: ['name', 'haveBtn'],
  components: {
    articleDetail
  },
  data() {
    return {
    };
  },
  methods: {
    goEntry() {
      this.$router.push({ path: '/personPage/trainingCoure', query: {} })
    }
  }
}
</script>

<style scoped lang="scss">
.btn {
  background: $yellowColor;
  width: 690px;
  height: 80px;
  border-radius: 8px;
  color: #ffffff;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
}
</style>
<style lang="scss" scoped>
@import "../mallPage/mallOrderPart/commonDetail.scss";
</style>