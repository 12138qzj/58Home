import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Tab from './tab/Tab';
import './bottom.css';
class Bottom extends Component {
    state = {}
    ChanegPage(e) {
        console.log(this, e.target);
        console.log(e.detail);
        console.log(e);
        // <Link to="/" />


    }
    render() {
        return (
            <ul className="Botton-warper" onClick={(event) => {
                this.ChanegPage(event);
            }}>
                <li className="Botton-warper-warp" key="1">
                    <Link to='/main'>

                        <div className="icon" style={{ backgroundPosition: "1px 0px" }} ></div>
                        <div className="planet">
                            首页
                    </div>
                    </Link>

                </li>
                <li className="Botton-warper-warp" key="2">
                    <Link to='/server'>

                        <div className="icon" style={{ backgroundPosition: "-63px 0px" }}></div>
                        <div className="planet">
                            全部服务
                    </div>
                    </Link>

                </li>
                <li className="Botton-warper-warp" key="3">
                    <Link to='/info'>
                        <div className="icon" style={{ backgroundPosition: "-93px 0px" }}></div>
                        <div className="planet">
                            消息
                    </div>
                    </Link>

                </li>

                <li className="Botton-warper-warp" key="4">
                    <Link to='/home'>

                        <div className="icon" style={{ backgroundPosition: "-125px 0px" }}></div>
                        <div className="planet">
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