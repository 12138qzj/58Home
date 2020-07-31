import React ,{memo} from 'react';
import { connect } from 'react-redux';
import LazyLoad ,{forceCheck}from 'react-lazyload';


import list_item_img from '../../../assets/images/list_item_img.png';
import PropTypes from 'prop-types';

import { List, TextContent } from './ListItem.style.js';

const ListItemcomponent = (props) => {
    const {ListItemData}=props;
    return (
        <>
            {
                !ListItemData?"":
                ListItemData.map((item,index)=>{
                    return(
                        <List key={index}>
                            <TextContent>
                                <div className="ListItem-title">
                                    {item.title}
                                </div>
                                <div className="ListItem-label">
                                    {item.label}
                                </div>
                            </TextContent>
                            {/* {item.imgsrc} */}
                            <div className="ListItem-img">
                                <div className="ListItem-content__img">
                                <LazyLoad height={100}>
                                    <img src={item.imgsrc}  alt="" />
                                </LazyLoad>
                                    {/* <img src={item.imgsrc}  alt="" /> */}
            
                                </div>
                            </div>
                        </List>
                    )
                })
            }
            <p className="spanblack"></p>
        </>

    )
}


const mapStateToProps = (state) => ({
    ListItemData:state.main.ListItemData,


})
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
        // getMainDataDispatch() {
        //     dispatch(actionTypes.getMainData())
        // },
        // getDetailDataDispatch() {
        //     dispatch(detailactionTypes.initorderData())
        // },
        // changeIndexData(newIndex) {
        //     dispatch(actionTypes.changeIndexData(newIndex))
        // },
        // // 滑到最底部刷新部分的处理
        // pullUpRefresh(frist, count) {
        //     dispatch(actionTypes.changePullUpLoading(true));
        //     if(frist){
        //     dispatch(actionTypes.refreshMoreMainList());
        //     } else {
        //     dispatch(actionTypes.refreshMoreMainList());
        //     }
        // },
 
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(ListItemcomponent))

ListItemcomponent.prototype = {
    // title:PropTypes.string.isRequired,
    // onBack:PropTypes.func.isRequired,
}