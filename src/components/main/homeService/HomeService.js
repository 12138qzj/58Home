import React, { useState } from 'react';

import { Tab, Top, Item } from './HomeService.style'
function HomeService(props) {
    const [homeServiceData, sethomeServiceData] = useState([
        {
            id: 1,
            title: '管道疏通',
            img: 'https://img.58cdn.com.cn/ds/app/hydalei/shutong_wntj1.png?v=7'
        },
        {
            id: 2,
            title: '开换锁',
            img: 'https://img.58cdn.com.cn/ds/app/hydalei/kaisuo_rm.png?v=5'
        },
        {
            id: 3,
            title: '修水电',
            img: 'https://img.58cdn.com.cn/ds/app/hydalei/dianqi_wntj1.png?v=7'
        },
        {
            id: 4,
            title: '修电脑',
            img: 'https://img.58cdn.com.cn/ds/app/hydalei/weixiu_rm.png?v=5'
        }, {
            id: 5,
            title: '灯具维修',
            img: 'https://img.58cdn.com.cn/ds/app/hydalei/jiazhuang_wntj1.png?v=7'
        }
    ])
    return (
        <Tab>
            <Top>
                <div className="homeservice-left">
                    <div className="homeservice-title">家庭应急</div>
                    <div className="homeservice-tag">极速上门</div>
                </div>
                <span className="homeservice-slogan">专业服务 品质保证</span>
            </Top>
            <Item>
                {
                    homeServiceData.map((item, index) => {
                        return (
                            <li className="homeservice-item" key={index}> 
                                <div className="homeservice-img__box">
                                    <img src={item.img} alt="" className="homeservice-img" />
                                </div>
                                <div className="homeservice-text">{item.title}</div>
                            </li>
                        )
                    })
                }
            </Item>
        </Tab>
    )
}

export default React.memo(HomeService)