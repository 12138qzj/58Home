import React, { useState,useEffect,  memo } from 'react';
// memo 缓存组件
import { connect } from 'react-redux';
import * as actionTypes from '../Main/store/actionCreators'
import ServerSearchInput from './serverhead/serversearchinput/ServerSearchInput';

import ServerContent from './servercontent/ServerContent';
import ServerPopup from '../../components/serverPopup/ServerPopup';

function Server(props){
    const {index}=props;
    const {changeIndexData}=props;

    const [serverDisplay,setserverDisplay]=useState(false)

    useEffect(()=>{
        changeIndexData(1)
    },[index])

    const handleonclick=()=>{
        setserverDisplay(!serverDisplay)
    }
        return ( 
            <div>
                <ServerSearchInput handlenOnclick={
                    handleonclick
                } SearchBoxhandleOnclick={() => props.history.push("/search")}/>
                <ServerContent/>
                <ServerPopup 
                display={serverDisplay} 
                handleOnclick={handleonclick}/>
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

