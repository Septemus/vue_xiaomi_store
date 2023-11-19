<template>
    <b-modal id="cart_calc_modal" centered>
        <template #modal-header>
            修改收货地址
            <button @click="myClose">
                <i class="fa fa-times" aria-hidden="true"></i>
            </button>
        </template>

        <div class="item" :class="{
            'input-active': tmp_realname && tmp_realname.length || focusing1,
            'input-focus': focusing1
        }">

            <label for="realname">姓名</label>
            <input type="text" name="realname" id="" v-model="tmp_realname" @focusin="focusing1 = true;"
                @focusout="focusing1 = false;">
        </div>

        <div class="item" :class="{
            'input-active': tmp_phonenum && tmp_phonenum.length || focusing2,
            'input-focus': focusing2
        }">

            <label for="phone">联系电话</label>
            <input type="text" name="phone" id="" v-model="tmp_phonenum" @focusin="focusing2 = true;"
                @focusout="focusing2 = false;">
        </div>

        <div class="item" :class="{
            'input-active': tmp_addr && tmp_addr.length || focusing3,
            'input-focus': focusing3
        }">

            <label for="addr">收货地址</label>
            <input type="text" name="addr" id="" v-model="tmp_addr" @focusin="focusing3 = true;"
                @focusout="focusing3 = false;">
        </div>
        
        <!-- <cart_calc_dynamic_input :param="tmp_realname" :label="'姓名'"></cart_calc_dynamic_input> -->
        <!-- <cart_calc_dynamic_input :param="tmp_phonenum" :label="'联系电话'"></cart_calc_dynamic_input>
        <cart_calc_dynamic_input :param="tmp_addr" :label="'收货地址'"></cart_calc_dynamic_input> -->

        <template #modal-footer>
            <div class="mx-auto footer_bts">
                <button class="myorange" @click="submit_modify">
                    确定
                </button>
                <button class="mygray" @click="myClose">
                    取消
                </button>
            </div>
        </template>

    </b-modal>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import cart_calc_dynamic_input from './cart_calc_dynamic_input.vue'
export default {
    name: 'cart_calc_modify_modal',
    components: {
        cart_calc_dynamic_input
    },
    data() {
        return {
            tmp_realname: '',
            tmp_phonenum: '',
            tmp_addr: '',
            focusing1: false,
            focusing2: false,
            focusing3: false
        }
    },
    computed: {
        ...mapState(['realname', 'default_phone', 'default_addr'])
    },
    methods: {
        myClose() {
            this.$bvModal.hide('cart_calc_modal')
        },
        submit_modify() {

            this.$store.commit('default_phone', this.tmp_phonenum)
            this.$store.commit('default_addr', this.tmp_addr)
            this.$store.commit('realname', this.tmp_realname)
            this.$bvModal.hide('cart_calc_modal')
        }
    },
    mounted() {
        
        this.$root.$on('bv::modal::show', (bvEvent, modalId) => {

            console.log('Modal is about to be shown', bvEvent, modalId)
            if (modalId === `cart_calc_modal`) {
                // console.log('modify modal mounted!@@')
                this.tmp_realname = this.realname
                this.tmp_phonenum = this.default_phone
                this.tmp_addr = this.default_addr
            }
        })
    }
}
</script>

<style lang="less" >
#cart_calc_modal {

    // max-width: 660px;
    .myorange {
        background-color: #ff6700;
    }

    .mygray {
        background-color: #b0b0b0;
    }

    .modal-dialog {
        max-width: 660px ;

        .modal-header {
            font-size: 18px;
            color: #424242;
            background-color: #f5f5f5;
            position: relative;
            border: none !important;
            padding: 14px 20px;
            height: 32px;
            box-sizing: content-box;
            display: block;

            button {
                i.fa {
                    font-size: 24px;
                    color: #757575;
                }

                // position: absolute;
                background-color: transparent;
                // right:10px;
                // top:20px;
                display: block;
                border: none;
                float: right;
            }
        }

        .modal-body {
            padding: 20px;

            .item {
                position: relative;
                margin-bottom: 14px;

                &.input-active {
                    label {
                        top: -9px;
                        font-size: 12px;
                        background-color: #fff;
                    }
                }

                &.input-focus {
                    input[type="text"] {
                        border-color: #ff6700;
                    }

                    label {
                        color: #ff6700;
                    }
                }

                label {
                    position: absolute;
                    font-size: 14px;
                    color: #b0b0b0;
                    left: 12px;
                    top: 11px;
                    transition: all .2s linear;
                }

                input[type="text"] {
                    width: 100%;
                    border: solid 1px #e0e0e0;
                    background-color: #fff;
                    padding: 10px 16px;
                    font-size: 14px;
                    line-height: 18px;
                    outline: none;
                }
            }

        }

        .modal-footer {
            .footer_bts {
                width: 100%;
                display: flex;
                justify-content: space-between;
                button {
                    color: white;
                    width: 45%;
                    height: 40px;
                    font-size: 14px;
                    text-align: center;
                    border: none;
                    // margin: 0 7px;
                }

            }

        }
    }

}
</style>