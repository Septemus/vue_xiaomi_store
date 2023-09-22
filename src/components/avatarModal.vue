<template>
    <b-modal id="avatarModal" centered hide-footer>
        <template #modal-header>
            <button @click="myClose">
                <i class="fa fa-times-circle" aria-hidden="true"></i>
            </button>
        </template>
        <div class="myTitle">
            设置头像
        </div>
        <template v-if="!avatar_path">
            <div class="upAvatar">
                <button>上传头像</button>
                <input type="file" name="" id="" class="inp_f_avatar">
            </div>
            <p class="notice">
                图片格式jpg、png、jpeg，大小不超过10MB
            </p>
        </template>
        <template v-else>
            <div class="alterAvatar">
                <img :src="avatar_path" alt="当前头像" :ref="'avatar'" id="Avatar">
            </div>
            <div class="alterBt">
                <button @click="reupload">重新上传</button>
                <button @click="confirm">确定</button>
                <input type="file" accept="image/*" id="reupd_bt" @change="loadingImg">
            </div>
        </template>
        <!-- <template #modal-footer>{{ '' }}</template> -->
    </b-modal>
</template>
  
<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'
import { mapState } from 'vuex';
export default {
    name: 'avatarModal',
    computed: {
        ...mapState(['avatar_path']),
    },
    data() {
        return {
            myCropper: null,
        }
    },
    methods: {
        loadingImg(eve) {
            console.log(
                'user re upded avatar'
            )
            //读取上传文件
            let reader = new FileReader();
            if (eve.target.files[0]) {

                //readAsDataURL方法可以将File对象转化为data:URL格式的字符串（base64编码）
                reader.readAsDataURL(eve.target.files[0]);
                reader.onload = (e) => {
                    let dataURL = reader.result;
                    // debugger
                    //将img的src改为刚上传的文件的转换格式

                    // this.$store.commit('avatar',dataURL)
                    //创建cropper实例-----------------------------------------
                    this.myCropper.replace(dataURL, false)
                    // this.$nextTick(()=>{
                    //     debugger
                    //     console.log(this.avatar_path)
                    //     // this.myCropper = new Cropper(this.$refs.avatar, {
                    //     //     viewMode: 2,
                    //     //     dragMode: 'none',
                    //     //     initialAspectRatio: 1,
                    //     //     aspectRatio: 1,
                    //     //     // preview: '.before',
                    //     //     background: false,
                    //     //     autoCropArea: 0.6,
                    //     //     minContainerWidth: 360,   //容器最小的宽度
                    //     //     minContainerHeight: 360,  //容器最小的高度
                    //     //     zoomOnWheel: false,
                    //     // })
                    // })
                }
            }
        },
        reupload() {
            document.getElementById('reupd_bt').click()
        },
        monitoring() {
            this.$on('crop', () => {
                debugger
                this.$nextTick(() => {
                    console.log(this.$refs)
                    this.myCropper = new Cropper(this.$refs.avatar, {
                        viewMode: 2,
                        dragMode: 'none',
                        initialAspectRatio: 1,
                        aspectRatio: 1,
                        // preview: '.before',
                        background: false,
                        autoCropArea: 0.6,
                        minContainerWidth: 360,   //容器最小的宽度
                        minContainerHeight: 360,  //容器最小的高度
                        zoomOnWheel: false,
                    })

                })
            })
        },
        confirm() {
            let cropped = this.myCropper.getCroppedCanvas()
            cropped = cropped.toDataURL('image/jpeg')
            this.$store.commit('avatar', cropped)
            this.myClose()
        },
        myClose() {
            this.$bvModal.hide('avatarModal')
        }
    },
    mounted() {
        // debugger
        console.log('modal mounted')
        this.monitoring()
    }
}
</script>
<style  lang="less">
#avatarModal {
    @a_size: 18px;

    #reupd_bt {
        visibility: hidden;
        position: absolute;
    }

    .modal-header {
        position: relative;
        border: none !important;

        button {
            i.fa {
                font-size: 25px;
            }

            position: absolute;
            background-color: transparent;
            right:10px;
            top:20px;
            display: block;
            border: none;
        }
    }

    .modal-body {
        border: none;

        .myTitle {
            text-align: center;
            font-size: @a_size;
            font-weight: 500;
            color: rgb(51, 51, 51);
        }

        .upAvatar {
            position: relative;
            width: 80%;
            height: 80px;
            // margin-top: 30px;
            margin: 0 auto;
            margin-top: 50px;
            margin-bottom: 30px;

            button {
                background-color: rgb(255, 105, 0);
                width: 100%;
                height: 100%;
                display: block;
                font-size: @a_size;
                text-align: center;
                color: rgb(249, 249, 249);
                line-height: 80px;
                border-color: transparent;
                border-radius: 10px;
            }

            .inp_f_avatar {
                opacity: 0;
                position: absolute;
            }

        }

        .notice {
            text-align: center;
        }

        .alterAvatar {
            img {
                width: 360px;
                display: block;
                margin: 20px auto;
                height: 360px;
            }
        }

        .alterBt {
            width: 240px;
            margin: 20px auto;
            display: flex;
            justify-content: space-between;

            button {
                width: 45%;
                height: 60px;
            }
        }
    }

    .modal-footer {
        border: none;
    }

}
</style>