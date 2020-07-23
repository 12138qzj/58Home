import React, { useState } from 'react';
import { Frame, FrameSale, FrameAd, FrameImgView, More } from './FrameLayout.style'
import './FrameLayout.style.js';
import ad_1 from '../../../../src/assets/images/ad_1.png';
import ad_2 from '../../../../src/assets/images/ad_2.png';
import ad_3 from '../../../../src/assets/images/ad_3.png';
import ad_4 from '../../../../src/assets/images/ad_4.png';
import ad_5 from '../../../../src/assets/images/ad_5.png';
import ad_6 from '../../../../src/assets/images/ad_6.png';
import ad_7 from '../../../../src/assets/images/ad_7.png';
import ad_8 from '../../../../src/assets/images/ad_8.png';

import service_1 from '../../../../src/assets/images/service_1.png';


function FrameLayout(props) {

    return (
        <Frame>
            <div className="frame-top">
                <FrameSale>
                    <div className="frame-sale__title">优惠专区</div>
                    <div className="frame-sale__hot">
                        <span className="iconfont logo" style={{ color: '#ff5348' }}>&#xe63f;</span>
                        <span className='text'>热销榜</span>
                    </div>
                </FrameSale>
                <FrameAd>
                    <div className="frame-ad__box">
                        <img src={ad_1} className='frame-ad__img' alt="" />
                    </div>
                    <div className="frame-ad__box">
                        <img src={ad_2} className='frame-ad__img' alt="" />
                    </div>
                    <div className="frame-ad__box">
                        <img src={ad_3} className='frame-ad__img' alt="" />
                    </div>
                    <div className="frame-ad__box">
                        <img src={ad_4} className='frame-ad__img' alt="" />
                    </div>
                </FrameAd>

                <FrameImgView>
                    <div className="frame-imgView">
                        <div className="frame-imgView__title">宝宝护理</div>
                        <div className="frame-imgView__box">
                            <img src={ad_5} alt="" className="imgView-name" />
                        </div>
                    </div>
                    <div className="frame-imgView">
                        <div className="frame-imgView__title"></div>
                        <div className="frame-imgView__box">
                            <img src={ad_5} alt="" className="imgView-name" />
                        </div>
                    </div>
                    <div className="frame-imgView">
                        <div className="frame-imgView__title">宝宝护理</div>
                        <div className="frame-imgView__box">
                            <img src={ad_5} alt="" className="imgView-name" />
                        </div>
                    </div>
                    <div className="frame-imgView">
                        <div className="frame-imgView__title">宝宝护理</div>
                        <div className="frame-imgView__box">
                            <img src={ad_5} alt="" className="imgView-name" />
                        </div>
                    </div>

                </FrameImgView>
            </div>

            <More>
                <div className="more-left">
                    <div className="more-left__service">更多服务</div>
                    <div className="more-left__check">查看更多</div>
                    <div className="more-left__slogan">愿生活更美好</div>
                </div>
                <div className="more-right">
                    <div className="more-right__box">
                        <div className="more-right__img">
                            <img src={service_1} alt="" className="img"/>
                        </div>
                        <div className="more-right__text">鞋服清洗</div>
                    </div>
                    <div className="more-right__box">
                        <div className="more-right__img">
                            <img src={service_1} alt="" className="img"/>
                        </div>
                        <div className="more-right__text">鞋服清洗</div>
                    </div>
                    <div className="more-right__box">
                        <div className="more-right__img">
                            <img src={service_1} alt="" className="img"/>
                        </div>
                        <div className="more-right__text">鞋服清洗</div>
                    </div>
                    <div className="more-right__box">
                        <div className="more-right__img">
                            <img src={service_1} alt="" className="img"/>
                        </div>
                        <div className="more-right__text">鞋服清洗</div>
                    </div>
                    <div className="more-right__box">
                        <div className="more-right__img">
                            <img src={service_1} alt="" className="img"/>
                        </div>
                        <div className="more-right__text">鞋服清洗</div>
                    </div>
                    <div className="more-right__box">
                        <div className="more-right__img">
                            <img src={service_1} alt="" className="img"/>
                        </div>
                        <div className="more-right__text">鞋服清洗</div>
                    </div>
                </div>
            </More>

        </Frame>
    )
}

export default React.memo(FrameLayout)