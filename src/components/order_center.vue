<template>
    <div class="order_center center">
        <h1>我的订单</h1>
        <div class="order_list_area">
            <ul>
                <li>
                    <img src="../assets/images/0191ae995e33faedb3362abaa7a486d1.jpg" alt="商品图片">
                    <div class="info">
                        <a href="javascript:void(0);">商品名称</a>
                        <p>商品价格*商品数量</p>
                    </div>
                    <a href="" class="detail">
                        <button>订单详情</button>
                    </a>
                </li>
                <li>
                    <img src="../assets/images/0191ae995e33faedb3362abaa7a486d1.jpg" alt="商品图片">
                    <div class="info">
                        <a href="javascript:void(0);">商品名称</a>
                        <p>商品价格*商品数量</p>
                    </div>
                    <a href="" class="detail">
                        <button>订单详情</button>
                    </a>
                </li>
            </ul>
        </div>

    </div>
</template>
<script>

export default {
    name: 'order_center',

}
</script>
<style lang="less" scoped>
@order_gray: #757575;
@img_edge: 80px;

@media (max-width:768px) {
    .order_center {
        .order_list_area {
            ul {
                li {
                    font-size: 8px;
                    img {
                        width: @img_edge*0.5 !important;
                        height: @img_edge*0.5 !important;
                    }
                }
            }
        }
    }
}

.order_center {
    // >h1 {
    //     color: @order_gray;
    //     font-size: 30px;
    //     font-weight: 400;
    //     margin: 0;
    // }

    .order_list_area {
        ul {
            padding: 0px;
            margin: 0;

            li {
                list-style: none;
                padding: 15px;
                margin-top: 20px;
                border-color: red;
                border-style: solid;
                border-width: 1px;
                position: relative;

                img {
                    width: @img_edge;
                    height: @img_edge;
                }

                .info {
                    display: inline-block;

                    a {
                        display: block;
                    }
                }

                .detail {
                    position: absolute;
                    right: 20px;
                    top: 50%;
                    transform: translateY(-50%);
                }
            }
        }
    }
}</style>