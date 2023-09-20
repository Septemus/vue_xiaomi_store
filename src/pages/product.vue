<template>
    <div>
        <hr>
        <div class="product_header mb-5">
            <div class="container-xl">
                <div class="row mb-1">
                    <div class="col-md-6">
                        <h2 class="m-0">{{ this.pname??this.$route.query.pname }}</h2>
                    </div>
                    <div class="col-md-6">
                        <ul>
                            <li><a>概述</a></li>
                            <li><span>|</span><a>参数</a></li>
                            <li><span>|</span><a>用户评价</a></li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
        <div class="details container-xl">
            <div class="row">
                <div class="swiper mySwiper col-md-6">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" v-for="(item, index) in product_swiper_slide_list" :key="item.path"
                            :class="'slide_' + (index + 1)">
                            <a href="javascript:;" >
                                <img :src="item.path" class="mx-auto">
                            </a>
                        </div>
                        <!-- <swiper_item>
                        </swiper_item> -->
                    </div>
                    <div class="swiper-pagination" v-show="product_swiper_slide_list.length>1"></div>
                    <div class="swiper-button-next" v-show="product_swiper_slide_list.length>1"></div>
                    <div class="swiper-button-prev" v-show="product_swiper_slide_list.length>1"></div>
                </div>
                <div class="col-md-6 info">
                    <h2>{{ this.pname??this.$route.query.pname }}</h2>
                    <p class="info_p_gray">
                    <span class="orange">
                        {{ this.desc_pre }}
                    </span>  {{ this.description }}</p>
                    <p class="orange">小米自营</p>
                    <div class="price_info orange">
                        <span>{{ this.price }}元</span>
                        <del v-if="min_old_price">{{ this.old_price }}元</del>
                    </div>
                    <hr>
                    <div class="options">
                        <option_box v-for="opt of options" :opt="opt" @choose="getChoice"></option_box>
                    </div>
                    <div class="summary">
                        <span class="d-inline-block w-75">{{ this.pname??this.$route.query.pname }} {{this.opt_string}}</span>
                        <del class="float-end" v-if="min_old_price">{{ this.old_price }}元</del>
                        <span class="float-end">{{ this.price }}元</span> 
                        <p class="orange">总计：{{ this.price }}元</p>
                    </div>
                    <div class="sale_btn row">
                        <a href="" class="col-md-6 d-block">
                            <router-link :to="{
                                name:'cart_success',
                                query:{
                                    pname:pname??$route.query.pname,
                                    mychoices:JSON.stringify(mychoices) ,
                                    price:price
                                }
                            }">
                                <button class="cart_btn" @click="addCart"><span>加入购物车</span></button>

                            </router-link>
                        </a>
                        <a href="" class="col-md-6 d-block">
                            <button class="like_btn"> <span><i class="fa fa-heart-o" aria-hidden="true"></i>喜欢</span>
                            </button>
                        </a>
                    </div>
                    <div class="guarantees">
                        <ul>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                小米自营</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                小米发货</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                7天无理由退货（到店自取拆封后不支持）</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                运费说明</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                企业信息</li>
                            <li><i class="fa fa-check-circle-o" aria-hidden="true"></i>
                                7天价格保护</li>

                        </ul>
                    </div>
                    
                </div>

            </div>
        </div>
    </div>
</template>
<script>
import Swiper from 'swiper'; // 注意引入的是Swiper
// import 'swiper/css/swiper.min.css' // 注意这里的引入
import option_box from '../components/option_box.vue'
import "swiper/swiper-bundle.min.css"
import "swiper/bundle"
import { RouterLink } from 'vue-router';
export default {
    data() {
        return {
            pid: undefined,
            pname: undefined,
            product_swiper_slide_list: [
            ],
            desc_pre:'',
            description: '',
            min_price: 0,
            min_old_price: 0,
            cur_plus: 0,
            cur_plus_old: 0,
            mySwiper: undefined,
            options:[],
            mychoices:{},
            opt_string:''
        }
    },
    components:{
    option_box,
    RouterLink
}
    ,
    computed: {
        price() {
            return this.min_price + this.cur_plus
        },
        old_price() {
            return this.min_old_price + this.cur_plus_old
        }
    },
    watch: {
        product_swiper_slide_list(val) {
            // debugger
            if (this.product_swiper_slide_list.length) {
                this.$nextTick(function () {
                    // debugger
                    this.mySwiper = new Swiper('.swiper', {

                        loop: this.product_swiper_slide_list.length>1, // 循环模式选项
                        effect: 'fade',
                        fadeEffect:{
                            crossFade:true
                        },
                        // 如果需要分页器
                        pagination: {
                            el: '.swiper-pagination',
                        },

                        // 如果需要前进后退按钮
                        navigation: {
                            nextEl: '.swiper-button-next',
                            prevEl: '.swiper-button-prev',
                        },
                        autoplay: {
                            delay: 2000
                        }
                        // 如果需要滚动条
                    })
                    console.log(this.mySwiper)
                })
            }
            // this.$nextTick(function () {


            // })
        },
    },
    methods: {
        addCart() {

        },
        reload() {
            this.mychoices=new Map()
            this.product_swiper_slide_list.splice(0, this.product_swiper_slide_list.length)
            this.options=[]
            // debugger
            console.log(this.product_swiper_slide_list)
            console.log('###')

            // console.log(this.pid)
            // console.log(this.pname)
            console.log('fetching', this.$store.state.location_prefix + `/resources/detail?pid=${this.pid}`)
            fetch(this.$store.state.location_prefix + `/resources/detail?pid=${this.pid}`).then(res => {
                // console.log(res)
                return res.json()
            }).then(res => {
                console.log('this is detail:@@@')
                res.forEach((element, index) => {
                    console.log(element.data)
                    // if (index === 0) {
                    //     console.log('hello')
                    // }
                });
                // console.log(res[1].data)
                this.pname=res[0].data[0].pname
                this.desc_pre=res[0].data[0].desc_pre
                this.description = res[0].data[0].description
                this.min_price = res[0].data[0].min_price
                this.min_old_price = res[0].data[0].min_old_price ?? undefined
                for (let item of res[1].data) {
                    let tmp = { path: this.$store.state.location_prefix + item.img_path }
                    // console.log(tmp)
                    this.product_swiper_slide_list.push(tmp)
                }
                for(let item of res[2].data){
                    let tmp={carr:[]}
                    tmp.oname=item.option_name
                    console.log(item.oid)
                    for(let choice of res[3].data){
                        if(item.oid===choice.oid){
                            console.log(choice.choice_name)
                            tmp.carr.push(choice)
                        }
                    }
                    this.options.push(tmp)
                }
                console.log('this is options:',this.options)

                console.log('after fetching:', this.product_swiper_slide_list)
                // console.log(this.mySwiper)
            })

        },
        getChoice(choice){
            console.log('this is product page,this is the choice:',choice)
            this.mychoices[choice.oid]=choice
            // console.log(this.mychoices)
            let sum=0
            let sumold=0
            let tmp_string=''
            for(let oid in this.mychoices) {
                console.log(this.mychoices[oid])
                sum+=this.mychoices[oid].price
                if(this.min_old_price) sumold+=this.mychoices[oid].old_price
                tmp_string+=this.mychoices[oid].choice_name+' '
            }
            console.log(sum,sumold)
            this.cur_plus=sum
            this.cur_plus_old=sumold
            this.opt_string=tmp_string
        }
        
    },
    mounted() {
        this.pid = this.$route.query.pid
        this.pname = this.$route.query.pname
        this.reload()
    },
    beforeRouteUpdate(to, from, next) {
        console.log('&&&')
        this.pid = to.query.pid
        this.pname = to.query.pname
        this.reload()
        next()
    }
    // activated(){
    //     console.log('act')
    // }
}
</script>
<style lang="less" scoped>
@header_a_gray: rgb(97, 97, 97);
@swiper_gray: rgb(124, 124, 124);
@info_p_gray: rgb(176, 176, 176);
@choice_gray: rgb(224, 224, 224);
@summary_gray: rgb(249, 249, 250);
@my_orange: rgb(255, 103, 0);
.outertest {
    width:200px;
    .test {
        width:100%;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

}
.product_header {
    box-shadow: 0px 5px 5px rgba(0, 0, 0, .07);

    .row {
        display: flex;
        align-content: center;

        h2 {
            font-size: 18px;
            font-weight: 400;
            // line-height: 60px;
        }

        ul {
            list-style-type: none;
            display: flex;
            justify-content: right;

            li {
                // float:right;
                display: inline-block;

                // padding: 0 3px;
                span {
                    padding: 0 6px;
                }

                a {
                    text-decoration: none;
                    cursor: pointer;

                    color: @header_a_gray;
                    // font-size:16px;
                }
            }
        }
    }
}

.details {
    .row {
        .mySwiper {
            --swiper-navigation-color: @swiper_gray;
            --swiper-pagination-color: @swiper_gray;
            a {
                display: block;
            }
            img {
                height: auto;
                // max-height: 560px;
                width: 100%;
                display: block;
                // width:auto;
            }
                // max-height: 560px;

        }

        .info {
            // display: flex;
            // flex-direction: column;
            // justify-content: space-between;

            h2 {
                font-size: 24px;
                font-weight: 400;
            }

            p {
                font-size: 14px;
            }

            .info_p_gray {
                color: @info_p_gray;
            }

            .orange {
                color: @my_orange !important;
            }

            .orange_border {
                border: 1px @my_orange solid !important;
            }

            .selected {
                .orange();
                .orange_border();
            }

            .price_info {
                padding: 12px 0 10px;
                font-size: 18px;

                del {
                    font-size: 14px;
                    margin-left: 5px;
                    color: @info_p_gray;
                }
            }

            

            .summary {
                padding: 30px;
                background-color: @summary_gray;
                margin-bottom: 30px;
                font-size: 14px;
                color: @header_a_gray;
                p {
                    padding-top: 20px;
                    font-size: 24px;
                }
                del {
                    margin-left: 5px;
                }
            }

            .sale_btn {

                margin-bottom: 20px;
                button {
                    width: 100%;
                    position: relative;
                    height: 52px;
                    line-height: 52px;
                    color: white;
                    border: none;
                    transition: background-color .2s linear;
                    margin-bottom: 5px;

                }


                .cart_btn {
                    // width: 298px;
                    background-color: @my_orange;
                    margin-right: 10px;
                }

                .cart_btn:hover {
                    background-color: #f25807;
                }

                .like_btn {
                    // width: 140px;
                    background-color: #b0b0b0;

                    i {
                        margin-right: 5px;
                    }
                }

                .like_btn:hover {
                    background-color: #757575;
                }
            }

            .guarantees {
                ul {
                    list-style-type: none;
                    margin: 0;
                    padding: 0;

                    li {
                        display: inline-block;
                        color: @info_p_gray;
                        margin-right: 15px;
                        margin-bottom: 10px;
                    }
                }
            }
        }
    }
}</style>