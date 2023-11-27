<template>
    <div class="side_panel">

        <a href="javascript:void(0);" class="download_qr1">
            <img class="static" src="../assets/images/98a23aae70f25798192693f21c4d4039.png">
            <img class="Bhover" src="../assets/images/74c4fcb4475af8308e9a670db9c01fdf.png">
            手机APP
            <div class="qrCode">
                <img src="../assets/images/78c30d4f259ed43ab20e810a522a6249.png">
                <span>扫码领取新人百元礼包</span>
                <div class="qrTriangle"></div>
            </div>

        </a>
        <router-link href="javascript:void(0);" :to="{
            name:'person_center'
        }">
            <img class="static" src="../assets/images/55cad219421bee03a801775e7309b920.png">
            <img class="Bhover" src="../assets/images/41f858550f42eb1770b97faf219ae215.png">
            个人中心
        </router-link>
        <a href="javascript:void(0);">
            <img class="static" src="../assets/images/12eb0965ab33dc8e05870911b90f3f13.png">
            <img class="Bhover" src="../assets/images/95fbf0081a06eec7be4d35e277faeca0.png">
            售后服务
        </a>
        <a href="javascript:void(0);">
            <img class="static" src="../assets/images/4f036ae4d45002b2a6fb6756cedebf02.png">
            <img class="Bhover" src="../assets/images/5e9f2b1b0da09ac3b3961378284ef2d4.png">
            人工客服
        </a>
        <router-link href="javascript:void(0);" :to="{
            name:'cart_calc'
        }">
            <img class="static" src="../assets/images/d7db56d1d850113f016c95e289e36efa.png">
            <img class="Bhover" src="../assets/images/692a6c3b0a93a24f74a29c0f9d68ec71.png">
            购物车
        </router-link>
        <a href="javascript:void(0);" class="bc2top" v-show="$store.state.bc2top_show" @click="bc2top_click">
            <img class="static" src="../assets/images/totop.png">
            <img class="Bhover" src="../assets/images/totop_hover.png">
            回到顶部
        </a>
    </div>
</template>
<script>
import bc2top_click_m from '@/assets/js/bc2top_click_func.js'

export default {
    name: 'side_panel',
    mixins:[bc2top_click_m]
}
</script>
<style lang="less">
@media (max-width:700px) {
  .side_panel {
    display: none;
  }
}
.side_panel {
    z-index: 400;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);



    a {
        text-decoration: none;
        color: var(--topbar_color);
        display: block;
        padding: 10px 10px;
        background-color: white;
        font-size: 14px;
        text-align: center;
        transition: all .5s linear;

        img {
            width: 25px;
            height: 25px;
            /* padding: 10px auto; */
            margin: 0px auto;
            display: block;
        }

        .Bhover {
            display: none;
        }

        &:hover {
            color: orange;

            .Bhover {
                display: block;
            }

            .static {
                display: none;
            }
        }
    }





    .download_qr1 {
        position: relative;

        .qrCode {
            font-size: 10px;
            position: absolute;
            left: 0;
            top: 0;
            margin-left: -130px;
            width: 0px;
            height: 120px;
            background-color: white;
            overflow: hidden;
            transition: .5s;
            color: var(--topbar_color);

            /* display: none; */
            img {
                width: 80px;
                height: 80px;
                margin: 10px auto;
            }

            .qrTriangle {
                position: absolute;
                left: 100%;
                top: 50%;
                margin-top: -26px;
                border-left: 6px white solid;
                border-right: 6px transparent solid;
                border-top: 6px transparent solid;
                border-bottom: 6px transparent solid;

                color: blueviolet;
                font-size: 15px;
            }
        }


        &:hover {
            .qrCode {
                width: 120px;
                overflow: visible;
            }
        }
    }




}
</style>