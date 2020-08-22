import React from 'react';
import styled from 'styled-components'
import {withRouter} from 'react-router-dom';
const Popupcontent=styled.div`
    position:absolute;
    height:100vh;
    width:100vw;
    background-color:rgba(0,0,0,0.1);
    transform: translateY(-63%);
    z-index:99;
    .father{
        position:absolute;
        top:50%;
        right:50%;
        width:6rem;
        height:3.2rem;
        transform:translate(50%,-80%);
        background-color:white;
        border-radius:0.3rem;
   
        .title{
            width:100%;
            display:flex;
            justify-content:center;
            margin:0.3rem 0;            
            font-size:0.5rem;
        }
        .content{
            width:100%;
            display:flex;
            justify-content:center;
            background-color:white;
            span{
                width:2rem;
                height:1rem;
                line-height:1rem;
                text-align:center;
                border-radius:0.2rem;
                margin:0.3rem 0.2rem;
                border:0.02rem solid  #ebecee;
                font-size:0.35rem;
                a{
                    text-decoration :none;
                    font-family: PingFangSC-Medium,PingFang SC;       
                }
            }
            span:last-child{
                background-color:#ff6b55;
                
            }
        }
    }
`;

const ServerPopup=(props)=>{
    const {display}=props;
    const {handleOnclick,onAddOrder}=props;

    return(   
        <Popupcontent
        style={display?{}:{display:"none"}} >
            <div className="father">
                <div className="title">确认支付</div>
                <div className="content">
                    <span onClick={()=>{handleOnclick()}} ><a>取消</a></span> 
                    <span onClick={onAddOrder} ><a style={{color:"white"}}>确认</a></span>
                </div>
            </div>
        </Popupcontent>
    )
}
export default  withRouter(ServerPopup);