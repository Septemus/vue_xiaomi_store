<template>
    <div class="product_area">
        <div class="container-xl">
            <div class="home-banner-box">
                <a href="javascript:;"><img src="../assets/images/0e2b43800d3e1ef40470ac04b3e0140b.webp"></a>
            </div>

            <panel :gitem_list="phone">
                <p>手机</p>
                <a href="">
                    查看更多 <i class="fa fa-angle-right"></i>
                </a>
            </panel>
            <panel :gitem_list="earphone" v-if="flag1 === 0">
                <p>智能穿戴</p>
                <a href="javascript:void(0);" id="wearing_a" :class="{ a_selected: flag1 === 1 }" @click="flag1 = 1">穿戴</a>
                &nbsp;
                <a href="javascript:void(0);" id="earphone_a" :class="{ a_selected: flag1 === 0 }" @click="flag1 = 0">耳机</a>
            </panel>
            <panel :gitem_list="wearing" v-if="flag1 === 1">
                <p>智能穿戴</p>
                <a href="javascript:void(0);" id="wearing_a" :class="{ a_selected: flag1 === 1 }" @click="flag1 = 1">穿戴</a>
                &nbsp;
                <a href="javascript:void(0);" id="earphone_a" :class="{ a_selected: flag1 === 0 }" @click="flag1 = 0">耳机</a>
            </panel>
            <panel :gitem_list="laptop">
                <p>笔记本&nbsp;|&nbsp;平板</p>
                <a href="" class="a_selected">热门</a>
            </panel>
            <panel :gitem_list="household" v-if="flag2 === 0">
                <p>家电</p>
                <a href="javascript:;" id="tv_a" :class="{ a_selected: flag2 === 1 }" @click="flag2 = 1">电视影音</a>
                <a href="javascript:;" id="onsale_a" :class="{ a_selected: flag2 === 0 }" @click="flag2 = 0">热门</a>
            </panel>
            <panel :gitem_list="tv" v-if="flag2 === 1">
                <p>家电</p>
                <a href="javascript:;" id="tv_a" :class="{ a_selected: flag2 === 1 }" @click="flag2 = 1">电视影音</a>
                <a href="javascript:;" id="onsale_a" :class="{ a_selected: flag2 === 0 }" @click="flag2 = 0">热门</a>
            </panel>
            <div class="home-banner-box">
                <a href="javascript:;"><img src="../assets/images/88e35cffc82cd98cd53172460067af17.webp"></a>
            </div>
            <div class="panel">
                <p>
                    视频
                </p>
                <a href="javascript:;">
                    查看更多 <i class="fa fa-angle-right"></i>
                </a>
                <div class="video_container">

                    <a href="javascript:;" class="video_img">
                        <img src="../assets/images/e74c4ff741bcdfc5b28a48a43e4edc6d.webp">
                        <i class="fa fa-play"></i>

                        <p class="title">2021年春季新品发布会第一场</p>
                        <p class="desc"></p>
                    </a>


                    <a href="javascript:;" class="video_img">
                        <img src="../assets/images/101b19aca4bb489bcef0f503e44ec866.webp">
                        <i class="fa fa-play"></i>

                        <p class="title">Redmi 10X系列发布会</p>
                        <p class="desc">Redmi 10X系列发布会</p>
                    </a>


                    <a href="javascript:;" class="video_img">
                        <img src="../assets/images/96563e75833ba4563bd469dd28203b09.webp">
                        <i class="fa fa-play"></i>

                        <p class="title">小米10 青春版 发布会</p>
                        <p class="desc"></p>
                    </a>


                    <a href="javascript:;" class="video_img">
                        <img src="../assets/images/2fd26bb99b723337a2f8eaba84f7d5bb.webp">
                        <i class="fa fa-play"></i>
                        <p class="title">小米10 8K手机拍大片</p>
                        <p class="desc"></p>
                    </a>

                </div>
            </div>
        </div>

    </div>
</template>
<script>
import panel from './panel.vue'

export default {
    components: {
        panel
    },
    data() {
        return {
            flag1: 0,
            flag2: 0,
            phone: [
                {
                    "type": 0,
                    "path": require("../assets/images/ac5cafc68c10ce4471869d378f594b52.webp")
                },
                {
                    "type": 1,
                    "path": require("../assets/images/d764150a470174741d8b0b04515f7a78.webp"),
                    "name": "Redmi 10A",
                    "discription": "大电量、大音量、大屏幕",
                    "price": "649元起",
                    "ori_price": "699元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/18d2099cb0b05bbd23cb1915dfc9d0d6.webp"),
                    "name": "Redmi K50 Pro",
                    "discription": "2K直屏的狠旗舰",
                    "price": "2999元起",
                    "ori_price": "3999元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/28c14106b688ac7ae88e761564789b37.webp"),
                    "name": "Redmi K50",
                    "discription": "2K直屏的狠旗",
                    "price": "2399元起",
                    "ori_price": "3999元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/28febc579eaea6b07c96c0ec48b89f7a.webp"),
                    "name": "Redmi K40S",
                    "discription": "口碑真旗舰",
                    "price": "1799元起"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/1061cd8d46977b5291d481d0cd44105e.webp"),
                    "name": "Redmi K50 电竞版6",
                    "discription": "全线拉满的冷血旗",
                    "price": "3299元起"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/a7382271e3a677bf188679ca38d68a42.webp"),
                    "name": "Xiaomi 12 Pro6",
                    "discription": ">全新骁龙8｜2K AMOLED屏",
                    "price": "4699元起"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/e870129c5c374088bf7cc46be0b7ace2.webp"),
                    "name": "Xiaomi 12",
                    "discription": "新骁龙8｜5000万主",
                    "price": "3699元起"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/63e15f377e87212d460592b4a1369ccd.webp"),
                    "name": "Xiaomi 12X",
                    "discription": "骁龙870｜5000万主",
                    "price": "2999元起"
                }
            ],
            earphone: [
                {
                    "type": 0,
                    "path": require("../assets/images/9895c56a7b792fb9053e3085fc261072.webp")
                },
                {
                    "type": 1,
                    "path": require("../assets/images/b8259e8fb355acf168c66f75d375c6af.webp"),
                    "name": "Xiaomi Watch S1",
                    "discription": "腕事具备",
                    "price": "1049元",
                    "ori_price": "1099元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/0b271a074e087848357aa61ae665b214.webp"),
                    "name": "Xiaomi真无线降噪耳机3",
                    "discription": "静听好声音",
                    "price": "409元",
                    "ori_price": "499元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/f84503dbf5adbdf17111c61d4a7cf893.webp"),
                    "name": "Redmi 手表 2",
                    "discription": "AMOLED高清大屏",
                    "price": "379元",
                    "ori_price": "399元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/b28153b80cb2c67564608e56d5c2f3f3.webp"),
                    "name": "小米手环6 NFC版",
                    "discription": "全屏实力",
                    "price": "239元",
                    "ori_price": "279元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/cfec307342eb35ee4a437f664004c50f.webp"),
                    "name": "Redmi 手表",
                    "discription": "35g超轻/ 1.4大屏/多功能NFC/7天长续航",
                    "ori_price": "299元起<"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/0cc4e8e58d7288cd8dff13b98bdc3ea8.webp"),
                    "name": "Xiaomi 真无线降噪耳机 3 Pro",
                    "discription": "动态降噪 静听曼妙",
                    "price": "649元",
                    "ori_price": "699元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/11570d5371f16d2d9b19f504e09d01f0.webp"),
                    "name": "Redmi Buds 3半入耳真无线蓝牙耳机",
                    "discription": "轻巧半入耳，舒适有天分",
                    "price": "179元",
                    "ori_price": "199元"
                },
                {
                    "type": 2,
                    "halfs": [
                        {
                            "path": require("../assets/images/2fcf24e40ff09a254857ac8b4ace25b8.webp"),
                            "p1": "Redmi Buds 3 青春版",
                            "p2": "99元"
                        },
                        {
                            "p1": "浏览更多",
                            "p2": "热门",
                            "i_class": "fa-arrow-circle-o-right"
                        }
                    ]
                }
            ],
            wearing: [
                {
                    "type": 0,
                    "path": require("../assets/images/9895c56a7b792fb9053e3085fc261072.webp")
                },
                {
                    "type": 1,
                    "path": require("../assets/images/b28153b80cb2c67564608e56d5c2f3f3.webp"),
                    "name": "小米手环6",
                    "discription": "全屏实力",
                    "price": "199元",
                    "ori_price": "229元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/c84e1bc129dda0c9c0169e1fab1fe521.webp"),
                    "name": "小米手环5 NFC版",
                    "discription": "多功能NFC 11种运动模式",
                    "price": "189元",
                    "ori_price": "229元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/66c7a6e46c5f1a7214eab8182d78171e.webp"),
                    "name": "Redmi AirDots 3真无线蓝牙耳机",
                    "discription": "圈铁音质，超长续航",
                    "price": "159元",
                    "ori_price": "199元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/8fd19df34c6b2723f337cb3fb11984a6.webp"),
                    "name": "小米真无线蓝牙耳机Air 2 Pro",
                    "discription": " 主动降噪/持久续航/无线充",
                    "price": "399元",
                    "ori_price": "699元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/8a8de2281327e612f3f83fd1a4db6aea.webp"),
                    "name": "小米真无线蓝牙耳机Air2 SE",
                    "discription": "放肆用，畅快听",
                    "price": "129元",
                    "ori_price": "169元"
                },
                {
                    "type": 2,
                    "halfs": [
                        {
                            "p1": "浏览更多<br>穿戴",
                            "i_class": "fa-arrow-circle-o-right"
                        }
                    ]
                }
            ],
            laptop: [
                {
                    "type": 0,
                    "path": require("../assets/images/e9896934bb657c3dd0c548952eb27481.webp")
                },
                {
                    "type": 1,
                    "path": require("../assets/images/0f8abb2bc3947c4679e3f1b2aafc28c0.webp"),
                    "name": "Redmi Book Pro 15 2022",
                    "discription": "全新12代英特尔处理器",
                    "price": "5599元起"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/68637deb3ab9cecdc7805c7154e79683.webp"),
                    "name": "Redmi G 2021 R7/RTX3050Ti/16G/51",
                    "discription": "有光追，才是高性能游戏本",
                    "price": "6299元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/01d9571051a91e540e5c644fa60cc858.webp"),
                    "name": "Pro 14 增强版 i5 独显 - Win11",
                    "discription": "2.5K超视网膜全面屏",
                    "price": "4799元",
                    "ori_price": "5599元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/b60f8c50789c123c11e060e7b283a315.webp"),
                    "name": "RedmiBook Pro 15 R5/16G/512G 灰 ",
                    "discription": "3.2K 超清视网膜全面屏 | 微米级工艺",
                    "price": "4499元",
                    "ori_price": "5299元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/e3c300330221ad788569e4fb1e6f932f.webp"),
                    "name": "Redmi Book Pro 14 2022",
                    "discription": "全新12代英特尔处理器，CNC精雕工艺，2.5K 120Hz高清屏，可选MX550独立显卡",
                    "price": "5399元起"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/ed0541d2337dc4fff6e52c2b7f162fe5.webp"),
                    "name": "小米平板5 Pro",
                    "discription": "11英寸大屏|2.5k显示",
                    "price": "2499元起"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/01d9571051a91e540e5c644fa60cc858.webp"),
                    "name": "RedmiBook Pro 14 R5 16G 512G UMA",
                    "discription": "2.5K超视网膜全面屏",
                    "price": "4199元",
                    "ori_price": "4699元"
                },
                {
                    "type": 2,
                    "halfs": [
                        {
                            "path": require("../assets/images/7c37478d8b3b553ba0a50adaec2fc775.webp"),
                            "p1": "Redmi 显示器 <br>23.8英寸",
                            "price": "699元"
                        },
                        {
                            "p1": "浏览更多",
                            "p2": "热门",
                            "i_class": "fa-arrow-circle-o-right"
                        }
                    ]
                }
            ],
            household: [
                {
                    "type": 3,
                    "path": require("../assets/images/3d47879ec183e25a36e67e0219636e60.webp")
                },
                {
                    "type": 1,
                    "path": require("../assets/images/82ff5ea76730fdf6f91aba5d3b2e5739.webp"),
                    "name": "小米电视6 65 OLED",
                    "discription": "OLED自发光屏 | 百万级对比度 | 4.6mm超薄全面屏",
                    "price": "6999元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/c7c15101f2c8a652a4a0d069501d1e53.webp"),
                    "name": "小米电视6 至尊版 65英寸",
                    "discription": "百级分区背光 | 双120Hz高刷 | 4.5GB+64GB",
                    "price": "7499元",
                    "ori_price": "7999元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/388b13bf52ab0d6a56bc9f195b5f1dd5.webp"),
                    "name": "小米电视 ES55 2022款",
                    "discription": "多分区背光 | MEMC动态补偿 | 杜比+DTS双解码",
                    "price": "2599元",
                    "ori_price": "2999元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/0191ae995e33faedb3362abaa7a486d1.webp"),
                    "name": "米家直驱洗烘一体机 10kg",
                    "discription": "全屏实力",
                    "price": "1999元",
                    "ori_price": "2499元"
                },
                {
                    "type": 3,
                    "path": require("../assets/images/229bbaccda43f32f464c0a810b800106.webp")
                },
                {
                    "type": 1,
                    "path": require("../assets/images/db032eeb9e8efe9551161ee18bf70d3f.webp"),
                    "name": "米家波轮洗衣机 10kg",
                    "discription": "高品质洗护 省水省电",
                    "price": "999元",
                    "ori_price": "1499元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/050a724309c945e0ffef3fb633069b49.webp"),
                    "name": "米家冰箱无霜三门216L",
                    "discription": "风冷无霜 离子抗菌",
                    "price": "1499元",
                    "ori_price": "1699元"
                },
                {
                    "type": 1,
                    "path": require("../assets/images/608a47f5d655fc1372de67ee2f7b1c43.webp"),
                    "name": "米家冰箱无霜两门186L",
                    "discription": "无霜储藏 鲜活轻松享",
                    "price": "1299元",
                    "ori_price": "1499元"
                },
                {
                    "type": 2,
                    "halfs": [
                        {
                            "path": require("../assets/images/b649a329983ad590fde607472f73e55a.webp"),
                            "p1": "米家全自动波<br>轮洗衣机8kg",
                            "p2": "799元"
                        },
                        {
                            "p1": "浏览更多",
                            "p2": "热门",
                            "i_class": "fa-arrow-circle-o-right"
                        }
                    ]
                }
            ],
            tv: [
                {
                    "type": 3,
                    "path": require("../assets/images/3d47879ec183e25a36e67e0219636e60.webp")
                },
                {
                    "path": require("../assets/images/9d8674cd21c486feff5328772ab9cf01.webp"),
                    "name": "小米电视4A 70英寸",
                    "discription": "4K超高清 | 人工智能语音系统 | 蓝牙语音遥控器",
                    "price": "3199元",
                    "ori_price": "3699元",
                    "type": 1
                },
                {
                    "path": require("../assets/images/ecbe6a6c0d4950b78b086d7ada654e3b.webp"),
                    "name": "小米电视4A 60英寸",
                    "discription": "4K超高清 | 人工智能语音系统 | 蓝牙语音遥控器",
                    "price": "1999元",
                    "ori_price": "2799元",
                    "type": 1
                },
                {
                    "path": require("../assets/images/a5572d6d4adea2e8e9f936ef19024dd4.webp"),
                    "name": "小米电视 EA75 2022款",
                    "discription": "金属全面屏 | AI远场语音 | 4K超高清",
                    "price": "3599元",
                    "ori_price": "4199元",
                    "type": 1
                },
                {
                    "path": require("../assets/images/03a9e7e96a09d256ca1badeec186c859.webp"),
                    "name": "小米全面屏电视65英寸 E65X",
                    "discription": "4K超高清 | 内置小爱同学 | 海量内容",
                    "price": "2599元",
                    "ori_price": "2999元",
                    "type": 1
                },
                {
                    "path": require("../assets/images/229bbaccda43f32f464c0a810b800106.webp"),
                    "type": 3
                },
                {
                    "path": require("../assets/images/3483b4ec83f3d085c567633f2edef1c1.webp"),
                    "name": "小米电视4C 32英寸",
                    "discription": "高清液晶屏 | 海量片源 | 立体音效 ",
                    "price": "849元",
                    "ori_price": "899元",
                    "type": 1
                },
                {
                    "path": require("../assets/images/f674ced205c2e81125dfd2d6659aabfc.webp"),
                    "name": "Redmi智能电视A55",
                    "discription": "4K超高清 | 64位处理器 | 立体声澎湃音效",
                    "price": "1555元",
                    "ori_price": "1999元",
                    "type": 1
                },
                {
                    "path": require("../assets/images/5f8be2fa1f60f81a0cfbfa3f6e0a5723.webp"),
                    "name": "Redmi MAX 86″ 超大屏电视",
                    "discription": "4K超高清 | 120Hz高刷屏 | 金属全面屏",
                    "price": "6999元",
                    "ori_price": "7999元",
                    "type": 1
                },
                {
                    "type": 2,
                    "halfs": [
                        {
                            "path": require("../assets/images/4769d147d65c64de4fd808e0d5229b5e.webp"),
                            "p1": "小米电视<br>EA50 2022款",
                            "p2": "1399元"

                        },
                        {
                            "p1": "浏览更多",
                            "p2": "电视",
                            "i_class": "fa-arrow-circle-o-right"
                        }
                    ]
                }

            ],
        }
    }
}
</script>
<style lang="less">
.product_area {

    .home-banner-box {
        margin: 30px 0;
        width: 100%;

        img {
            width: 100%;
        }
    }

    .panel {
        .video_container {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            width: 100%;
            margin-top: 20px;
            padding-bottom: 50px;
            margin-bottom: 0px;

            .video_img {
                min-height: 200px;
                width: 20%;
                background-color: white;
                text-decoration: none;
                color: black;
                display: block;
                position: relative;
                transition: all .5s linear;

                @media (max-width:700px) {
                    width: 40%
                }

                .fa-play {

                    padding: 5px;
                    top: 50%;
                    left: 10%;
                    position: absolute;
                    color: white;
                    display: inline-block;
                    border-radius: 50%;
                    border: 2px solid white;
                }

                img {
                    width: 100%;
                    height: 70%;

                    &:hover~.fa-play {
                        background-color: orange;
                    }

                }

                &:hover {
                    box-shadow: var(--shadow1);
                    transform: translateY(-1%);
                }
            }
        }
    }


    background-color: rgb(245, 245, 245);
}









// .gitem:hover {
//     box-shadow: var(--shadow1);
//     transform: translateY(-1%);
// }

// .left_banner>img {
//     width: 100%;
//     height: 100%;
// }



// #wearing_a,
// #earphone_a {
//     transition: all .5s linear;
// }





// .panel .video_container .video_img .panel .video_container .video_img img</style>