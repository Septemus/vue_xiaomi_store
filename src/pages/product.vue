<template>
    <div>
        <hr>
        <div class="product_header mb-5">
            <div class="container-xl">
                <div class="row mb-1">
                    <div class="col-md-6">
                        <h2 class="m-0">Xiaomi MIX Fold 3</h2>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li><a>概述</a></li>
                            <li><span>|</span><a>参数</a></li>
                            <li><span>|</span><a>用户评价</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="details container-xl">
            <div class="row">
                <div class="swiper mySwiper col-md-6">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in product_swiper_slide_list" :key="item.index"
                            :class="'slide_' + (index + 1)">
                            <a href="javascript:;" class="d-block">
                                <img :src="item.path" class="d-block mx-auto">
                            </a>
                        </div>
                        <!-- <swiper_item>
                        </swiper_item> -->
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <div class="col-md-6 info">
                    <h2>Xiaomi MIX Fold 3</h2>
                    <p class="info_p_gray">小米龙骨转轴|徕卡光学全焦段四摄|小米澎湃电池|双E6旗舰屏幕|第二代骁龙8 领先版|大屏交互|智能大屏</p>
                    <p class="orange">小米自营</p>
                    <div class="price_info orange">
                        <span>8999元</span>
                    </div>
                    <hr>
                    <div class="summary">
                        <span>Xiaomi MIX Fold 3 12GB+256GB 月影黑</span>
                        <span class="float-end">8999元</span>
                        <p class="orange">总计：8999元</p>
                    </div>
                    <div class="sale_btn row">
                        <a href="" class="col-md-6 d-block">
                            <button class="cart_btn"><span>加入购物车</span></button>
                        </a>
                        <a href="" class="col-md-6 d-block">
                            <button class="like_btn"> <span><i class="fa fa-heart-o" aria-hidden="true"></i>喜欢</span>
                            </button>
                        </a>
                    </div>
                    <div class="guarantees">
                        <ul>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true" ></i>
                                小米自营</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true" ></i>
                                小米发货</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true" ></i>
                                7天无理由退货（到店自取拆封后不支持）</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true" ></i>
                                运费说明</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true" ></i>
                                企业信息</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true" ></i>
                                7天价格保护</li>

                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'; // 注意引入的是Swiper
// import 'swiper/css/swiper.min.css' // 注意这里的引入
import "swiper/swiper-bundle.min.css"
import "swiper/bundle"
export default {
    data() {
        return {
            product_swiper_slide_list: [
                {
                    "index": 1,
                    "path": require("../assets/images/xmf3_1.jpg")
                },
                {
                    "index": 2,

                    "path": require("../assets/images/xmf3_2.jpg")
                },
                {
                    "index": 3,

                    "path": require("../assets/images/xmf3_3.png")
                },


            ]

        }
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
<style lang="less" scoped>
@header_a_gray: rgb(97, 97, 97);
@swiper_gray: rgb(124, 124, 124);
@info_p_gray: rgb(176, 176, 176);
@summary_gray: rgb(249, 249, 250);
@my_orange: rgb(255, 103, 0);

.product_header {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .07);

    .row {
        display: flex;
        align-content: center;

        h2 {
            font-size: 18px;
            font-weight: 400;
            // line-height: 60px;
        }

        ul {
            list-style-type: none;
            display: flex;
            justify-content: right;

            li {
                // float:right;
                display: inline-block;

                // padding: 0 3px;
                span {
                    padding: 0 6px;
                }

                a {
                    text-decoration: none;
                    cursor: pointer;

                    color: @header_a_gray;
                    // font-size:16px;
                }
            }
        }
    }
}

.details {
    .row {
        .mySwiper {
            --swiper-navigation-color: @swiper_gray;
            --swiper-pagination-color: @swiper_gray;

            img {
                // height: 100%;
                max-height: 560px;
                width: min(100%, auto);
            }
        }

        .info {
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            h2 {
                font-size: 24px;
                font-weight: 400;
            }

            p {
                font-size: 14px;
            }

            .info_p_gray {
                color: @info_p_gray;
            }

            .orange {
                color: @my_orange;
            }

            .price_info {
                padding: 12px 0 10px;
                font-size: 18px;
            }

            .summary {
                padding: 30px;
                background-color: @summary_gray;

                p {
                    padding-top: 20px;
                    font-size: 24px;
                }
            }

            .sale_btn {


                button {
                    width: 100%;
                    position: relative;
                    height: 52px;
                    line-height: 52px;
                    color: white;
                    border: none;
                    transition: background-color .2s linear;
                    margin-bottom: 5px;

                }


                .cart_btn {
                    // width: 298px;
                    background-color: @my_orange;
                    margin-right: 10px;
                }

                .cart_btn:hover {
                    background-color: #f25807;
                }

                .like_btn {
                    // width: 140px;
                    background-color: #b0b0b0;

                    i {
                        margin-right: 5px;
                    }
                }

                .like_btn:hover {
                    background-color: #757575;
                }
            }

            .guarantees {
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;

                    li {
                        display: inline-block;
                        color: @info_p_gray;
                        margin-right: 15px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}</style>