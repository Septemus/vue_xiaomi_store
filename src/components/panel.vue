<template>
    <div class="panel">
        <slot></slot>
        <div class="grid_container">
            <!-- <vue_gitem v-for="item of phone" :gitem_list_item="item">
            </vue_gitem> -->
            <template v-for="gitem_list_item of gitem_list">
                <router-link class="gitem left_banner" href="" v-if="gitem_list_item.type === 0" :to="{
                    name:'product'
                }">
                    <img :src="gitem_list_item.path">
                </router-link>
                <a class="gitem" href="" v-else-if="gitem_list_item.type === 1">
                    <div class="gitem_card">
                        <img :src="gitem_list_item.path">
                        <h6>{{ gitem_list_item.name }}</h6>
                        <p v-html="gitem_list_item.discription"></p>
                        <div class="price">
                            <span>{{ gitem_list_item.price }}</span>&nbsp;<del>{{ gitem_list_item.ori_price }}</del>
                        </div>
                    </div>
                </a>
                <div class="last_icon" v-else-if="gitem_list_item.type === 2">
                    <div class="last_icon_half">
                        <img v-if="gitem_list_item.halfs[0].path" :src="gitem_list_item.halfs[0].path">
                        <p v-html="gitem_list_item.halfs[0].p1"></p>
                        <p v-if="gitem_list_item.halfs[0].p2" v-html="gitem_list_item.halfs[0].p2"></p>
                    </div>
                    <div class="last_icon_half" v-if="gitem_list_item.halfs[1]">
                        <p v-html="gitem_list_item.halfs[1].p1"></p>
                        <p v-if="gitem_list_item.halfs[1].p2" v-html="gitem_list_item.halfs[1].p2"></p>
                        <i v-if="gitem_list_item.halfs[1].i_class" class="fa" :class="gitem_list_item.halfs[1].i_class">
                        </i>
                    </div>
                </div>
                <a class="gitem left_banner half_left_banner" href="" v-else-if="gitem_list_item.type === 3">
                    <img :src="gitem_list_item.path">
                </a>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props: ['gitem_list'],

}
</script>
<style lang="less">
.panel {
    >p {
        display: inline-block;
        font-size: 2rem;
        line-height: 2rem;
    }

    >a {
        display: inline-block;
        float: right;
        font-size: 2rem;
        line-height: 2rem;
        padding: 0 10px;
        text-decoration: none;
        color: black;
        transition: all .5s linear;

        &.a_selected {
            color: orange !important;
            border-bottom: 1px solid orange;
        }

        >.fa-angle-right {
            display: inline-block;
            text-align: center;
            color: white;
            /* padding: 10px; */
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: var(--topbar_color);
            font-size: 1.6rem !important;
            line-height: 2rem;
        }
    }

    >.grid_container {
        margin-top: 10px;
        display: grid;
        justify-content: space-between;
        grid-template-columns: 18% 18% 18% 18% 18%;
        gap: 10px;
        /* background-color: #2196F3; */
        padding: 10px;
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

                >.fa-arrow-circle-o-right {
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
            height: 600px;
            grid-row: 1 / span 2;

            >img {
                width: 100%;
                height: 100%;
            }

            @media (max-width:700px) {
                height: 400px;
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
}</style>