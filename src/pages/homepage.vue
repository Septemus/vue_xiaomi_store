<template>
    <div class="h_body">
        <h1>this is homepage!</h1>
        <div class="container-xl h_content">
            <div class="myrow">
                <div class="h_nav">
                    <ul>
                        <router-link :to="{
                            name: 'order_center'
                        }">
                            <li>
                                订单中心
                            </li>
                        </router-link>
                        <li>
                            <router-link :to="{
                                name: 'person_center'
                            }">
                                个人中心
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{
                                name: 'collection_center'
                            }">
                                收藏中心
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{
                                name: 'resign_center'
                            }">
                                注销中心
                            </router-link>
                        </li>
                    </ul>
                </div>
                <div class="h_view">
                    <router-view>
                    </router-view>
                </div>

            </div>



        </div>
    </div>
</template>
<script>
import { RouterView } from 'vue-router';
// import verify_token from '../assets/js/verify_token'
import verify_mixin from '../assets/js/verify_mixin.js'
export default {
    mixins:[verify_mixin],
    name: 'homepage',
    components: { RouterView },
    // beforeRouteEnter(to, from, next) {
    //     debugger
    //     next(async (vm) => {
    //         if (await verify_token.apply(vm)) {
    //             return true
    //         }
    //         else {
    //             vm.$router.push({
    //                 name: 'front_page'
    //             })
    //         }

    //     })
    // },
}
</script>
<style lang="less">
@bg_gray: rgb(245, 245, 245);
@title_gray: #757575;
@md: 768px;
@nav_height: 80px;

.h_body {
    background-color: @bg_gray;

    .h_content {
        background-color: white;
        padding: 0;

        .myrow {
            display: flex;

            @media (max-width:@md) {
                flex-direction: column;
            }

            .h_nav {
                // float: left;
                background-color: red;
                flex-shrink: 0;

                @media (max-width:@md) {
                    width: 100%;
                    height: @nav_height;
                }


                ul {
                    padding: 0;
                    height: 100%;

                    li {
                        list-style: none;
                        padding: 20px 40px;

                        @media (max-width:@md) {
                            display: inline-block;
                            width: 25%;
                            line-height: 80px;
                            padding: 0;
                            text-align: center;
                            font-size: 14px;
                        }
                    }

                }

                width: 250px !important;
            }

            .h_view {
                // float: left;
                // width:80%;
                background-color: aqua;
                padding: 36px 48px;
                flex-grow: 1;
                overflow: hidden;

                .center {
                    >h1 {
                        color: @title_gray;
                        font-size: 30px;
                        font-weight: 400;
                        margin: 0;
                    }
                }
            }

        }

    }

}</style>