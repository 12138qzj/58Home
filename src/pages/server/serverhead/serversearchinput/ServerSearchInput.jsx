import React from 'react';
// import './serversearchinput.css'
import imgJiahao from '../../../../assets/images/serveradd.png'
import SearchBox from '../../../../common/searchbox/SearchBox'
// import {SearchBox} from './style.js'



const ServerSearchInput=(props)=> {
    const {handlenOnclick}=props;
    return (
        <>
         <SearchBox icon={()=>{
             return(
                
                <img   
                style={
                    { marginLeft :".3889rem" , 
                    width:".7315rem",
                    height: ".7315rem"}} 
                     src={imgJiahao} 
                     onClick={()=>{handlenOnclick()}}/>
               
             )
         }}/>
        </>
    );

}
export default ServerSearchInput;



