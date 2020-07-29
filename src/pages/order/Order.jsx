import React, { useState, memo, useEffect } from 'react';
import { connect } from 'react-redux';
import { OrderTab, OrderType, TypeItem, OrderAd } from './Order.style';
import { NavLink, Link } from 'react-router-dom';

import * as actionTypes from '../../pages/details/store/actionCreators'

import { renderRoutes } from "react-router-config";
import OrderItem from './OrderItem'
import BlankOrderComponent from './BlankOrder';
import StorageUtils from '../../Utils/storageUtis/StorageUtils';

// import StorageUtils from '../../Utils/storageUtis/StorageUtils'


function Order(props) {
    const { route } = props;
    const { orderdata } = props;
    const [orderIndex, setorderIndex] = useState(0);

    console.log(orderdata, '获取到detail的store啦')
    const handleOnclick = (index) => {
        setorderIndex(index);
    }

    return (
        <>
            <OrderTab>
                <Link to='/home/my'>
                    <div className="iconfont order-tab__icon">&#xe670;</div>
                </Link>
                <div className="order-tab__title">全部订单</div>
                <div className=" order-tab__right">分类 <span className='iconfont'>&#xe63d;</span></div>
            </OrderTab>
            <OrderType>
                <NavLink to='/order/confirm' activeClassName='selected' onClick={() => {
                    handleOnclick(0);
                }}>
                    <TypeItem><span>待确认</span></TypeItem>
                </NavLink>
                <NavLink to='/order/service' activeClassName='selected' onClick={() => {
                    handleOnclick(1);
                }}>
                    <TypeItem><span>待服务</span></TypeItem>
                </NavLink>
                <NavLink to='/order/paid' activeClassName='selected' onClick={() => {
                    handleOnclick(2);
                }}>
                    <TypeItem><span>待支付</span></TypeItem>
                </NavLink>
                <NavLink to='/order/evaluated' activeClassName='selected' onClick={() => {
                    handleOnclick(3);
                }}>
                    <TypeItem><span>待评价</span></TypeItem>
                </NavLink>
                <NavLink to='/order/all' activeClassName='selected' onClick={() => {
                    handleOnclick(4);
                }}>
                    <TypeItem><span>全部</span></TypeItem>
                </NavLink>
            </OrderType>
            <OrderAd>
                到家优选订单，点击这里查看 >
            </OrderAd>

            {
                (() => {
                    let data  = '';
                    if(orderIndex ==4){
                         data = orderdata
                    }else{
                         data = orderdata.filter((item) => item.type == orderIndex)
                    }
                    console.log("data", data)
                    return data.length ? (<OrderItem data={data} />) : (<BlankOrderComponent />);
                })()
            }

        </>
    )
}


const mapStateToProps = (state) => ({
    orderdata: state.order.orderdata
})
const mapDispatchToProps = (dispatch) => {
    return {
        initorderDataDiapatch() {
            dispatch(actionTypes.initorderData())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Order))
