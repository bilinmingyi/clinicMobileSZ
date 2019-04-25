<!--  输入和有下拉框的组件 -->
<template>
  <div class="select">
    <span> 医生名称</span>
    	<input type="text" name="makeupCo" id="makeupCo" placeholder="请选择或输入" style="width:170px;height:15px;border:0pt;">
<select name="makeupCoSe" id="makeupCoSe"  onChange="changeF();">
	<option id='1' value='java'>java</option>
	<option id='2' value='c++'>c++</option>
	<option id='3' value='python'>python</option>
</select>

  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods:{
        // changeF()
    // {
    //    document.getElementById('makeupCo').value=
    //    document.getElementById('makeupCoSe').options[document.getElementById('makeupCoSe').selectedIndex].value;
    // }
  },
  created(){
  }
}
</script>
<style lang="scss" scoped>
.select{
  width: 100%;
  height: 96px;
  line-height: 96px;
  display: flex;
  align-items: center;
  // @extend %aglinItem;
  padding: 0px 30px;
  background: $bgwhite2;
  select{
    background: yellow;
  }
}
</style>
