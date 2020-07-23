import React , {useState} from 'react';
import {NavLink} from 'react-router-dom';
import ListItemcomponent from './listitem/ListItemcomponent';
import PropTypes from 'prop-types';


import {Top,TopItem} from './mainbottomchoose.style.js';
// import {TopItem} from './topitem/TopItem.js';

// import { useState } from 'react';

const MainBottomChoose=(props)=>{

    return (
        <>
            <Top>

            <NavLink to="/main" activeClassName="selected">
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
                        <div className="personal-info-num-name">该造家</div>
                    </div>
                </TopItem>
            </NavLink>
            </Top>

            <ListItemcomponent/>
        </>
        // <div>
        //     <header className="main-header__title">fadsfe</header>
        // </div>
    )
}
export default MainBottomChoose;

MainBottomChoose.prototype={
    // title:PropTypes.string.isRequired,
    // onBack:PropTypes.func.isRequired,
}