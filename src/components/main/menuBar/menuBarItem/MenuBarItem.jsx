import React, {  Component } from 'react';
import './MenuBarItem.css';
// import {menuBarData} from '../../../../Data/mainData/index'

class MenuBarItem extends Component {
    state = {  }
    render() {
        const menuBarData = this.props.menuBarData || [];
        console.log(menuBarData)
        return ( 
            <div className='menu-item__box'>
            {
                menuBarData.map((item,index) => {
                    return (
                        <div className="item-box" key={index}>
                            <img src={item.picUrl} alt="" className="item-box__img"/>
                            <div className="item-box__text">{item.type}</div>
                        </div>
                    )
                })
            }
            </div>
         );
    }
}
 
export default MenuBarItem;