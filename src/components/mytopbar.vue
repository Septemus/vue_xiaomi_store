<template>
    <div class="mytopbar">
        <div class="container-xl mx-auto row">

            <ul class="mytopbar_ls col-sm-7">
                <li><router-link :to="{
                    name: 'front_page'
                }">小米商城</router-link></li>
                <li><a href="#">MIUI</a></li>
                <li><a href="#">loT</a></li>
                <li><a href="#">云服务</a></li>
                <li><a href="#">天星数科</a></li>
                <li><a href="#">有品</a></li>
                <li><a href="#">小爱开放平台</a></li>
                <li><a href="#">企业团购</a></li>
                <li><a href="#">资质证照</a></li>
                <li><a href="#">协议规则</a></li>
                <li class="download">
                    <a href="#">下载app</a>
                    <div class="download_qr">
                        <a href="#">
                            <img src="../assets/images/download.png">
                            <p>小米商城APP</p>
                        </a>


                    </div>
                    <div class="download_qr_traingle">
                    </div>
                </li>
            </ul>
            <ul class="topbar_ls_r col-sm-4">
                <template v-if="!this.$store.state.username">
                    <li><a href="javascript:void(0);" @click="$store.dispatch('modal', 1)">登录</a></li>
                    <li><a href="javascript:void(0);" @click="$store.dispatch('modal', 2)">注册</a></li>
                </template>
                <template v-else>
                    <li>
                        <a href="javascript:void(0);">
                            欢迎用户{{ this.$store.state.username }}
                        </a>
                    </li>
                    <li>
                        <router-link :to="{
                            name: 'homepage',
                        }">
                            个人中心
                        </router-link>
                    </li>
                    <li>
                        <a href="javascript:void(0);" @click="logout">
                            退出账号
                        </a>
                    </li>
                </template>
                <li><a href="#">消息通知</a></li>
            </ul>
            <topbar_cartVue></topbar_cartVue>
            
        </div>
    </div>
</template>
<script>
import cart_fetching from '../assets/js/cart_fetching'
import { mapState, mapActions } from 'vuex'
import topbar_cartVue from './topbar_cart.vue'
export default {
    name: 'mytopbar',
    components:{topbar_cartVue},
    methods: {
        ...mapActions(['setUserinfo']),
        logout() {
            this.setUserinfo({
                uid: null,
                uname: null
            })
            window.localStorage.removeItem('token')
            console.log('当前路径：@@', this.$route.path)
            this.$router.push({
                name: 'front_page'
            })
        }
    },
    computed: {
        ...mapState(['location_prefix', 'userid', 'cart_list']),
    },
}
</script>
    
<style lang="less">
@mytopbar_fs: 12px;
@cart_height: 100px;
@cart_width: 316px;
@cart_font_color: rgb(66, 66, 66);
@cart_font_size: 12px;
@cart_item_border_color: rgb(224, 224, 224);
@myorange: rgb(255, 103, 0);
@list_length: 450px;
@media (max-width:1280px) {

    .mytopbar {
        display: none !important;
    }

}

.mytopbar {
    background-color: var(--dark_bg);
    text-align: center;



    .mytopbar_ls {
        list-style-type: none;
        /* text-align: center; */
        margin: auto 0 !important;
        list-style-type: none;

        li {
            float: left;

            +li::before {
                content: "|";
                padding: 6px;
                color: rgb(100, 100, 100);
            }

            // +li::before {
            //     content: "|";
            //     padding: 3px;
            //     color: rgb(100, 100, 100);
            // }
            // a {
            //     font-size: 7px;
            // }
        }

        .download {
            position: relative;

            .download_qr_traingle {
                display: none;
                position: absolute;
                /* background-color: red; */
                /* padding: 10px; */
                /* top: 0px; */
                bottom: 0px;
                left: 50%;
                /* line-height: 0; */
                transform: translateX(-50%);
                border-bottom: 10px solid white;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid transparent;
                /* left: 0px; */
            }

            .download_qr {
                background-color: white;
                z-index: 200;
                width: 100px;
                height: 0px;
                /* overflow: hidden; */
                /* background-color:red; */
                position: absolute;
                left: 0;
                /* bottom: 0px; */
                box-shadow: var(--shadow1);
                overflow: hidden;
                transition: .5s;

                img {
                    width: 80%;
                    display: block;
                    margin: 0px auto;
                    padding-top: 10px;
                }

                p {
                    text-align: center;
                    margin: 20px;
                    line-height: normal;
                    color: black;
                }

            }

            &:hover {
                .download_qr_traingle {
                    /* background-color: red; */
                    display: block;
                }

                .download_qr {
                    height: 156px;
                }
            }
        }






    }

    a {
        display: inline-block;
        text-decoration: none;
        color: var(--topbar_color);
        font-size: @mytopbar_fs;
        height: 40px;
        line-height: 40px;
    }

    .topbar_ls_r {
        list-style-type: none;
        margin: auto 0;
        text-align: center;
        display: flex;
        justify-content: flex-end;

        li {
            /* float: left; */
            display: inline;

            +li::before {
                content: "|";
                padding: 6px;
                color: rgb(100, 100, 100);
            }
        }
    }
}
</style>