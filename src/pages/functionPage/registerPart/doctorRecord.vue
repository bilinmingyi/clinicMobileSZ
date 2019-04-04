<template>
  <div>
    <date-select></date-select>
    <div class="doctor">
      <section class="doctor-list">
        <table>
          <tbody>
            <tr>
              <th>挂号次数</th>
              <td>0 次</td>
            </tr>
            <tr>
              <th>预约缴费</th>
              <td>0</td>
            </tr>
            <tr>
              <th>挂号缴费</th>
              <td>500</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="doctor-detail">
        <table>
          <tr>
            <th>
              <div>挂号医生</div>
            </th>
            <th>
              <div>挂号次数</div>
            </th>
            <th>
              <div>预约缴费</div>
            </th>
            <th>
              <div>挂号缴费</div>
            </th>
          </tr>
          <tr>
            <td>lbl</td>
            <td>2</td>
            <td>30</td>
            <td>20</td>
          </tr>
          <tr>
            <td colspan="4" style=" color: #7c7c7c;">没有相关记录</td>
          </tr>
        </table>
      </section>
      
    </div>
  </div>
</template>
<script>
import dateSelect from "@/components/common/dateSelect";
export default {
  data() {
    return {};
  },
  components: {
    dateSelect
  }
};
</script>
<style lang="scss" scoped>
.doctor {
  background: $bgwhite2;
  max-height: 1000px;
  overflow: auto;
  &-list {
    padding: 30px;
    table {
      width: 100%;
      border-radius: 10px;
      border: 2px solid $greenColor;
      th {
        @include simpleButton(88px, 180px, 30px);
        color: $simpleGray;
      }
      td {
        background: $bgwhite2;
        @include commonBorder(bottom, $greenColor);
        text-align: center;
        font-size: 30px;
      }
    }
  }
  &-detail {
    padding: 0 30px 30px 30px;
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
        th:nth-child(4) {
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
    }
  }
}
</style>

