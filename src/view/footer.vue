<template>
    <div class="footer wrap">
        <div class="link-box clearfix">
            <div class="dl-box clearfix">
                <dl>
                    <dt>帮助中心</dt>
                    <dd><a href="javascript:;">账户管理</a></dd>
                    <dd><a href="javascript:;">常见问题</a></dd>
                </dl>
                <dl>
                    <dt>服务支持</dt>
                    <dd><a href="javascript:;">售后政策</a></dd>
                    <dd><a href="javascript:;">自助服务</a></dd>
                    <dd><a href="javascript:;">相关下载</a></dd>
                </dl>
                <dl>
                    <dt>关于星络</dt>
                    <dd><a href="javascript:;">了解星络</a></dd>
                </dl>
                <dl>
                    <dt>关注我们</dt>
                    <dd><a href="javascript:;">联系我们</a></dd>
                </dl>
                <dl>
                    <dt>加入我们</dt>
                    <dd><a href="javascript:;">招聘信息</a></dd>
                </dl>
            </div>
            <div class="contact-us-box">
                <!--<p class="number">400-090-6666</p>-->
                <p class="time">周一至周五&nbsp;9:00-18:00</p>
                <button class="btn" type="button" disabled>联系客服</button>
            </div>
        </div>
        <p class="wrap qrcode clear">星络科技有限公司©版权所有&nbsp;&nbsp;&nbsp;&nbsp;备案号:<a href="http://www.miitbeian.gov.cn/" target="_blank">粤ICP备18082585号-1</a></p>
    </div>
</template>

<style scoped>
    .footer {
        font-size: 12px;
        line-height: 22px;
        text-align: center;
        padding-top: 56px;
    }

    .dl-box {
        float: left;
        text-align: left;
        padding-left: 80px;
    }

    .dl-box dl {
        width: 160px;
        float: left;
        line-height: 32px;
    }

    .dl-box dt {
        font-size: 16px;
        margin-bottom: 18px;
        font-weight: 500;
        color: #656565;
    }

    .dl-box dd {
        font-size: 14px;
    }

    .dl-box a {
        color: #656565;
        cursor: default;
    }

    .contact-us-box {
        height: 140px;
        text-align: center;
        border-left: 1px solid #d6d6d6;
        float: right;
        width: 294px;
        margin-bottom: 54px;
        padding-top: 34px;
        box-sizing: border-box;
    }

    /*.contact-us-box .number{font-size: 20px;color:#946134;line-height: 32px;margin-bottom: 16px;}*/
    .contact-us-box .time {
        font-size: 12px;
        line-height: 1;
        margin-bottom: 20px;
        color: #4d4d4d;
    }

    .contact-us-box .btn {
        width: 128px;
        height: 32px;
        line-height: 30px;
        border: 1px solid #946134;
        color: #946134;
        font-size: 12px;
        padding-left: 48px;
        background-image: url('../assets/images/talk1.png');
        background-repeat: no-repeat;
        background-position: 28px center;
        background-size: 14px 14px;
        text-align: left;
        background-color: transparent;
    }

    .qrcode {
        padding: 20px 0 50px;
        text-align: center;
        border-top: 1px solid #d0d0d0;
        color: #999;
    }

    .qrcode a {
        color: #999;
    }

    .build-wrap {
        background-color: #fafafa;
    }

    .build-wrap .wrapper {
        padding-top: 148px;
        padding-bottom: 343px;
        box-sizing: border-box;
        min-height: 720px;
    }

    .build-wrap .header {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        background-color: #fff;
        min-width: 1200px;
    }

    .bulid-box {
        background-color: #f5f5f5;
        color: #656565;
        text-align: center;
        height: 100%;
        min-height: 230px;
    }

    .bulid-box .content {
        position: relative;
        top: 50%;
        left: 50%;
        width: 200px;
        margin-left: -100px;
        transform: translateY(-50%);
    }

    .bulid-box .bulid {
        display: block;
        margin: 0 auto 26px;
    }

    .bulid-box .txt {
        font-size: 14px;
    }

    .build-wrap .footer {
        margin-bottom: -343px;
        background-color: #fff;
    }

    .dl-box {
        float: left;
        text-align: left;
        padding-left: 80px;
    }

    .dl-box dl {
        width: 160px;
        float: left;
        line-height: 32px;
    }

    .dl-box dt {
        font-size: 16px;
        margin-bottom: 18px;
        font-weight: 500;
        color: #656565;
    }

    .dl-box dd {
        font-size: 14px;
    }

    .dl-box a {
        color: #656565;
        cursor: default;
    }
</style>