<template>
    <div class="option_box">
        <div class="option_title">{{ this.opt.oname }}</div>
        <div class="choices">
            <div class="choice_item" v-for="c,index of opt.carr">
                <a href="javascript:void(0);" :class="{ 'selected': choice_selected === index }"
                    @click.prevent="choice_selected = index;">{{c.choice_name}}</a>
                    
            </div>
            
        </div>
    </div>
</template>
<script>
export default {
    name: 'option_box',
    props:['opt'],
    data() {
        return {
            choice_selected: 0,
            choosen:{}
        }
    },
    // computed:{
    //     choosen(){
    //         return this.opt.carr[this.choice_selected]
    //     }
    // },
    watch:{
        choice_selected:{
            handler(val){
                this.choosen=this.opt.carr[val]
                console.log(this.choosen)   
                this.$emit('choose',this.choosen)
            },
            immediate:true
        }
    },
    mounted(){
        console.log(this.opt)
    }
    
}
</script>
<style lang="less" scoped>
@swiper_gray: rgb(124, 124, 124);
@choice_gray: rgb(224, 224, 224);
@my_orange: rgb(255, 103, 0);

.orange {
    color: @my_orange !important;
}

.orange_border {
    border: 1px @my_orange solid !important;
}

.selected {
    .orange();
    .orange_border();
}

.option_box {
    margin-bottom: 30px;
    .option_title {
        font-size: 18px;
    }

    .choices {
        display: grid;
        grid-template-columns: 48% 48%;
        row-gap: 10px;
        justify-content: space-between;

        margin-top: 10px;
        margin-right: 12px;

        a {
            font-size: 16px;
            height: 42px;
            line-height: 42px;
            text-decoration: none;
            color: @swiper_gray;
            display: block;
            width: 100%;
            text-align: center;
            border: 1px @choice_gray solid;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            &:hover {
                .selected();
            }
        }
    }
}
</style>