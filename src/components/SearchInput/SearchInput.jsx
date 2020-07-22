import React, { Component } from 'react';
import './SearchInput.css'
import imgJiahao from '../../assets/images/加号.png'
import imgPlace from '../../assets/images/定位.png'
import imgSearch from '../../assets/images/搜索.png'
class SearchInput extends Component {
    state = {}
    render() {
        return (
            <div className="search" >
                <div className="search-input">
                    <div className="search-place">
                        <img className='location-img' src={imgPlace}></img>
                        <p className="location">南昌</p>
                        <p className='search-border'>
                            <img className='search-img' src={imgSearch}></img>
                        </p>
                        <input type="text" placeholder='擦玻璃' /> 
                    </div>
                </div>
                <img className="search-jiahao" src={imgJiahao}></img>
            </div>
        );
    }
}


export default SearchInput;