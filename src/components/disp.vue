<template>
  <div class="disp container-xl px-0">
    <div class="left">
      <ul>
        <li>手机
          <div class="slide_menu">
            <ul>
              <li v-for="item of slide_menu_list">
                <a href="javascript:;">
                  <img :src="item.path">
                  <span>{{ item.name }}</span>
                </a>
              </li>
            </ul>



          </div>
          <i class="fa fa-angle-right"></i>
        </li>
        <li>电视
          <div class="slide_menu">

          </div>
          <i class="fa fa-angle-right"></i>
        </li>
        <li>家电
          <div class="slide_menu">

          </div>
          <i class="fa fa-angle-right"></i>
        </li>
        <li>笔记本 平板
          <div class="slide_menu">

          </div>
          <i class="fa fa-angle-right"></i>
        </li>
        <li>出行 穿戴
          <div class="slide_menu">

          </div>
          <i class="fa fa-angle-right"></i>
        </li>
        <li>耳机 音箱
          <div class="slide_menu">

          </div>
          <i class="fa fa-angle-right"></i>
        </li>
        <li>健康 儿童
          <div class="slide_menu">

          </div>
          <i class="fa fa-angle-right"></i>
        </li>
      </ul>

    </div>
    <div class="right">
      <div class="swiper mySwiper">
        <div class="swiper-wrapper">
          <swiper_item v-for="(item, index) in swiper_slide_list" :swiper_slide_item="item" :key="item.index"
            :class="'slide_' + (index + 1)">
          </swiper_item>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    </div>

  </div>
</template>
<script>
import swiper_item from './swiper_item.vue'
import Swiper from 'swiper'; // 注意引入的是Swiper
// import 'swiper/css/swiper.min.css' // 注意这里的引入
import "swiper/swiper-bundle.min.css"
import "swiper/bundle"
// import "swiper/swiper-bundle.min.js.map"
export default {
  data() {
    return {
      slide_menu_list: [
        {
          "path": require("../assets/images/heisha.webp"),
          "name": "黑鲨5 Pro"
        },
        {
          "path": require("../assets/images/a75970583c27c5cfe61f8dcafc3245c1.webp"),
          "name": "黑鲨5"
        },
        {
          "path": require("../assets/images/cd1f0b06757ab64cb320a9a545f616ef.webp"),
          "name": "Redmi 10A"
        },
        {
          "path": require("../assets/images/c1f27bd990c9b9380fb7685639b3f503.webp"),
          "name": "Redmi K50 Pro"
        },
        {
          "path": require("../assets/images/199b6e1769dd4002b0e6373fd3a5dd0e.webp"),
          "name": "Redmi K50"
        },
        {
          "path": require("../assets/images/574efed01e8d437aa5c82fdc515b7e65.webp"),
          "name": "Redmi K40S"
        },
        {
          "path": require("../assets/images/b251574ddd82dca50a160d4acc09ceb5.webp"),
          "name": "Redmi K50 电竞版"
        },
        {
          "path": require("../assets/images/6c0553468a73cc445012577d8993dfc9.webp"),
          "name": "Xiaomi 12 Pro"
        },
        {
          "path": require("../assets/images/ae8f6a46838f737d69290f12fd95de35.webp"),
          "name": "Xiaomi 12"
        },
        {
          "path": require("../assets/images/6a7002e89afcdc705744bb395ad29ca4.webp"),
          "name": "Xiaomi 12X"
        },
        {
          "path": require("../assets/images/e2ea5e610875460bc0cda0e45f4822ec.webp"),
          "name": "Xiaomi 11 青春活力版"
        },
        {
          "path": require("../assets/images/a95d59ec8c9c6ae7061f314eb4901e7c.webp"),
          "name": "Note 11 Pro 系列"
        },
        {
          "path": require("../assets/images/e2c570b7cd666114a7d351a1dd10a527.webp"),
          "name": "Note 11 4G"
        },
        {
          "path": require("../assets/images/ca3caca774dc8be0a453c90d1fa58e13.webp"),
          "name": "Note 11 5G"
        },
        {
          "path": require("../assets/images/92fdd051100722d25323e9bd188befc5.webp"),
          "name": "Redmi K40"
        },
        {
          "path": require("../assets/images/f33903e1162959f500360a39896f2306.webp"),
          "name": "Xiaomi Civi"
        },
        {
          "path": require("../assets/images/fa2bae1f43611e80a8e4877719c76bdb.webp"),
          "name": "Xiaomi MIX 4"
        },
        {
          "path": require("../assets/images/ab345272bf9894bb8269d4901344b068.webp"),
          "name": "Xiaomi MIX FOLD"
        },
        {
          "path": require("../assets/images/a1241b5a94ba1739e85f72d46592af0e.webp"),
          "name": "Xiaomi 11 Ultra"
        },
        {
          "path": require("../assets/images/a51c1afa4db8e47e62fad1f6fa4a8970.webp"),
          "name": "Xiaomi 11"
        },
        {
          "path": require("../assets/images/79e2935264bf9247aa7512e330112820.webp"),
          "name": "Note 10 5G"
        },
        {
          "path": require("../assets/images/56bb7e2d44cef71c3afedaeae3d98927.webp"),
          "name": "Note 10 Pro"
        },
        {
          "path": require("../assets/images/1db88cd66ff1a6a3e75116988b7f3e12.webp"),
          "name": "Redmi 9A"
        },
        {
          "path": require("../assets/images/72bd70039670d29610569421f753fcb6.webp"),
          "name": "Xiaomi 11 青春"
        }
      ],
      swiper_slide_list: [
        {
          "index": 1,
          "path": require("../assets/images/90495f43f9a067b47b36c07d0bd2b4ff.webp")
        },
        {
          "index": 2,

          "path": require("../assets/images/8e169482b8cbf7a68daaef1464881446.webp")
        },
        {
          "index": 3,

          "path": require("../assets/images/e1a326a1a5db9d8be9c5767aab1b08c6.webp")
        },
        {
          "index": 4,

          "path": require("../assets/images/74a51ccb0237755ef3ad7021a6e6d43c.webp")
        },
        {
          "index": 5,

          "path": require("../assets/images/9778fda5f48d1aae93c4747a5274a1a1.jpg")
        }
      ]
    }
  },
  components: {
    swiper_item
  },
  mounted() {

    var mySwiper = new Swiper('.swiper', {
      loop: true, // 循环模式选项
      effect: 'fade',
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 2000
      }

      // 如果需要滚动条

    })
  }
}
</script>
<style lang="less">
@media (max-width:700px) {


  .disp {
    .left {
      font-size: 0.5em;
      width: 20%;
    }

    height: 250px;
  }

}

.disp {
  /* padding: 1px; */
  position: relative;
  /* overflow: auto; */
  width: 100%;
  height: 400px;

  .left {
    background-color: rgba(105, 105, 105, 0.6);
    box-sizing: border-box;
    /* overflow: hidden; */
    height: 100%;
    float: left;
    padding: 20px 0px;
    width: 20%;
    margin: 0;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 20;
    font-size: 15px;

    .slide_menu {
      box-sizing: border-box;
      padding: 20px 0px;
      z-index: 100;
      position: absolute;
      display: none;
      left: 100%;
      top: 0%;
      width: 900px;
      height: 100%;
      background-color: white;
      box-shadow: var(--shadow1);

      ul {
        width: 100%;
        height: 100%;
        list-style-type: none;
        display: flex;
        flex-wrap: wrap;
        align-content: space-around;

        li {
          width: 24%;
          height: 15%;
          /* float: left; */
          display: block;

          /* display: inline-block; */
          a {
            text-decoration: none;
            color: black;
            font-size: small;
          }

          img {
            /* width:30px; */
            height: 100%;
          }
        }
      }
    }

    ul {
      list-style-type: none;
      margin: 0;
      padding-left: 0px;

      li {
        color: #fff;
        padding-top: 10px;
        padding-bottom: 10px;
        padding-right: 10px;
        padding-left: 10px;
        height: 15%;

        i {
          float: right;
        }
      }

    }

  }

  .right {
    display: block;
    float: left;
    width: 100%;
    height: 100%;
    z-index: 10;
    /* background-color: red; */
    overflow-wrap: break-word;
    position: relative;

    .mySwiper {
      width: 100%;
      height: 100%;
      background-color: transparent;
      --swiper-navigation-color: rgb(124, 124, 124);
      --swiper-pagination-color: rgb(124, 124, 124);

      .swiper-button-prev {
        left: 20%;
        /* top: 0; */
        position: absolute;
      }

      .swiper-pagination {
        position: absolute;
        left: 20%;
        width: 80%;
      }

      .swiper-slide {
        img {
          width: 100%;
        }

        a img {
          display: block;
          width: 100%;
          height: 100%;
        }
      }



    }

  }



  .left ul li:hover {
    background-color: rgb(255, 106, 0);
    cursor: pointer;
  }

  .left ul li:hover .slide_menu {
    display: block;
  }



  .left .slide_menu ul li a:hover {
    color: orange;
  }


}
</style>