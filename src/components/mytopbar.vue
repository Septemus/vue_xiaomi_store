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
            <div class="mycart col-sm-1">
                <a class="cart_box" @mouseover="show_cart = true" @mouseleave="show_cart = false">
                    <i class="fa fa-shopping-cart"></i>
                    购物车
                </a>
                <!-- <Transition name="cart"> -->
                <div class="cart_content" @mouseover="show_cart = true" @mouseleave="show_cart = false" ref="cart_content">
                    <div class="mySpinner" v-if="!cart_fetched">
                        <b-spinner type="grow" label="Spinning" class=""></b-spinner>
                    </div>
                    <div class="cart_list" v-else>
                        <ul v-if="userid && cart_list.length">
                            <li v-for="cart_item of cart_list">
                                <img :src="location_prefix + cart_item.img_cover" alt="">
                                <router-link :to="{
                                    name: 'product',
                                    query: {
                                        pid: cart_item.detail.id
                                    }
                                }">

                                    <p class="cart_item_name">{{ namePlusChoices(cart_item) }}</p>
                                </router-link>
                                <p class="cart_item_price">{{ cart_item.price }}*{{ cart_item.quantity }}</p>
                            </li>
                        </ul>
                        <div class="no_item" v-else-if="userid && !cart_list.length">
                            购物车中无商品
                        </div>
                        <div class="unlogged" v-else-if="!userid">
                            请先登录！
                        </div>

                    </div>
                </div>
                <!-- </Transition> -->
            </div>

        </div>
    </div>
</template>
<script>
import verify_token from '../assets/js/verify_token'
import cart_fetching from '../assets/js/cart_fetching'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'mytopbar',
    data() {
        return {
            show_cart: false,
            cart_fetched: false,
            // cart_list: [],
            loadedImg: 0,
            timer1: null,
            timer2: null,
            timer3: null
        }
    },
    methods: {
        ...mapActions(['setUserinfo']),
        loadImg() {

            ++this.loadedImg
            console.log('one of image of cart loaded!@@')
            if (this.cart_list && this.cart_list.length === this.loadedImg) {
                this.timer2 = setTimeout(() => {
                    this.cart_fetched = true
                    this.$refs.cart_content.style.height = 'auto'
                }, 700)
            }
        },
        namePlusChoices(item) {
            let ret = item.detail.pname
            for (let c of item.choices) {
                ret += ' ' + c.choice_name
            }
            return ret
        },
        logout() {
            this.setUserinfo({
                uid: null,
                uname: null
            })
            window.localStorage.removeItem('token')
            console.log('当前路径：@@',this.$route.path)
            this.$router.push({
                name: 'front_page'
            })
        }
    },
    computed: {
        ...mapState(['location_prefix', 'userid', 'cart_list']),
    },
    watch: {
        show_cart(val) {
            if (!val) {
                console.log('left')
                if (this.timer2) clearTimeout(this.timer2)
                console.log(this.$refs.cart_content.clientHeight)
                this.$refs.cart_content.style.height = this.$refs.cart_content.clientHeight + 'px'
                this.timer3 = setTimeout(() => {
                    this.$refs.cart_content.style = ''
                }, 10)
                // this.$nextTick(() => {
                //     this.$refs.cart_content.style = ''
                // })
                this.loadedImg = 0
                this.timer1 = setTimeout(() => {
                    this.cart_fetched = false
                }, 700)
            }
            else {
                console.log('enter')
                console.log("showing cart content!@@")
                console.log('clear to1!@@')
                if (this.timer1) clearTimeout(this.timer1)
                if (this.timer3) clearTimeout(this.timer3)
                if (this.userid) {
                    cart_fetching.apply(this).then((cart_list) => {
                        // debugger
                        this.$store.commit('cart_list', cart_list)
                        if (this.cart_list.length) {
                            for (let cart_item of this.cart_list) {
                                let img = new Image()
                                img.onload = this.loadImg
                                img.src = this.location_prefix + cart_item.img_cover
                            }
                        }
                        else {
                            this.timer2 = setTimeout(() => {
                                this.cart_fetched = true
                            }, 700)
                        }
                    })
                }
                else {
                    this.timer2 = setTimeout(() => {
                        this.cart_fetched = true
                    }, 700)
                }
            }
        }
    },
    async mounted() {
        if (await verify_token.apply(this)) {
            cart_fetching.apply(this)
                .then((cart_list) => {
                    // debugger
                    this.$store.commit('cart_list', cart_list)
                    console.log('commiting to vuex successful!@@')
                })
        }
    }
}
</script>
    
<style lang="less">
@mytopbar_fs: 12px;
@cart_height: 100px;
@media (max-width:1280px) {

    .mytopbar {
        display: none !important;
    }

}

.mytopbar {
    background-color: var(--dark_bg);
    text-align: center;

    .mycart {
        /* float: right; */
        /* margin-left: 30px; */
        // color: #fff;
        position: relative;
        padding: 0;
        background-color: rgb(255, 103, 0);

        &:hover {
            .cart_box {
                color: rgb(255, 103, 0);
                background-color: white;

            }
        }

        /* display: flex; */
        .cart_box {
            padding: 0 10px;
            // width:120px;
            // text-align: center;
            cursor: pointer;
            display: block;
            /* align-items: center; */
            margin: auto 0;
            /* height: 100%; */
            font-size: @mytopbar_fs;
            color: white;

            &:hover {
                +.cart_content {
                    // min-height: @cart_height;
                    // min-height: @cart_height;
                    height: @cart_height;
                }
            }
        }

        .cart_content {
            padding: 0;
            margin: 0;

            &:hover {
                // min-height: @cart_height;
                height: @cart_height;
            }

            .mySpinner {
                color: rgb(255, 103, 0);
                display: block;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
            }

            ul {
                padding: 0;
                width: 100%;
                margin: 0;

                li {
                    height: @cart_height;
                    display: flex;
                    padding: 0;
                    margin: 0;
                    position: relative;
                    list-style-type: none;


                    height: @cart_height;

                    border: solid 1px black;
                    align-items: center;

                    img {
                        width: 50px;
                        height: auto;
                    }

                    p {
                        padding: 0;
                        margin: 0;
                    }

                    a {
                        text-decoration: none;

                        .cart_item_name {
                            font-size: 12px;
                            color: rgb(66, 66, 66);
                        }
                    }

                    .cart_item_price {
                        position: absolute;
                        right: 10px;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
            }

            background-color: #fff;
            z-index: 1000;
            /* height: 0px; */
            box-shadow: var(--shadow1);
            color: black;
            position: absolute;
            /* padding: 10px 20px; */
            /* min-width: 150px; */
            transition: all .5s ease;
            transition-delay: .2s;
            right: 0;
            width: 316px;
            // min-height: 200px;
            // max-height: 500px;
            height:0;
            // min-height: 0;
            overflow: hidden;
        }

        // .cart-enter,
        // .cart-leave-to {
        //     // height: 0px;
        //     min-height: 0px;
        // }

        // .cart-leave,
        // .cart-enter-to {
        //     // height:200px;    
        //     min-height: @cart_height;
        // }

        // .cart-enter-active,
        // .cart-leave-active {
        //     transition: all 1s ease;
        //     transition-delay: .2s;
        // }
    }

    // .topbar {
    //     // font-size: 7px;
    //     background-color: rgb(51, 51, 51);
    //     width: 100%;
    //     height: 50px;
    //     line-height: 50px;
    //     color: var(--topbar_color);

    //     a {
    //         text-decoration: none;
    //         color: var(--topbar_color);
    //         font-size: 7px;
    //         &:hover {
    //             color: rgb(242, 242, 242);
    //         }
    //     }
    // }

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