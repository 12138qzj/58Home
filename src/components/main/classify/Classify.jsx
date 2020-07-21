import React,{Component} from 'react';
import {classify} from '../../../Data/mainData/index'
import './Classify.css';
class Classify extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="classify">
                    <div className="classify-box">
                    {
                        classify.map((item, index) => {
                            return (
                                <span className="classify-item">
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