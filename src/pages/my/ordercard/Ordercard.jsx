import React, { PureComponent } from 'react';
import './ordercard.css'
class Ordercaed extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <div className="order-icon">
                <div className="img"></div>     
                <div className="text">待确认</div>           
            </div>
         );
    }
}
 
export default Ordercaed;