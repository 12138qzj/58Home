import React from 'react';
import { OrderBox } from './Order.style'

function OrderItem(props) {
    const {data}= props
    // console.log("data.data[0].size", '------',data)

    return (
        <>
            {
                !data?"":
                data.map((item, key) => {
                        return (
                            <OrderBox key={key}>
                            <div className="order-title">
                                <div className="order-title__box">
                                    <span className="shop-info">
                                        <span className="shop-icon "></span>
                                        <span className="title">到家自营</span>
                                    </span>
                                    <span className="status">等待接单</span>
                                </div>
                            </div>

                            <div >
                                <div id="shop-info">
                                    <div className="shop-box">
                                        <img src="https://images.daojia.com/dop/custom/e3cffa59ed829a4b7f79e148e92ce81c.png?x-oss-process=image/resize,w_105,h_105/format,webp" alt="" className="product-img" />
                                        <div className="product-info-box">
                                            <div className="product-title text-overflow">日常保洁</div>
                                        </div>
                                    </div>

                                    <div id="card-address">
                                        <div className="info-box">
                                            <div>
                                                <p className="overflow-ellipsis">{item.time}</p>
                                            </div>
                                            <p className="address overflow-ellipsis">{item.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="card-button">
                                <div className="btn-list">
                                    <div className="button">在线客服</div>
                                </div>
                            </div>
                            </OrderBox>
                        )
                })
            }
        </>
    )
}
export default OrderItem;