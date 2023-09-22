import verify_token from './verify_token'

export default {
    beforeRouteEnter(to, from, next) {
        debugger
        next(async (vm) => {
            if (await verify_token.apply(vm)) {
                console.log('verify successful')
                return true
            }
            else {
                vm.$router.push({
                    name: 'front_page'
                })
                vm.$root.$emit('bv::show::modal', 'myModal'); 
                vm.$store.commit('modal', 1)   
            }

        })
    },
}
