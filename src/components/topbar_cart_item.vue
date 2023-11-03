<template>
    <div>
        <img :src="location_prefix + cart_item.img_cover" alt="">
        <router-link :to="{
            name: 'product',
            query: {
                pid: cart_item.pid
            }
        }">

            <p class="cart_item_name">{{ namePlusChoices(cart_item) }}</p>
        </router-link>
        <p class="cart_item_price">{{ cart_item.price }} x {{ cart_item.quantity }} <span @click="$emit('remove',cart_item.cart_id)">x</span></p>
    </div>
</template>


<script>
import { mapState } from 'vuex'

export default {
    name: 'topbar_cart_item',
    props:['cart_item'],
    computed: {
        ...mapState(['location_prefix'])
    },
    methods: {
        namePlusChoices(item) {
            let ret = item.detail.pname
            for (let c of item.choices) {
                ret += ' ' + c.choice_name
            }
            return ret
        }
    }
}


</script>