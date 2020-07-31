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
            slidesPerView: 'auto',
            width: 300
        })
    }
    render() {
        const classifyData = this.props.classify || [];
        return (
            // <div className='clas' >
                <Scroll direction={"horizental"} refresh={true}>

                    <div className="classify">
                        <div className="classify-box">
                            {
                                classifyData.map((item, index) => {
                                    return (
                                        <span className="classify-item" key={index} onClick={() => {
                                            this.handleclick(item)
                                        }}>
                                            {item}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Scroll >
            // </div>


        );
    }
}
export default withRouter(Classify);
