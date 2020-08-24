import React, { useState, useEffect, memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import LazyLoad, { forceCheck } from 'react-lazyload';

import * as actionTypes from './store/actionCreators'
import * as detailactionTypes from '../details/store/actionCreators'

import Scroll from '../../baseUI/scroll/index.jsx'


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
import loading from '../../assets/images/loading.gif';
import './main.css'

function Main(props) {

    const { maindata, orderdata, index, ListItemData, listOffset, uploading } = props;
    const { getMainDataDispatch, changeIndexData, getDetailDataDispatch, pullUpRefresh, getrecentNumData } = props;
    const { classify, menuBarData, menuBarData2, rotationImg } = maindata;
    const [Display, setDisplay] = useState(0);
    const [Helpdisplay, setHelpdisplay] = useState(false);
    
    useEffect(() => {
        changeIndexData(0);
    }, [index])
    // useEffect(() => {
    //     getrecentNumData()
    // },[])
    useEffect(() => {
        if (!maindata.length) {
            getMainDataDispatch();
        }
        if (!orderdata.length) {
            getDetailDataDispatch();
        }

    }, [])
    const handlePullUp = () => {
        pullUpRefresh(ListItemData === '', listOffset);
    };

    const handlePullDown = () => {
        // pullDownRefresh(ListItemData, listOffset);
    };
    const handleOnclick = () => {
        setHelpdisplay(!Helpdisplay)
    }
    // console.log("........", maindata.length)
    // console.log("........主页下面的数据", ListItemData, listOffset, uploading)

    return (
        <>
            <SearchInput handleOnclick={()=>{handleOnclick()}} SearchBoxhandleOnclick={() => props.history.push("/search")}/>

            <div className="main">
                <Scroll direction={"vertical"} refresh={false} onScroll={(e) => {
                    // console.log("滚动高度.",e)
                    if (e.y < -1142)
                        setDisplay(1)
                    else
                        setDisplay(0)
                    forceCheck();
                }}
                    pullUp={handlePullUp}
                    pullDown={handlePullDown}
                    pullUpLoading={uploading}
                >
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
                        <div className="loading-img" style={uploading ? {} : { display: "none" }}><img src={loading} alt="" /><span>加载中...</span> </div>
                    </div>
                </Scroll>
            </div>
            {/* { enterLoading ? <EnterLoading><Loading></Loading></EnterLoading> : null} */}
            <MainBottomChooseCopy display={Display} />
            <MainPopup handleOnclick={() => { handleOnclick() }} display={Helpdisplay} />

        </>
    );
}

const mapStateToProps = (state) => ({
    maindata: state.main.maindata,
    orderdata: state.order.orderdata,
    index: state.main.index,
    ListItemData: state.main.ListItemData,
    listOffset: state.main.listOffset,
    uploading: state.main.Uploading,
    recentnum: state.order.recentnum,

})
const mapDispatchToProps = (dispatch) => {
    return {
        getrecentNumData() {
            dispatch(detailactionTypes.getrecentNum())
        },
        getMainDataDispatch() {
            dispatch(actionTypes.getMainData())
        },
        getDetailDataDispatch() {
            dispatch(detailactionTypes.initorderData())
        },
        changeIndexData(newIndex) {
            dispatch(actionTypes.changeIndexData(newIndex))
        },
        // 滑到最底部刷新部分的处理
        pullUpRefresh(frist, count) {
            dispatch(actionTypes.changePullUpLoading(true));
            if (frist) {
                dispatch(actionTypes.refreshMoreMainList());
            } else {
                dispatch(actionTypes.refreshMoreMainList());
            }
        },
        //顶部下拉刷新
        // pullDownRefresh(frist, alpha) {
        //     dispatch(changePullDownLoading(true));
        //     dispatch(changeListOffset(0));
        //     if(category === '' && alpha === ''){
        //     dispatch(getHotSingerList());
        //     } else {
        //     dispatch(getSingerList());
        //     }
        // }

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Main))
