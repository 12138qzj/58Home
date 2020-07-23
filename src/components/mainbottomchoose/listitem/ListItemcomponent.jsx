import React from 'react';
import list_item_img from '../../../assets/images/list_item_img.png';
import PropTypes from 'prop-types';

import { List, TextContent } from './ListItem.style.js';

const ListItemcomponent = (props) => {

    const ListItemData = [
        {
            title: "厨房不要买这4样电器，入住才知费钱不实用！",
            label: "家装小助手",
            imgsrc:list_item_img
        },
        {
            title: "厨房不要买这4样电器，入住才知费钱不实用！",
            label: "家装小助手",
            imgsrc:list_item_img
        },
        {
            title: "厨房不要买这4样电器，入住才知费钱不实用！",
            label: "家装小助手",
            imgsrc:list_item_img
        }, 
        {
            title: "厨房不要买这4样电器！",
            label: "家装小助手",
            imgsrc:list_item_img
        }
        , 
        {
            title: "入住才知费钱不实用！",
            label: "家装小助手",
            imgsrc:list_item_img
        }
    ]

    return (
        <>
            {
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
                            <div className="ListItem-img">
                                <div className="ListItem-content__img">
                                    <img src={item.imgsrc} alt="" />
            
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


export default ListItemcomponent

ListItemcomponent.prototype = {
    // title:PropTypes.string.isRequired,
    // onBack:PropTypes.func.isRequired,
}