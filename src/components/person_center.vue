<template>
    <div class="person_center center">
        <avatarModal ref="avatar"></avatarModal>

        <h1>个人信息</h1>
        <form action="">
            <div class="info_item" @click="myUpload">
                <label for="">头像</label>
                <!-- <img src="../assets/logo.png" alt=""> -->
                <div class="info_content" :class="{ 'avatar': state }">
                    <b-img :src="avatar_path" rounded="circle" alt="Circle image"></b-img>
                    <i class="fa fa-angle-right" v-if="state"></i>
                </div>
            </div>
            <div class="info_item">
                <label for="">昵称</label>
                <!-- <img src="../assets/logo.png" alt=""> -->
                <div class="info_content">
                    <p class="notice" v-if="!state">请输入昵称</p>
                    <input v-if="state" type="text">
                </div>
            </div>
            <div class="info_item">
                <label for="">性别</label>
                <!-- <img src="../assets/logo.png" alt=""> -->
                <div class="info_content">
                    <p class="notice" v-if="!state">未设置</p>
                    <div class="choice" v-if="state">
                        <input type="radio" id="male" name="gender"> <label for="male"> 男 </label>
                        <input type="radio" id="female" name="gender"> <label for="female"> 女 </label>
                    </div>
                </div>
            </div>

            <div class="info_item">
                <label for="">账号id</label>
                <!-- <img src="../assets/logo.png" alt=""> -->
                <div class="info_content">
                    <p class="constant">joebooming</p>
                </div>
            </div>
            <div class="info_item">
                <label for="">默认手机号</label>
                <!-- <img src="../assets/logo.png" alt=""> -->
                <div class="info_content">
                    <p class="notice" v-if="!state">未设置</p>
                    <input v-if="state" type="text">
                </div>
            </div>
            <div class="info_item">
                <label for="">默认收货地址</label>
                <!-- <img src="../assets/logo.png" alt=""> -->
                <div class="info_content">
                    <p class="notice" v-if="!state">未设置</p>
                    <textarea v-if="state">
                    </textarea>
                </div>
            </div>

            <div class="info_item">
                <label for=""></label>
                <!-- <img src="../assets/logo.png" alt=""> -->
                <div class="info_content">
                    <b-button class="edit" @click="state = !state">{{ this.state ? '保存' : "编辑" }}</b-button>
                </div>
            </div>

        </form>
    </div>
</template>
<script>

import avatarModal from './avatarModal.vue';
import { mapState } from 'vuex';
export default {
    name: 'person_center',
    components: { avatarModal },
    data() {
        return {
            state: false,
           
        }
    },
    methods: {
        myUpload() {
            if (this.state) {
                this.$root.$emit('bv::show::modal', 'avatarModal')
                this.$refs.avatar.$emit('crop')
            }
        }
    },
    computed: {
        ...mapState(['avatar_path']),
    },
    mounted() {
        if (!this.avatar_path) {
            this.$store.commit('avatar', require('../assets/images/0cc4e8e58d7288cd8dff13b98bdc3ea8.webp'))
        }
        console.log(this.avatar_path)
    }

}
</script>
<style lang="less" scoped>
@img_edge: 60px;
@person_black: rgb(51, 51, 51);
@label_size: 17px;
@notice_orange: rgb(255, 105, 0);

.person_center {
    form {
        .info_item {
            display: flex;
            align-items: center;
            margin-top: 30px;
            background-color: green;
            height: @img_edge;

            >label {
                padding-left: 30px;
                width: 100px;
                display: block;
                // line-height: @img_edge;
                color: @person_black;
                font-size: @label_size;
            }

            .info_content {
                flex-grow: 1;
                padding-left: 30px;
                position: relative;

                &.avatar {
                    cursor: pointer;
                }

                >.fa {
                    position: absolute;
                    right: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    font-size: 20px;
                }

                img {
                    width: @img_edge;
                    height: @img_edge;
                }

                p.notice {
                    margin: 0;
                    color: @notice_orange;
                }

                p.constant {
                    margin: 0;
                    color: @person_black;
                }

                button.edit {
                    width: 100%;
                    background-color: @notice_orange;
                }
            }

        }
    }
}
</style>