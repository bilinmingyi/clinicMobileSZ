<template>
  <div>
    <common-header></common-header>
    <homeTop></homeTop>
    <div>工作台</div>
    深圳诊所
  </div>
</template>
<script>
import commonHeader from '@/components/common/commonHeader'
import homeTop from './components/homeTop'
export default {
  name:"HomePage",
  data(){
    return{

    }
  },
  components:{
    commonHeader,
    homeTop
  }
}
</script>
<style lang="scss" scoped>

</style>


