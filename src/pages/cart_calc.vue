<template>
    <div class="cart_calc_body">
        <cart_calc_top></cart_calc_top>
        <div class="container-xl list">
            <div class="list_header list_row">
                <div class="list_col"><input type="checkbox" name="" id="">全选</div>
                <div class="list_col">商品图片</div>
                <div class="list_col name_col">商品名称</div>
                <div class="list_col">单价</div>
                <div class="list_col">数量</div>
                <div class="list_col">小计</div>
                <div class="list_col">操作</div>
            </div>
            <cart_calc_item_row v-for="cart_item of cart_list" @Myremove="Myremove_handler" :cart_item="cart_item"
                :key="cart_item.cart_id"></cart_calc_item_row>
            <!-- <div class="list_row item_row" v-for="cart_item of cart_list" @Myremove="Myremove_handler">
                <div class="list_col"><input type="checkbox" name="" id=""></div>
                <div class="list_col img_col"><img :src="location_prefix + cart_item.img_cover" alt=""></div>
                <div class="list_col name_col">
                    {{ namePlusChoices(cart_item) }}
                </div>
                <div class="list_col">{{ cart_item.price }}元</div>
                <div class="list_col">{{ cart_item.quantity }}</div>
                <div class="list_col">{{ cart_item.price * cart_item.quantity }}元</div>
                <div class="list_col rm_col">
                    <a href="javascript:void(0);" @click="$emit('Myremove')">
                        <i class="fa fa-remove"></i>
                    </a>
                </div>
            </div> -->

        </div>
        <recommendation />
    </div>
</template>

<script>
import cart_calc_top from '@/components/cart_calc_top.vue'
// import verify_mixin from '../assets/js/verify_mixin'
import recommendation from '@/components/recommendation.vue'
import cart_fetching from '../assets/js/cart_fetching'
import verify_token from '../assets/js/verify_token'
import cart_calc_item_row from '@/components/cart_calc_item_row.vue'
import { mapState, mapActions } from 'vuex'
import Myremovehandler from '@/assets/js/Myremovehandler'
export default {
    name: 'cart_calc',
    components: {
        cart_calc_top,
        recommendation,
        cart_calc_item_row
    },
    data() {
        return {

            cart_item_list: []
        }
    },
    // mixins: [verify_mixin],
    mounted() {
        console.log('hello')
    },
    mixins:[Myremovehandler],
    methods: {
        ...mapActions(['setUserinfo']),

        // Myremove_handler(cart_id) {
        //     console.log('this is the cart_id:@@', cart_id)
        //     let target = this.location_prefix + `/users/cart/remove`
        //     fetch(target, {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             cart_id
        //         })
        //     })
        //         .then(res => res.json())
        //         .then(res => {
        //             if (res.ok) {
        //                 cart_fetching.apply(this)
        //                     .then((cart_list) => {
        //                         // debugger
        //                         this.$store.commit('cart_list', cart_list)
        //                         console.log('commiting to vuex successful,this is the cartlist:@@', cart_list)

        //                     })
        //             }
        //             console.log('this is the res of cart item rm:@@', res)
        //         })
        // }
    },
    computed: {
        ...mapState(['location_prefix', 'userid', 'cart_list'])
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

.cart_calc_body {
    background-color: rgb(245, 245, 245);
    padding-bottom: 38px;

    .list {
        background-color: white;
        margin-top: 38px;
        padding: 0;

        .list_header {
            height: 70px;
            width: 100%;
        }

        .list_row {
            border-bottom: solid 1px rgb(224, 224, 224);
            display: flex;
            align-items: center;

            .list_col {
                width: 10%;
                // border-right: solid 1px red;
                font-size: 14px;
                text-align: left;
                padding-left: 10px;
            }

            .name_col {
                width: 40%;
            }

            .img_col {
                img {
                    width: 60%;
                }
            }

            .rm_col {
                a {
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
        }

        .item_row {
            box-sizing: content-box;
            height: 85px;
            padding: 15px 0;
        }
    }
}
</style>