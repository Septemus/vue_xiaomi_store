<template>
    <div class="list_row item_row">
        <div class="list_col"><input type="checkbox" name="" id=""></div>
        <div class="list_col img_col"><img :src="location_prefix + cart_item.img_cover" alt=""></div>
        <div class="list_col name_col">
            {{ namePlusChoices(cart_item) }}
        </div>
        <div class="list_col">{{ cart_item.price }}元</div>
        <div class="list_col">{{ cart_item.quantity }}</div>
        <div class="list_col">{{ cart_item.price * cart_item.quantity }}元</div>
        <div class="list_col rm_col">
            <a href="javascript:void(0);" @click="$emit('Myremove',cart_item.cart_id)">
                <i class="fa fa-remove"></i>
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'cart_calc_item_row',
    props: ['cart_item'],
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
        },
    }
}
</script>