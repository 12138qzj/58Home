import React from 'react';
import {  OrderTab, OrderType, TypeItem } from './Order.style'
import { NavLink } from 'react-router-dom'

function Order(props) {
    return (
        <>
            <OrderTab>
                <div className="iconfont order-tab__icon">&#xe670;</div>
                <div className="order-tab__title"></div>
                <div className="order-tab__right"></div>
            </OrderTab>
            <OrderType>
                <NavLink to='' activeClassName='selected'>
                    <TypeItem><span>待确认</span></TypeItem>
                </NavLink>
                <NavLink to='' activeClassName='selected'>
                    <TypeItem><span>待服务</span></TypeItem>
                </NavLink>
                <NavLink to='' activeClassName='selected'>
                    <TypeItem><span>待支付</span></TypeItem>
                </NavLink>
                <NavLink to='' activeClassName='selected'>
                    <TypeItem><span>待评价</span></TypeItem>
                </NavLink>
                <NavLink to='' activeClassName='selected'>
                    <TypeItem><span>全部</span></TypeItem>
                </NavLink>
            </OrderType>
        </>
    )
}



export default Order;