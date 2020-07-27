import React, { Component,memo} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { connect } from 'react-redux';
import * as actionTypes from '../../pages/Main/store/actionCreators'

import Tab from './tab/Tab';
import './bottom.css';

class Bottom extends Component {
    state = {
        current:0
    }
    // ChanegPage(e,index,a) {
    //     this.setState({
    //         current:e
    //     })
    // }

    // useEffect(() => {
    //     // effect
    //     // return () => {
    //     //     cleanup
    //     // }
    // }, []);
    componentDidMount(){
        
    }
    render() {
        const {route,index}=this.props;
        const {changeIndexData}=this.props;
        return (
            <>
            <ul className="Botton-warper" >
                <li className="Botton-warper-warp" key="1" 
                onClick={()=>{changeIndexData(0)}}>
                <Link to='/home/main' style={{textDecoration:"none"}}
                >
                    {/*  */}
                    <div >
                        <div className="icon" style={
                            index===0?
                            {backgroundPosition:"0rem -.833rem"}
                            :{backgroundPosition:"0rem 0px"}} ></div>
                        <div className="planet" style={index===0?{color:"#ec564b"}:{}}>
                                首页
                        </div>
                    </div>
                    </Link>

                </li>
                <li className="Botton-warper-warp" key="2"
                onClick={()=>{changeIndexData(1)}}>
                    <Link to='/home/server' style={{textDecoration:"none"}}>
                        {/* style={{ backgroundPosition: "-1.685rem 0px" }} */}
                        <div className="icon" style={
                            index===1?
                            {backgroundPosition:"-1.685rem -.833rem"}:
                            {backgroundPosition:"-1.685rem 0px"}}></div>
                        <div className="planet"style={index===1?{color:"#ec564b"}:{}}>
                            全部服务
                    </div>
                    </Link>

                </li>
                <li className="Botton-warper-warp" key="3"
                onClick={()=>{changeIndexData(2)}}>
                <Link to='/home/info' style={{textDecoration:"none"}}>
                {/* style={{backgroundPosition:"-93px 0px"}} */}
                    <div className="icon" 
                    style={
                        index===2?
                        {backgroundPosition:"-2.528rem -.833rem"}:
                        {backgroundPosition:"-2.528rem 0px"}}></div>
                    <div className="planet"style={index===2?{color:"#ec564b"}:{}} >
                            消息
                    </div>
                </Link>

                </li>

                <li className="Botton-warper-warp" key="4"
                onClick={()=>{
                    changeIndexData(3);
                } }>
                <Link to='/home/my' style={{textDecoration:"none"}}>

                    <div className="icon" 
                    style={
                        index===3?
                        {backgroundPosition:"-3.333rem -.833rem"}:
                        {backgroundPosition:"-3.333rem 0px"}}></div>
                    <div className="planet" style={index===3?{color:"#ec564b"}:{}}>
                            我的
                    </div>
                </Link>

                </li>
                {/* <Tab text=/>
                <Tab/>
                <Tab/>
                <Tab/> */}
            </ul>
            {renderRoutes(route.routes)}

            </>
        );
    }
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
export default  connect(mapStateToProps,mapDispatchToProps)(memo(Bottom))

