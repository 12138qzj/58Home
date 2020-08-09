import React, { Component } from 'react';
import imgSearch from '../../assets/images/搜索.png'

import {SearchBoxstyle} from './style.js'
class SearchBox extends Component {
    state = {}
    render() {
        const {handlenOnclick,icon}=this.props;
        return (
            <SearchBoxstyle>
                <div className="server-search-input">
                    <div className="server-search-place">
                        <p className='server-search-border'>
                            <img className='server-search-img' src={imgSearch}></img>
                        </p>
                        <input type="text" placeholder='擦玻璃' style={{fontSize:"11px"}} /> 
                    </div>
                </div>
                {icon()}
                {/* <img className="server-search-jiahao" src={imgJiahao} onClick={()=>{handlenOclick()}}></img> */}
            </SearchBoxstyle>
        );
    }
}


export default SearchBox;