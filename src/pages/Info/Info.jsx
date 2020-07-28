import React, { useEffect, memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from '../Main/store/actionCreators'
import './Info.css'
import InfoItem from '../../components/InfoItem/InfoItem'
import Scroll from '../../baseUI/scroll/index'
function Info(props) {

    const { index } = props;
    const { changeIndexData } = props;


    useEffect(() => {
        changeIndexData(2)
    }, [index])
    return (
        <div className='infomation'>
            <div className="header">
                <p>我的消息</p>
                <span>帮助中心</span>
            </div>

            <div className="detail-scroll-warp">
            <Scroll direction={"vertical"} refresh={true}>
                    <div className="content">
                        <div className="info-item">
                            <img className="item-img" src={'https://static.daojia.com/assets/project/im/images/activity1.png'}></img>

                            <div className="item-info">
                                <div className="item-top">
                                    <p className="title">优惠促销</p>
                                </div>
                            </div>
                        </div>
                        <InfoItem />
                </div>
                <div className="loading-img"></div>
            </Scroll>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    // maindata: state.main.maindata,
    index: state.main.index
})
const mapDispatchToProps = (dispatch) => {
    return {
        changeIndexData(newIndex) {
            dispatch(actionTypes.changeIndexData(newIndex))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(Info))