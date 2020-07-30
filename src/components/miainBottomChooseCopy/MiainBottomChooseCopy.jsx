import React , {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';


import {Top,TopItem} from '../mainbottomchoose/mainbottomchoose.style';
// import {TopItem} from './topitem/TopItem.js';

// import { useState } from 'react';


export const Topcopy = styled.div `
    position:fixed;
    width:100%;
    top:1.38rem;
    z-index:2;
`;

const MainBottomChooseCopy=(props)=>{
    // display
    const {display}=props;
    return (
        <Topcopy style={display===0?{display:"none"}:{}}>
            <Top >
                <NavLink to="/home/main" activeClassName="selected">
                    <TopItem>
                        <div className="personal-info-card">
                            <div className="personal-info-num">生活百科</div>
                            <div className="personal-info-num-name">爱生活</div>
                        </div>
                    </TopItem>
                </NavLink>
                {/*  */}
                <NavLink to="/a" activeClassName="selected">
                <TopItem>
                        <div className="personal-info-card">
                            <div className="personal-info-num">健康生活</div>
                            <div className="personal-info-num-name">关注健康</div>
                        </div>
                    </TopItem>
                </NavLink>
                <NavLink to="/b" activeClassName="selected">
                <TopItem>
                        <div className="personal-info-card">
                            <div className="personal-info-num">宝爸宝妈</div>
                            <div className="personal-info-num-name">育儿指南</div>
                        </div>
                    </TopItem>
                </NavLink>
                <NavLink to="/c" activeClassName="selected">
            <TopItem>
                    <div className="personal-info-card">
                        <div className="personal-info-num">家居改造</div>
                        <div className="personal-info-num-name">
                             <span>该造家</span> </div>
                    </div>
                </TopItem>
            </NavLink>
            </Top>
        </Topcopy>
           
    )
}
export default MainBottomChooseCopy;

MainBottomChooseCopy.prototype={
    // title:PropTypes.string.isRequired,
    // onBack:PropTypes.func.isRequired,
}