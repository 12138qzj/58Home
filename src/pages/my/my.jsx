import React, { useEffect, memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from '../Main/store/actionCreators'
import { Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import InfoCard from './infocard/InfoCard';
import Ordercard from './ordercard/Ordercard';
import ToolserverCard from './toolservercard/ToolserverCard'
import './my.css';
///image/temp-head_c43dfad.png
import head_icon from '../../assets/images/temp-head_c43dfad.png'

function My(props) {
    // class My extends PureComponent {
    // state = {}
    let { recentnum } = props;
    recentnum = localStorage.getItem('recentNum')?localStorage.getItem('recentNum') :recentnum;
    console.log(recentnum);
    // render() {
    const { route, index } = props;
    const { changeIndexData } = props;

    const ordercardbgp = [
        {
            bgp: "0 0",
            bgptext: "待确认",
            param: '/order/comfirm'
        },
        {
            bgp: "0 -0.954rem",
            bgptext: "待服务",
            param: '/order/service'
        },
        {
            bgp: "0 -2rem",
            bgptext: "待支付",
            param: '/order/paid'
        },
        {
            bgp: "0 -2.981rem",
            bgptext: "待评价",
            param: '/order/evaluated'
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
            infocardname: "卡劵",
            param:'/home/my'
        },
        {
            infocardnum: 0,
            infocardname: "候选阿姨",
            param:'/home/my'
        },
        {
            infocardnum: 0,
            infocardname: "收藏",
            param:'/home/my'
        },
        {
            infocardnum: recentnum,
            infocardname: "浏览记录",
            param:'/recent'
        }
    ]

    const handleClick = (params) => {
        console.log("params",params,props)
        if(params=='/order/comfirm'){
            props.history.push(`/order`)
        }else{
        props.history.push(`${params}`)

        }
    }
    const handleClickRecent = (params) => {
        console.log('params', params)
        props.history.push(`${params}`)
    }
    useEffect(() => {
        changeIndexData(3)
    }, [index])
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
                            console.log(item.param,'num_mane')
                            return (
                                <InfoCard num={item.infocardnum} num_name={item.infocardname} key={index}
                                handleonclick={handleClickRecent} param={item.param}
                                 />
                            )
                        })
                    }

                </div>
                <div className="order">
                    <div className="order-warp-head">
                        <div className="order-warp-head-R">我的订单</div>
                        <div className="order-warp-head-L" onClick={() => { handleClick('/order/all') }}>查看全部</div>
                    </div>
                    <div className="warp-content">
                        {ordercardbgp.map((item, index) => {
                            console.log(`${item.param}`)
                            return (
                                <Ordercard key={index} bgp={item.bgp} bgptext={item.bgptext} handleonclick={handleClick} url={item.param} />
                            )
                        })}

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
    recentnum: state.order.recentnum,
    index: state.main.index
})
const mapDispatchToProps = (dispatch) => {
    return {
        changeIndexData(newIndex) {
            dispatch(actionTypes.changeIndexData(newIndex))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(My))

