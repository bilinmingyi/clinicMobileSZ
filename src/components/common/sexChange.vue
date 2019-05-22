<!--
   性别 男女保密选择
   单项选择可以使用该组件
   传入一个单项选择的数组 数据格式如singleList的default
 -->
<template>
  <div class="sex">
    <div class="info-item">
      <span>性别</span>
      <div class="radio-group" v-for="(item,index) in singleList" :key="item.id">
        <input type="radio" :name="single_name" :id="item.id" :checked="sex_statues==item.status" @click="changeStatue(item.status)">
        <label :for="item.id">{{item.name}}</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    singleList: {
      type: Array,
      default: () => [
        {
          name: '男',
          id: "patient-sex-male",
          status: 1
        },
        {
          name: '女',
          id: "patient-sex-female",
          status: 2
        },
        {
          name: '保密',
          id: "patient-sex-secret",
          status: 3
        }
      ]
    },
    single_status: {
      type: [Number, String],
      default: 3
    },
    single_name: {
      type: String,
      default: 'patient-sex'
    }
  },
  data() {
    return {
      sex_statues: ''
    }
  },
  methods: {
    changeStatue(index) {
      if (this.sex_statues == index) {
        return;
      }
      this.sex_statues = index;
    }
  },
  created() {
    this.sex_statues = this.single_status
  }
}
</script>
<style lang="scss" scoped>
input {
  font-size: 32px;
}
input::-webkit-input-placeholder {
  font-size: 32px;
}
input::-moz-placeholder {
  /* Mozilla Firefox 19+ */
  font-size: 32px;
}
input:-moz-placeholder {
  /* Mozilla Firefox 4 to 18 */
  font-size: 32px;
}
input:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-size: 32px;
}
.info {
  color: $grayColor;
  background: $bgwhite2;
  &-item {
    height: 96px;
    width: 100%;
    padding: 0 32px;
    @extend %aglinItem;
    font-size: 32px;
    @include commonBorder();
    span {
      margin-right: 100px;
    }
    .input-group {
      input {
        width: 40px;
      }
    }
  }
  .radio-group {
    @extend %aglinItem;
    input {
      width: 40px;
      height: 40px;
      background: $yellowColor;
      margin-right: 10px;
    }
    label {
      // padding-right: 30px;
    }
  }
}
.radio-group label {
  position: relative;
  width: 96px;
  padding-right: 40px;
}
.radio-group label::after {
  position: absolute;
  top: 0;
  left: -52px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  content: "";
  border: 1px solid #7c7c7c;
  border-radius: 50%;
  background: #fff;
}
.radio-group input {
  visibility: hidden;
}
.radio-group input:checked + label::after {
  border: none;
  background-image: url("../../assets/images/xuanze@2x.png");
  background-size: 40px 40px;
}
</style>


