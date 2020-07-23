import React, { Component } from 'react';
import './main.css'
import SearchInput from '../../components/SearchInput/SearchInput';
import Classify from '../../components/main/classify/Classify';
import RotationChart from '../../components/main/rotationChart/RotationChart'
import MenuBarItem from '../../components/main/menuBar/MenuBar'
import ImgList from '../../components/main/imgList/ImgList';
import HomeService from '../../components/main/homeService/HomeService'
import FrameLayout from '../../components/main/frameLayout/FrameLayout';

class Main extends Component {
    state = {}
    render() {
        return (
            <>
            <SearchInput />
            <div className='main'>
                <Classify />
                <RotationChart />
                <MenuBarItem />
                <ImgList />
                <HomeService/>
                <FrameLayout/>
            </div>
            </>
        );
    }
}

export default Main;
