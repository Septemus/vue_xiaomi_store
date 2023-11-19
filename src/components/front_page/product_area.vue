<template>
    <div class="product_area">
        <div class="container-xl">
            <div class="home-banner-box">
                <a href="javascript:;"><img :src="$store.state.location_prefix + '/images/banner/b1.png'"></a>
            </div>
            <panel v-for="panel_list, index of panel_lists" v-if="fetched_panel_lists" :gitem_list="panel_list">
                

            </panel>
            <div class="home-banner-box">
                <a href="javascript:;"><img :src="$store.state.location_prefix + '/images/banner/b2.png'"></a>
            </div>
            <!-- <div class="panel video_panel">
                <div class="p_header">
                    <p>
                        视频
                    </p>
                    <div class="d-inline-block float-end">
                        <div class="right_tabs">
                            <a href="javascript:;">
                                查看更多 <i class="fa fa-angle-right"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div class="video_container">

                    <a href="javascript:void(0);" class="video_img">
                        <img src="../../assets/images/e74c4ff741bcdfc5b28a48a43e4edc6d.webp">
                        <i class="fa fa-play">
                        </i>
                        <p class="title">2021年春季新品发布会第一场</p>
                        <p class="desc">
                        </p>
                    </a>


                    <a href="javascript:void(0);" class="video_img">
                        <img src="../../assets/images/101b19aca4bb489bcef0f503e44ec866.webp">
                        <i class="fa fa-play">
                        </i>
                        <p class="title">Redmi 10X系列发布会</p>
                        <p class="desc">Redmi 10X系列发布会</p>
                    </a>


                    <a href="javascript:void(0);" class="video_img">
                        <img src="../../assets/images/96563e75833ba4563bd469dd28203b09.webp">
                        <i class="fa fa-play">
                        </i>
                        <p class="title">小米10 青春版 发布会</p>
                        <p class="desc"></p>
                    </a>


                    <a href="javascript:void(0);" class="video_img">
                        <img src="../../assets/images/2fd26bb99b723337a2f8eaba84f7d5bb.webp">
                        <i class="fa fa-play">
                        </i>
                        <p class="title">小米10 8K手机拍大片</p>
                        <p class="desc"></p>
                    </a>

                </div>
            </div> -->
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
            fetched_panel_lists: false,
            flag1: 0,
            flag2: 0,
            panel_lists: [

            ]
        }
    },
    mounted() {
        console.log('product_area' + this)
        fetch(this.$store.state.location_prefix + '/resources/product').then(res => res.json()).then(res => {
            console.log('fetched' + res)
            this.fetched_panel_lists = true

            this.panel_lists = res
        })
    },
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





// .panel .video_container .video_img .panel .video_container .video_img img
</style>