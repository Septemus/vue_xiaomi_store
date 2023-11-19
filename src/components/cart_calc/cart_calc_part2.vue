
<template>
    <div class="part2">


        <cart_calc_modify_modal></cart_calc_modify_modal>
        <div class="container-xl checkout">
            <div class="addr_header">
                <span>收货地址</span>
            </div>
            <div class="addr_list">
                <a class="addr_item" href="javascript:void(0);">
                    <div class="addr_info">
                        <div class="name">
                            {{ realname ? realname : `请输入真实姓名` }}
                        </div>
                        <div class="tel">
                            {{ default_phone ? default_phone : `请输入联系号码` }}
                        </div>
                        <div class="addr">
                            {{ default_addr ? default_addr : `请输入收货地址` }}
                        </div>
                    </div>
                    <div class="addr_action" @click="$bvModal.show(`cart_calc_modal`)">
                        修改
                    </div>
                </a>
            </div>
            <div class="detail_sec">
                <div class="detail_header">商品</div>
                <div class="item row" v-for="item of realsl">
                    <div class="col-md-8">
                        <div class="item_img">
                            <img :src="location_prefix + item.img_cover" alt="">
                        </div>
                        <div class="item_name">
                            {{ namePlusChoices(item) }}
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="item_price">
                            {{ item.price }} 元 X {{ item.quantity }}
                        </div>
                        <div class="count">
                            {{ item.price * item.quantity }} 元
                        </div>
                    </div>
                </div>
            </div>
            <div class="delivery">
                <span class="way">配送方式</span>
                <span class="wayv">包邮</span>
            </div>
            <div class="summary">
                <table class="sum_table">
                    <tbody>
                        <tr>
                            <td class="key">商品件数:</td>
                            <td class="value">{{ total_quantity }}件</td>
                        </tr>
                        <tr>
                            <td class="key">商品总价:</td>
                            <td class="value">{{ total_price }}元</td>
                        </tr>
                        <tr>
                            <td class="key">运费:</td>
                            <td class="value">0元</td>
                        </tr>
                        <tr>
                            <td class="key">应付总额:</td>
                            <td class="value"><span>{{ total_price }}</span>元</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="foot">
                <button class="back" @click="$router.go(-1)">
                    返回购物车
                </button>
                <button class="go" @click="purchase">
                    去结算
                </button>
            </div>
        </div>
    </div>
</template>


<script>
import verify_mixin from '@/assets/js/verify_mixin';
import cart_calc_modify_modal from '@/components/cart_calc/cart_calc_modify_modal.vue'
import { mapState, mapActions } from 'vuex'

export default {
    name: 'cart_calc_part2',
    mixins: [verify_mixin],
    components: {
        cart_calc_modify_modal
    },
    computed: {
        ...mapState([
            'location_prefix'
            ,
            'userid'
            ,
            'cart_list'
            ,
            'realname'
            ,
            'default_phone'
            ,
            'default_addr'
            ,
            'select_list'
        ]),
        total_quantity() {
            return this.realsl.reduce((prev, cur) => {
                return prev + cur.quantity
            }, 0)
        },
        total_price() {
            return this.realsl.reduce((prev, cur) => {
                return prev + cur.quantity * cur.price
            }, 0)
        }
    },
    methods: {
        ...mapActions(['setUserinfo']),
        namePlusChoices(item) {
            let ret = item.detail.pname
            for (let c of item.choices) {
                ret += ' ' + c.choice_name
            }
            return ret
        },
        purchase() {
            console.log('purchasing!@@', this.realsl)
            let cid_list = this.realsl.map(item => {
                return {
                    cid:item.cart_id,
                    price:item.price
                }
            })
            let target = this.location_prefix + `/users/cart/purchase`
            fetch(target, {
                method: 'POST',
                body: JSON.stringify({
                    cid_list,
                    order_overhead:this.total_price,
                    order_client:this.userid,
                    phonenum:this.default_phone,
                    addr:this.default_addr,
                    order_client_realname:this.realname
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res=>res.json())
            .then(res=>{
                if(res.ok) {
                    console.log('successful!@@')
                    this.$router.push({
                        name:'part3',
                        query:{
                            order_id:res.order_id
                        }
                    })
                }
                else {
                    console.log(`failed!@@`)
                }
            })
        }
    },
    data() {
        return {
            realsl: []
        }
    },

    mounted() {

        console.log(this.location_prefix)

        this.select_list.forEach(item => {
            // console.log(item)
            debugger
            let tmp = this.cart_list.filter((item1 => {
                return item1.cart_id === item
            }))
            this.realsl.push(tmp[0])
        })

        console.log(this.realsl)
    }
}
</script>

<style lang="less">
.part2 {
    box-sizing: content-box;
    background-color: rgb(245, 245, 245);
    padding-top: 40px;
    padding-bottom: 40px;

    .checkout {
        background-color: white;
        padding-top: 48px;

        .addr_header {
            margin-bottom: 20px;
        }

        .addr_list {
            .addr_item {
                text-decoration: none;
                margin-bottom: 30px;
                display: block;
                height: 180px;
                position: relative;
                max-width: 270px;
                border: solid 1px rgb(224, 224, 224);
                cursor: pointer;

                &:focus {
                    border-color: #ff6700;
                }

                color:#757575;
                font-size: 14px;

                &:hover {
                    border-color: #b0b0b0;
                }

                .addr_info {
                    padding: 15px 24px 0;

                    .name {
                        font-size: 18px;
                        color: #333333;
                    }
                }

                .addr_action {
                    color: #ff6700;
                    font-size: 16px;
                    position: absolute;
                    right: 24px;
                    bottom: 20px;
                }
            }
        }

        .detail_sec {
            border-bottom: solid 1px #e0e0e0;

            .detail_header {
                font-size: 18px;
                color: #333;
                height: 40px;
            }

            .item {
                // display: flex;
                min-height: 30px;
                padding: 15px 0;

                .item_img {
                    display: inline-block;

                    img {
                        max-width: 50px;
                    }
                }

                .item_name {
                    display: inline-block;
                    font-size: 14px;
                    color: rgb(66, 66, 66);
                }

                .item_price {
                    float: left;
                    font-size: 14px;
                    color: rgb(66, 66, 66);
                }

                .count {
                    float: right;
                    font-size: 14px;

                    color: #ff6700;
                }
            }
        }

        .delivery {
            padding: 25px 0;
            border-bottom: solid 1px #e0e0e0;

            // margin: 0 50px;
            span {
                height: 40px;
                padding-right: 40px;
            }

            .way {
                font-size: 18px;
                color: #333;
            }

            .wayv {
                color: #ff6700;
                font-size: 14px;
            }
        }

        .summary {
            min-height: 250px;
            padding: 20px 0;
            margin: 0 50px;

            position: relative;
            border-bottom: solid 1px #e0e0e0;

            .sum_table {
                position: absolute;
                right: 0;
                bottom: 20px;

                tbody {
                    tr {
                        td {
                            text-align: right;
                            padding: 10px;
                            font-size: 14px;
                            // border: solid 1px black;

                        }

                        .key {
                            color: #757575;
                        }

                        .value {
                            color: #ff6700;

                            span {
                                font-size: 30px;
                            }
                        }
                    }
                }
            }
        }

        .foot {
            padding: 20px 50px;
            display: flex;
            justify-content: flex-end;

            button {
                width: 158px;
                height: 38px;
                font-size: 14px;
            }

            .back {
                color: #b0b0b0;
                border: solid 1px #b0b0b0;
            }

            .go {
                margin-left: 30px;
                background-color: #ff6700;
                border: none;
                color: white;
            }
        }
    }
}</style>