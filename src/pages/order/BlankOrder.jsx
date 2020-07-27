import React from 'react';
import {BlankOrder }from './Order.style'

function BlankOrderComponent(props) {
    return (
        <BlankOrder>
            <img src="https://static.daojia.com/pt/project/h5-order-list/img/no-data.202566e.png" alt="" className="blank_img" />
            <span className="blank_text">没有历史记录, 赶紧去下一单吧</span>
            <div className="blank_button">立即预约</div>
        </BlankOrder>
    )
}

export default BlankOrderComponent;