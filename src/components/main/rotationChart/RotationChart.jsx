import React, { Component } from 'react';
import './RotationChart.css';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
class RotationChart extends Component {
    state = {
        img: [{
            id: 1,
            picUrl: 'https://yanxuan.nosdn.127.net/e1d32c538a9fcf420411592746098ad2.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0',
            linkUrl: 'http://localhost:3000/main'
        },
        {
            id: 2,
            picUrl: 'https://yanxuan.nosdn.127.net/7e01b30c2c440e118cf09e14c7a69266.jpg?type=webp&imageView&quality=75&thumbnail=750x0',
            linkUrl: 'http://localhost:3000/main'
        },
        {
            id: 3,
            picUrl: 'https://yanxuan.nosdn.127.net/94408b4d014ce6774e8f768bdf9b6f60.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0',
            linkUrl: 'http://localhost:3000/main'
        }, {
            id: 4,
            picUrl: 'https://yanxuan.nosdn.127.net/e14d684c9dc43de2af5215c3d49b6870.jpg?type=webp&amp;imageView&amp;quality=75&amp;thumbnail=750x0',
            linkUrl: 'http://localhost:3000/main'
        }
        ]
    }
    componentDidMount() {
        this.initSwiper();
    }
    initSwiper() {
        this.mySwiper = new Swiper('.swiper-container', {
            loop: true,
            autoplay: {
                delay: 1000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                    clickable: true,
            }
        })
    }
    render() {
        return (
            <div className="box">
                <div className="swiper-container">
                    <div className="swiper-wrapper ">
                        {
                            this.state.img.map((item,index) => {
                                return (
                                    <div className="swiper-slide" key={item.id}>
                                        <a href={item.linkUrl} >
                                            <img src={item.picUrl} alt="" width="100%" height="100%" className="rotationChart-img"/>
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