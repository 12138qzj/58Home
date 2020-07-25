import React, { PureComponent,useState,useRef } from 'react';
import axios from 'axios';

// import '../../../api/mock.js';
import {reqserver} from '../../../api/index.js';

import ServerLeftData from '../../../Data/serverData/ServerData.json';
import ContentCompont from './contentcomponent/ContentCompoent';
import  './servercontent.css';
function  ServerContentHSS () {

    const [activeIndex,setActiveIndex]=useState(0);
    const onClickServer=(event)=>{
        console.log("object",event.view);

        console.log("target",event.target);

    } 
   
    //监听函数点事件
    const handleTabClick=(e)=>{

        console.log(e);
        console.log(e.target);
        console.log(e.target.getAttribute("data-lefttab"));
    
        const  activeIndex=e.target.getAttribute("data-index")
        setActiveIndex(parseInt(activeIndex))
        const ltab=e.target.getAttribute("data-lefttab")
    
        // const rtab=document.querySelector(`[data-rtab="${ltab}"]`)
        
        // rtab.scrollIntoView({
        //   behavior:'smooth'
        // })
    
    
      }

      let ranges=[];
      const ref=useRef();
      let base=0;
    // render() { 
    // console.log(ServerLeftData);



   
    
        return ( 
            <div className="server">
                <div className="left">
                    <ul onClick={(event)=>{
                        this.onClickServer(event);
                    }}>
                        <li className="active">
                            <span >模板演示</span> 
                        </li>
                        {

                            ServerLeftData.map((item,index)=>{
                                return (
                                    // <a href={item.anchor} key={index} >
                                        <li key={index}
                                        data-index={index}
                                        data-lefttab={item.item}
                                        onClick={()=>{handleTabClick}}
                                        className={activeIndex===index?"active":""}
                                        >
                                            <span>
                                                {item.item}
                                            </span>                                         
                                        </li>
                                    // </a>
                                )                              
                            })
                        }
                       
                    </ul>
                </div>
                <div className="right"  ref={ref}>
                <ul>
                <li >
                    <img src="https://images.daojia.com/dop/custom/9ae5199ea57920870ee5fd1a215ab9d6.png" alt="" className="right-top__img"/>
                      <ContentCompont/>
                      
                </li>
                    {
                        // ServerLeftData.map((item,index)=>{
                        //     return (
                                   
                        //         <li key={index} id={item.anchor.substring(1)}>
                        //             <img src={item.item_imgsrc} alt="" className="right-top__img"/>

                        //             <span>
                        //                 {/* {item.conten} */}
                        //                 <ContentCompont content={item.conten}/>

                        //             </span>
                                        
                        //         </li>
                        //     )                              
                        // })
                        ServerLeftData.map((item,index)=>{
                            return (
                                   
                                <li key={index}
                                    data-righttab={item.item}
                                 >
                                    <img src={item.item_imgsrc} alt="" className="right-top__img"/>

                                    <span>
                                        {/* {item.conten} */}
                                        <ContentCompont content={item.conten}/>

                                    </span>
                                        
                                </li>
                            )                              
                        })
                    }
                    </ul>
                </div>
            </div>
        );
    }
// }
 
export default ServerContentHSS;