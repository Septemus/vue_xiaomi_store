<template>
    <div class="outer">
        <div class="container-xl">
            <div class="cart_success row">
                <div class="col-md-8 left">
                    <img src="../assets/images/success.png" alt="">
                    <div class="success_info">
                        <h3>已成功加入购物车！</h3>
                        <p>{{ this.success_info }}</p>
                    </div>
                </div>
                <div class="col-md-4 right">
                    <div class="bt_area">
                        <button class="back">返回上一级</button>
                        <button class="gopay">去购物车结算</button>
                    </div>
                </div>

            </div>

            <hr>
            <recommendation/>
            <!-- <h2 class="rec_title">
                <span>买购物车中商品的人还买了</span>
            </h2> -->
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
import { mapActions } from 'vuex';
import verify_mixin from '../assets/js/verify_mixin';
import recommendation from '@/components/recommendation.vue';
export default {
    mixins: [verify_mixin],
    name: 'homepage',
    components: {recommendation},
    computed: {
        ...mapState(['location_prefix', 'userid'])
    },
    methods: {
        ...mapActions(['setUserinfo'])
    },
    mounted() {
        // debugger
        // console.log('cart_success mounted!@@', this.$route.query)
        // let target = this.location_prefix + `/users/cart/add`
        // console.log('this is the cart add target:@@', target)
        // fetch(target, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         id: this.userid,
        //         pid: this.pid,
        //         quantity: 1,
        //         mychoices: this.mychoices
        //     })
        // }).then(res => res.json())
        //     .then(res => {
        //         console.log(res)
        //     })
        // console.log(JSON.parse(this.$route.query.mychoices))
    },
    data() {
        let success_info = this.$route.query.pname
        let mychoices = JSON.parse(this.$route.query.mychoices)
        console.log('mychoices:@@', mychoices)
        for (let c in mychoices) {
            success_info += ' ' + mychoices[c].choice_name
        }
        return {
            success_info,
            mychoices,
            // pid: this.$route.query.pid
        }
    }
}
</script>
<style lang="less" scoped>
.outer {
    background-color: rgb(245, 245, 245);
    padding: 38px 0;

    .cart_success {
        padding-bottom: 25px;
        margin-bottom: 25px;

        .left {
            display: flex;

            img {
                width: 64px;
                height: 64px;
                display: block;

            }

            .success_info {
                margin-left: 20px;
            }
        }

        .right {
            .bt_area {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;

                button {
                    width: 40%;
                    height: 40px;
                }
            }
        }
    }

    // .rec_title {
    //     margin-top: 80px;
    //     border-top: solid 1px rgb(224, 224, 224);
    //     position: relative;

    //     span {
    //         position: absolute;
    //         left: 50%;
    //         top: 0;
    //         display: block;
    //         padding: 0 40px;
    //         white-space: nowrap;
    //         transform: translate(-50%, -50%);
    //         background-color: rgb(245, 245, 245);
    //         color: rgb(117, 117, 117);
    //     }
    // }
}
</style>