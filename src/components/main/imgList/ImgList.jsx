import React from 'react';
import './imgList.css';
import imgList1 from '../../../../src/assets/images/imgList1.png';
import imgList2 from '../../../../src/assets/images/imgList2.png';

function ImgList(props) {
    return (
        <div className='imgList-box'>
            <div className="imgList-one">
                <img src={imgList1} className='imgList-one__img' alt=""/>
            </div>
            <div className="imgList-one">
                <img src={imgList2} className='imgList-one__img' alt=""/>
            </div>
        </div>
    )
}



export default ImgList