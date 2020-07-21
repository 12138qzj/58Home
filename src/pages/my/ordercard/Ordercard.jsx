import React, { PureComponent } from 'react';
import './ordercard.css'
class Ordercaed extends PureComponent {
    state = {  }
    render() {
        const {bgp,bgptext}=this.props;
        return ( 
            <div className="order-icon">
                <div className="img" style={{backgroundPosition:`${bgp}`}}></div>     
                <div className="text">{bgptext}</div>           
            </div>
         );
    }
}
 
export default Ordercaed;