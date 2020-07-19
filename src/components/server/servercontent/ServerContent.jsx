import React, { PureComponent } from 'react';
import ServerLeftData from '../../../Data/serverData/ServerData.json';
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
                                    <a href={item.anchor}>
                                        <li key={index}>
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
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                        <li>4</li>
                        <li>5</li>
                        <li>6</li>
                        <li>7</li>
                        <li>8</li>
                        <li>9</li>
                        <li>0</li>
                        <li>8</li>
                        <li>9</li>
                        <li id="bmfw">0</li>
                    </ul>
                </div>
                {/* cernter */}
            </div>
        );
    }
}
 
export default ServerContent;