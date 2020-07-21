import React, { PureComponent } from 'react';
import ServerrightImg from '../../../../common/serverrightimg/ServerrightImg';
import './contentcomponent.css';
class ContentComponent extends PureComponent {
    state = {  }
    render() { 
        const {content}=this.props;
        return ( 
            <div>
                {
                    content?content.map((item,index)=>{
                        return (
                            <div className="right-item__content" key={index}>
                                <div className="right-item__title">
                                <span></span>{item.title}<span></span>
                                </div>
                                <div className="right-item-icon__img">
                                    {
                                        item.title_item.map((item,index)=>{
                                            return(
                                                <ServerrightImg 
                                                title_item_src={item.title_item_src}
                                                title_item_name={item.title_item_name} 
                                                key= {index}/>
                                            )
                                        })
                                    }
                                </div>
                                
                            </div>
                        )
                    }):""
                }
            
            </div>  
         );
    }
}
 
export default ContentComponent;