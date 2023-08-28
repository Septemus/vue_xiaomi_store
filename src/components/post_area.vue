<template>
    <div class="post_area">
        <div class="container-xl">
            <div class="xiaomi_logo">
                <img src="../assets/images/logo-mi2.png" alt="" class="xiaomi_logo">
            </div>

            <div class="post_right">
                <p class="sites">小米商城 | MIUI | 米家 | 米聊 | 多看 | 游戏 | 政企服务 | 小米天猫店 | 小米集团隐私政策 | 小米公司儿童信息保护规则 | 小米商城隐私政策 |
                    小米商城用户协议
                    |
                    问题反馈 | Select Location</p>
                <p class="sites">北京互联网法院法律服务工作站 | 中国消费者协会 | 北京市消费者协会</p>
                <p>
                <p> © mi.com 京ICP证110507号 京ICP备10046444号 京公网安备11010802020134号 京网文[2020]0276-042号</p>
                <p>（京）网械平台备字（2018）第00005号 互联网药品信息服务资格证 (京)-非经营性-2014-0090 营业执照 医疗器械质量公告</p>
                <p>增值电信业务许可证 网络食品经营备案 京食药网食备202010048 食品经营许可证</p>
                <p>违法和不良信息举报电话：171-5104-4404 知识产权侵权投诉 本网站所列数据，除特殊说明，所有数据均出自我司实验室测试</p>
                </p>
                <a href="javascript:;"><img src="../assets/images/truste.png"></a>
                <a href="javascript:;"><img src="../assets/images/v-logo-2.png"></a>
                <a href="javascript:;"><img src="../assets/images/icon3.png"></a>
                <a href="javascript:;"><img src="../assets/images/ba10428a4f9495ac310fd0b5e0cf8370.png"></a>
                <a href="javascript:;"><img src="../assets/images/8db929caaf8cab755ae29640a8214dc6.png"></a>
            </div>
            <div class="slogan">
                探索黑科技，小米为发烧而生
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'post_area'
}
</script>
<style lang="less">
.post_area {
    width: 100%;
    background-color: var(--gray_bg);
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;

    .xiaomi_logo {
        /* width:10%; */
        display: block;
        height: auto;
        width: 10%;

        /* max-height: 100px; */
        /* background-color: aqua; */
        img {
            /* width:60px; */
            /* height:30px; */

            padding-top: 30px;
            width: 100%;
            max-width: 60px;
            max-height: 60px;
        }

    }

    .post_right {
        font-size: 13px;
        padding: 20px;
        color: var(--topbar_color);
        box-sizing: border-box;
        width: 90%;
        display: inline-block;

        /* background-color: blueviolet; */
        img {
            /* width:60px; */
            /* height:30px; */

            max-width: 60px;
            max-height: 60px;
        }
    }


    .slogan {
        width: 100%;
        text-align: center;
        color: var(--topbar_color);
    }

}
</style>