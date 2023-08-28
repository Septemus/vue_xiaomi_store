<template>
  <div class="bottom_area container-xl">
    <div class="service">
      <div class="service_box"><i class="fa fa-wrench"></i> 预约维修服务</div>
      <div class="service_box"><i class="fa fa-undo"></i> 7天无理由退货</div>
      <div class="service_box"><i class="fa fa-refresh"></i> 15天免费换货</div>
      <div class="service_box"><i class="fa fa-gift"></i> 满69包邮</div>
      <div class="service_box"><i class="fa fa-map-marker"></i> 1100余家售后网点</div>
    </div>
    <div class="links">
      <dl>
        <dt>帮助中心</dt>
        <dd><a href="javascript:;">账户管理</a></dd>
        <dd><a href="javascript:;">购物指南</a></dd>
        <dd><a href="javascript:;">订单操作</a></dd>
      </dl>
      <dl>
        <dt>服务支持</dt>
        <dd><a href="javascript:;">售后政策</a></dd>
        <dd><a href="javascript:;">自助服务</a></dd>
        <dd><a href="javascript:;">相关下载</a></dd>
      </dl>
      <dl>
        <dt>线下门店</dt>
        <dd><a href="javascript:;">小米之家</a></dd>
        <dd><a href="javascript:;">服务网点</a></dd>
        <dd><a href="javascript:;">授权体验店/专区</a></dd>
      </dl>
      <dl>
        <dt>关于小米</dt>
        <dd><a href="javascript:;">了解小米</a></dd>
        <dd><a href="javascript:;">加入小米</a></dd>
        <dd><a href="javascript:;">投资者关系</a></dd>
        <dd><a href="javascript:;">企业社会责任</a></dd>
        <dd><a href="javascript:;">廉洁举报</a></dd>
      </dl>
      <dl>
        <dt>关注我们</dt>
        <dd><a href="javascript:;">新浪微博</a></dd>
        <dd><a href="javascript:;">官方微信</a></dd>
        <dd><a href="javascript:;">联系我们</a></dd>
        <dd><a href="javascript:;">公益基金会</a></dd>
      </dl>
      <dl>
        <dt>特色服务</dt>
        <dd><a href="javascript:;">F码通道</a></dd>
        <dd><a href="javascript:;">礼物码</a></dd>
        <dd><a href="javascript:;">防伪查询</a></dd>
      </dl>
      <div class="contact">
        <p class="telephone">400-100-5678</p>
        <p>8:00-18:00（仅收市话费）</p>
        <a href=""><i class="fa fa-commenting"></i>人工客服</a>
      </div>
    </div>

  </div>
</template>
<style lang="less">
.bottom_area {
  background-color: white;

  .service {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px var(--topbar_color) solid;
    flex-wrap: wrap;

    .service_box {
      text-align: center;
      width: 20%;
      font-size: 25px;

      /* padding: 30px 0; */
      /* height:60%; */
      /* background-color: aquamarine; */
      +.service_box {
        border-left: 2px var(--topbar_color) solid;
      }
    }
  }

  .links {
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    height: 460px;

    /* margin-block-end: 0; */
    dl {
      /* padding: 5px 0; */
      /* background-color: aquamarine; */
      display: block;
      width: 13.33%;
      height: 100%;
      list-style-type: none;
      margin-bottom: 0;

      /* margin-block-end: 0; */
      dt {
        padding: 30px 0;
      }

      dd {
        font-size: 12px;
        padding: 10px 0;
      }

      dd>a {
        text-decoration: none;
        color: var(--topbar_color);
      }
    }

    .contact {
      text-align: center;
      width: 20%;
      height: 150px;
      /* background-color: aqua; */
      border-left: 2px solid var(--topbar_color);

      .telephone {
        color: orange;
        font-size: 27px;
      }

      p {
        margin-top: 15px;
        color: var(--topbar_color);
      }

      a {
        display: inline-block;
        text-decoration: none;
        color: orange;
        margin-top: 10px;
        padding: 5px 30px;
        border: 2px solid orange;
      }
    }


  }
}

@media (max-width:700px) {
  .bottom_area {

    .service {
      .service_box {
        width: 50%;
        font-size: 15px;
        border: none !important;
      }
    }
    .links {

      dl {
        display: block;
        width: 50%;
        height: 25%;
  
        dt {
          font-size: 8px;
          padding: 5px 10px;
        }
    
        dd {
          /* font-size: 7px; */
          font-size: 6px;
          text-align: center;
          padding: 2px 0px;
        }
      }
  
  
      .contact {
        text-align: center;
        width: 100%;
        height: 25%;
        /* height: 150px; */
        /* background-color: aqua; */
        /* border-left: 2px solid var(--topbar_color); */
        border: none;
        margin-top: 3px;
        .telephone {
          /* color: orange; */
          font-size: 17px;
          margin-top: 3px;
        }
    
        p {
          /* margin-top: 10px; */
          color: var(--topbar_color);
          margin: 0;
        }
    
        a {
          display: inline-block;
          text-decoration: none;
          color: orange;
          margin-top: 10px;
          padding: 5px 10px;
          border: 2px solid orange;
        }
      }
  
    }

  }

}
</style>