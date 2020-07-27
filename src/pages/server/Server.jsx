import React, { useEffect,  memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from '../Main/store/actionCreators'
import ServerContent from './servercontent/ServerContent';

import ServerSearchInput from './serverhead/serversearchinput/ServerSearchInput';
function Server(props){
    const {index}=props;
    const {changeIndexData}=props;
    useEffect(()=>{
        changeIndexData(1)
    },[index])

        return ( 
            <div>
                <ServerSearchInput/>
                <ServerContent/>
            </div>
         );
}
 
const mapStateToProps = (state) => ({
    index:state.main.index
})
const mapDispatchToProps = (dispatch) => {
    return {
        changeIndexData(newIndex){
            dispatch(actionTypes.changeIndexData(newIndex))
        }
    }
}
export default  connect(mapStateToProps,mapDispatchToProps)(memo(Server))

