<template>
    <div class="container-xl part1">
        <div class="list">
            <div class="list_header list_row">
                <div class="list_col">
                    <i class="iconfont icon-check" :class="{ 'selected': sel_all }" ref="sel_all"
                        @click="checkAll($event)"></i> &ensp; <span>全选</span>
                </div>
                <div class="list_col">商品图片</div>
                <div class="list_col name_col">商品名称</div>
                <div class="list_col">单价</div>
                <div class="list_col">数量</div>
                <div class="list_col">小计</div>
                <div class="list_col">操作</div>
            </div>
            <cart_calc_item_row v-for="cart_item of cart_list" @Myremove="Myremove_handler" :cart_item="cart_item"
                :key="cart_item.cart_id" @Mycheck="Mycheck_handler">
            </cart_calc_item_row>
        </div>
        <div class="cart_calc_action row">
            <div class="left col-md-6">
                <router-link :to="{
                    name: 'front_page'
                }">
                    继续购物
                </router-link>
                <span>已选择<i>{{ this.selected_list.size }}</i>件</span>
            </div>
            <div class="right col-md-6">
                <span>合计：<em>{{ this.price }}</em> 元</span>

                <!-- <router-link :to="{
                    name: 'part2'
                }"> -->
                <button :class="{
                    'button_active': Array.from(selected_list).length
                }" :disabled="!Array.from(selected_list).length" @click="gopart2">去结算</button>
                <!-- </router-link> -->

            </div>
        </div>
    </div>
</template>


<script>
// import verify_mixin from '../assets/js/verify_mixin'
import cart_fetching from '@/assets/js/cart_fetching'
import verify_token from '@/assets/js/verify_token'
import cart_calc_item_row from '@/components/cart_calc/cart_calc_item_row.vue'
import { mapState, mapActions } from 'vuex'
import Myremovehandler from '@/assets/js/Myremovehandler'
export default {
    name: 'cart_calc',
    components: {
        cart_calc_item_row
    },
    data() {
        return {

            selected_list: new Set(),
            sel_all: false,
            price: 0
        }
    },
    // mixins: [verify_mixin],
    mounted() {
        console.log('hello')
    },
    mixins: [Myremovehandler],
    methods: {
        ...mapActions(['setUserinfo']),
        Mycheck_handler(e, cart_item) {
            console.log('this is the target class of the event:@@', e.target.classList)
            console.log('this is the target of the event:@@', cart_item.cart_id)
            e.target.classList.toggle('selected')
            if (e.target.classList.contains('selected')) {
                this.selected_list.add(cart_item.cart_id)
                this.price += cart_item.price * cart_item.quantity
            }
            else {
                this.selected_list.delete(cart_item.cart_id)
                this.price -= cart_item.price * cart_item.quantity
            }
            this.sel_all = (this.selected_list.size === this.cart_list.length)

            // if(e.target.classList.value.includes('checked')){
            //     e.target.classList
            // }

        },
        checkAll(e) {
            e.target.classList.toggle('selected')
            let checkboxes = document.querySelectorAll('.icon-check')
            console.log(checkboxes)
            if (e.target.classList.contains('selected')) {
                this.price = 0
                console.log('about to select all')
                this.price += this.cart_list.reduce((prev, cur) => {
                    return prev + cur.price * cur.quantity
                }, 0)
                checkboxes.forEach(item => {
                    item.classList.add('selected')
                    debugger

                })
                this.selected_list = new Set(this.cart_list.map(item => {
                    return item.cart_id
                }))
                this.sel_all = true
                // console.log('select list after checkall:@@',this.selected_list)
            }
            else {
                this.price = 0
                console.log('about to unselect all')
                checkboxes.forEach(item => {
                    item.classList.remove('selected')
                })
                this.selected_list = new Set()
            }
        },
        gopart2() {
            debugger
            this.$store.commit('select_list', this.selected_list)
            this.$router.push({
                name: 'part2'
            })
        }
    },
    computed: {
        ...mapState(['location_prefix', 'userid', 'cart_list']),
    },
    async mounted() {
        console.log(this.Myremove_handler)
        if (await verify_token.apply(this))

            cart_fetching.apply(this)
                .then((cart_list) => {
                    // debugger
                    this.$store.commit('cart_list', cart_list)
                    console.log('commiting to vuex successful,this is the cartlist:@@', cart_list)

                })
    }
}

</script>


<style lang="less">
@icon_radius: 12px;
@black42: #424242;

.part1 {
    .list {
        background-color: white;
        margin-top: 38px;
        padding: 0;
        color: @black42;

        .list_header {
            height: 70px;
            width: 100%;

            @media (max-width:576px) {
                display: none !important;
            }
        }

        .list_row {
            border-bottom: solid 1px #e0e0e0;
            display: flex;
            align-items: center;
            flex-wrap: wrap;

            .list_col {
                width: 10%;
                // border-right: solid 1px red;
                font-size: 14px;
                text-align: left;
                padding-left: 10px;
                text-align: center;

                .iconfont {
                    display: inline-block;
                    width: 19px;
                    height: 19px;
                }

            }

            .price_count {
                color: #ff6700;
            }

            .name_col {
                width: 40%;
                text-align: left;

                a {
                    text-decoration: none;
                    color: @black42;
                }
            }

            .img_col {
                @media (max-width:576px) {
                    width: 50%;
                }

                img {
                    width: 60%;
                }
            }

            .quantity_col {
                .quantity_wrap {
                    display: flex;
                    border: solid 1px rgb(224, 224, 224);
                    box-sizing: content-box;
                    height: 38px;

                    // padding: 1px;
                    * {
                        border: none !important;
                        padding: 0;
                    }

                    button {
                        width: 25%;
                        height: 100%;
                        color: #757575;
                        background-color: white;
                        transition: background-color .3s ease;

                        &:hover {
                            background-color: #e0e0e0;
                        }
                    }

                    input {
                        text-align: center;
                        // margin-left: -20px;
                        width: 50%;
                        padding: 0;
                        height: 100%;
                        outline: none;
                    }
                }
            }

            .rm_col {
                a {
                    margin: 0 auto;
                    width: 24px;
                    height: 24px;
                    display: block;
                    text-align: center;
                    color: #757575;
                    transition: background-color .2s ease;

                    &:hover {
                        background-color: rgb(229, 57, 53);
                        border-top-left-radius: @icon_radius;
                        border-top-right-radius: @icon_radius;
                        border-bottom-left-radius: @icon_radius;
                        border-bottom-right-radius: @icon_radius;
                        color: white;
                        // i {
                        //     color:white;
                        // }
                    }
                }
            }

            .single_price_col,
            .quantity_col,
            .price_count,
            .rm_col {
                @media (max-width:576px) {
                    width: 25%;
                }
            }
        }

        .item_row {
            box-sizing: content-box;
            min-height: 85px;
            padding: 15px 0;
        }
    }

    .cart_calc_action {
        min-height: 50px;
        background-color: white;
        align-items: center;
        width: 100%;
        margin: 0 auto;

        margin-top: 30px;

        .left {
            color: #757575;
            font-size: 14px;

            a {
                color: #757575;
                text-decoration: none;
                margin-left: 32px;
            }

            span {
                margin-left: 16px;
                padding-left: 16px;
                border-left: 1px solid #eee;

                i {
                    font-style: normal;
                    color: #ff6700;
                }
            }
        }

        .right {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            height: 100%;

            // padding-right: 0;
            // flex-wrap: wrap;
            span {
                margin-right: 50px;
                color: #ff6700;

                em {
                    font-size: 30px;
                    font-style: normal;
                }
            }

            button {
                width: 40%;
                height: 100%;
                display: inline-block;
                border: none;
                font-size: 18px;
                background-color: #e0e0e0;
                color: #b0b0b0;
                height: 50px;


            }

            .button_active {
                background-color: #ff6700;
                color: white;

                &:hover {
                    background-color: #f25807;
                }
            }
        }

    }
}</style>