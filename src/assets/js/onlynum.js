export default {
    methods: {
        onlyNumber(event) {
            if (!event || !(event instanceof Object)) return
            const inp = event.target
            setTimeout(function (ele) {
                // debugger
                const val = ele.value
                const reg = /\D/g
                ele.value = val.replace(reg, '')
                if(ele.value===''||ele.value===0) {
                    ele.value=1
                }
            }, 200, inp)
        }

    }
}