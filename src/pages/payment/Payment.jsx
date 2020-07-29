import React, { Component } from 'react'
import { connect } from 'react-redux'
import {   PaymentTab, PaymentItem, PaymentCoupon, PaymentAddress,PaymentFooter } from './payment.style.js';
import { renderRoutes } from "react-router-config";
import * as actionTypes from '../../pages/details/store/actionCreators'

function Payment(props) {
    const { orderdata } = props;
    const len = orderdata.length;
    console.log(len, '获取到detail的store啦')

    return (
        <div> 
            <PaymentTab>
                <span className="payment-tab__cancel iconfont">&#xe640;</span>
                <div className="payment-tab__left iconfont">&#xe653;
                    {/* <span className="payment-tab__return iconfont"></span> */}
                    
                </div>
                <div className="payment-tab__title">擦玻璃</div>
                <div className="payment-tab__share iconfont">&#xe600;</div>
            </PaymentTab>
            <PaymentItem>
                <div className="payment-item__name">擦玻璃 (10平米)</div>
                <div className="payment-item">
                    <div className="payment-item__time">07-26 (今天) 14:30</div>
                    <div className="payment-item__price">140元</div>
                </div>
            </PaymentItem>
            <PaymentCoupon>
                <div className="coupon-top">
                    <div className="coupon-top__left">优惠券</div>
                    <div className="coupon-top__right iconfont color-gray">暂无可用  &#xe61f;</div>
                </div>
                <div className="coupon-bottom">
                    <div className="coupon-bottom__card">卡</div>
                    <div className="coupon-bottom__right iconfont ">购卡得福利, 立即购买 <span className='iconfont color-gray'>&#xe61f;</span></div>
                </div>

            </PaymentCoupon>
            <PaymentAddress>
                <div className="addrss-title">服务地址信息</div>
                <div className="service-address">
                    <div className="service-address__text">服务地址: </div>
                    <div className="service-address__value">东华理工大学</div>
                </div>
                <div className="tell-service">
                    <div className="tell-service_-text">联系电话: </div>
                    <div className="tell__value">18879942330</div>
                </div>
            
            </PaymentAddress>
            <PaymentFooter>
                <div className="footer-left">
                    <div className="footer-left__text">需支付:</div>
                    <div className="footer-left__price">140元</div>
                    <div className="footer-left__logo iconfont">&#xe611;</div>
                </div>
                <div className="footer-botton">去结算</div>
            </PaymentFooter>
        </div>
    )
}
    

export default Payment;
// const mapStateToProps = (state) => ({
    
// })

// const mapDispatchToProps = {
    
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Payment)
