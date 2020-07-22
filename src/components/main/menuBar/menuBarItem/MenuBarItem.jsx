import React, {  Component } from 'react';
import './MenuBarItem.css';
import {menuBarData} from '../../../../Data/mainData/index'

class MenuBarItem extends Component {
    state = {  }
    render() {
        console.log(menuBarData)
        return ( 
            <div className='menu-item__box'>
            {
                menuBarData.map((item,index) => {
                    return (
                        <div className="server-right__img" key={index}>
                            <img src={item.picUrl} alt="" className="server-right-img__img"/>
                            <div className="server-right__text">{item.type}</div>
                        </div>
                    )
                })
            }
            </div>
         );
    }
}
 
export default MenuBarItem;