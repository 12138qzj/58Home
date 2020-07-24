import React, { useState } from 'react';
import HeadComponent from '../../common/headcomponent/HeadComponent';

const Detail=(props)=>{

    const handleback=()=>{

    }
    return(
        <>
            <HeadComponent title="擦玻璃" handleback={()=>{handleback()}}/>
            <div>
                details
            </div>
        </>
        
    )
}
export default Detail;