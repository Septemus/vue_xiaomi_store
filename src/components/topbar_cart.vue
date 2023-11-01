
<template>
    <div class="mycart col-sm-1">
        <a class="cart_box" @mouseover="show_cart = true" @mouseleave="show_cart = false">
            <i class="fa fa-shopping-cart"></i>
            购物车
        </a>
        <!-- <Transition name="cart"> -->
        <div class="cart_content" @mouseover="show_cart = true" @mouseleave="show_cart = false" ref="cart_content">
            <div class="mySpinner" v-show="!cart_fetched">
                <b-spinner type="grow" label="Spinning" class=""></b-spinner>
            </div>
            <div class="cart_list" v-show="cart_fetched">
                <ul v-show="userid && cart_list.length">
                    <li v-for="cart_item of cart_list">
                        <img :src="location_prefix + cart_item.img_cover" alt="">
                        <router-link :to="{
                            name: 'product',
                            query: {
                                pid: cart_item.pid
                            }
                        }">

                            <p class="cart_item_name">{{ namePlusChoices(cart_item) }}</p>
                        </router-link>
                        <p class="cart_item_price">{{ cart_item.price }} x {{ cart_item.quantity }} <span>x</span></p>

                    </li>
                </ul>
                <div class="no_item" v-show="userid && !cart_list.length">
                    购物车中无商品
                </div>
                <div class="unlogged" v-show="!userid">
                    请先登录！
                </div>
                <div class="cart_action" v-show="cart_fetched">
                    <div class="side">
                        <p class="number">
                            共 {{ cart_list.length }} 件商品
                        </p>
                        <p class="price">
                            {{ this.totalPrice }} 元
                        </p>
                    </div>
                    <div class="side">
                        <router-link :to="{
                            name: 'cart_calc'
                        }">
                            <button>
                                去购物车结算
                            </button>
                        </router-link>
                    </div>
                </div>
            </div>

        </div>

        <!-- </Transition> -->
    </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import verify_token from '../assets/js/verify_token'
import cart_fetching from '../assets/js/cart_fetching'

export default {
    name: "topbar_cart",
    data() {
        return {
            show_cart: false,
            cart_fetched: false,
            list_length: 450,
            tail_length: 70,
            animation_time: 500,
            // cart_list: [],
            unstoppeble: false,
            loadedImg: 0,
            timer1: null,   //结束时将cart_fetched置为false
            timer2: null,   //加载时间，结束后修改购物车高度
            timer3: null,   //结束时将高度改成0
            // timer4: null    //购物车正在被收起

        }
    },
    methods: {
        ...mapActions(['setUserinfo']),
        setUnstoppable(t) {
            this.unstoppeble = true
            console.log('unstoppable', this.unstoppeble)
            setTimeout(() => {
                this.unstoppeble = false
                console.log('unstoppable', this.unstoppeble)

            }, t)

        },
        loadImg(real_anime_time) {
            return () => {
                // console.log('this inside loadimg:@@',this)
                ++this.loadedImg
                console.log('one of image of cart loaded!@@')
                if (this.cart_list && this.cart_list.length === this.loadedImg) {
                    this.timer2 = setTimeout(() => {
                        this.cart_fetched = true
                        this.$refs.cart_content.style.height = Math.min(this.list_length + this.tail_length, 100 * this.loadedImg+this.tail_length) + 'px'
                        // this.setUnstoppable(this.animation_time)
                        // this.$refs.cart_content.style['overflow-y']='scroll'
                    }, real_anime_time)
                }

            }
        },
        namePlusChoices(item) {
            let ret = item.detail.pname
            for (let c of item.choices) {
                ret += ' ' + c.choice_name
            }
            return ret
        },
    },
    computed: {
        ...mapState(['location_prefix', 'userid', 'cart_list']),
        totalPrice() {
            return this.cart_list.reduce((acc, cur) => {
                // debugger
                return acc + cur.price * cur.quantity
            }, 0)
        }
    },
    watch: {
        show_cart(val) {
            if (!val) {
                // while(this.unstoppeble){
                //     }
                if (!this.unstoppeble) {
                    console.log('left')
                    if (this.timer2) clearTimeout(this.timer2)
                    console.log(this.$refs.cart_content.clientHeight)
                    this.$refs.cart_content.style.height = this.$refs.cart_content.clientHeight + 'px'
                    // this.$refs.cart_content.style['overflow-y']='hidden'
                    new Promise((res, rej) => {
                        this.timer3 = setTimeout(() => {
                            this.$refs.cart_content.style = ''
                            res()
                        }, 1)
                    }).then(() => {
                        if (this.cart_fetched)
                            this.setUnstoppable(this.animation_time)
                    })
                    this.loadedImg = 0
                    this.timer1 = setTimeout(() => {
                        this.cart_fetched = false
                        this.timer1 = null
                    }, this.animation_time)
                }
                // else {

                // }
            }
            else {
                if (!this.unstoppeble) {
                    console.log('enter')
                    console.log("showing cart content!@@")
                    console.log('clear to1!@@')
                    let real_anime_time = this.animation_time
                    if (this.timer1) {
                        clearTimeout(this.timer1)
                        this.timer1 = null
                        real_anime_time = 0
                    }
                    if (this.timer3) {
                        clearTimeout(this.timer3)
                        this.timer3 = null
                    }
                    if (this.userid) {
                        cart_fetching.apply(this).then((cart_list) => {
                            // debugger
                            this.$store.commit('cart_list', cart_list)
                            if (this.cart_list.length) {
                                for (let cart_item of this.cart_list) {
                                    let img = new Image()
                                    img.onload = this.loadImg(real_anime_time)
                                    img.src = this.location_prefix + cart_item.img_cover
                                }
                            }
                            else {
                                this.timer2 = setTimeout(() => {
                                    this.cart_fetched = true
                                    // this.setUnstoppable(this.animation_time)
                                }, real_anime_time)
                            }
                        })
                    }
                    else {
                        this.timer2 = setTimeout(() => {
                            this.cart_fetched = true
                            // this.setUnstoppable(this.animation_time)
                        }, real_anime_time)
                    }
                }
                else {
                    console.log('encounterd unstoppable!let itb go!@@')
                    // debugger
                    this.$refs.cart_content.style.height = `0px`
                    //css里面hover时会有高度，必须通过js加内联样式覆盖掉
                }

            }
        }
    },
    async mounted() {
        if (await verify_token.apply(this)) {
            // debugger
            cart_fetching.apply(this)
                .then((cart_list) => {
                    // debugger
                    this.$store.commit('cart_list', cart_list)
                    console.log('commiting to vuex successful,this is the cartlist:@@', cart_list)
                })
        }
    }
}


</script>

<style lang="less" scoped>
@mytopbar_fs: 12px;
@cart_height: 100px;
@cart_width: 316px;
@cart_font_color: rgb(66, 66, 66);
@cart_font_size: 12px;
@cart_item_border_color: rgb(224, 224, 224);
@myorange: rgb(255, 103, 0);
@list_length: 450px;

.mycart {
    /* float: right; */
    /* margin-left: 30px; */
    // color: #fff;
    position: relative;
    padding: 0;
    background-color: @myorange;

    &:hover {
        .cart_box {
            color: @myorange;
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
        color: @cart_font_color;
        font-size: @cart_font_size;

        &:hover {
            // min-height: @cart_height;
            height: @cart_height;
        }

        .mySpinner {
            color: @myorange;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }

        .cart_list {
            position: relative;

            ul {
                max-height: @list_length;
                overflow-y: scroll;
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
                    width: 90%;
                    margin: 0 auto;
                    height: @cart_height;

                    border-top: solid 1px @cart_item_border_color;
                    align-items: center;

                    &:hover {
                        .cart_item_price {
                            span {
                                opacity: 100;
                                color:@cart_font_color
                            }
                        }
                    }

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
                            width: 100px;
                            line-height: 12px;
                            word-wrap: break-word;
                            color: @cart_font_color;
                            
                            &:hover {
                                color: @myorange !important;
                            }
                        }
                    }

                    .cart_item_price {
                        position: absolute;
                        right: 0px;
                        top: 50%;
                        transform: translateY(-50%);

                        span {
                            padding-left: 10px;
                            opacity: 0;
                            font-size: 16px;
                            color: rgb(176, 176, 176);
                            // background-color: red;
                            transition: opacity .5s ease;
                            &:hover {
                                cursor: pointer;
                            }
                        }
                    }
                }
            }

            .cart_action {
                display: flex;
                justify-content: space-around;
                align-items: center;

                .side {
                    width: 40%;
                    height: 60%;
                    // background-color: red;
                    text-align: left;

                    p {
                        margin: 0;
                    }

                    .number {
                        color: #757575;
                        font-size: @cart_font_size;
                        line-height: @cart_font_size;
                    }

                    .price {
                        color: @myorange;
                        font-size: 2*@cart_font_size;
                        line-height: 2*@cart_font_size;
                    }

                    a {
                        display: block;

                        button {
                            background-color: @myorange;
                            color: white;
                            height: 100%;
                            width: 100%;
                            border: none;
                        }
                    }
                }

                width: @cart_width;
                height: 70px;
                // background-color: aqua;
                position: absolute;
                bottom: -70px;
            }
        }



        background-color: #fff;
        z-index: 1000;
        /* height: 0px; */
        box-shadow: var(--shadow1);
        position: absolute;
        /* padding: 10px 20px; */
        /* min-width: 150px; */
        transition: all .4s ease;
        transition-delay: .1s;
        right: 0;
        width: @cart_width;
        // min-height: 200px;
        // max-height: 500px;
        height:0;

        // min-height: 0;
        overflow:hidden;


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
}</style>