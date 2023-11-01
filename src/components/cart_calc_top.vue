<template>
    <div class="cct_outer">
        <div class="container-xl mx-auto cct">
            <div class="logo_div">
    
                <img src="../assets/images/logo-mi2.png" alt="" class="img-fluid  d-block">
            </div>
            <h2>我的购物车</h2>
            <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
            <div class="right">
    
                <a href="javascript:void(0);">{{ this.username }}</a>
                <span>|</span>
                <a href="javascript:void(0);">我的订单</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    name: 'cart_calc_top',
    computed:{
        ...mapState(['username'])
    }
}

</script>



<style scoped lang="less">
@Mygray:#757575;
@myorange:#ff6700;
.cct_outer {
    border-bottom: solid 2px @myorange;
    background-color: white;
    .cct {
        display: flex;
        align-items: center;
        min-height:100px;
        flex-wrap: wrap;
        .logo_div {
            img {
                max-height: 56px;
            }
        }
        h2 {
            padding-left: 50px;
            color:#424242;
            font-size:28px;
        }
        p {
            font-size: 12px;
            line-height: 34px;
            margin: 0 15px 0;
            color:@Mygray
        }
        .right {
            flex-grow: 1;
            display: flex;
            justify-content: flex-end;
            font-size: 12px;
            span {
                color:rgb(176,176,176);
            }
            a {
                color:@Mygray;
                text-decoration: none;
                padding: 0 15px;
                &:hover {
                    color:@myorange
                }
            }
        }
    }

}
</style>