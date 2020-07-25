import React,{Component} from 'react';
import './Classify.css';
class Classify extends Component {
    state={}
    render() { 
        const classifyData =  this.props.classify || [];
        return ( 
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
         );
    }
}
export default Classify;