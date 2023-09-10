
<template>
    <div class="mynavbar_outer">

        <div class="row mynavbar container-xl mx-auto">
            <div class="col-md-2 py-3 px-0  text-white">
                <div class="logo_div">

                    <img src="../assets/images/logo-mi2.png" alt="" class="img-fluid  d-block">
                </div>
            </div>
            <div class="col-md-8 p-3  ">
                <div class="nav_items">
                    <a href="#" v-show="fetched" v-for="item, index of nav_children"
                        @mouseover="nav_item_over(item,index)" @mouseleave="nav_item_leave(item,index)" :key="index">{{
                            item.title }}</a>
                </div>
            </div>
            <div class="col-md-2 p-3  text-white">

                <div class="search_box">
                    <input type="text" placeholder="手机" list="search_options"><button><i class="fa fa-search"></i></button>
                    <datalist id="search_options">
                        <option>手机</option>

                        <option>笔记本</option>

                        <option>洗衣机</option>

                        <option>台灯</option>

                        <option>路由器</option>

                        <option>插座</option>

                        <option>灯</option>

                        <option>扫地机器人</option>
                    </datalist>

                </div>
            </div>
        </div>
        <div class="nav_menu" @mouseover="staying = true" @mouseleave="staying = false" :class="{ 'showing': staying }"
            v-show="fetched">
            <div class="container-xl mx-auto position-relative h-100 d-flex justify-content-between flex-wrap">
                <router-link class="card h-100  " v-for="item, index of nav_children[selected].children" :key="item.id" :to="{
                    name:'product',
                    query:{
                        pid:item.id,
                        pname:item.name
                    }
                }">
                    <div>
                        <div class="card-img-top">

                            <img class="d-block mx-auto" :src="$store.state.location_prefix + item.img_path">
                        </div>
                        <p>{{ item.name }}</p>

                    </div>
                    <!-- <div class="card-body"> -->
                    <p class="card_price">{{ item.price }}</p>

                    <!-- </div> -->
                </router-link>

            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'mynavbar',
    data() {
        return {
            nav_children: [],
            selected: 0,
            staying: false,
            fetched: false,
        }
    },
    methods:{
        nav_item_over(item,index){
            if(item.title!=='服务中心'&&item.title!=='社区'){
                this.selected = index;this. staying = true
            }
        },
        nav_item_leave(item,index){
            if(item.title!=='服务中心'&&item.title!=='社区'){
                this.staying = false
            }
        }
    },
    mounted() {
        this.lists = [this.phone_list, this.red_list]
        fetch(this.$store.state.location_prefix + `/resources/nav`).then(res => res.json()).then(res => {
            console.log('this is nav:@@@' + res)
            this.fetched = true
            this.nav_children = res
        })
    }
}


</script>
<style lang="less">
@nav_gray: rgb(224, 224, 224);
@menu_min_height: 250px;
@nav_fs: 17px;

.showing {
    min-height: @menu_min_height !important;
    border-bottom: 1px solid @nav_gray;
    border-top: 1px solid @nav_gray;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, .5);
}

.mynavbar_outer {
    position: relative;

    .nav_menu {
        z-index: 400;
        // display: flex;
        // flex-wrap: wrap;
        // /* display: none; */
        // justify-content: space-between;
        // align-items: center;
        margin: 0;
        position: absolute;
        // left: 0px;
        top: 100%;
        width: 100%;
        // width: 100vw;
        height: 0px;
        min-height: 0;
        // min-height: @menu_min_height;
        overflow: hidden;
        background: white;
        transition: all .3s;
        transition-delay: .2s;


        // &:hover {
        //     min-height: @menu_min_height;
        // }

        .card {
            padding-bottom: 40px;
            border: none;
            border-radius: 0;
            width: 16.6%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-decoration: none;

            img {
                height: 100%;
                width: auto;
            }

            p {
                text-align: center;
                word-wrap: nowrap;
                font-size: 12px;
                margin-bottom: 2px;
            }

            .card_price {
                color: orange;
            }

            .card-img-top {
                margin-top: 25px;
                width: 100%;
                height: 0.5*@menu_min_height;
            }

            +.card {
                .card-img-top {
                    border-left: 1px solid @nav_gray;
                    border-radius: 0;
                }
            }
        }
    }

    .mynavbar {
        position: relative;
        margin: 0 auto;

        .nav_items {
            height: 100%;
            display: flex;
            align-items: center;

            a {

                display: inline-block;
                /* padding: 10px 20px; */
                /* margin: 10px; */
                padding: 0 10px;
                text-decoration: none;
                font-size: @nav_fs;

                color: black;

                /* background-color: red; */
                &:hover {
                    color: orange;
                }

            }


        }


        .logo_div {
            img {
                max-height: 56px;
            }

            /* width: 100%; */

        }

        .search_box {
            input[type="text"] {
                width: 80%;
                float: left;
                display: inline-block;
            }

            button {
                width: 20%;
                display: inline-block;
                float: left;
            }
        }


    }
}


@media (max-width:900px) {
    .nav_menu .card {

        width: 33.3% !important;
        /* height: 50%; */
        height: 50% !important;
        border: none !important;
        padding-bottom: 5px !important;

        p {
            font-size: 8px !important;
        }

        .card-img-top {
            margin-top: 5px !important;
            height: 0.25*@menu_min_height !important;
            // width: auto;
        }
    }

    .mynavbar_outer {
        .mynavbar {
            .logo_div {
                img {
                    margin: 0 auto;
                }
            }

            .nav_items {
                a {
                    padding: 0 3px;
                    font-size: 0.8*@nav_fs;
                }
            }
        }
    }
}</style>