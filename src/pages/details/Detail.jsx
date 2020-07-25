import React, { useState ,useEffect, memo} from 'react';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import HeadComponent from '../../common/headcomponent/HeadComponent';

// ../../../Data/mainData/index
import { rotationImg } from '../../Data/mainData/index'
import {Rotation,Title} from './detail.js'

const Detail=(props)=>{

    const handleback=()=>{

    }
    // =null;
   
    return(
        <>
            <HeadComponent title="擦玻璃" handleback={()=>{handleback()}}/>
            <div>
            <Rotation>

                <div className="swiper-container">
                    <div className="swiper-wrapper ">
                        {
                            rotationImg.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <a href={item.linkUrl} >
                                            <img className='rotationChart-img' src={item.picUrl} alt="" width="100%" height="100%" />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </Rotation>

            </div>
                     
            <Title>
                <div className="price">
                    ￥ <span>14</span>.00/平起
                </div>
                <div className="type">
                    擦玻璃
                </div>
                <div className="describe">
                    <span>双面精细擦窗，服务有标准，清洁看得见</span>
                </div>
                <div className="tabs">
                    <span>
                        随时预约
                    </span>
                    <span>
                        专业清洗工具
                    </span><span>
                        阿姨专业培训
                    </span>
                </div>
            </Title>
        </>
        
    )
}

Detail.mySwiper= memo(()=>{
    return new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        pagination: {
            el: '.swiper-pagination'
        }
    })
})
export default Detail;