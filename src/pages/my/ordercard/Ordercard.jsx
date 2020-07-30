import React, { PureComponent } from 'react';
import './ordercard.css'
class Ordercaed extends PureComponent {
    state = {  }
    render() {
        const {bgp,bgptext,url}=this.props;
        const{ handleonclick}=this.props;
        return ( 
            <div className="order-icon" onClick={()=>{handleonclick(url)}}>
                <div className="img" style={{backgroundPosition:`${bgp}`}}></div>     
                <div className="text">{bgptext}</div>           
            </div>
         );
    }
}
 
export default Ordercaed;