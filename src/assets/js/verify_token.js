export default async function(){
    let token = window.localStorage.getItem('token')
    let verify_loc=this.$store.state.location_prefix+'/users/verify'
    console.log('this is the verify location:@@',verify_loc )
    console.log('this is the verify token:@@', token)

    return await fetch(verify_loc, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(res => res.json())
        .then(res => {
            if(res.ok){
                console.log('this is the verify result:@@', res)
                this.$store.dispatch('setUserinfo',{
                    username:res.data.name,
                    userid:res.data.id
                })
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