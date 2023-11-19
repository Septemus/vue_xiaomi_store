<template>
    <div class="outer">
        <div class="container-xl body">
            <div class="notification">
                <i class="fa fa-check hook" aria-hidden="true"></i>
                <div class="order_info clearfix">
                    <div class="left">
                        <h2>订单提交成功！</h2>
                        <p v-if="!expanding">收货信息：{{ clientname }}
                            {{ phonenum }}

                            {{ addr }}

                        </p>
                    </div>
                    <div class="right">
                        <div class="total">
                            支付金额：
                            <span><em>{{ order_overhead }}</em> 元</span>
                        </div>
                        <a href="javascript:void(0);" class="order_detail_check" @click="expanding = !expanding">订单详情
                            <i class="fa fa-angle-down" aria-hidden="true" v-if="!expanding">
                            </i>
                            <i class="fa fa-angle-up" aria-hidden="true" v-else></i>
                        </a>
                    </div>
                </div>
                <div class="details" :class="{ 'myhidden': !expanding }">
                    <ul>
                        <li  class="clearfix">
                            <label for="">订单号：</label>
                            <div class="content">
                                <span>{{ order_id }}</span>
                            </div>
                        </li>
                        <li  class="clearfix">
                            <label for="">收货信息：</label>
                            <div class="content">
                                <span>
                                    {{ clientname }}
    
                                    {{ phonenum }}
    
                                    {{ addr }}
                                </span>
                            </div>
                        </li>
                        <li  class="clearfix">
                            <label for="">商品名称：</label>
                            <div class="content">
                                <span v-for="item of plist">
                                    {{ item }}
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'cart_calc_part3',
    data() {
        return {
            order_id: ``,
            overhead: 0,
            clientname: ``, phonenum: ``, addr: ``,
            order_overhead: 0,
            expanding: false,
            plist:[]
        }
    },
    computed: {
        ...mapState(['location_prefix'])
        ,

    },
    mounted() {
        
        let target = this.location_prefix + '/users/order/query'
        fetch(target, {
            method: 'POST',
            body: JSON.stringify({
                id: this.$route.query.order_id
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(res => {
                console.log(`this is order detail:@@`, res)

                this.clientname = res.order_info.order_client_realname

                this.phonenum = res.order_info.phonenum

                this.addr = res.order_info.addr

                this.order_overhead = res.order_info.order_overhead

                this.order_id = res.order_info.order_id
                
                this.plist=res.list.map(item=>{
                    return item.order_full_name
                })
            })
    }
}
</script>
<style lang="less" scoped>
.clearfix::after {
    content: " ";
    display: table;
}

.outer {
    background-color: #f5f5f5;
    padding: 38px 0;

    .body {
        background-color: #fff;

        .notification {
            padding: 30px 48px;
            padding-left: 183px;
            position: relative;
            display: block;

            .order_info {
                padding: 20px 0;
                height: auto;

                .left {
                    float: left;

                    h2 {
                        font-size: 24px;
                        font-weight: 400;
                        line-height: 36px;
                        margin-bottom: 10px;
                        color: rgb(66, 66, 66);
                    }

                    p {
                        color: rgb(97, 97, 97);
                        font-size: 14px;
                    }
                }

                .right {
                    float: right;

                    .total {
                        font-size: 14px;
                        margin-bottom: 10px;

                        span {
                            color: #ff6700;

                            em {
                                font-style: normal;
                                font-size: 24px;
                            }
                        }

                    }

                    a.order_detail_check {
                        display: block;
                        text-align: right;
                        text-decoration: none;
                        font-size: 14px;
                        color: #757575;

                        &:hover {
                            color: #ff6700;
                        }

                    }
                }
            }

            i.hook {
                position: absolute;
                left: 50px;
                top: 40px;
                font-size: 80px;
                border-radius: 42px;
                border: 2px solid #83c44e;
                color: #83c44e;
            }

            

            .details {
                height: 180px;
                overflow-y:scroll;
                transition: height .3s ease;
                box-sizing: border-box;
                border-top: 1px solid #e0e0e0;
                padding: 20px 0 0 0;
                margin-top: 10px;
                font-size: 14px;

                ul {
                    list-style: none;

                    li {
                        line-height: 24px;

                        label {
                            width: 85px;
                            float: left;
                        }
                        .content {
                            float: left;
                            span {
                                display: block;
                            }
                        }
                    }
                }
            }
            .myhidden {
                height: 0 !important;
                border: none !important;
                overflow: hidden ;
            }
        }
    }
}</style>