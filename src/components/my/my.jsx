import React, { PureComponent } from 'react';
import InfoCard from './infocard/InfoCard';
import Ordercard from './ordercard/Ordercard';
import ToolserverCard from './toolservercard/ToolserverCard'
import './my.css';
import head_icon from '../../resources/image/temp-head_c43dfad.png';
class My extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <div>
                <div className="head">
                    <div className="shezhi"></div>   
                </div>
                <div className="center">
                    <div className="info">
                        <img src={head_icon} alt=""/>
                        <div className="personal">
                            <div className="personal-name">未登录</div>
                            <div className="personal-info">登陆查看更多信息</div>
                        </div> 
                    </div>
                    <div className="info info-card" >
                        <InfoCard num="0" num_name="卡劵"/>
                        <InfoCard num="0" num_name="候选阿姨"/>
                        <InfoCard num="0" num_name="阿姨"/>
                        <InfoCard num="0" num_name="候选阿姨"/>
                    </div>
                    <div className="order">
                        <div className="order-warp-head">
                            <div className="order-warp-head-R">我的订单</div>
                            <div className="order-warp-head-L">查看全部</div>
                        </div>
                        <div className="warp-content">
                            <Ordercard/>
                            <Ordercard/>
                            <Ordercard/>
                            <Ordercard/>

                        </div>
                    </div>
                    <div className="need"></div>
                    <div className="tool-server">
                        <div className="tool-server-head">
                            <div className="tool-server-head-R">工具与服务</div>
                        </div>
                        <div className="tool-server-icon">
                            <ToolserverCard name="我的地址"/>
                            <ToolserverCard name="入住中心"/>
                            <ToolserverCard name="帮助中心"/>
                            {/* <ToolserverCard/>
                            <ToolserverCard/>
                            <ToolserverCard/> */}

                            {/* <ToolserverCard/>
                            <ToolserverCard/>
                            <ToolserverCard/>
                            <ToolserverCard/> */}

                        </div>
                       
                        
                    </div>
                </div>
            </div>
            
         );
    }
}
 
export default My;