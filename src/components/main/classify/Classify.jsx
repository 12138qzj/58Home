import React, { Component } from 'react';
import  { withRouter } from 'react-router-dom';

import Scroll from '../../../baseUI/scroll/index'
import './Classify.css';
class Classify extends Component {
    state = {}
    handleclick(id){
        // console.log("object",encodeURIComponent(id))
        // this.props.history.push(`/detail/${id}`)

        
        this.props.history.push(`/detail?data=${encodeURIComponent(id)}`)
        // console.log(this.props)
    }
    render() {
        const classifyData = this.props.classify || [];
        return (
            <Scroll direction={"horizental"} refresh={true}>
                <div>

                <div className="classify">
                    <div className="classify-box">
                        {
                            classifyData.map((item, index) => {
                                return (
                                    <span className="classify-item" key={index} onClick={()=>{
                                        this.handleclick(item)
                                    }}>
                                        {item}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
                </div>
            </Scroll>

        );
    }
}
export default withRouter(Classify);