<template>
    <div>
        <disp></disp>
        <advertisement></advertisement>
        <div class="clear_fix">
        </div>
        <product_area></product_area>
    </div>
</template>
<script>
import disp from '../components/front_page/disp.vue'
import product_area from '../components//front_page/product_area.vue'
import advertisement from '../components//front_page/advertisement.vue'
export default {
    components: { disp, product_area, advertisement },
}
</script>