import React from 'react'
import {NavLink} from 'react-router-dom'
import {Detail} from './Detailhead.style.js';

const Detailhead=(props)=>{

    const {index, handleTabClick}=props
    console.log(props);
    const activeIndex=index;
    return (

    
        //style={activeIndex===0?{display:"none"}:{}}
        <Detail >
            <li
            data-index="0"
            data-ltab="商品"
            onClick={handleTabClick}
            className={activeIndex===0?"activeselected":""}>
                <span
                 data-index="0"
                 data-ltab="商品">商品</span>
            </li>
            <li
            data-index="1"
            data-ltab="详情"
            onClick={handleTabClick}
            className={activeIndex===1?"activeselected":""}>
            <span
             data-index="1"
             data-ltab="详情">
                详情</span>
            </li>
            <li
             data-index="2"
             data-ltab="推荐"
            onClick={handleTabClick}
            className={activeIndex===2?"activeselected":""}>
            <span
            data-index="2"
            data-ltab="推荐">推荐</span>
            </li>

        </Detail>
        
    )
}
export default Detailhead;