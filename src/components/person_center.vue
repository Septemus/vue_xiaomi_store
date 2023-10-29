<template>
    <div class="person_center center">
        <avatarModal ref="avatar"></avatarModal>
        <h1>个人信息</h1>
        <form action="">
            <div class="info_item" @click="myUpload">
                <label for="">头像</label>
                <div class="info_content" :class="{ 'avatar': state }">
                    <b-img :src="computed_path" rounded="circle" alt="Circle image"></b-img>
                    <i class="fa fa-angle-right" v-if="state"></i>
                </div>
            </div>
            <div class="info_item">
                <label for="">昵称</label>
                <div class="info_content">
                    <p class="notice" v-if="!state">{{ this.uname ? this.uname : `请输入昵称！` }}</p>
                    <input v-if="state" type="text" v-model="$store.state.username">
                </div>
            </div>
            <div class="info_item">
                <label for="">性别</label>
                <div class="info_content">
                    <p class="notice" v-if="!state">{{
                        this.gender === 'male'
                        ?
                        '男' :
                        this.gender === 'female' ?
                            '女' :
                            this.gender === 'nosay' ?
                                '保密' :
                                '请填写性别！'
                    }}</p>
                    <div class="choice" v-if="state">
                        <input type="radio" id="male" name="gender" value="male" v-model="$store.state.gender">
                        <label for="male">
                            男
                        </label>
                        <input type="radio" id="female" name="gender" value="female" v-model="$store.state.gender">
                        <label for="female">
                            女
                        </label>
                        <input type="radio" id="nosay" name="gender" value="nosay" v-model="$store.state.gender">
                        <label for="nosay">
                            保密
                        </label>
                    </div>
                </div>
            </div>

            <div class="info_item">
                <label for="">账号id</label>
                <div class="info_content">
                    <p class="constant">{{ this.userid }}</p>
                </div>
            </div>
            <div class="info_item">
                <label for="">默认手机号</label>
                <div class="info_content">
                    <p class="notice" v-if="!state">
                        {{
                            this.default_phone
                            ?
                            this.default_phone
                            :
                            `请输入默认手机号！`
                        }}
                    </p>
                    <input v-else type="text" v-model="$store.state.default_phone">
                </div>
            </div>
            <div class="info_item">
                <label for="">默认收货地址</label>
                <div class="info_content">
                    <p class="notice" v-if="!state">
                        {{
                            this.default_addr
                            ?
                            this.default_addr
                            :
                            `请输入默认收货地址！`
                        }}
                    </p>
                    <textarea v-else v-model="$store.state.default_addr">
                    </textarea>
                </div>
            </div>

            <div class="info_item">
                <label for=""></label>
                <!-- <img src="../assets/logo.png" alt=""> -->
                <div class="info_content">
                    <b-button class="edit" @click="edit_save">{{ this.state ? '保存' : "编辑" }}</b-button>
                </div>
            </div>
            <!-- <div>
                <input type="text" v-model="uname" />
                <p>{{ this.uname }}</p>
            </div> -->






        </form>
    </div>
</template>
<script>

import avatarModal from './avatarModal.vue';
import { mapActions, mapState } from 'vuex';
export default {
    name: 'person_center',
    components: { avatarModal },
    data() {
        return {
            state: false,
        }
    },
    computed: {
        ...mapState({
            location_prefix: 'location_prefix',
            userid: 'userid',
            uname: 'username',
            default_addr: 'default_addr',
            default_phone: 'default_phone',
            gender: 'gender',
            avatar_path: 'avatar_path'
        }),
        post_data() {
            return {
                id: this.userid,
                uname: this.uname,
                default_addr: this.default_addr,
                default_phone: this.default_phone,
                gender: this.gender,
                avatar_path: this.avatar_path.length>300?this.avatar_path:null
            }
        },
        computed_path() {
            return this.avatar_path.length>300
            ?
            this.avatar_path
            :
            this.location_prefix+this.avatar_path
        }
    },
    methods: {
        ...mapActions(['setUserinfo', 'stateModalShow']),
        myUpload() {
            if (this.state) {
                this.$root.$emit('bv::show::modal', 'avatarModal')
                this.$refs.avatar.$emit('crop')
            }
        },
        edit_save() {

            if (this.state) {
                debugger
                let target = this.location_prefix + '/users/info'
                let body = JSON.stringify(this.post_data)
                this.stateModalShow({
                    cb: () => {
                        return fetch(target,
                            {
                                method: 'POST',
                                body: body,
                                headers: {
                                    "Content-Type": "application/json",
                                },

                            }
                        ).then(res => {
                            return res.json()
                        })
                            .then(res0 => {
                                return new Promise(
                                    (res, rej) => {
                                    try {
                                        console.log('this is the res of info save:@@', res0)

                                        this.setUserinfo(res0.body)
                                        res(`个人信息修改成功！`)
                                    }
                                    catch (err) {
                                        rej(err)
                                    }
                                })
                            })
                    }
                })
                // fetch(target,
                //     {
                //         method: 'POST',
                //         body: JSON.stringify(this.post_data),
                //         headers: {
                //             "Content-Type": "application/json",
                //         },

                //     }
                // ).then(res => {
                //     return res.json()
                // })
                //     .then(res => {
                //         return new Promise((res, rej) => {
                //             try {
                //                 console.log('this is the res of info save:@@', res)

                //                 this.setUserinfo(res.body)
                //                 res()
                //             }
                //             catch (err) {
                //                 rej(err)
                //             }
                //         })
                //         // this.uname = res.uname
                //         // this.gender = res.gender
                //         // this.default_addr = res.default_addr
                //         // this.default_phone = res.default_phone
                //         // this.avatar_path = res.avatar_path
                //         // this.refresh(res)
                //     })
            }
            this.state = !this.state

        },
        // refresh(info) {

        //     if (!info.avatar_path) {
        //         this.avatar_path = require('../assets/images/0cc4e8e58d7288cd8dff13b98bdc3ea8.webp')
        //     }
        //     else {
        //         this.avatar_path = info.avatar_path
        //     }
        //     this.uname = info.uname
        //     this.gender = info.gender
        //     this.default_addr = info.default_addr
        //     this.default_phone = info.default_phone
        //     // console.log(this.avatar_path)


        // }
    },
    mounted() {
        // if (!this.avatar_path) {
        //     this.$store.commit('avatar', require('../assets/images/0cc4e8e58d7288cd8dff13b98bdc3ea8.webp'))
        // }
        // console.log(this.avatar_path)
        // this.$on('verified',()=>{
        //     debugger
        //     let target = this.location_prefix + '/users/info'+`?id=${this.userid}`

        //     fetch(target,{
        //         method:'GET'
        //     })
        //     .then(res=>{
        //         console.log(res)    
        //         return res.json()
        //     }).then(res=>{
        //         this.refresh(res)
        //     })

        // })
        // this.$nextTick(()=>{

        // })



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