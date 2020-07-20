import React, { PureComponent } from 'react';
import ServerLeftData from '../../../Data/serverData/ServerData.json';
import ContentCompont from './contentcomponent/ContentCompoent';
import  './servercontent.css';
class ServerContent extends PureComponent {
    state = {  }
    render() { 
    console.log(ServerLeftData);

        return ( 
            <div className="server">
                <div className="left">
                    <ul>
                        <li className="active">
                            <span >模板演示</span> 
                        </li>
                        {
                            ServerLeftData.map((item,index)=>{
                                return (
                                    <a href={item.anchor} key={index}>
                                        <li >
                                            <span>
                                                {item.item}
                                            </span>
                                            
                                        </li>
                                    </a>
                                )                              
                            })
                        }
                       
                    </ul>
                </div>
                <div className="right">
                <ul>
                <li >
                    <img src="https://images.daojia.com/dop/custom/9ae5199ea57920870ee5fd1a215ab9d6.png" alt=""/>
                      <ContentCompont/>
                </li>
                    {
                        ServerLeftData.map((item,index)=>{
                            return (
                                   
                                <li key={index} id={item.anchor.substring(1)}>
                                    <span>
                                        {item.conten}
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
}
 
export default ServerContent;