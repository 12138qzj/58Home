import React, { PureComponent,memo,useEffect } from 'react';
// import axios from 'axios';

import {connect} from 'react-redux';

import '../../../api/mock.js';


import {reqserver} from '../../../api/index.js';
import ServerLeftData from '../../../Data/serverData/ServerData.json';
import ContentCompont from './contentcomponent/ContentCompoent';

import * as FunActionTypes from '../store/actionCreators'
import  './servercontent.css';
class ServerContent extends PureComponent {
    state = { 
        ServerData:[]
     }
    onClickServer=(event)=>{
        console.log("object",event.view);

        console.log("target",event.target);

    } 
    componentDidMount(){  
        if(!this.state.ServerData.length){
            console.log("第一次进入");
            this.props.getServerLeftRightData();
        }
        // init()
    }
    // init(){
    //     console.log("init进入",this.props.serverdata);
    //     this.setState({
    //         ServerData:this.props.serverdata
    //     })
    // }
    render() { 
    // console.log(ServerLeftData);

    // useEffect(()=>{
    //     console.log("this",this);
    //     // this.init();
    // },[])
    console.log("Props.this",this.props);

    console.log("state.this.data",this.state.ServerData);
    const {serverdata}=this.props
    
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
                            !serverdata?"":
                            serverdata.map((item,index)=>{
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
                        !serverdata?"":
                        serverdata.map((item,index)=>{
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
function mapStateToProps(state){
    return {
        serverdata:state.server.serverLeftRightdata
    }

}
function mapDispatchToProps(dispatch){
    return{
        getServerLeftRightData(){
            dispatch(FunActionTypes.getServerLeftRightData())
        }

    }

}


export default connect(mapStateToProps,mapDispatchToProps)(memo(ServerContent));