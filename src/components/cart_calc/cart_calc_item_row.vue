<template>
    <div class="list_row item_row">
        <div class="list_col"><i class="iconfont icon-check" @click="$emit('Mycheck', $event, cart_item)"></i></div>
        <div class="list_col img_col"><img :src="location_prefix + cart_item.img_cover" alt=""></div>
        <div class="list_col name_col">
            <router-link :to="{
                name:'product',
                query:{
                    pid:cart_item.pid
                }
            }">
                {{ namePlusChoices(cart_item) }}

            </router-link>
        </div>
        <div class="list_col single_price_col">{{ cart_item.price }}元</div>
        <div class="list_col quantity_col">
            <div class="quantity_wrap">
                <button class="lb" @click="tmp--">-</button>
                <input type="text" name="" id="" v-model.number="tmp">
                <button class="rb" @click="tmp++">+</button>

            </div>

            <!-- {{  }} -->

        </div>
        <div class="list_col price_count">{{ cart_item.price * cart_item.quantity }}元</div>
        <div class="list_col rm_col">
            <a href="javascript:void(0);" @click="$emit('Myremove', cart_item.cart_id)">
                <i class="fa fa-remove"></i>
            </a>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
// import onlynum from '@/assets/js/onlynum'
export default {
    name: 'cart_calc_item_row',
    props: ['cart_item'],
    computed: {
        ...mapState(['location_prefix'])
    },
    data() {
        return {
            tmp: this.cart_item.quantity
        }
    },
    // mixins:[onlynum],
    watch: {
        tmp: {
            handler(val) {
                this.myonlyNumber(val)
                this.cart_item.quantity = val
                this.updQuantity()
            },
            immediate: true,
            deep: true
        }
    },
    methods: {
        namePlusChoices(item) {
            let ret = item.detail.pname
            for (let c of item.choices) {
                ret += ' ' + c.choice_name
            }
            return ret
        },
        myonlyNumber(nxt) {
            const reg = /\D/g
            this.tmp = parseInt(
                nxt.toString().replace(reg, '')
            )
            if (nxt === '' || nxt === 0 || isNaN(nxt)) {
                this.tmp = 1
            }
        },
        updQuantity() {
            let target = this.location_prefix + `/users/cart/modifyQuantity`
            fetch(target, {
                method: 'POST',
                body: JSON.stringify({
                    quantity: this.cart_item.quantity,
                    cart_id: this.cart_item.cart_id
                }),
                headers: {
                    "Content-Type": "application/json",
                },
            }).then(res=>res.json())
            .then(res=>{
                if(res.ok) {
                    console.log('modify quantity successful!@@')
                }
                else {
                    console.log('modify quantity failed!@@')
                }
            })
        }
    }
}
</script>