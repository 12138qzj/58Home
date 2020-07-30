import React, {  Component } from 'react';
import { withRouter } from 'react-router-dom';
import './MenuBarItem.css';
// import Swiper from 'swiper';
// import "swiper/css/swiper.min.css";
// import {menuBarData} from '../../../../Data/mainData/index'

class MenuBarItem extends Component {
    state = {  }
    handleclick(id) {
        console.log("object",id)
        // this.props.history.push(`/detail/${id}`)
        this.props.history.push(`/detail?data=${encodeURIComponent(id)}`)
        // console.log(this.props)
    }
    
    render() {
        console.log("-11111----",this)

        const menuBarData = this.props.menuBarData || [];
        // console.log(menuBarData)\
        console.log("-----",this)
        const that=this;
        return ( 
            <div className='menu-item__box'>
            {
                menuBarData.map((item,index) => {
                    return (
                        <div className="item-box" key={index} 
                        onClick={() => {
                            that.handleclick(`${item.type}`)
                        }} 
                        >
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
 
export default withRouter(MenuBarItem)
