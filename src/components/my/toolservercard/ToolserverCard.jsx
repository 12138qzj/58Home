import React, { PureComponent } from 'react';
import  './toolservercard.css';
import loaction from '../../../resources/image/loaction.png';
class ToolserverCard extends PureComponent {
    state = {  }
    render() { 
        const {name}=this.props
        return ( 
            <div className="tool-server-card-warp">
                
                <div className="tool-server-card-img">
                    <img src={loaction} alt=""/>
                </div>
                <div className="tool-server-card-text">
                    {name}
                </div>
            </div>
         );
    }
}
 
export default ToolserverCard;