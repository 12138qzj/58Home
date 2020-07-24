import React, { PureComponent } from 'react';
import axios from 'axios';

import '../../../api/mock.js';
import {reqserver} from '../../../api/index.js';

import ServerLeftData from '../../../Data/serverData/ServerData.json';
import ContentCompont from './contentcomponent/ContentCompoent';
import  './servercontent.css';
class ServerContent extends PureComponent {
    state = {  }
    onClickServer=(event)=>{
        console.log("object",event.view);

        console.log("target",event.target);

    } 
    componentDidMount(){  
        reqserver().then((res)=>{
            if (res.data.success) {
                console.log("成功", res.data);
            }
            else
            {
                console.log("失败", res.data);
            }
            console.log("object",res);
        })
        // axios.get("/server").then((res)=>{
        //     if (res.data.success) {
        //         console.log("成功", res.data);
        //         // this.setState({
        //         //     dataSource: res.data.list.map((item)=>{
        //         //         if(item.all<=item.already){
        //         //             item.study='3';
        //         //         }else{
        //         //             item.study='2';
        //         //         }
        //         //         return item
        //         //     }),
        //         //     count: res.data.list.length,
        //         //     // loading: false,
        //         // })
        //         // this.props.funcount(res.data.list.length)
        //     } else {
        //         // this.setState({
        //         //     dataSource: [],
        //         //     // loading: false,
        //         // })
        //         console.log("失败");

        //     }
            
        //     // this.initData();
        //     // console.log("******componentDidMount结束",this.state.newdataSource,this.state.fartherkey,this.state.tabkey);
        // })
    }
    render() { 
    console.log(ServerLeftData);



   
    
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
                                    <a href={item.anchor} key={index} >
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
                    <img src="https://images.daojia.com/dop/custom/9ae5199ea57920870ee5fd1a215ab9d6.png" alt="" className="right-top__img"/>
                      <ContentCompont/>
                      
                </li>
                    {
                        ServerLeftData.map((item,index)=>{
                            return (
                                   
                                <li key={index} id={item.anchor.substring(1)}>
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
}
 
export default ServerContent;