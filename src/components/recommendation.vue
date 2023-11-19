<template>
    <div>
        <h2 class="rec_title">
            <span>买购物车中商品的人还买了</span>
        </h2>
        <div class="row mycards">
            <div class="col-md-2 col-4" v-for="(item, index) of rlist">
                <div class="card">
                    <router-link :to="{
                        name: 'product',
                        query: {
                            pid: item.pid
                        }
                    }" class="card-img-top w-75 mx-auto mt-3">
                        <img :src="location_prefix + item.img_path" alt="商品图片" class="mx-auto d-block w-100">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ item.pname }}</h5>
                        <p class="card-text">{{ item.min_price }} 元</p>
                    </div>
                    <button class="gocheck" @click="$router.push({
                        name: 'product',
                        query: {
                            pid: item.pid
                        }
                    })">加入购物车</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'recommendation',
    computed: {
        ...mapState(['location_prefix']),
    },
    data() {
        return {
            rlist: null,
            showing: -1
        }
    },
    mounted() {
        fetch(this.location_prefix + '/recommend')
            .then(res => res.json())
            .then(res => {
                this.rlist = res
                console.log(this.rlist)
            })
    }
}
</script>
<style lang="less" scoped>
.mycards {
    margin-top: 60px;

    .card {
        position: relative;
        height: 300px;
        margin-bottom: 15px;
        border-radius: 0px;
        border: none;
        overflow: hidden;

        @media (max-width: 768px) {
            height: 200px;

            * {
                font-size: 8px !important;
            }

            img {
                width: 50% !important;
            }
        }

        .gocheck {
            position: absolute;
            transition: all .3s ease;
            bottom: -28px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 12px;
            width: 120px;
            height: 28px;
            border: solid 1px #ff6700;
            color: #ff6700;
            background-color: white;

            &:hover {
                color: white;
                border-color: #f25807;
                background-color: #f25807;
            }
        }

        &:hover {
            .gocheck {

                bottom: 20px;
            }


        }

        .card-title {
            font-size: 14px;
            height: 18px;
            text-align: center;
            margin-bottom: 10px;
            color: #333;
        }

        .card-text {
            text-align: center;
            font-size: 14px;
            color: #ff6700;
        }
    }
}

.rec_title {
    margin-top: 80px;
    border-top: solid 1px rgb(224, 224, 224);
    position: relative;

    span {
        position: absolute;
        left: 50%;
        top: 0;
        display: block;
        padding: 0 40px;
        white-space: nowrap;
        transform: translate(-50%, -50%);
        background-color: rgb(245, 245, 245);
        color: rgb(117, 117, 117);
        font-size: 30px;
    }
}</style>