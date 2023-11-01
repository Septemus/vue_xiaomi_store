<template>
    <div>
        <h2 class="rec_title">
            <span>买购物车中商品的人还买了</span>
        </h2>
    </div>
</template>
<script>
export default {
    name:'recommendation',

}
</script>
<style lang="less" scoped>
.rec_title {
    margin-top: 80px;
    border-top: solid 1px rgb(224, 224, 224);
    position: relative;

    span {
        position: absolute;
        left: 50%;
        top: 0;
        display: block;
        padding: 0 40px;
        white-space: nowrap;
        transform: translate(-50%, -50%);
        background-color: rgb(245, 245, 245);
        color: rgb(117, 117, 117);
    }
}
</style>