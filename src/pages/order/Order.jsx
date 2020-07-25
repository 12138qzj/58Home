import React from 'react';
import { OrderTab, OrderType, TypeItem, OrderAd, BlankOrder } from './Order.style'
import OrderItem from './OrderItem'
import { NavLink, Link } from 'react-router-dom';
import { renderRoutes } from "react-router-config";

function Order(props) {

    const { route } = props;
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
                <NavLink to='/order/confirm' activeClassName='selected'>
                    <TypeItem><span>待确认</span></TypeItem>
                </NavLink>
                <NavLink to='/order/service' activeClassName='selected'>
                    <TypeItem><span>待服务</span></TypeItem>
                </NavLink>
                <NavLink to='/order/paid' activeClassName='selected'>
                    <TypeItem><span>待支付</span></TypeItem>
                </NavLink>
                <NavLink to='/order/evaluated' activeClassName='selected'>
                    <TypeItem><span>待评价</span></TypeItem>
                </NavLink>
                <NavLink to='/order/all' activeClassName='selected'>
                    <TypeItem><span>全部</span></TypeItem>
                </NavLink>
            </OrderType>
            <OrderAd>
                到家优选订单，点击这里查看 >
            </OrderAd>

            {/* <BlankOrder>
                <img src="https://static.daojia.com/pt/project/h5-order-list/img/no-data.202566e.png" alt="" className="blank_img"/>
                <span className="blank_text">没有历史记录, 赶紧去下一单吧</span>
                <div className="blank_button">立即预约</div>
            </BlankOrder> */}
            {/* <OrderItem /> */}
            
            
            {renderRoutes(route.routes)}
        </>
            )
        }
        
        
        
export default Order;