import React, { Component } from 'react';
import './Info.css'
import InfoItem from '../../components/InfoItem/InfoItem'
class Info extends Component {
    state = {  }
    render() { 
        return ( 
            <div className='infomation'>
                <div className="header">
                    <p>我的消息</p>
                    <span>帮助中心</span>
                </div>

                <div className="content">
                    <div className="info-item">
                        <img className="item-img" src={'https://static.daojia.com/assets/project/im/images/activity1.png'}></img>

                        <div className="item-info">
                            <div className="item-top">
                                <p className="title">优惠促销</p>
                            </div>
                        </div>
                    </div>
                    <InfoItem />
                </div>
            </div> 
         );
    }
}
 
export default Info;