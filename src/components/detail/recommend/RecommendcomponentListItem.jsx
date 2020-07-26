import React from 'react';
import PropTypes from 'prop-types';
import {RecommendListItem} from './recommend.style.js'




const RecommendcomponentListItem=(props)=>{
    
    return(
        <RecommendListItem>
            <img  data-src="https://images.daojia.com/dop/custom/0c20ee11fa448b830c46f21d5fe0d456.png?x-oss-process=image/auto-orient,0/format,webp" src="https://images.daojia.com/dop/custom/0c20ee11fa448b830c46f21d5fe0d456.png?x-oss-process=image/auto-orient,0/format,webp" lazy="loaded"/>
            <div className="recommend-list-card__title">日常保洁</div>
            <div className="recommend-list-card__describe">上门保洁随时约</div>
            <div className="recommend-list-card__price">80元起</div>
        </RecommendListItem>
    )
}
export default RecommendcomponentListItem;
