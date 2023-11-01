<template>
    <div>
        <cart_calc_top></cart_calc_top>

        <h1> this is cart calc</h1>
    </div>
</template>

<script>
import cart_calc_top from '@/components/cart_calc_top.vue'
import verify_mixin from '../assets/js/verify_mixin'
import { mapState, mapActions } from 'vuex'
export default {
    name: 'cart_calc',
    components:{
        cart_calc_top
    },
    mixins:[verify_mixin],
    mounted() {
        console.log('hello')
    },
    methods:{
        ...mapActions(['setUserinfo'])
    },
    computed:{
        ...mapState(['location_prefix'])
    }
}
</script>


<style lang="less" scoped></style>