<template>
  <div class="load " @click="loadMore">
    <p>{{loadTitle}}</p>
    <p><span class="spot"></span><span class="spot"></span><span class="spot"></span></p>
  </div>
</template>
<script>
export default {
  props:{
    loadTitle:{
      type:String,
      default:'查看更多'
    }
  },
  data(){
    return{}
  },
  methods:{
    loadMore(){
      this.$emit('loadMore')
    }
  }
}
</script>
<style lang="scss" scoped>
.load{
 @extend %flexMidCenter ;
  height: 80px;
  width: 100%;
  display: flex;
  color: $simpleGray;
  font-size: 30px;
  .spot{
    width: 10px;
    height: 10px;
    background: $simpleGray;
    content: '';
    border-radius: 20px;
    display: block;
    margin-right: 4px;
  }
  p{
    display: flex;
    margin-right: 10px;
  }
}
</style>


