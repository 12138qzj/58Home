import React, { Component } from 'react';

import HeadNumIcon from '../../common/headnumicon/HeadNumIcon';
import '../../pages/Info/Info.css'

class InfoItem extends Component {
    state = {}
    render() {
        return (
            <div className="info-item">
                <img className="item-img" src={'https://static.daojia.com/assets/project/im/images/activity1.png'}></img>
                <HeadNumIcon display="" top="0.3rem" left="1.1rem" num="9"/>
                <div className="item-info">
                    <div className="item-top">
                        <p className="title">生活号</p>
                        <p className="time">昨天 13:07</p>
                    </div>
                    <div className="item-msg">一定要少吃，你知道是哪三种吗？点击查看>></div>
                </div>
            </div>
        );
    }
}

export default InfoItem;