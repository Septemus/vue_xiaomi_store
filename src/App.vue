<template>
  <div id="app">


    <mobile_side_panel v-if="$route.name!='cart_calc'" />
    <mytopbar v-if="$route.name!='cart_calc'"></mytopbar>
    <mynavbar v-if="$route.name!='cart_calc'"></mynavbar>
    <myModal v-if="$route.name!='cart_calc'"></myModal>
    <!-- <cart_calc_top></cart_calc_top> -->
    <stateModal></stateModal>
    <router-view></router-view>
    <bottom_area></bottom_area>
    <post_area></post_area>
    <side_panel v-if="$route.name!='cart_calc'"></side_panel>

  </div>
</template>

<script>
// import disp from './components/disp.vue'
import mynavbar from './components/mynavbar.vue'
// import product_area from './components/product_area.vue'
import mobile_side_panel from './components/mobile_side_panel.vue'
import bc2top from './assets/js/bc2top_function.js'
import mytopbar from './components/mytopbar.vue'
// import advertisement from './components/advertisement.vue'
import bottom_area from './components/bottom_area.vue'
import post_area from './components/post_area.vue'
import side_panel from './components/side_panel.vue'
import myModal from './components/myModal.vue'
import stateModal from './components/stateModal.vue'
import cart_calc_top from './components/cart_calc_top.vue'
export default {
  name: 'App',
  components: {
    mynavbar, 
    mobile_side_panel,
    mytopbar, 
    bottom_area, 
    post_area, 
    side_panel,
    myModal,
    stateModal,
    cart_calc_top
  },
  mixins: [bc2top],
  mounted() {
    window.onerror = function (message, source, line, column, error) {
      // do something
      console.log('err captured!')
      return false
    };
  }
}


</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
}

:root {
  --topbar_color: rgb(176, 176, 176);
  --shadow1: 0px 8px 16px 0px rgba(0, 0, 0, 0.5);
  --gray_bg: rgb(245, 245, 245);
  --dark_bg: rgb(51, 51, 51);
}

#app {
  height: 100%;
  width: 100%;
  // overflow-x: hidden;
}




.clear_fix::after {
  content: "";
  clear: both;
  display: table;
  margin: 20px 0;
}






// #app .mobile_side_panel {
//   display: none;

// }
</style>
