<template>
    <b-modal id="stateModal" centered>

        <!-- Modal Header -->
        <template #modal-header>
            <Transition name="disp_status">
                <div v-show="!loading && disp_success" class="disp_status text-success">
                    <i class="fa fa-check-circle d-block" aria-hidden="true"></i>
                    {{ stateModalDescription }}
                </div>
            </Transition>
            <Transition name="disp_status">
                <div v-show="!loading && disp_failure" class="disp_status text-danger">
                    <i class="fa fa-times-circle d-block" aria-hidden="true"></i>
                    {{ stateModalDescription }}
                </div>
            </Transition>
            <Transition name="loading">
                <div class="my_spin" v-show="loading">
                    <div class="spinner-border"></div>
                </div>
            </Transition>
            <div class="mheader w-100">
                <img src="../assets/images/logo-mi2.png" alt="">

                <!-- <b-button variant="danger" @click="modal_close">
                    X
                </b-button> -->
            </div>
        </template>
        <template #modal-footer>
            <div class="w-100">
                <b-button v-if="!loading" variant="primary" class="mx-auto d-block" @click="$bvModal.hide('stateModal')">
                    确定
                </b-button>
            </div>
        </template>

    </b-modal>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'stateModal',
    computed: {
        ...mapState(['stateModalDescription']),
        loading() {
            return this.stateModalDescription ? false : true
        },
    },
    data() {
        return {
            // loading: true,
            disp_success: true,
            disp_failure: false,
        }
    },
    methods: {
    },

}

</script>
<style lang="less" >
@len1: 8px;
@len2: 25px;
@my_orange: rgb(255, 103, 0);

#stateModal {

    // position: relative;

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


    .modal-body {
        padding: 40px;
    }

    .modal-footer {
        border-top: none;
        padding-top: 70px;
    }

    .modal-header {
        padding: 20px;
        border-bottom: none;
        // display: none;

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


    .modal-footer {
        button {
            z-index: 100;
        }
    }
}

@media (max-width:576px) {
    #stateModal {
        .row {
            p {
                font-size: 12px;
            }
        }
    }
}</style>