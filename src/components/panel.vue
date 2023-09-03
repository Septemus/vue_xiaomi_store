<template>
    <div class="panel">
        <!-- <slot></slot> -->
        <div class=" p_header">
            <!-- <div class="col-6 left_title"> -->
                <p>{{ gitem_list.left_title }}</p>

            <!-- </div> -->
            <div class="d-inline-block float-end">
                <div class=" right_tabs">
                    <a href="javascript:void(0);" v-for="r_tab, index of gitem_list.right_tabs"
                        :class="{ 'a_selected': cur_disp === index && r_tab.type === 1 }" @mouseover="cur_disp = index">
                        <!-- &nbsp; -->
                        {{ r_tab.content }}
                        <i class="fa fa-angle-right" v-if="r_tab.type === 0"></i>
                    </a>
                </div>

            </div>

        </div>
        <div class="grid_container" v-for="gitem_list_group, index of gitem_list.arr" v-show="cur_disp === index">
            <!-- <vue_gitem v-for="item of phone" :gitem_list_item="item">
            </vue_gitem> -->
            <router-link class="gitem left_banner" href="" :class="{ 'half_left_banner': gitem_list.banner.length === 2 }"
                :to="{
                    name: 'product'
                }">
                <img :src="$store.state.location_prefix + gitem_list.banner[0].img_path">
            </router-link>
            <router-link class="gitem left_banner half_left_banner" href="" :to="{
                name: 'product'
            }" v-if="gitem_list.banner.length === 2" style="grid-row: 2/span 1;">
                <img :src="$store.state.location_prefix + gitem_list.banner[1].img_path">
            </router-link>
            <template v-for="gitem_list_item, index of gitem_list_group">
                <!-- <router-link class="gitem left_banner" href=""
                    :class="{ 'half_left_banner': gitem_list.banner.length === 2 }" :to="{
                        name: 'product'
                    }" v-if="index===4&& gitem_list.banner.length === 2">
                    <img :src="this.$store.state.location_prefix + gitem_list.banner[1].img_path">
                </router-link> -->
                <a class="gitem" href="" v-if="!gitem_list_item.halfs">
                    <div class="gitem_card">
                        <img :src="$store.state.location_prefix + gitem_list_item.img_path">
                        <h6>{{ gitem_list_item.name }}</h6>
                        <p v-html="gitem_list_item.discription"></p>
                        <div class="price">
                            <span>{{ gitem_list_item.price }}元</span>&nbsp;<del>{{ gitem_list_item.old_price }}</del>
                        </div>
                    </div>
                </a>
                <div class="last_icon" v-else>
                    <div class="last_icon_half" v-for="h of gitem_list_item.halfs">
                        <img :src="$store.state.location_prefix + h.img_path" v-if="h.img_path">

                        <p>{{ h.name }}</p>
                        <p v-if="h.price" class="price">{{ h.price }}元</p>
                        <p v-if="h.more_of_what">浏览更多<br>{{ h.more_of_what }} <i class="fa fa-arrow-circle-o-right"></i></p>

                    </div>
                    <!-- <div class="last_icon_half" v-if="gitem_list_item.halfs[1]">
                        <p v-html="gitem_list_item.halfs[1].p1"></p>
                        <p v-if="gitem_list_item.halfs[1].p2" v-html="gitem_list_item.halfs[1].p2"></p>
                        <i v-if=    "gitem_list_item.halfs[1].i_class" class="fa" :class="gitem_list_item.halfs[1].i_class">
                        </i>
                    </div> -->
                </div>
                <!-- <a class="gitem left_banner half_left_banner" href="" v-else-if="gitem_list_item.type === 3">
                    <img :src="gitem_list_item.path">
                </a> -->
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props: ['gitem_list'],
    data() {
        return {
            cur_disp: 0
        }
    },
    computed: {
        len() {
            return this.gitem_list.arr.length
        }
    }
}
</script>
<style lang="less">
@media (max-width:700px) {
    .panel {
        div.p_header {
            p {
                font-size: 16px;
                line-height: 1em;
            }
            div.right_tabs {
                // justify-content: left;

                a {
                    font-size: 10px;
                    margin-left: 5px;
                    line-height: 16px;
                }
            }
        }
    }


}

.panel {
    margin-top: 30px;

    .p_header {
        // display: flex;
        p {
            display: inline-block;
            font-size: 22px;
            font-weight: 200;
            line-height: 2rem;
        }

        .right_tabs {
            display: flex;
            justify-content: right;
            // float: right;
            a {
                // @media (max-width:700px) {
                //     font-size: 10px;
                //     margin-left: 10px;

                // }

                display: inline-block;
                // float: right;
                font-size: 16px;
                font-weight: 400;
                // line-height: 2rem;
                // padding: 0 10px;
                margin-left: 20px;
                text-decoration: none;
                color: black;
                transition: all .5s linear;

                &.a_selected {
                    color: orange !important;
                    border-bottom: 1px solid orange;
                    // text-decoration: underline;
                }

                >.fa-angle-right {
                    display: inline-block;
                    text-align: center;
                    color: white;
                    /* padding: 10px; */
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: var(--topbar_color);
                    font-size: 16px !important;
                    // line-height: 2rem;
                }
            }
        }

    }

    >.grid_container {
        margin-top: 10px;
        display: grid;
        justify-content: space-between;
        grid-template-columns: 18% 18% 18% 18% 18%;
        gap: 10px;
        /* background-color: #2196F3; */
        // padding: 10px;

        p,
        h6,
        span,
        del,
        i {
            @media (max-width:700px) {

                font-size: 0.4rem !important;
            }
        }

        .last_icon {
            height: 300px;
            text-align: center;
            font-size: 14px;
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media (max-width:700px) {
                height: 200px !important;

            }

            .last_icon_half {
                text-align: left;
                position: relative;
                width: 100%;
                height: 45%;
                background-color: white;
                transition: all .5s linear;

                &:hover {
                    box-shadow: var(--shadow1);
                    transform: translateY(-1%);
                }

                img {
                    width: 45%;
                    display: inline-block;
                    float: right;
                }

                p {
                    margin-top: 5px;
                    padding: 10px;
                }

                .price {
                    color: orange;
                }

                .fa-arrow-circle-o-right {
                    font-size: 60px;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    right: 10%;
                    color: orange;
                }

            }
        }

        .gitem {
            display: block;
            height: 300px;
            text-align: center;
            /* color:white; */
            /* width: 20%; */
            background-color: rgba(255, 255, 255, 0.8);
            text-align: center;
            /* padding: 60px; */
            /* max-width: 150px; */
            font-size: 30px;
            text-decoration: none;
            transition: all .5s linear;

            @media (max-width:700px) {
                height: 200px;
            }

            &:hover {
                box-shadow: var(--shadow1);
                transform: translateY(-1%);

            }

            >.gitem_card {
                width: 100%;
                height: 100%;
                color: black;
                position: relative;

                >img {
                    width: 60%;
                    display: block;
                    margin: 10px auto;
                }

                >p {
                    font-size: 12px;
                }

                >.price {
                    box-sizing: border-box;
                    width: 100%;
                    text-align: center;
                    padding-bottom: 20px;
                    font-size: 15px;
                    position: absolute;
                    bottom: 10px;
                    /* left:50%; */
                    /* transform: translateX(-50%); */
                    color: orange;

                    >del {
                        color: var(--topbar_color);
                    }
                }

            }

        }

        .left_banner {
            height: 610px;
            grid-row: 1 / span 2;

            >img {
                width: 100%;
                height: 100%;
            }

            @media (max-width:700px) {
                height: 410px;
            }
        }

        .half_left_banner {
            grid-row: span 1;
            height: 300px;

            @media (max-width:700px) {
                height: 200px;

            }
        }



    }
}
</style>