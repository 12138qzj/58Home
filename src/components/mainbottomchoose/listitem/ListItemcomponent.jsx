import React ,{memo} from 'react';
import { connect } from 'react-redux';
import LazyLoad ,{forceCheck}from 'react-lazyload';

import PropTypes from 'prop-types';
import { List, TextContent } from './ListItem.style.js';

const ListItemcomponent = (props) => {
    const {ListItemData}=props;
    return (
        <>
            {
                !ListItemData?"":
                ListItemData.map((item,index)=>{
                    return(
                        <List key={index}>
                            <TextContent>
                                <div className="ListItem-title">
                                    {item.title}
                                </div>
                                <div className="ListItem-label">
                                    {item.label}
                                </div>
                            </TextContent>
                            {/* {item.imgsrc} */}
                            <div className="ListItem-img">
                                <div className="ListItem-content__img">

                               
                                <LazyLoad height={100}  /* placeholder={<img width="100%" height="100%" src={require('./singer.png')} alt="singer"/>}*/> 
                                    <img src={item.imgsrc}  alt="" />
                                </LazyLoad>
                                    {/* <img src={item.imgsrc}  alt="" /> */}
            
                                </div>
                            </div>
                        </List>
                    )
                })
            }
            <p className="spanblack"></p>
        </>

    )
}


const mapStateToProps = (state) => ({
    ListItemData:state.main.ListItemData,
})
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(memo(ListItemcomponent))

ListItemcomponent.defaultProps = {
    ListItemData: null,
  };
ListItemcomponent.prototype = {
    ListItemData:PropTypes.string.isRequired,
}