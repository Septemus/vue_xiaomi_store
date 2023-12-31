import cart_fetching from './cart_fetching'

export default {
    methods: {
        async Myremove_handler(cart_id) {
            console.log('this is the cart_id:@@', cart_id)
            let target = this.location_prefix + `/users/cart/remove`
            await fetch(target, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart_id
                })
            })
                .then(res => res.json())
                .then(res => {
                    console.log('this is the res of cart item rm:@@', res)
                    if (res.ok) {
                        return cart_fetching.apply(this)
                    }
                    else {
                        return Promise.reject()
                    }
                })
                .then((cart_list) => {
                    this.$store.commit('cart_list', cart_list)
                    console.log('commiting to vuex successful,this is the cartlist:@@', cart_list)
                })
        }
    }

}