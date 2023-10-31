<template>
    <div class="container-xl mx-auto cct">
        <div class="logo_div">

            <img src="../assets/images/logo-mi2.png" alt="" class="img-fluid  d-block">
        </div>
        <h2>我的购物车</h2>
        <p>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</p>
        <div class="right">

            <a href="javascript:void(0);">{{ this.username }}</a>
            <a href="javascript:void(0);">个人中心</a>
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



<style lang="less">
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
    }
    .right {
        flex-grow: 1;
    }
}
</style>