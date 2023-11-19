<template>
  <div class="advertisement container-xl p-0 ">
    <div class="rowbox row m-0">
      <div class="leftbox col-md-2 p-0 mb-2">
        <div class="ad_left">

          <a href=""><i class="fa fa-clock-o"></i>

            <br>保障服务</a>
          <a href=""><i class="fa fa-building-o"></i>

            <br>企业团购</a>
          <a href=""><i class="fa fa-facebook-official"></i>

            <br>F码通道</a>
          <a href=""><i class="fa fa-id-card-o"></i>

            <br>米粉卡</a>
          <a href=""><i class="fa fa-usd"></i>

            <br>以旧换新</a>
          <a href=""><i class="fa fa-mobile"></i>

            <br>话费充值</a>

        </div>
      </div>
      <div class="rightbox col-md-10 p-0">
        <div class="ad_right">
          <div class="ad_card"><img :src="this.$store.state.location_prefix + '/images/advertisement/ad1.png'"></div>
          <div class="ad_card"><img :src="this.$store.state.location_prefix + '/images/advertisement/ad2.png'"></div>
          <div class="ad_card"><img :src="this.$store.state.location_prefix + '/images/advertisement/ad3.png'"></div>
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
    padding: 3px;
    width: 100%;
    height: 100%;
    /* float: left; */
    background-color: rgb(95, 87, 80);
    align-content: center;
    flex-wrap: wrap;
    justify-content: center;





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
      width: 33.3%;
      display: block;
      /* border-left: 1px solid rgb(102,94,87); */
      text-align: center;



      &::before,
      &::after {
        position: absolute;
        content: "";
        background: #665e57;
      }


      &::before {
        top: -1px;
        left: 5%;
        width: 90%;
        height: 1px;
      }
      &::after {
        top: 5%;
        left: 0;
        width: 1px;
        height: 90%;
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