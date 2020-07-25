import React from 'react'
import location from '../../assets/images/客服.png';
import {Bottomwarp} from './DetailBottom.style.js';


const DetailBottom=(props)=>{

    
    return(
        <>
        <Bottomwarp>
            <div className="kefu-img">
             <img src={location} alt="" />
             <div className="img-text">
                 客服   
             </div>
            </div>
            <button className="xq-button" type="submit" onClick={props.handleclick}>
                立即购买
            </button>
        </Bottomwarp>
       
        </>
    )
}
export default DetailBottom;