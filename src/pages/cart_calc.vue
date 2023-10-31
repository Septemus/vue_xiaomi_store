<template>
    <div>

        <h1> this is cart calc</h1>
    </div>
</template>

<script>
import verify_mixin from '../assets/js/verify_mixin'

export default {
    name: 'cart_calc',
    mixins:[verify_mixin],
    mounted() {
        console.log('hello')
    },
}
</script>


<style lang="less" scoped></style>