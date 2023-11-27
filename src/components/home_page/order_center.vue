<template>
    <div class="order_center center">
        <h1>我的订单</h1>
        <div class="order_list_area">
            <div class="single_order" v-for="order of myorder.list">
                <div class="order_info">
                    <div class="row">
                        <div class="col-sm-8">
                            <div class="order_status">
                                已付款
                            </div>
                            <p>
                                {{ order.order_info.order_time }}
                                <span class="sep">|</span>
                                {{ order.order_info.order_client_realname?order.order_info.order_client_realname:order.order_info.order_client }}
                                <span class="sep">|</span>
                                订单号：{{ order.order_info.order_id }}
                            </p>
                        </div>
                        <div class="col-sm-4 right">
                            <p class="order_total">支付金额：<span class="">{{ order.order_info.order_overhead }}</span> 元</p>
                        </div>

                    </div>

                </div>
                <div class="row darr">
                    <div class="col-md-9">
                        <ul>
                            <li v-for="d of order.darr">


                                <img :src="d.img_path" alt="商品图片">
                                <div class="info">
                                    <router-link :to="{
                                        name: 'product',
                                        query: {
                                            pid: d.pid
                                        }
                                    }">{{ d.order_full_name }}</router-link>
                                    <p>{{ d.price }} 元 × {{ d.quantity }}</p>
                                </div>


                                <!-- <a href="" > -->
                                <!-- </a> -->
                            </li>

                        </ul>
                    </div>
                    <div class="col-md-3 right">
                        <div>
                            <button class="detail">订单详情</button>
                            <button class="remove" @click="rm_order(order.order_info.order_id)">删除订单</button>

                        </div>
                    </div>
                </div>


            </div>


        </div>

    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'order_center',
    computed: {
        ...mapState(['location_prefix', 'userid'])
    },
    data() {
        return {
            myorder: null
        }
    },
    mounted() {
        this.refresh()
    },
    methods: {
        async pickaphoto(pid) {
            let tmp = await fetch(this.location_prefix + `/getPhoto?pid=${pid}`)
            tmp = await tmp.json()
            tmp = tmp[0].img_path
            return this.location_prefix + tmp
        },
        refresh() {
            fetch(this.location_prefix + `/users/order?uid=${this.userid}`, {
                method: 'GET',
            }).then(res => res.json())
                .then(async res => {
                    // console.log(res)
                    debugger
                    this.myorder = res
                    for (let order in this.myorder.list) {
                        for (let d in this.myorder.list[order].darr) {
                            this.myorder.list[order].darr[d].img_path = await this.pickaphoto(this.myorder.list[order].darr[d].pid)
                        }
                    }
                    this.$forceUpdate()
                    // this.myorder.list.forEach(order => {
                    //     order.darr.forEach(async d=>{
                    //         d.img_path=await this.pickaphoto(d.pid)
                    //         console.log(d)
                    //     })
                    // });
                })
        },
        rm_order(order_id) {
            let target = this.location_prefix+'/users/order/remove'
            fetch(target,{
                method:'POST',
                body:JSON.stringify({
                    order_id
                }),
                headers:{
                    'Content-Type': 'application/json'
                }
            }).then(res=>res.json())
            .then(res=>{
                if(res.ok){
                    this.refresh()
                }
            })
        }
    }
}
</script>
<style lang="less" scoped>
@order_gray: #757575;
@img_edge: 80px;

@media (max-width:768px) {
    .order_center {
        .order_list_area {
            ul {
                li {
                    font-size: 8px;

                    img {
                        width: @img_edge*0.5 !important;
                        height: @img_edge*0.5 !important;
                    }
                }
            }
        }
    }
}

.order_center {
    // >h1 {
    //     color: @order_gray;
    //     font-size: 30px;
    //     font-weight: 400;
    //     margin: 0;
    // }

    .order_list_area {
        .single_order {
            // padding: 15px;
            margin-top: 20px;
            border-color: #ff6700;
            border-style: solid;
            border-width: 1px;
            position: relative;

            .order_info {
                padding: 30px 24px;
                background: #fffaf7;
                padding-bottom: 0px;
                border-bottom: 1px solid #feccac;
                position: relative;

                .right {
                    display: flex;
                    align-items: flex-end;

                    .order_total {
                        width: 100%;
                        text-align: right;

                        // p {
                        // }
                        span {
                            font-size: 28px;
                            color: #333;
                        }

                        // position: absolute;
                        // bottom: 24px;
                    }
                }

                .order_status {
                    font-size: 18px;
                    color: #ff6700;
                }

                p {

                    margin-bottom: 20px;
                    min-height: 28px;
                    box-sizing: content-box;


                    font-size: 14px;
                    color: rgb(117, 117, 117);

                    span.sep {
                        margin: 0 4px;
                    }
                }
            }

            .darr {
                padding: 20px;
                margin: 0;
                position: relative;

                .right {
                    display: flex;
                    justify-content: flex-end;

                    button {
                        display: block;
                        font-size: 12px;
                        width: 118px;
                        height: 28px;
                        margin-bottom: 15px;
                    }

                    .detail {
                        // position: absolute;
                        // right: 20px;
                        // top: 50px;
                        background-color: #fff;
                        color: #757575;
                        border: 1px solid #b0b0b0;

                        // transform: translateY(-50%);
                    }

                    .remove {
                        background-color: red;
                        color: white;
                        border: none;
                    }

                }

                ul {

                    margin: 0;
                    padding: 0;

                    li {
                        list-style: none;


                        img {
                            width: @img_edge;
                            height: @img_edge;
                        }

                        .info {
                            display: inline-block;
                            font-size: 14px;
                            color: rgb(51, 51, 51);
                            text-decoration: none;

                            a {
                                color: rgb(51, 51, 51);
                                text-decoration: none;
                                display: block;

                                &:hover {
                                    color: #ff6700;
                                }
                            }
                        }


                    }
                }
            }


        }

    }
}</style>