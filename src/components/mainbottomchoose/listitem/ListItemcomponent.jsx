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
                            {/* {item.imgsrc} */}
                            <div className="ListItem-img">
                                <div className="ListItem-content__img">
                                    <img src="https://images.daojia.com//dop2c/custom/947fdeb47dc6741d8af763834d4390f7.jpeg?x-oss-process=image/resize,w_330,h_246/format,webp" alt="" />
            
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