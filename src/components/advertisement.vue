<template>
  <div class="advertisement container-lg p-0 ">
    <div class="rowbox row m-0">
      <div class="leftbox col-md-4 p-0">
        <div class="ad_left">

          <a class="with_right_line" href=""><i class="fa fa-clock-o"></i>

            <br>保障服务</a>
          <a class="with_right_line" href=""><i class="fa fa-building-o"></i>

            <br>企业团购</a>
          <a href=""><i class="fa fa-facebook-official"></i>

            <br>F码通道</a>
          <a class="with_hat with_right_line" href=""><i class="fa fa-id-card-o"></i>

            <br>米粉卡</a>
          <a class="with_hat with_right_line" href=""><i class="fa fa-usd"></i>

            <br>以旧换新</a>
          <a class="with_hat" href=""><i class="fa fa-mobile"></i>

            <br>话费充值</a>

        </div>
      </div>
      <div class="rightbox col-md-8 p-0">
        <div class="ad_right">
          <div class="ad_card"><img src="../assets/images/0ab8e5096ac6f08bd632e4d5a15d1792.jpg"></div>
          <div class="ad_card"><img src="../assets/images/c5f019908e21571fe48fdad0ebf79249.jpg"></div>
          <div class="ad_card"><img src="../assets/images/28c13d0d11b38ec17fa5d83bc6ba5912.jpg"></div>
        </div>
      </div>

    </div>

  </div>
</template>
<script>
export default {
  name: 'advertisement'
}
</script>
<style lang="less">
.advertisement {
  margin: 20px auto;
  min-height: 150px;

  .ad_left {

    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    /* float: left; */
    background-color: rgb(95, 87, 80);
    align-content: center;
    flex-wrap: wrap;
    justify-content: space-around;





    a {
      text-decoration: none;
      color: rgb(205, 205, 205);
      /* box-sizing: border-box; */
      /* padding: 10px; */
      position: relative;
      font-size: 12px;
      /* background-color: aquamarine; */
      /* padding-top: 20px; */
      height: 50%;
      width: 30%;
      display: block;
      /* border-left: 1px solid rgb(102,94,87); */
      text-align: center;

      &.with_hat::before {
        /* content: "helo"; */
        content: "";
        position: absolute;
        left: 0;
        /* top: 0; */
        width: 100%;
        height: 1px;
        background-color: rgb(205, 205, 205);
      }

      &.with_right_line::after {
        /* top:0; */
        content: "";
        position: absolute;
        right: -4px;
        top: 10%;
        height: 80%;
        width: 1px;
        background-color: rgb(205, 205, 205);
      }

      i {
        display: block;
        margin-top: 10px;
      }
    }

    ul {
      list-style-type: none;
      width: 100%;
      height: 100%;

      li {
        float: left;
      }
    }
  }

  .ad_right {
    width: 100%;
    /* float: left; */
    height: 100%;
    /* background-color: blueviolet; */
    display: flex;
    /* align-content: space-between; */
    justify-content: space-between;

    .ad_card {
      display: block;
      /* float: right; */
      width: 30%;
      height: 100%;
      background-color: #fff;
      /* margin-left: 3%; */
      transition: all 0.5s linear;

      &:hover {
        box-shadow: var(--shadow1);
        cursor: pointer;
      }

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .rowbox {
    width: 100%;
    height: 100%;
  }


}
</style>