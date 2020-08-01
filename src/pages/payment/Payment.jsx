import React, { memo } from 'react'
import { connect } from 'react-redux'
import { PaymentTab, PaymentItem, PaymentCoupon, PaymentAddress, PaymentFooter } from './payment.style.js';
// import { renderRoutes } from "react-router-config";
// import * as actionTypes from '../../pages/details/store/actionCreators'
import StorageUtils from '../../Utils/storageUtis/StorageUtils';
import * as FunActionTypes from '../details/store/actionCreators'

import { withRouter } from 'react-router-dom';

function Payment(props) {

    let date = new Date()

    const { detaildata } = props
    const { addorderData } = props

    // 回到上一页
    const handleback = () => {
        props.history.goBack();
    }

    const handlebackOk = () => {
        onAddOrder(detaildata.address, detaildata.size, `${date.getMonth() + 1}-${date.getDate()}`, Math.floor(Math.random() * 4))

    }
    const onAddOrder = (Dadr, Dsize, Dtime, Dtype) => {
        if (Dadr && Dsize && Dtime) {
            let data = StorageUtils.getUserorder();
            // data?
            let newdata = data ? (data + ";" + `{address:'${Dadr}',size:'${Dsize}',time:'${Dtime}',type:'${Dtype}'}`) : (`{address:'${Dadr}',size:'${Dsize}',time:'${Dtime}',type:'${Dtype}'}`)
            // 存到本地
            StorageUtils.saveUserorder(newdata)
            // 存到store
            addorderData(newdata);
        }
    }

    // const onAddRecentNum = (num) => {
    //     // 存到store
    //     addorderData(num);
    // }
    console.log("props数据", props.detaildata)
    // console.log(date.getDate(),date.getMonth()+1);
    return (
        <div>
            <PaymentTab>
                <span className="payment-tab__cancel iconfont">&#xe640;</span>
                <div className="payment-tab__left iconfont" onClick={handleback}>&#xe653;</div>
                <div className="payment-tab__title">{detaildata.title}</div>
                <div className="payment-tab__share iconfont">&#xe600;</div>
            </PaymentTab>
            <PaymentItem>
                <div className="payment-item__name">{detaildata.size}</div>
                <div className="payment-item">
                    <div className="payment-item__time">{date.getMonth() + 1}-{date.getDate()} (今天) {detaildata.PaymentItem}</div>
                    <div className="payment-item__price">{detaildata.price}元</div>
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
                    <div className="service-address__value">{detaildata.address}</div>
                </div>
                <div className="tell-service">
                    <div className="tell-service_-text">联系电话: </div>
                    <div className="tell__value">18879942330</div>
                </div>

            </PaymentAddress>
            <PaymentFooter>
                <div className="footer-left">
                    <div className="footer-left__text">需支付:</div>
                    <div className="footer-left__price">{detaildata.price}元</div>
                    <div className="footer-left__logo iconfont">&#xe611;</div>
                </div>
                <div className="footer-botton" onClick={handlebackOk}>去结算</div>
            </PaymentFooter>
        </div>
    )
}


function mapStateToProps(state) {
    return {
        detaildata: state.order.detaildata
    }

}
function mapDispatchToProps(dispatch) {
    return {
        addorderData(data) {
            dispatch(FunActionTypes.addorderData(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(withRouter(Payment)));


