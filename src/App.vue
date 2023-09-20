<template>
  <div id="app">


    <mobile_side_panel />
    <mytopbar></mytopbar>
    <mynavbar></mynavbar>
    <myModal></myModal>
    <router-view></router-view>
    <!-- <mynavbar></mynavbar>
    <disp></disp>
    <advertisement></advertisement>
    <div class="clear_fix">
    </div>
    <product_area></product_area> -->
    <bottom_area></bottom_area>
    <post_area></post_area>
    <side_panel></side_panel>

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
import verify_token from './assets/js/verify_token'
export default {
  name: 'App',
  components: {
    mynavbar, mobile_side_panel, mytopbar, bottom_area, post_area, side_panel,myModal
  },
  mixins: [bc2top],
  mounted() {
    window.onerror = function (message, source, line, column, error) {
      // do something
      console.log('err captured!')
      return false
    };
    verify_token.apply(this)
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
