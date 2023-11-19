<template>
    <div class="item" :class="{
        'input-active': param&&param.length || focusing,
        'input-focus': focusing
    }">

        <label for="realname">{{this.label}}</label>
        <input type="text" name="realname" id="" v-model="param" @focusin="focusing = true;" @focusout="focusing = false;">
    </div>
</template>


<script>
export default {
    name: 'cart_calc_dynamic_input',
    props: ['param', 'label'],
    data() {
        return {
            focusing: false
        }
    },
    watch:{
        param(val) {

        }
    }
}
</script>

<style lang="less" scoped>
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
</style>