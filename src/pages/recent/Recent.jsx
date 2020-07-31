import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { renderRoutes } from "react-router-config";
import { RecentTab, BlankRecent, RecentCotent } from './style.js'

export const Recent = (props) => {
    const { route } = props;
    const handleClick = () => {
        props.history.push('/home/my')
    }
    return (
        <div>
            <RecentTab>
                <div className="iconfont order-tab__icon" onClick={() => {handleClick()}}>&#xe670;</div>
                <div className="order-tab__title">最近浏览</div>
            </RecentTab>
            <BlankRecent>
                <div className="blank-recent__box"></div>
                <p className='blank-recent__text'>木有最近浏览记录，快去逛逛吧～</p>
            </BlankRecent>
            <RecentCotent>
                
            </RecentCotent>

            {renderRoutes(route.routes)}
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Recent)
