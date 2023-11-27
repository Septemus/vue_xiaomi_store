export default {
  mounted() {


    window.onscroll = () => {
      // console.log(1)
      if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        this.$store.commit('bc2top', true)
      } else {
        this.$store.commit('bc2top', false)
      }
    }


  },
}  
