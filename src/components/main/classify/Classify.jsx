import React from 'react';
import  { withRouter } from 'react-router-dom';

import Scroll from '../../../baseUI/scroll/index'
import './Classify.css';
const Classify =(props)=>{
// class Classify extends Component {
    // state = {}
    const handleclick=(id)=>{
        // console.log("object",encodeURIComponent(id))
        // this.props.history.push(`/detail/${id}`)

        // omponentDidMount() {
        //     new Swiper('.swiper-container-mainhead', {
        //         slidesPerView :'auto', 
        //         width:300
        //     })
        // }
        
        props.history.push(`/detail?data=${encodeURIComponent(id)}`)
        // console.log(this.props)
    }
    // render() {
        const classifyData = props.classify || [];
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
                                                    handleclick(item)
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
export default withRouter(Classify);
