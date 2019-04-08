<template>
  <div >
      <stock-filter ></stock-filter>
      <input-search :buttonName="'查询'" :placeholder="'药品名称/拼音简码'"></input-search>
      <stock-list class="stock"></stock-list>
  </div>
</template>
<script>
import stockFilter from "./stockFilter"
import inputSearch from "@/components/common/inputSearch"
import stockList from "./stockList"
export default {
  data(){
    return{}
  },
  components:{
    stockFilter,
    inputSearch,
    stockList
  }
}
</script>
<style lang="scss" scoped>
.stock{
  max-height: 950px;
  overflow: auto;
}
</style>


