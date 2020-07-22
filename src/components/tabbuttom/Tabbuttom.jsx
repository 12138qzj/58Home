import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Tab from './tab/Tab';
import './bottom.css';
class Bottom extends Component {
    state = {
        current:0
    }
    ChanegPage(e,index,a) {
        console.log(this.state, index,e);
        this.setState({
            current:e
        })
    }
    render() {
        return (
            <ul className="Botton-warper" >
                <li className="Botton-warper-warp" key="1" 
                onClick={this.ChanegPage.bind(this,0)}>
                <Link to='/main' style={{textDecoration:"none"}}>
                    {/*  */}
                    <div >
                        <div className="icon" style={
                            this.state.current===0?
                            {backgroundPosition:"0rem -.833rem"}
                            :{backgroundPosition:"0rem 0px"}} ></div>
                        <div className="planet" style={this.state.current===0?{color:"#ec564b"}:{}}>
                                首页
                        </div>
                    </div>
                    </Link>

                </li>
                <li className="Botton-warper-warp" key="2"
                onClick={this.ChanegPage.bind(this,1)}>
                    <Link to='/server' style={{textDecoration:"none"}}>
                        {/* style={{ backgroundPosition: "-1.685rem 0px" }} */}
                        <div className="icon" style={
                            this.state.current===1?
                            {backgroundPosition:"-1.685rem -.833rem"}:
                            {backgroundPosition:"-1.685rem 0px"}}></div>
                        <div className="planet"style={this.state.current===1?{color:"#ec564b"}:{}}>
                            全部服务
                    </div>
                    </Link>

                </li>
                <li className="Botton-warper-warp" key="3"
                onClick={this.ChanegPage.bind(this,2)}>
                <Link to='/info' style={{textDecoration:"none"}}>
                {/* style={{backgroundPosition:"-93px 0px"}} */}
                    <div className="icon" 
                    style={
                        this.state.current===2?
                        {backgroundPosition:"-2.528rem -.833rem"}:
                        {backgroundPosition:"-2.528rem 0px"}}></div>
                    <div className="planet"style={this.state.current===2?{color:"#ec564b"}:{}} >
                            消息
                    </div>
                </Link>

                </li>

                <li className="Botton-warper-warp" key="4"
                onClick={this.ChanegPage.bind(this,3)}>
                <Link to='/my' style={{textDecoration:"none"}}>

                    <div className="icon" 
                    style={
                        this.state.current===3?
                        {backgroundPosition:"-3.333rem -.833rem"}:
                        {backgroundPosition:"-3.333rem 0px"}}></div>
                    <div className="planet" style={this.state.current===3?{color:"#ec564b"}:{}}>
                            我的
                    </div>
                </Link>

                </li>
                {/* <Tab text=/>
                <Tab/>
                <Tab/>
                <Tab/> */}
            </ul>
        );
    }
}

export default withRouter(Bottom);