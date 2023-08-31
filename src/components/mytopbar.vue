<template>
    <div class="mytopbar">
        <div class="container-xl mx-auto row">

            <ul class="mytopbar_ls col-sm-7">
                <li><router-link :to="{
                    name:'front_page'
                }">小米商城</router-link></li>
                <li><a href="#">MIUI</a></li>
                <li><a href="#">loT</a></li>
                <li><a href="#">云服务</a></li>
                <li><a href="#">天星数科</a></li>
                <li><a href="#">有品</a></li>
                <li><a href="#">小爱开放平台</a></li>
                <li><a href="#">企业团购</a></li>
                <li><a href="#">资质证照</a></li>
                <li><a href="#">协议规则</a></li>
                <li class="download">
                    <a href="#">下载app</a>
                    <div class="download_qr">
                        <a href="#">
                            <img src="../assets/images/download.png">
                            <p>小米商城APP</p>
                        </a>
    
    
                    </div>
                    <div class="download_qr_traingle">
                    </div>
                </li>
            </ul>
            <div class="mycart col-sm-2">
                <div class="cart_box">
                    <i class="fa fa-shopping-cart"></i>
                    购物车
    
    
                </div>
                <div class="cart_content">
                    这是购物车的内容
                </div>
            </div>
            <ul class="topbar_ls_r col-sm-3">
                <li><a href="#">登录</a></li>
                <li><a href="#">注册</a></li>
                <li><a href="#">消息通知</a></li>
            </ul>
        </div>

    </div>
</template>
<script>
export default {
    name: 'mytopbar'
}
</script>
    
<style lang="less">
@mytopbar_fs:12px;
@media (max-width:700px) {
 
    .mytopbar {
        display: none !important;
    }

}

.mytopbar {
    background-color: var(--dark_bg);
    text-align: center;

    .mycart {
        /* float: right; */
        /* margin-left: 30px; */
        color: #fff;
        position: relative;
        padding: 20px 0;
        background-color: rgb(66, 66, 66);

        &:hover {
            background-color: white;
            color: orange;

            .cart_content {
                /* color: aliceblue; */
                /* display: block; */
                padding: 15px 20px;
                height: fit-content;
                overflow: visible;
            }
        }

        /* display: flex; */
        .cart_box {
            padding: 0 30px;
            cursor: pointer;
            /* align-items: center; */
            margin: auto 0;
            /* height: 100%; */
            font-size: @mytopbar_fs;
        }

        .cart_content {
            background-color: #fff;
            z-index: 10;
            /* height: 0px; */
            box-shadow: var(--shadow1);
            color: black;
            position: absolute;
            /* padding: 10px 20px; */
            /* min-width: 150px; */
            transition: 0.5s ease;
            right: 0;
            height: 0px;
            overflow: hidden;
        }

    }

    // .topbar {
    //     // font-size: 7px;
    //     background-color: rgb(51, 51, 51);
    //     width: 100%;
    //     height: 50px;
    //     line-height: 50px;
    //     color: var(--topbar_color);

    //     a {
    //         text-decoration: none;
    //         color: var(--topbar_color);
    //         font-size: 7px;
    //         &:hover {
    //             color: rgb(242, 242, 242);
    //         }
    //     }
    // }

    .mytopbar_ls {
        list-style-type: none;
        /* text-align: center; */
        margin: auto 0 !important;
        list-style-type: none;

        li {
            float: left;

            +li::before {
                content: "|";
                padding: 6px;
                color: rgb(100, 100, 100);
            }

            // +li::before {
            //     content: "|";
            //     padding: 3px;
            //     color: rgb(100, 100, 100);
            // }
            // a {
            //     font-size: 7px;
            // }
        }

        .download {
            position: relative;

            .download_qr_traingle {
                display: none;
                position: absolute;
                /* background-color: red; */
                /* padding: 10px; */
                /* top: 0px; */
                bottom: 0px;
                left: 50%;
                /* line-height: 0; */
                transform: translateX(-50%);
                border-bottom: 10px solid white;
                border-left: 10px solid transparent;
                border-right: 10px solid transparent;
                border-top: 10px solid transparent;
                /* left: 0px; */
            }

            .download_qr {
                background-color: white;
                z-index: 200;
                width: 100px;
                height: 0px;
                /* overflow: hidden; */
                /* background-color:red; */
                position: absolute;
                left: 0;
                /* bottom: 0px; */
                box-shadow: var(--shadow1);
                overflow: hidden;
                transition: .5s;

                img {
                    width: 80%;
                    display: block;
                    margin: 0px auto;
                    padding-top: 10px;
                }

                p {
                    text-align: center;
                    margin: 20px;
                    line-height: normal;
                    color: black;
                }

            }

            &:hover {
                .download_qr_traingle {
                    /* background-color: red; */
                    display: block;
                }

                .download_qr {
                    height: 156px;
                }
            }
        }






    }

    a {
        text-decoration: none;
        color: var(--topbar_color);
        font-size: @mytopbar_fs;
    }

    .topbar_ls_r {
        list-style-type: none;
        margin: auto 0;
        text-align: center;
        display: block;

        li {
            /* float: left; */
            display: inline;

            +li::before {
                content: "|";
                padding: 6px;
                color: rgb(100, 100, 100);
            }
        }
    }
}
</style>