import React,{useState, memo } from 'react';
import { connect } from 'react-redux';
import { OrderTab, OrderType, TypeItem, OrderAd, BlankOrder } from './Order.style';
import { NavLink, Link } from 'react-router-dom';
// import * as actionTypes from './store/actionCreators'
import { renderRoutes } from "react-router-config";
import StorageUtils from '../../Utils/storageUtis/StorageUtils'

function Order(props) {

    const { route } = props;
    const init = () => {
        let boxdata = [];
        StorageUtils.getUserorder();
    
        const data = StorageUtils.getUserorder() ? StorageUtils.getUserorder().split(';') : [];
        for (let key in data) {
            var obj = eval("(" + data[key] + ")");
            boxdata.push(obj);
        }
        return boxdata;
    }
    const data = init();
    console.log(data,'获取到本地数据啦')
    const [boxdata, setBoxData] = useState('')
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
            {/* 每次打开，读取localstorage, 没有就不显示， 有就存到store， 从store取数据渲染 */}
            
            {renderRoutes(route.routes)}
        </>
            )
        }
        
        export default Order;     
        
        // const mapStateToProps = (state) => ({
        //     maindata: state.main.maindata
        // })
        // const mapDispatchToProps = (dispatch) => {
        //     return {
        //         getMainDataDispatch() {
        //             dispatch(actionTypes.getMainData())
        //         }
        //     }
        // }
        // export default connect(mapStateToProps, mapDispatchToProps)(memo(Order))