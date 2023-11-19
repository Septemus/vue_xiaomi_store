<template>
    <div class="cart_calc_body">
        <cart_calc_top></cart_calc_top>
        <router-view>
        </router-view>
        <recommendation />
    </div>
</template>

<script>
import cart_calc_top from '@/components/cart_calc/cart_calc_top.vue'
import recommendation from '@/components/recommendation.vue'
import verify_mixin from '../assets/js/verify_mixin.js'
import { mapActions, mapState } from 'vuex';

export default {
    mixins: [verify_mixin],
    name: 'cart_calc',
    components: {
        cart_calc_top,
        recommendation,
    },
    computed: {
        ...mapState(['location_prefix', 'userid'])
    },
    methods: {
        ...mapActions(['setUserinfo'])
    },

}
</script>


<style lang="less">
@icon_radius: 12px;
@black42: #424242;

.cart_calc_body {
    background-color: rgb(245, 245, 245);
    padding-bottom: 38px;
}</style>