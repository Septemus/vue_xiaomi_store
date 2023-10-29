<template>
    <b-modal id="myModal" centered>

        <!-- Modal Header -->
        <template #modal-header>
            <div class="surface" :class="{ 'loading': disp_loading }">
            </div>
            <Transition name="disp_status">
                <div v-show="disp_success" class="disp_status text-success">
                    <i class="fa fa-check-circle d-block" aria-hidden="true"></i>
                    {{ status_description }}
                </div>
            </Transition>
            <Transition name="disp_status">
                <div v-show="disp_failure" class="disp_status text-danger">
                    <i class="fa fa-times-circle d-block" aria-hidden="true"></i>
                    {{ status_description }}
                </div>
            </Transition>
            <Transition name="loading">
                <div class="my_spin" v-show="loading">
                    <div class="spinner-border"></div>
                </div>
            </Transition>
            <div class="mheader w-100">
                <img src="../assets/images/logo-mi2.png" alt="">
                <h4 class="text-center">
                    {{
                        $store.state.modal === 1 ? '登录' : '注册'
                    }}
                </h4>
                <b-button variant="danger" @click="modal_close">
                    X
                </b-button>
            </div>
        </template>
        <!-- <modal-header></modal-header> -->
        <!-- <template #modal-title>
          <p class="text-center">
              {{ this.$store.state.modal===1?'登录':'注册' }}
          </p>
      </template> -->

        <!-- Modal body -->
        <div class="row mt-1">
            <p class="col-3 text-end">
                账号：
            </p>
            <div class="col-9">
                <div class="input-group w-100">
                    <span class="input-group-text">
                        <i class="fa fa-user"></i>
                    </span>
                    <b-form-input v-model="id" :class="{
                        'myFocus': id.length > 0
                    }">
                    </b-form-input>
                </div>
                <b-alert class="p-1" variant="danger" :show="id.length && !id_legal">
                    <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                    账号id只能由数字、26个英文字母和下划线组成,长度不少于3位不多于20位！
                </b-alert>
            </div>
        </div>


        <div class="row mt-1">
            <p class="col-3 text-end">
                密码：
            </p>
            <div class="col-9">
                <div class="input-group w-100">
                    <span class="input-group-text">
                        <i class="fa fa-key"></i>
                    </span>
                    <b-form-input v-model="password" :class="{
                        'myFocus': password.length > 0
                    }" :type="psw_vis ? 'text' : 'password'">
                    </b-form-input>
                    <button class="vis input-group-text " :class="{ 'green_vis': psw_vis }" v-show="password.length > 0"
                        @click="psw_vis = !psw_vis">
                        <i v-if="!psw_vis" class="fa fa-eye-slash" aria-hidden="true"></i>
                        <i v-else class="fa fa-eye" aria-hidden="true"></i>
                    </button>
                    <b-alert class="p-1" variant="danger" :show="password.length && !password_legal">
                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                        密码只能由数字、26个英文字母和下划线组成,长度不少于6位不多于20位！
                    </b-alert>
                </div>
            </div>

        </div>
        <div v-if="$store.state.modal === 2" class="row mt-1">
            <p class="col-3 text-end">
                确认密码：
            </p>
            <div class="col-9">
                <div class="input-group w-100">
                    <span class="input-group-text">
                        <i class="fa fa-key"></i>
                    </span>
                    <b-form-input v-model="repassword" class="" :type="psw_vis ? 'text' : 'password'" :class="{
                        'myFocus': repassword.length > 0
                    }">
                    </b-form-input>
                    <b-alert class="p-1" variant="danger" :show="password.length &&
                        repassword.length &&
                        (
                            !password_legal || password !== repassword
                        )">
                        <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
                        {{
                            !password_legal ?
                            '密码不合法！' : '两次输入密码不一致！'
                        }}
                    </b-alert>
                </div>
            </div>
        </div>

        <!-- Modal footer -->
        <template #modal-footer>
            <div class="mx-auto">
                <b-button class="ms-2" variant="success" @click="register">注册</b-button>
                <b-button class="ms-2" variant="primary" @click="login">登录</b-button>
            </div>
        </template>

    </b-modal>
</template>
  
<script>
import {mapState} from 'vuex'
export default {
    name: 'myModal',
    data() {
        return {
            id: '',
            password: '',
            repassword: '',
            loading: false,
            disp_loading: false,
            disp_success: false,
            disp_failure: false,
            psw_vis: false,
            status_description: ''
        }
    },
    computed: {
        post_data() {
            return {
                id: this.id,
                password: this.password
            }
        },
        id_legal() {
            return /^\w{3,20}$/.test(this.id)
        },
        password_legal() {
            return /^\w{6,20}$/.test(this.password)
        },
        ...mapState(['location_prefix','userid'])
    },
    methods: {
        status_success(description, uname, token) {
            window.localStorage.setItem('token', token)
            this.$store.dispatch('setUserinfo', {
                uid: this.id,
                uname
            })
            this.loading = false
            this.status_description = description
            this.disp_success = true
            setTimeout(() => {
                this.disp_success = false
                this.disp_loading = false
                this.modal_close()
            }, 1500)
        },
        status_failure(description) {
            this.loading = false
            this.status_description = description
            this.disp_failure = true
            setTimeout(() => {
                this.disp_failure = false
                this.disp_loading = false
                // this.modal_close()
            }, 1500)
        },
        register() {
            if (this.$store.state.modal === 1) {
                this.$store.commit('modal', 2)
                this.id = this.password = this.repassword = ''
            }
            else {
                this.disp_loading = true
                this.loading = true

                if (!this.id_legal) {
                    this.status_failure('账户id不合法！请重新输入！')
                }
                else if (!this.password_legal) {
                    this.status_failure('账户密码不合法！请重新输入！')
                }
                else if (this.password !== this.repassword) {
                    this.status_failure('两次密码输入不一致！请重新输入！')
                }
                else {
                    console.log('注册中...', this.post_data)
                    let target = this.$store.state.location_prefix + '/users/reg'
                    console.log('这是api地址:@@', target)
                    fetch(target,
                        {
                            method: 'POST',
                            body: JSON.stringify(this.post_data),
                            headers: {
                                "Content-Type": "application/json",
                            },

                        }
                    )
                        .then(
                            res => res.json()
                        )
                        .then(
                            res => {
                                if (res.status === 3) {
                                    this.status_failure('用户已经存在！')
                                }
                                else {
                                    this.status_success(`注册成功！欢迎新用户${res.name}`, res.name, res.token)

                                }



                            }
                        ).catch(err => {
                            console.log(err)
                        })
                }
            }
        },
        login() {
            if (this.$store.state.modal === 2) {
                this.$store.commit('modal', 1)
                this.id = this.password = this.repassword = ''
            }
            else {
                console.log('登录中...')
                this.disp_loading = true
                this.loading = true

                if (!this.id_legal) {
                    this.status_failure('账户id不合法！请重新输入！')
                }
                else if (!this.password_legal) {
                    this.status_failure('账户密码不合法！请重新输入！')
                }
                else {
                    let target = this.$store.state.location_prefix + '/users/login'
                    console.log('这是api地址:@@', target)
                    fetch(target,
                        {
                            method: 'POST',
                            body: JSON.stringify(this.post_data),
                            headers: {
                                "Content-Type": "application/json",
                            },
                        }
                    )
                        .then(res => {
                            console.log(res)
                            return res.json()
                        }).then(
                            res => {
                                debugger
                                console.log('this is res of login:@@', res)
                                if (res.status === 0) {
                                    // this.disp_success = true
                                    // setTimeout(() => {
                                    //     this.disp_success = false
                                    //     this.disp_loading = false
                                    //     this.modal_close()
                                    // }, 1500)
                                    this.status_success(`登陆成功！欢迎用户${res.name}`, res.name, res.token)
                                }
                                else {
                                    // this.disp_failure = true
                                    // setTimeout(() => {
                                    //     this.disp_failure = false
                                    //     this.disp_loading = false
                                    //     this.modal_close()
                                    // }, 1500)
                                    let tmp = res.status === 1 ? '用户不存在！' : '密码错误'
                                    this.status_failure(tmp)
                                }
                                // this.modal_close()
                            }
                        )
                        .catch(err => {
                            console.log(err)
                            this.status_failure('登录失败！')
                        })
                }
                // setTimeout(() => {
                //     this.loading = false
                //     this.disp_success = true
                //     setTimeout(() => {
                //         this.disp_success = false
                //         this.disp_loading = false
                //         this.modal_close()
                //     }, 3000)
                // }, 3000)

            }
        },



        modal_close() {
            this.id = this.password = this.repassword = ''
            this.$bvModal.hide('myModal')
        }
    }
}

</script>
<style scoped lang="less">
@len1: 16px;
@len2: 30px;
@my_orange: rgb(255, 103, 0);

#myModal {

    position: relative;

    .loading-enter,
    .loading-leave-to {
        transform: translate(-50%, -200%) !important;
        opacity: 0;
    }

    .loading-enter-to,
    .loading-leave {
        opacity: 1;
        transform: translate(-50%, -50%) !important;
    }

    .loading-enter-active,
    .loading-leave-active {
        // transform: translateY(0%);
        transition: all 1s ease;

    }


    .disp_status-enter,
    .disp_status-leave-to {
        transform: translate(-50%, -200%) !important;
        opacity: 0;
    }

    .disp_status-enter-to,
    .disp_status-leave {
        opacity: 1;
        transform: translate(-50%, -50%) !important;
    }

    .disp_status-enter-active,
    .disp_status-leave-active {
        // transform: translateY(0%);
        transition: all 1s ease;

    }

    .surface {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    .my_spin {
        // width:50%;
        // height: auto;
        z-index: 1000;
        --bs-spinner-width: 50px;
        --bs-spinner-height: 50px;
        display: block;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        // border-color: @my_orange;
        color: @my_orange;
        // margin: auto;
        // position: absolute;
        // left: 50%;
        // top:50%;
        // transform: translate(-50%,-50%);
    }

    .disp_status {
        width: 120px;
        height: 80px;
        position: absolute;
        top: 50%;
        left: 50%;
        // font-size: 50px;
        text-align: center;

        transform: translate(-50%, -50%);
        display: block;
        z-index: 1010;

        i {
            font-size: 40px;
        }
    }

    .loading {
        // width: 100%;
        // height: 100%;
        opacity: .8;
        background-color: white;
        // display: flex;
        // justify-content: center;
        // align-items: center;
        z-index: 1000;

    }

    .alert {
        width: 100%;
        font-size: 10px;
    }

    .modal-header {
        .mheader {
            img {
                top: @len1;
                left: @len1;
                width: @len2;
                height: auto;
                position: absolute;
            }

            >button {
                text-align: center;
                position: absolute;
                top: @len1;
                right: @len1;
                line-height: @len2;
                width: @len2;
                height: @len2;
                padding: 0;
                // padding: 5px 10px;
                // padding: 10px;
                // font-size: 17px;
                // cursor: pointer;
            }

        }

    }

    p {
        word-wrap: unset;
        //overflow-wrap: unset;
        line-height: 32px;

    }

    .input-group {
        position: relative;

        .myFocus {
            width: 80%;

        }

        input {
            flex: none !important;
            width: 90px;
            font-size: 12px;
            transition: width .4s ease-in-out;

            &:focus {
                .myFocus();
            }

        }

        .input-group-text {
            display: inline-block;
            text-align: center;
            width: 20%;
        }

        .vis {
            display: block;
            position: absolute;
            right: 0;
            z-index: 500;
            text-align: center;
            font-size: 16px;
            line-height: 38px;
            height: 38px;
            padding: 0;
            border: none;
            background-color: transparent;
            border-radius: 5px;

            &:hover {
                background-color: rgba(4, 170, 109, .3);
            }
        }

        .green_vis {
            background-color: rgb(4, 170, 109);
            color: white;
        }

    }

    .modal-footer {
        button {
            z-index: 100;
        }
    }
}

@media (max-width:576px) {
    #myModal {
        .row {
            p {
                font-size: 12px;
            }
        }
    }
}
</style>