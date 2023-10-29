export default async function () {
    let token = window.localStorage.getItem('token')
    let verify_loc = this.location_prefix + '/users/verify'
    console.log('this is the verify location:@@', verify_loc)
    console.log('this is the verify token:@@', token)
    let _this=this
    return await fetch(verify_loc, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(res => res.json())
        .then(res => {
            if (res.ok) {
                console.log('this is the verify result:@@', res)
                let target = _this.location_prefix + '/users/info' + `?id=${res.data.id}`

                fetch(target, {

                    method: 'GET'

                })
                    .then(res => {
                        console.log(res)
                        return res.json()
                    }).then(res => {
                        _this.setUserinfo(res)
                    })
                // this.setUserinfo({
                //     username: res.data.name,
                //     userid: res.data.id
                // })
                // this.$emit('verified')
                return true
            }
            else {
                return false
            }
        })
        .catch(err => {
            console.log(err)
            return false
        })
}