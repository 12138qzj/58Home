import React, { Component } from 'react';
import './RotationChart.css';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";

class RotationChart extends Component {
    componentDidMount() {
        setTimeout(() => {
            new Swiper('.swiper-container', {
                loop: true,
                autoplay: {
                    delay: 1000,
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true,//修改swiper的父元素时，自动初始化swiper
                },
                pagination: {
                    el: '.swiper-pagination',
                    type: 'bullets',
                    clickable:true
                }
            })
        }, 500);
    }
    render() {
        const rotationImg = this.props.rotationImg || [];
        return (
            <div className="rotation-box">
                <div className="swiper-container">
                    <div className="swiper-wrapper ">
                        {
                            rotationImg.map((item, index) => {
                                return (
                                    <div className="swiper-slide" key={index}>
                                        <a href={item.linkUrl} >
                                            <img className='rotationChart-img' src={item.picUrl} alt="" />
                                        </a>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        );
    }
}

export default RotationChart;