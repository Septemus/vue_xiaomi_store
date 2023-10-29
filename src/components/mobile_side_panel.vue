<template>
  <div class="mobile_side_panel">
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href="#"><img src="../assets/images/logo-mi2.png" alt="" class="w-25  d-block"></b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item-dropdown text="手机APP" right>
              <b-dropdown-item href="#">
                <img class="mx-auto d-block " src="../assets/images/78c30d4f259ed43ab20e810a522a6249.png">
                <p class="text-center">扫码领取新人百元礼包</p>
              </b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item href="#">个人中心</b-nav-item>
            <b-nav-item href="#">售后服务</b-nav-item>
            <b-nav-item href="#">人工客服</b-nav-item>
            <b-nav-item href="#">购物车</b-nav-item>
            <template  v-if="!this.$store.state.username">
              <b-nav-item href="#" @click="$root.$emit('bv::show::modal','myModal');$store.commit('modal',1)">登录</b-nav-item>
              <b-nav-item href="#" @click="$root.$emit('bv::show::modal','myModal');$store.commit('modal',2)">注册</b-nav-item>
            </template>
            <template v-else>
              <b-nav-item href="javascript:void(0);">
                欢迎用户{{ this.$store.state.username }}
              </b-nav-item>
              <router-link :to="{
                name:'homepage'
              }">
                <b-nav-item href="#/homepage">
                  个人中心
                </b-nav-item>
              </router-link>
              <b-nav-item href="#">退出账号</b-nav-item>
            </template>
            <b-nav-item href="#" class="bc2top" v-show="$store.state.bc2top_show">回到顶部</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->

        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mobile_side_panel'
}
</script>

<style lang="less">
@media (max-width:1280px) {
  .mobile_side_panel {
    display: block !important;
    position: sticky;
    top: 0;
    z-index: 1080;
  }
}

.mobile_side_panel {
  display: none;
  #nav-collapse {
    a {
      text-decoration: none;
    }
  }
}
</style>
