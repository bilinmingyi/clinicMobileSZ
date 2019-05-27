  <!-- 
  type:第二种类型表格 标题仔上面 内容在下面 深蓝色标题
  desc:需要传入两个数组
      titleArray:标题的数组 按页面的标题顺序
      contentArray:内容的数组 注意数组里面的对象需要是处理过（顺序）且必要的数据
    可参考入库统计的 functionPage/enterBoundPart/chineseMedical组件
    {{tableValue.objectKey}} 
    {{tableValue.value}}
  
  19-05-27 对于第二种表格进行拓展样式  
  * 标题有深浅之分
  isTitleLight:true  // 标题是不是浅色的标题
   -->
<template>
  <div>
    <div class="second" v-show="titleArray.length>0">
      <section class="second-detail">
        <table>
          <tr>
            <!-- <th v-for="(item,index) in titleArray" :key="index">
              <div>{{item}}</div>
            </th> -->
            <th v-for="(item,index) in titleArray" :key="index" :class="[{'light-color':isTitleLight}]">
              <div>{{item}}</div>
            </th>
          </tr>
          <tr v-for="(content,index) in contentArray">
            <td v-for="(value,key,index) in content">
              <slot name="value" :value="value" :objectKey="key">{{value}}</slot>
            </td>
          </tr>
          <tr v-show="hasData">
            <td colspan="4" style=" color: #7c7c7c;">
              <slot name="noData">没有相关记录</slot>
            </td>
          </tr>
        </table>
      </section>
    </div>
  </div>
</template>
<script>
export default {
  name: 'blmySecondTable',
  props: {
    titleArray: {
      type: Array,
      default: () => []
    },
    contentArray: {
      type: Array,
      default: () => []
    },
    hasData: {
      type: Boolean,
      default: true
    },
    isTitleLight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.second {
  margin: 30px 30px 20px 30px;
  &-detail {
    margin-top: 30px;
    table {
      border-collapse: separate;
      border-radius: 10px;
      border: 2px solid $greenColor;
      border-bottom: 0px;
      border-right: 0px;
      width: 100%;
      font-size: 26px;
      tr:nth-child(1) {
        color: #ffffff;
        background: $greenColor;
        div {
          @include commonBorder(right, #ffffff);
        }
        th:nth-last-child(1) {
          div {
            border: 0;
          }
        }
      }
      tr {
        color: $grayColor;
        border: 1px solid $greenColor;
        height: 80px;
      }
      td {
        text-align: center;
        @include commonBorder(bottom, $greenColor);
        @include commonBorder(right, $greenColor);
      }
      .light-color {
        background: $lightColor;
        color: $grayColor;
        @include commonBorder(bottom, $greenColor);
        @include commonBorder(right, $greenColor);
        div {
          border-right: $greenColor !important;
        }
      }
    }
  }
}
</style>


