import React, { useEffect,  memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from './store/actionCreators'


import SearchInput from '../../components/SearchInput/SearchInput';
import Classify from '../../components/main/classify/Classify';
import RotationChart from '../../components/main/rotationChart/RotationChart'
import MenuBarItem from '../../components/main/menuBar/MenuBar'
import ImgList from '../../components/main/imgList/ImgList';
import HomeService from '../../components/main/homeService/HomeService'
import FrameLayout from '../../components/main/frameLayout/FrameLayout';
import MainBottomChoose from '../../components/mainbottomchoose/MainBottomChoose';
import './main.css'

function Main(props) {
    
    const { maindata ,index} = props; 
    const { getMainDataDispatch,changeIndexData } = props; 
    const { classify, menuBarData, menuBarData2, rotationImg } = maindata;

    useEffect(()=>{
        changeIndexData(0);
    },[index])
    useEffect(()=> {
        if(!maindata.length) {
            getMainDataDispatch();
        }

    },[])
    return (
        <>
        <SearchInput />
        <div className='main'>
            <Classify classify={classify}/>
            <RotationChart rotationImg={rotationImg}/>
            <MenuBarItem menuBarData2={menuBarData2} menuBarData={menuBarData}/>
            <ImgList />
            <HomeService/>
            <FrameLayout/>
        </div>
        <MainBottomChoose/>
        </>
    );
}
  
const mapStateToProps = (state) => ({
    maindata: state.main.maindata,
    index:state.main.index
})
const mapDispatchToProps = (dispatch) => {
    return {
        getMainDataDispatch() {
            dispatch(actionTypes.getMainData())
        },
        changeIndexData(newIndex){
            dispatch(actionTypes.changeIndexData(newIndex))
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(memo(Main))
