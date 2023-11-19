<template>

  <div class="swiper-slide">
    <router-link href="javascript:;" :to="{
      name:'product',
      query:{
        'pid':swiper_slide_item.id,
        'pname':swiper_slide_item.name
      }
    }">
      <img :src="$store.state.location_prefix +swiper_slide_item.path ">
    </router-link>
  </div>
</template>
<script>

  export default {
    props:['swiper_slide_item']
  }
</script>