import React, { useState,useEffect, memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators'
import * as detailactionTypes from '../details/store/actionCreators'


import Scroll from '../../baseUI/scroll/index'
// import axios from 'axios';
// import {mainData} from '../../api/mock.js';
// import { reqmain } from '../../api/index.js';


import SearchInput from '../../components/SearchInput/SearchInput';
import Classify from '../../components/main/classify/Classify';
import RotationChart from '../../components/main/rotationChart/RotationChart'
import MenuBarItem from '../../components/main/menuBar/MenuBar'
import ImgList from '../../components/main/imgList/ImgList';
import HomeService from '../../components/main/homeService/HomeService'
import FrameLayout from '../../components/main/frameLayout/FrameLayout';
import MainBottomChoose from '../../components/mainbottomchoose/MainBottomChoose';

import MainBottomChooseCopy from '../../components/miainBottomChooseCopy/MiainBottomChooseCopy';

import MainPopup from '../../components/mainPopup/MainPopup';
import './main.css'

function Main(props) {

    const { maindata, orderdata, index } = props;
    const { getMainDataDispatch, changeIndexData, getDetailDataDispatch } = props;
    const { classify, menuBarData, menuBarData2, rotationImg } = maindata;

    const [Display,setDisplay]=useState(0);
    useEffect(() => {
        changeIndexData(0);
    }, [index])
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch();
            console.log("******")
        }
        if (!orderdata.length) {
            getDetailDataDispatch();
        }

    }, [])
    console.log("........", maindata.length)
    return (
        <>
            <SearchInput />
            <div className="main">
                <Scroll direction={"vertical"} refresh={false} onScroll={(e)=>{
                    console.log("滚动高度.",e)
                    if(e.y<-1142)
                    setDisplay(1)
                    else
                    setDisplay(0)

                }}>
                    <div>
                        <div className="main-padding">
                        <Classify classify={classify} />
                            <RotationChart rotationImg={rotationImg} />
                            <MenuBarItem menuBarData2={menuBarData2} menuBarData={menuBarData} />
                            <ImgList />
                            <HomeService />
                            <FrameLayout />
                        </div>
                        <MainBottomChoose />
                    </div>
                </Scroll>
            </div>
            <MainBottomChooseCopy display={Display}/>
            <MainPopup/>

        </>
    );
}

const mapStateToProps = (state) => ({
    maindata: state.main.maindata,
    orderdata: state.order.orderdata,
    index: state.main.index
})
const mapDispatchToProps = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actionTypes.getMainData())
        },
        getDetailDataDispatch() {
            dispatch(detailactionTypes.initorderData())
        },
        changeIndexData(newIndex) {
            dispatch(actionTypes.changeIndexData(newIndex))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
