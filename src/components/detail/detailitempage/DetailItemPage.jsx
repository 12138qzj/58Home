import React from 'react';
import PropTypes from 'prop-types';
import {DetailPageTitle} from '../detailpagetitle.stye.js'


const DetailItemPage=(props)=>{

    return (
        <DetailPageTitle data-rtab="详情">
            <div className="detail-title"><span>详情</span></div>
            <div className="detail-img">
                <img src="https://images.daojia.com/pic/commodity/online/f83af8e6a658dadc9759242e3a1ad1c0.png?x-oss-process=image/auto-orient,0/format,webp" alt="" width="100%"/>
            </div>
        </DetailPageTitle>
    )
}
export default DetailItemPage;