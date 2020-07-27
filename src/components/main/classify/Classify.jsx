import React, { Component } from 'react';
import Scroll from '../../../baseUI/scroll/index'
import './Classify.css';
class Classify extends Component {
    state = {}
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
                                    <span className="classify-item" key={index}>
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
export default Classify;