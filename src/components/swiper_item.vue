<template>

  <div class="swiper-slide">
    <a href="javascript:;">
      <img :src="swiper_slide_item.path ">
    </a>
  </div>
</template>
<script>

  export default {
    props:['swiper_slide_item']
  }
</script>