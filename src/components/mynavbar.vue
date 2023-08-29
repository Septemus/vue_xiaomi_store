
<template>
    <div class="row mynavbar container-xl mx-auto">
        <div class="col-md-2 p-3  text-white">
            <div class="logo_div">
                <img src="../assets/images/logo-mi2.png" alt="" class="img-fluid mx-auto d-block">
            </div>
        </div>
        <div class="col-md-8 p-3  ">
            <div class="nav_items">
                <a href="#" v-for="item, index of nav_items_list" @mouseover="selected = index">{{ item }}</a>
                <div class="nav_menu">
                    <div class="card h-100" v-for="item of lists[selected]">

                        <img class="card-img-top     d-block mx-auto" :src="item.path">
                        <div class="card-body">
                            <p>{{ item.name }}</p>
                            <p class="card_price">{{ item.price }}</p>

                        </div>
                    </div>
                </div>

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
</template>
<script>

export default {
    name: 'mynavbar',
    data() {
        return {
            nav_items_list: [
                `小米手机`, `redmi手机`, `电视`, `笔记本`, `平板`, `家电`, `路由器`
            ],
            phone_list: [
                {

                    "path": require("../assets/images/nav1.webp"),
                    "name": "XiaoMi 12 Pro",
                    "price": "4699元起"

                },
                {
                    "path": require("../assets/images/nav2.webp"),
                    "name": "XiaoMi 12",
                    "price": "3699元起"

                },
                {
                    "path": require("../assets/images/nav3.webp"),
                    "name": "XiaoMi 12X",
                    "price": "2999元起"

                },

                {
                    "path": require("../assets/images/nav4.webp"),
                    "name": "XiaoMi 11 青春活力版",
                    "price": "1899元起"

                },
                {
                    "path": require("../assets/images/nav5.webp"),
                    "name": "XiaoMi Civi",
                    "price": "2299元起"

                },

                {
                    "path": require("../assets/images/nav6.webp"),
                    "name": "XiaoMi MIX 4",
                    "price": "4199元起"

                }
            ],
            red_list: [
                {
                    "path": require("../assets/images/redmi10A.webp"),
                    "name": " Redmi 10A",
                    "price": "649元起"
                },
                {
                    "path": require("../assets/images/redmik50pro.webp"),
                    "name": " Redmi K50 Pro",
                    "price": "2999元起"
                },
                {
                    "path": require("../assets/images/redmik50.webp"),
                    "name": " Redmi K50",
                    "price": "2399元起"
                },
                {
                    "path": require("../assets/images/redmik40S.webp"),
                    "name": " Redmi K40S",
                    "price": "1799元起"
                },
                {
                    "path": require("../assets/images/redmiK50电竞.webp"),
                    "name": " Redmi K50 电竞版",
                    "price": "3299元起"
                },
                {
                    "path": require("../assets/images/redmi note11Pro.webp"),
                    "name": " Redmi Note 11 Pro",
                    "price": "1799元起"
                }
            ],
            lists: [],
            selected: 0
        }
    },
    mounted() {
        this.lists = [this.phone_list, this.red_list]
    }
}


</script>
<style lang="less">
@nav_gray:rgb(224,224,224);
@menu_min_height:220px;
.mynavbar {
    position: relative;
    margin: 0 auto;

    .nav_items {
        a {

            display: inline-block;
            /* padding: 10px 20px; */
            /* margin: 10px; */
            padding: 0 5px;
            text-decoration: none;
            font-size: 20px;

            color: black;

            /* background-color: red; */
            &:hover {
                color: orange;

                ~.nav_menu {
                    min-height: @menu_min_height;
                    border-bottom: 1px solid @nav_gray;
                    border-top: 1px solid @nav_gray;
                }
            }

        }
            .nav_menu {
                z-index: 400;
                display: flex;
                flex-wrap: wrap;
                /* display: none; */
                justify-content: space-around;
                align-items: center;
                margin: 0;
                position: absolute;
                left: 0px;
                top: 100%;
                width: 100%;
                // width: 100vw;
                height: 0px;
                min-height: 0;
                // min-height: @menu_min_height;
                overflow: hidden;
                background: white;
                transition: .5s;
                transition-delay: .7s;
                // box-shadow: 0px 2px 4px rgba(0,0,0,.5);
                &:hover {
                    min-height: @menu_min_height;
                    border-bottom: 1px solid rgb(100, 100, 100);
                    border-top: 1px solid rgb(100, 100, 100);
                }
        
                .card {
                    border: none;
                    border-radius: 0;
                    width: 16.6%;
        
                    .card-body {
                        padding: 0;
        
                        p {
                            text-align: center;
                            word-wrap: nowrap;
                            font-size: 10px;
                            margin-bottom: 2px;
                        }
                        .card_price {
                            color: orange;
                        }
                    }
        
                    .card-img-top {
                        margin-top: 25px;
                        // max-height: 55%;
                        height: 100px;
                        // width: auto;
                    }
                    +.card {
                        .card-img-top {
                            border-left: 1px solid @nav_gray;
                            border-radius: 0;
                        }
                    }
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

@media (max-width:900px) {
    .nav_menu .card {

        width: 33.3% !important;
        /* height: 50%; */
        height: 50% !important;
        border: none !important;

        p {
            font-size: 8px;
        }
        img.card-img-top {
                margin-top: 5px !important;
                height: 55px !important;
                // width: auto;
            }
    }

    //   .nav_menu div.card p {
    //     font-size: 8px;
    //   }
}
</style>