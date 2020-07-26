import styled from "styled-components";
export const PaymentTab = styled.div`
        height: 1.4167rem /* 153/108 */;
        margin-top:-44px;
        font-weight:bold;
        font-family: PingFangSC-Regular;
        background-color: #fff;
        display:flex;
        justify-content:space-between;
        align-items: center;
        text-align:center;
        vertical-align:center;
        font-size: .4352rem /* 47/108 */;
        position: relative;

    .payment-tab__left{
        margin-left: .5463rem /* 59/108 */;
        font-size: .5rem /* 47/108 */;
    }
        .payment-tab__cancel{
            position:absolute;
            left:1.6296rem /* 176/108 */;
            font-size: .5rem /* 47/108 */;
        }

    .payment-tab__share{
        width: .6852rem /* 74/108 */;
        margin-right: .4167rem /* 45/108 */;
        border:1px solid #d6d7d7;
        border-radius:50%;
    }
`
export const PaymentItem = styled.div`
        background-color: #fff;
        height: 2.5463rem /* 275/108 */;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        box-sizing:border-box;
        font-weight:540;
        font-family: PingFangSC-Regular;
        padding: .6481rem /* 70/108 */ .5556rem /* 60/108 */ .6204rem /* 67/108 */ .5556rem /* 60/108 */;
    .payment-item__name{
        font-size: .4615rem /* 52/108 */;

    }
    .payment-item{
        display:flex;
        font-size: .4059rem /* 46/108 */;
        justify-content:space-between;

    }

`
export const PaymentCoupon = styled.div`
    font-family: PingFangSC-Regular;
    margin-top:.2778rem /* 30/108 */;
    background-color: #fff;
    padding-left: .5185rem /* 56/108 */;
    .color-gray{

        font-size: .3611rem /* 39/108 */;
            color:#949ea3;
    }
    .coupon-top{
        display:flex;
        height: 1.5648rem /* 169/108 */;
        border-bottom:1px solid #e4e7eb;
        justify-content:space-between;
        align-items: center;
    }
        .coupon-top__left{
            font-size: .3981rem /* 43/108 */;

        }
        .coupon-top__right{
            margin-right: .5926rem /* 64/108 */;

        }
    .coupon-bottom{
        display:flex;
        height: 1.5648rem /* 169/108 */;
        justify-content:space-between;
        align-items: center;
    }
        .coupon-bottom__card{
            font-size: .3981rem /* 43/108 */;

        }
        .coupon-bottom__right{
            font-size: .3611rem /* 39/108 */;
            color:#f33f3e;
            margin-right: .5926rem /* 64/108 */;
        }

`
export const PaymentAddress = styled.div`
        font-family: PingFangSC-Regular;
        height: 3.5556rem /* 384/108 */;
        margin-top:.2778rem /* 30/108 */;
        background-color: #fff;
        box-sizing:border-box;
        display:flex;
        flex-direction:column;
        justify-content:space-between;
        padding: .6759rem /* 73/108 */ .537rem /* 58/108 */;
    .addrss-title{
        font-size: .4615rem /* 52/108 */;
    }
    .service-address{
        display:flex;
        font-size: .3596rem /* 41/108 */;
    }
        .service-address__text{
            color:#949ea3;
        }
        .service-address__value{
            margin-left: .3241rem /* 35/108 */;
        }
    .tell-service{
        display:flex;
        font-size: .3596rem /* 41/108 */;
    }
        .tell-service_-text{
            color:#949ea3;
        }
        .tell__value{
            margin-left: .3241rem /* 35/108 */;
        }
`
export const PaymentFooter = styled.div`
        position:fixed;
        bottom:0;
        width:100%;
        display:flex;
        height: 1.3519rem /* 146/108 */;
        background-color: #fff;
        font-family: PingFangSC-Regular;
        box-sizing:border-box;  ;
    .footer-left{
        width: 6.0093rem /* 649/108 */;
        display:flex;
        margin-top: .4407rem /* 53/108 */;
        align-items: baseline;
        justify-content:space-between;
        box-sizing:border-box;
        padding:0  2.4259rem /* 262/108 */ 0 .5556rem /* 60/108 */
    }
        .footer-left__text{
            font-size: .3056rem /* 33/108 */;
        }
        .footer-left__price{
            color:#f33f3e;
            font-size: .4259rem /* 46/108 */;
        }
        .footer-left__logo{
            font-size: .4rem /* 33/108 */;
        }
    .footer-botton{
        flex:1;
        color:#fff;
        font-size: .4352rem /* 47/108 */;
        line-height:1.3519rem /* 146/108 */;
        text-align:center;
        background-image:linear-gradient(to bottom right,#ff7959, #ff564e)
    }
`