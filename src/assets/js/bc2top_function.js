export default {
  mounted() {

    var bc2top = document.getElementsByClassName('bc2top');
    bc2top = Array.prototype.slice.apply(bc2top)
    console.log(bc2top)
    // bc2top=bc2top.classList

    window.onscroll = () => {
      // console.log(1)
      if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        // bc2top.style.display = "block";
        // for(
        //   let i=0;i<bc2top.length;++i
        // ){
        //   bc2top[i].style.display="block";

        // }
        // bc2top.forEach(element => {
        //   // console.log(element)
        //   element.style.display = "block"
        // });
        this.$store.commit('bc2top',true)
        // console.log(this.$store.state)
        // console.log(this.$store.bc2top_show)
      } else {
        // bc2top.forEach(element => {
        //   // console.log(element)

        //   element.style.display = "none"
        // });
        // this.$store.bc2top_show = false
        this.$store.commit('bc2top',false)

      }
    }


    bc2top.forEach(element => {
      element.onclick = () => {
        // debugger
        console.log('ddfhdh')
        let num = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
        let ID = setInterval(() => {
          if (num > 0) {
            num -= 40;
            num = Math.max(0, num);
            document.body.scrollTop = num;
            document.documentElement.scrollTop = num;
            console.log(num);
          } else {
            clearInterval(ID);
          }
        }, 1);
      }

    })
  },

}  
