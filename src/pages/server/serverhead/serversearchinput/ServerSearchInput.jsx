import React, { Component } from 'react';
import './serversearchinput.css'
import imgJiahao from '../../../../assets/images/serveradd.png'
import imgPlace from '../../../../assets/images/定位.png'
import imgSearch from '../../../../assets/images/搜索.png'
class ServerSearchInput extends Component {
    state = {}
    render() {
        const {handlenOclick}=this.props;
        return (
            <div className="server-search">
                <div className="server-search-input">
                    <div className="server-search-place">
                       
                        <p className='server-search-border'>
                            <img className='server-search-img' src={imgSearch}></img>
                        </p>
                        <input type="text" placeholder='擦玻璃' style={{fontSize:"11px"}} /> 
                    </div>
                </div>
                <img className="server-search-jiahao" src={imgJiahao} onClick={()=>{handlenOclick()}}></img>
            </div>
        );
    }
}


export default ServerSearchInput;