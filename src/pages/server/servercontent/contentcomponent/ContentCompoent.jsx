import React, { PureComponent } from 'react';
import ServerrightImg from '../../../../common/serverrightimg/ServerrightImg';
import './contentcomponent.css';
class ContentComponent extends PureComponent {
    state = {  }
    render() { 
        return ( 
            <div className="right-item__content">
                <div className="right-item__title">
                   <span></span>日常保洁 <span></span>
                </div>
                <ServerrightImg/>
            </div>
         );
    }
}
 
export default ContentComponent;