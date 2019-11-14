<template>
  <div>
    <entry-item @goDetail="goDetail"></entry-item>

  </div>
</template>

<script>
import { entryItem } from "@/components/common";
export default {
  data() {
    return {
    };
  },
  components: {
    entryItem
  },
  methods: {
    goDetail() {
      this.$router.push({ path: '/personPage/entryDetail', query: { name: '伯伯培训专题', haveBtn: false } })
    }
  }
}
</script>

<style scoped>
</style>