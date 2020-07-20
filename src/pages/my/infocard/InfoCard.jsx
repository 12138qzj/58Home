import React, { PureComponent } from 'react';
import './Infocard.css'
class InfoCard extends PureComponent {
    state = {  }
    render() { 
        const {num,num_name}=this.props;
        return ( 
            <div className="personal-info-card">
                <div className="personal-info-num">{num}</div>
                <div className="personal-info-num-name">{num_name}</div>
            </div>
         );
    }
}
 
export default InfoCard;