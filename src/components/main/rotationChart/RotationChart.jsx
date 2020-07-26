import React, { Component } from 'react';
import './RotationChart.css';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";

class RotationChart extends Component {
    componentDidMount() {
        new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 1000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable:true
            }
        })
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
                                            <img className='rotationChart-img' src={item.picUrl} alt="" width="100%" height="100%" />
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