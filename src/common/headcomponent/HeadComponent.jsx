import React ,{useState} from 'react'
import {Head} from './HeadComponent.style.js';
import add from '../../assets/images/加号.png';

const HeadComponent=(props)=>{
    const {title}=props;
    return(
        <Head>
            <div className="leftimg">
                <img src={add} alt=""/>
            </div>
            <span>{title}</span>
            <div className="rightimg">
                <img src={add} alt=""/>
            </div>
        </Head>
    )
}
export default HeadComponent;