<template>
    <div class="collection_center center">
        <h1>收藏中心</h1>
        <div class="collection_panel">
            <ul>
                <li v-for="item of clist" :key="item.collection_id">
                    <router-link :to="{
                        name: 'product',
                        query: {
                            pid: item.pid
                        }
                    }">
                        <img :src="location_prefix + item.img_path" alt="">
                    </router-link>
                    <router-link :to="{
                        name: 'product',
                        query: {
                            pid: item.pid
                        }
                    }">
                        <p class="cname">{{ item.pname }}</p>
                    </router-link>
                    <p class="price">{{ item.min_price }} 元</p>
                    <div class="bt_area">
                        <button class="detail_bt" @click="$router.push({
                            name: 'product',
                            query: {
                                pid: item.pid
                            }
                        })">详情</button>
                        <button class="del_bt" @click="rm(item.pid)">删除</button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'collection_center',
    computed: {
        ...mapState(['location_prefix', 'userid'])
    },
    data() {
        return {
            clist: null
        }
    },
    mounted() {
        // debugger
        this.refresh()
    },
    methods: {
        refresh() {
            let target = this.location_prefix + `/users/collection?uid=${this.userid}`
            fetch(target)
                .then(res => res.json())
                .then(res => {
                    this.clist = res
                })
        },
        rm(pid) {
            let target = this.location_prefix + `/users/collection/rm`
            fetch(target, {
                method: `POST`,
                body: JSON.stringify({
                    uid: this.userid,
                    pid
                }),
                headers: {
                    'Content-Type': `application/json`
                }
            }).then(res => res.json())
                .then(res => {
                    this.refresh()
                })
        }
    }
}
</script>
<style lang="less" scoped>
.collection_center {
    width: 100%;

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

                a {
                    display: block;
                    text-decoration: none;
                    font-size: 14px;
                    color: #333;

                    &:hover {
                        color: #ff6700;
                    }
                }

                .price {
                    font-size: 14px;
                    color: #ff6700;
                }

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
                        width: 35%;
                        // margin: 0 auto;
                        display: block;
                        opacity: 0;
                        transition: opacity .3s ease;
                        height: 28px;
                        width: 108px;
                        font-size: 12px;
                        transition: all .3s ease;

                        &.detail_bt {
                            color: white;
                            background-color: #ff6700;
                            border: none;
                        }

                        &.del_bt {
                            color: #b0b0b0;
                            border: solid 1px #b0b0b0;

                            &:hover {
                                background-color: #757575;
                                color: white
                            }
                        }
                    }
                }
            }
        }
    }
}</style>