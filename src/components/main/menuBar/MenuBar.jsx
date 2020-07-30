import React, { useEffect } from 'react';
import MenuBarItem from './menuBarItem/MenuBarItem';
import './MenuBar.css';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
// import { menuBarData2 } from '../../../Data/mainData/index'

function MenuBar(props) {

    useEffect(() => {
        new Swiper('.swiper-container-menu', {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            }
        })

    })
    const menuBarData2 = props.menuBarData2 ? props.menuBarData2 : [];
    const menuBarData = props.menuBarData || [];
    // console.log(menuBarData2, 'menuBarData2')

    return (
        <div className='menu-bar'>
            <div className="menu-bar1">

                <div className="swiper-container-menu">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div>
                                <MenuBarItem menuBarData={menuBarData.list1} />
                                <MenuBarItem menuBarData={menuBarData.list2} />
                            </div>

                        </div>
                        <div className="swiper-slide">
                            <div>
                                <MenuBarItem menuBarData={menuBarData.list3} />
                                <MenuBarItem menuBarData={menuBarData.list4} />
                            </div>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
            <div className="menu-bar2">
                {
                    menuBarData2.map((item, index) => {
                        return (
                            <div className="menu-bar2__box" key={index}>
                                {/* {`${item.icon}`} */}
                                <span className="iconfont menu-bar2__icon" style={{ color: `${item.color}` }}>{`${item.icon}`}</span>
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