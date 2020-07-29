import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";

import Scroll from '../../../baseUI/scroll/index'
import './Classify.css';
class Classify extends Component {
    state = {}
    handleclick(id) {
        // console.log("object",encodeURIComponent(id))
        // this.props.history.push(`/detail/${id}`)
        this.props.history.push(`/detail?data=${encodeURIComponent(id)}`)
        // console.log(this.props)
    }
    omponentDidMount() {
        new Swiper('.swiper-container-mainhead', {
            slidesPerView :'auto', 
            width:300
        })
    }
    render() {
        const classifyData = this.props.classify || [];
        return (
            <Scroll direction={"horizental"} refresh={true}>

                <div className="classify">
                    <div className="classify-box">
                        <div className="swiper-container-mainhead" >
                            <div className="swiper-wrapper" >
                                {
                                    classifyData.map((item, index) => {
                                        return (
                                            <div className="swiper-slide dd" key={index}>
                                                <span className="classify-item" key={index} onClick={() => {
                                                    this.handleclick(item)
                                                }}>
                                                    {item}
                                                </span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </Scroll >

        );
    }
}
export default withRouter(Classify);
