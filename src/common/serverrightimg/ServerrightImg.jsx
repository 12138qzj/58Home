import React, { PureComponent } from 'react';
import './serverrightimg.css';

class ServerrightImg extends PureComponent {
    state = {  }
    render() {
        const{ title_item_src,title_item_name } =this.props;
        return ( 
            <div className="server-right__img">
                <img src={title_item_src} alt="" className="server-right-img__img"/>
                <div className="server-right__text">{title_item_name}</div>
            </div>
         );
    }
}
 
export default ServerrightImg;