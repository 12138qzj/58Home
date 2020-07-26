import React from 'react'
import location from '../../assets/images/客服.png';
import {Bottomwarp} from './DetailBottom.style.js';
import { Link } from 'react-router-dom';


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
            <Link to='/payment' style={{width:'100%'}}>
                <button className="xq-button" type="submit" onClick={props.handleclick}>
                    立即购买
                </button>
            </Link>
        </Bottomwarp>
       
        </>
    )
}
export default DetailBottom;