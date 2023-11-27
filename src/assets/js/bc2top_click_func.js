export default {
    methods: {
        bc2top_click() {
            let num = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            let ID = setInterval(() => {
                if (num > 0) {
                    num -= 40;
                    num = Math.max(0, num);
                    document.body.scrollTop = num;
                    document.documentElement.scrollTop = num;
                } else {
                    clearInterval(ID);
                }
            }, 1);
        }
    }
}