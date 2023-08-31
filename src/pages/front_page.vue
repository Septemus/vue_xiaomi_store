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
import disp from '../components/disp.vue'
import product_area from '../components/product_area.vue'
import advertisement from '../components/advertisement.vue'
export default {
    components: { disp, product_area, advertisement },

}
</script>