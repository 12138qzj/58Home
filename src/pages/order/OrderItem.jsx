import React from 'react';
import {  OrderBox } from './Order.style'

function OrderItem(props) {

    const { route } = props;
    return (
        <OrderBox>
                <div className="order-title">
                    <div className="order-title__box">
                        <span className="shop-info">
                            <span className="shop-icon "></span>
                            <span className="title">到家自营</span>
                            {/* <i className="shop-arrow"></i> */}
                        </span>
                        <span className="status">等待接单</span>
                    </div>
                </div>

                <div >
                    <div  id="shop-info">
                        <div className="shop-box">
                            <img src="https://images.daojia.com/dop/custom/e3cffa59ed829a4b7f79e148e92ce81c.png?x-oss-process=image/resize,w_105,h_105/format,webp" alt="" className="product-img"/>
                            <div className="product-info-box">
                                <div className="product-title text-overflow">日常保洁</div>
                            </div>
                        </div>

                        <div  id="card-address">
                            <div className="info-box">
                                <div>
                                    <p className="overflow-ellipsis">2020-07-25 (周六) 18:30-21:30</p>
                                </div>
                                <p className="address overflow-ellipsis">虾堂2单元</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div  id="card-button">
                    <div className="btn-list">
                        <div className="button">取消订单</div>
                    </div>
                </div>
            </OrderBox>
    )
}
export default OrderItem;