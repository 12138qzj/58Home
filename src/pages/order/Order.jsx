import React, { useState, memo, useEffect,useMemo } from 'react';
import { connect } from 'react-redux';
import { OrderTab, OrderType, TypeItem, OrderAd } from './Order.style';
import { NavLink, Link, withRouter } from 'react-router-dom';

import * as actionTypes from '../../pages/details/store/actionCreators'

import { renderRoutes } from "react-router-config";
import OrderItem from './OrderItem'
import BlankOrderComponent from './BlankOrder';


function Order(props) {
    const { route } = props;
    const { orderdata } = props;
    const [orderIndex, setorderIndex] = useState(0);

    const [orderItem, setorderItem] = useState([]);
    const handleOnclick = (index) => {
        setorderIndex(index);
        // fn();
    }
    // const fn = () => {
    //     let data  = [];
    //     console.log("orderIndex",orderIndex)
    //     if(orderIndex ==4){
    //          data = orderdata
    //     }else{
    //          data = orderdata.filter((item) => item.type == orderIndex)
    //     }
    //     // setorderItem(data);
    //     console.log("data", data,data.length )
    //     if(data.length!=0 ){
    //         console.log("进入重新下渲染");
    //         return (<OrderItem data={data} />)
    //     }
    //     else{
    //         console.log("2222");
    //         return  (<BlankOrderComponent />);
    //     }
    //     // return data.length!=0 ? (<OrderItem data={data} />) : (<BlankOrderComponent />);
    // }
    const init=()=>{
        if(props.location.pathname==="/order/all"){
            handleOnclick(4);
        }
        if(props.location.pathname==="/order/evaluated"){
            handleOnclick(3);
        }
        if(props.location.pathname==="/order/paid"){
            handleOnclick(2);
        }
        if(props.location.pathname==="/order/service"){
            handleOnclick(1);
        }
        if(props.location.pathname==="/order/confirm"){
            handleOnclick(0);
        }
        console.log(props);
    };
    useEffect(()=>{
        init();

    },[])
 

    console.log(orderdata, '获取到detail的store啦',orderIndex)
    
  

    
    // const fn = () => {
    //     let data  = [];
    //     console.log("orderIndex",orderIndex)
    //     if(orderIndex ==4){
    //          data = orderdata
    //     }else{
    //          data = orderdata.filter((item) => item.type == orderIndex)
    //     }
    //     console.log("data", data,data.length )
    //     if(data.length!=0 ){
    //         return (<OrderItem data={data} />)
    //     }
    //     else{
    //         return  (<BlankOrderComponent />);
    //     }
    //     // return data.length!=0 ? (<OrderItem data={data} />) : (<BlankOrderComponent />);
    // }

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
                <NavLink to='/order/paid' activeClassName='selected'
                 onClick={() => {
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
                到家优选订单，点击这里查看 	&#62;
            </OrderAd>
            {/* {
               init()
            } */}
            {
                // let data  = [];
                // console.log("orderIndex",orderIndex)
                // if(orderIndex ==4){
                //     data = orderdata
                // }else{
                //     data = orderdata.filter((item) => item.type == orderIndex)
                // }
                orderIndex ==4?(orderdata.length!=0 ? (<OrderItem data={orderdata} />) : (<BlankOrderComponent />)):
                (orderdata.filter((item) => item.type == orderIndex).length!=0? (<OrderItem data={orderdata} />) : (<BlankOrderComponent />))
                // setorderItem(data);
                // console.log("data", data,data.length )
                // data.length!=0 ? (<OrderItem data={data} />) : (<BlankOrderComponent />);
                // if(data.length!=0 ){
                //     console.log("进入重新下渲染");
                //     return <OrderItem data={data} />
                // }
                // else{
                //     console.log("2222");
                //     return  (<BlankOrderComponent />);
                // }
            }

            {renderRoutes(route.routes)}
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
export default connect(mapStateToProps, mapDispatchToProps)( withRouter(memo(Order)))
