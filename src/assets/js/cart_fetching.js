export default function () {
    console.log('here we go@@')
    let target = this.location_prefix + '/users/cart/query';
    console.log('posting id to @@:', target)
    return fetch(target,
        {
            method: 'POST',
            body: JSON.stringify({
                id: this.userid
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }
    ).then(res => res.json())
        .then(res => {
            // this.cart_list = res
            // this.$store.commit('cart_list', res)
            return new Promise((resolve,rej)=>{
                console.log('cart list fetched!commiting to vuex:@@', res)
                resolve(res)
            })
        })

} 