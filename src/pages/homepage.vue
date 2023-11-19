<template>
    <div class="h_body">
        <div class="container-xl h_content">
            <div class="myrow">
                <div class="h_nav">
                    <ul>
                        <li>
                            <router-link :to="{
                                name: 'order_center'
                            }" :class="{ 'here': $route.name === 'order_center' }">
                                订单中心
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{
                                name: 'person_center'
                            }" :class="{ 'here': $route.name === 'person_center' }">
                                个人中心
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{
                                name: 'collection_center'
                            }" :class="{ 'here': $route.name === 'collection_center' }">
                                收藏中心
                            </router-link>
                        </li>
                        <li>
                            <router-link :to="{
                                name: 'resign_center'
                            }" :class="{ 'here': $route.name === 'resign_center' }">
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
import { mapActions, mapState } from 'vuex';
// import verify_token from '../assets/js/verify_token'
import verify_mixin from '../assets/js/verify_mixin.js'
export default {
    mixins: [verify_mixin],
    name: 'homepage',
    components: { RouterView },
    computed: {
        ...mapState(['location_prefix', 'userid'])
    },
    methods: {
        ...mapActions(['setUserinfo'])
    },
    mounted() {
    }
}
</script>
<style lang="less">
@bg_gray: rgb(245, 245, 245);
@title_gray: #757575;
@md: 768px;
@nav_height: 80px;

.h_body {
    background-color: @bg_gray;
    padding: 30px 0;

    .h_content {
        background-color: white;
        padding: 0;
        // margin-top: 30px;

        .myrow {
            display: flex;

            @media (max-width:@md) {
                flex-direction: column;
            }

            .h_nav {

                // float: left;
                // background-color: red;
                .here {
                    color: #ff6700 !important;
                }

                flex-shrink: 0;
                border-right: 20px solid @bg_gray;

                @media (max-width:@md) {
                    width: 100%;
                    height: @nav_height;
                    border: none;
                    // display: flex;
                    // border-bottom: solid 20px @bg_gray;
                }


                ul {
                    padding: 0;
                    height: 100%;

                    @media (max-width:@md) {
                        display: flex;
                        width: 100%;
                        justify-content: space-around;
                        // display: flex;
                        // border-bottom: solid 20px @bg_gray;
                    }

                    a {
                        text-decoration: none;
                        color: #757575;
                    }

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

                width: 250px ;
            }

            .h_view {
                // float: left;
                // width:80%;
                // background-color: aqua;
                // margin-left: 20px;
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

}
</style>