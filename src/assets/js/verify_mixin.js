import verify_token from './verify_token'

export default {
    beforeRouteEnter(to, from, next) {
        debugger
        console.log('to:@@',to,'from:@@',from)
        next(async (vm) => {
            if (await verify_token.apply(vm)) {
                console.log('verify successful')
                return true
            }
            else {
                console.log('verification failed!@@')
                debugger
                vm.$router.push({
                    name: 'front_page'
                })
                vm.$root.$emit('bv::show::modal', 'myModal'); 
                vm.$store.commit('modal', 1)   
            }

        })
    },
}
