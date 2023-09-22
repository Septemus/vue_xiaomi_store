<template>
    <div class="collection_center center">
        <h1>收藏中心</h1>
        <div class="collection_panel">
            <ul>
                <li>

                    <img src="../assets/images/0191ae995e33faedb3362abaa7a486d1.jpg" alt="">
                    <p class="cname">Xiaomi Buds 4 Pro 月影黑</p>
                    <p>1099元</p>
                    <div class="bt_area">
                        <button class="detail_bt">详情</button>
                        <button class="del_bt">删除</button>

                    </div>
                </li>
                <li>
                    <img src="../assets/images/0191ae995e33faedb3362abaa7a486d1.jpg" alt="">
                    <p class="cname">Xiaomi Buds 4 Pro 月影黑wdeudfjhejherjhedj</p>
                    <p>1099元</p>
                    <div class="bt_area">
                        <button class="detail_bt">详情</button>
                        <button class="del_bt">删除</button>
                    </div>
                </li>
                <li>

                    <img src="../assets/images/0191ae995e33faedb3362abaa7a486d1.jpg" alt="">
                    <p class="cname">Xiaomi Buds 4 Pro 月影黑</p>
                    <p>1099元</p>
                    <div class="bt_area">
                        <button class="detail_bt">详情</button>
                        <button class="del_bt">删除</button> 
                    </div>
                </li>
                <li>

                    <img src="../assets/images/0191ae995e33faedb3362abaa7a486d1.jpg" alt="">
                    <p class="cname">Xiaomi Buds 4 Pro 月影黑</p>
                    <p>1099元</p>
                    <div class="bt_area">
                        <button class="detail_bt">详情</button>
                        <button class="del_bt">删除</button>
                    </div>
                </li>
                <!-- <li>

                    <img src="../assets/images/0191ae995e33faedb3362abaa7a486d1.jpg" alt="">
                    <p class="cname">Xiaomi Buds 4 Pro 月影黑</p>
                    <p>1099元</p>
                    <div class="bt_area">
                        <button class="detail_bt">详情</button>
                        <button class="del_bt">删除</button>
                    </div>
                </li>
                <li>
                    <img src="../assets/images/0191ae995e33faedb3362abaa7a486d1.jpg" alt="">
                    <p class="cname">Xiaomi Buds 4 Pro 月影黑</p>
                    <p>1099元</p>
                    <div class="bt_area">
                        <button class="detail_bt">详情</button>
                        <button class="del_bt">删除</button>
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
</template>
<script>

export default {
    name: 'collection_center',

}
</script>
<style lang="less" scoped>
.collection_center {
    width:100%;
    .collection_panel {
        ul {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            padding-left: 0;
            li {
                // flex-grow: 1;
                // float: left;
                display: block;
                width: 33%;
                // background-color: blueviolet;
                // height:348px;
                position: relative;
                margin-top: 30px;
                border-bottom: 1px solid #e0e0e0;
                &:hover {
                    .bt_area {
                        button {
                            opacity: 1;
                        }
                    }
                }
                img {
                    width: 50%;
                    // height: 100px;
                    margin: 0 auto;
                    display: block;
                }

                p {
                    text-align: center;
                }

                .cname {
                    text-overflow: ellipsis;
                    overflow: hidden;
                    white-space: nowrap;
                }
                .bt_area {
                    display: flex;
                    justify-content: space-around;
                    button {
                        width:35%;
                        // margin: 0 auto;
                        display: block;
                        opacity: 0;
                        transition: opacity .3s ease;
                    }
                }
            }
        }
    }
}</style>