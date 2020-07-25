import React from 'react';
import MenuBarItem from './menuBarItem/MenuBarItem';
import './MenuBar.css';
// import { menuBarData2 } from '../../../Data/mainData/index'

function MenuBar(props) {
    
    const menuBarData2 =  props.menuBarData2 ? props.menuBarData2  :[];
    const menuBarData = props.menuBarData || [];
    console.log(menuBarData2,'?????????????????????????')
    return (
        <div className='menu-bar'>
            <div className="menu-bar1">
                <MenuBarItem menuBarData={menuBarData}/>
                <MenuBarItem menuBarData={menuBarData}/>
            </div>
            <div className="menu-bar2">
                {
                    menuBarData2.map((item, index) => {
                        return (
                            <div className="menu-bar2__box" key={index}>
                                {/* {`${item.icon}`} */}
                                <span className="iconfont menu-bar2__icon" style={{color: `${item.color}`}}>{`${item.icon}`}</span>
                                {/* <img src={item.picUrl} alt="" className="menu-bar2-box__img" /> */}
                                <div className="menu-bar2-box__text">{item.type}</div>
                            </div>
                            // bar2图片 宽高
                        )
                    })
                }
            </div>
        </div>
    )
}



export default MenuBar