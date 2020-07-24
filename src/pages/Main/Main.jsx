import React, { Component } from 'react';
import axios from 'axios';

import {mainData} from '../../api/mock.js';
import { reqmain } from '../../api/index.js';

import SearchInput from '../../components/SearchInput/SearchInput';
import Classify from '../../components/main/classify/Classify';
import RotationChart from '../../components/main/rotationChart/RotationChart'
import MenuBarItem from '../../components/main/menuBar/MenuBar'
import ImgList from '../../components/main/imgList/ImgList';
import HomeService from '../../components/main/homeService/HomeService'
import FrameLayout from '../../components/main/frameLayout/FrameLayout';
import MainBottomChoose from '../../components/mainbottomchoose/MainBottomChoose';
import './main.css'

class Main extends Component {
    state = {}
    componentDidMount() {
        reqmain().then((res) => {
            if(res.data.success) {
                console.log('成功啦',res.data)
                this.setState({
                    classify: res.data.data.classify,
                    rotationImg: res.data.rotationImg,
                    menuBarData: res.data.menuBarData,
                    menuBarData2: res.data.menuBarData2
                })
            }else{
                console.log('失败了', res.data)
                this.setState({
                    classify: [],
                    rotationImg: [],
                    menuBarData: [],
                    menuBarData2: []
                })
            }
            console.log('object', res)
        })
    }
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
            <MainBottomChoose/>
            </>
            

        );
    }
}

export default Main;
