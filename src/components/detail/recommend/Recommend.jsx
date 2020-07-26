import React from 'react';
import PropTypes from 'prop-types';
import {DetailPageTitle} from '../detailpagetitle.stye.js'
import RecommendcomponentListItem from './RecommendcomponentListItem';
import {RecommendList,RecommendListItem} from './recommend.style.js'



const DetailItemPage=(props)=>{

    return (
        <DetailPageTitle data-rtab="推荐">
            <div className="detail-title"><span>推荐</span></div>
            {/* <div className="recommend-img">
                <img src="https://images.daojia.com/pic/commodity/online/f83af8e6a658dadc9759242e3a1ad1c0.png?x-oss-process=image/auto-orient,0/format,webp" alt=""/>
            </div> */}
            <RecommendList>
                <RecommendcomponentListItem/>
                <RecommendcomponentListItem/>
                <RecommendcomponentListItem/>
                <RecommendcomponentListItem/>

            </RecommendList>

        </DetailPageTitle>
    )
}
export default DetailItemPage;