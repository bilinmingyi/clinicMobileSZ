<template>
  <div class="info">
    <common-title></common-title>
    <div class="info-bar">
      <div class="info-item">
        <span>姓名</span>
        <input type="text" placeholder="必填" v-model="name">
      </div>
      <div class="info-item">
        <span>生日</span>
        <input type="date" placeholder="出生日期" v-model="birthdayTime" class="date-input">
      </div>
      <div class="info-item">
        <span>性别</span>
        <div class="radio-group">
          <input
            type="radio"
            name="patient-sex"
            id="patient-sex-male"
            :checked="sex_statues==1"
            @click="changeStatue(1)"
          >
          <label for="patient-sex-male">男</label>

          <input
            type="radio"
            id="patient-sex-female"
            name="patient-sex"
            :checked="sex_statues==2"
            @click="changeStatue(2)"
          >
          <label for="patient-sex-female">女</label>
        </div>
      </div>
      <div class="info-item">
        <span>手机</span>
        <div class="buttons">
          <span>{{mobile}}</span>
          <button class="change-btn" @click="jumpTo('personPhone')">修改</button>
        </div>
      </div>
    </div>
    <footer>
      <div class="cancel" @click="jumpTo('cancel')">取消</div>
      <div class="confirm" @click="saveData">确定</div>
    </footer>
  </div>
</template>
<script>
import { updateUserInfo} from "@/fetch/api";
import { dateFormat } from "@/assets/js/filters";
import { mapState,mapActions} from "vuex";
import commonTitle from "@/components/common/commonTitle";
export default {
  props: ["userData"],
  data() {
    return {
      name: "",
      ageY: "",
      mobile: "",
      sex_statues: "",
      birthdayTime: ""
    };
  },
  components: {
    commonTitle
  },
  computed: {
    ...mapState(["userInfoState"])
  },
  methods: {
    ...mapActions(['getUserInfo']),
    _initeData() {
      this.name = this.userInfoState.name;
      this.ageY = this.userInfoState.age;
      this.mobile = this.userInfoState.mobile;
      this.sex_statues =
        this.userInfoState.sex == 0 ? "" : this.userInfoState.sex;
      this.birthdayTime = this.$options.filters.dateFormat(
        new Date(this.userInfoState.birthday),
        "yyyy-MM-dd"
      );
    },
    jumpTo(params) {
      switch (params) {
        case "personPhone":
          this.$router.push({ name: "bindPhonePage" });
          break;
        case "cancel":
        this.$router.push({ name: "personPage" });
      }
    },
    changeStatue(index) {
      if (this.sex_statues == index) {
        return;
      }
      this.sex_statues = index;
    },
    saveData() {
      //校验
      if (
        this.name == "" ||
        this.birthdayTime == "" ||
        this.sex_statues == ""
      ) {
        this.$Message.infor("请完善个人信息");
        return;
      }
      let timetmp = Date.parse(new Date(this.birthdayTime));
      let params = {
        name: this.name,
        birthday: timetmp,
        sex: this.sex_statues,
        city: this.userInfoState.city
      };
      updateUserInfo(params).then(res=>{
        if(res.code==1000){
          this.$Message.infor('保存成功');
          this.getUserInfo();
        }else{
          this.$Message.infor('更新失败'+res.code)
        }
      });
    }
  },
  watch: {
    userInfoState() {
      this._initeData();
    }
  },
  mounted() {
    this._initeData();
  }
};
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
  background: $bgwhite2;
  &-item {
    height: 96px;
    width: 100%;
    padding: 0 32px;
    @extend %aglinItem;
    font-size: 32px;
    @include commonBorder();
    span {
      margin-right: 40px;
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
      padding-right: 20px;
    }
  }
  .buttons {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .change-btn {
    width: 160px;
    height: 64px;
    text-align: center;
    line-height: 32px;
    background: $yellowColor;
    border-radius: 10px;
    border: 0px;
    color: $bgwhite2;
    font-size: 30px;
  }
}
footer {
  display: flex;
  padding: 0 40px;
  @extend %aglinItem;
  @include psFixed(bottom, 110px);
  background: $bgwhite2;
  justify-content: space-between;
  .cancel {
    @include simpleButton(80px, 320px, 30px);
  }
  .confirm {
    @include deepButton(80px, 320px, 30px);
  }
}
.radio-group label {
  position: relative;
  width: 96px;
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
.date-input {
  // @include newsButton(60px,220px);
}
</style>

