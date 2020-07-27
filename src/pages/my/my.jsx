import React, { useEffect,  memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from '../Main/store/actionCreators'
import {Link} from 'react-router-dom';
import {renderRoutes} from 'react-router-config'
import InfoCard from './infocard/InfoCard';
import Ordercard from './ordercard/Ordercard';
import ToolserverCard from './toolservercard/ToolserverCard'
import './my.css';
///image/temp-head_c43dfad.png
import head_icon from '../../assets/images/temp-head_c43dfad.png'

function My(props){
// class My extends PureComponent {
    // state = {}

    // render() {
        const {route,index}=props;
        const {changeIndexData}=props;

        const ordercardbgp = [
            {
                bgp: "0 0",
                bgptext: "待确认"
            },
            {
                bgp: "0 -0.954rem",
                bgptext: "待服务"
            },
            {
                bgp: "0 -2rem",
                bgptext: "待支付"
            },
            {
                bgp: "0 -2.981rem",
                bgptext: "待评价"
            }
        ];

        const toolservercard = [
            {
                imgsrc: "",
                imgsrctext: "我的地址"
            },
            {
                imgsrc: "",
                imgsrctext: "入驻发布"
            },
            {
                imgsrc: "",
                imgsrctext: "帮助中心"
            }
        ]
        const infocard = [
            {
                infocardnum: 1,
                infocardname: "卡劵"
            },
            {
                infocardnum: 0,
                infocardname: "候选阿姨"
            },
            {
                infocardnum: 0,
                infocardname: "收藏"
            },
            {
                infocardnum: 0,
                infocardname: "浏览记录"
            }
        ]

        useEffect(()=>{
            changeIndexData(3)
        },[index])
        return (
            <div>
                <div className="head">
                    <div className="shezhi "></div>
                </div>
                <div className="center">
                    <div className="info">
                        <img src={head_icon} alt="" />
                        <div className="personal">
                            <div className="personal-name">未登录</div>
                            <div className="personal-info">登陆查看更多信息</div>
                        </div>
                    </div>
                    <div className="info info-card" >
                        {
                            infocard.map((item, index) => {
                                return (
                                    <InfoCard num={item.infocardnum} num_name={item.infocardname} key={index} />
                                )
                            })
                        }

                        {/* <InfoCard num="0" num_name="候选阿姨" />
                        <InfoCard num="0" num_name="阿姨" />
                        <InfoCard num="0" num_name="候选阿姨" /> */}
                    </div>
                    <div className="order">
                        <div className="order-warp-head">
                            <div className="order-warp-head-R">我的订单</div>
                            <Link to='/home/my/order'>
                                <div className="order-warp-head-L">查看全部</div>
                            </Link>
                        </div>
                        <div className="warp-content">
                            {ordercardbgp.map((item, index) => {
                                return (
                                    <Ordercard key={index} bgp={item.bgp} bgptext={item.bgptext} />
                                )
                            })}
                            {/* <Ordercard/>
                            
                            <Ordercard/>
                            <Ordercard/> */}

                        </div>
                    </div>
                    <div className="need"></div>
                    <div className="tool-server">
                        <div className="tool-server-head">
                            <div className="tool-server-head-R">工具与服务</div>
                        </div>
                        <div className="tool-server-icon">
                            {
                                toolservercard.map((item, index) => {
                                    return (
                                        <ToolserverCard name={item.imgsrctext} key={index} />
                                    )
                                })
                            }
                            {/* <ToolserverCard name="我的地址" />
                            <ToolserverCard name="入住中心" />
                            <ToolserverCard name="帮助中心" /> */}

                        </div>


                    </div>
                </div>
                {renderRoutes(route.routes)}
            </div>

        );
    // }
}

const mapStateToProps = (state) => ({
    // maindata: state.main.maindata,
    index:state.main.index
})
const mapDispatchToProps = (dispatch) => {
    return {
        changeIndexData(newIndex){
            dispatch(actionTypes.changeIndexData(newIndex))
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(memo(My))

