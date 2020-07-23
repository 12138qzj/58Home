import React, { Component } from 'react';
import './main.css'
import SearchInput from '../../components/SearchInput/SearchInput';
import Classify from '../../components/main/classify/Classify';
import RotationChart from '../../components/main/rotationChart/RotationChart'

import MenuBarItem from '../../components/main/menuBar/MenuBar'
import ImgList from '../../components/main/imgList/ImgList';
import HomeService from '../../components/main/homeService/HomeService'
import FrameLayout from '../../components/main/frameLayout/FrameLayout';

import MainBottomChoose from '../../components/mainbottomchoose/MainBottomChoose';

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

                
                {/* <div style={{height:"20rem" , width:"10rem" , background:"pink"}}> */}

                {/* </div> */}
                <HomeService/>
                <FrameLayout/>
            </div>
            <MainBottomChoose/>
            </>
            

        );
    }
}

export default Main;
