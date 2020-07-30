import React from 'react';
import styled from 'styled-components'
import location from '../../assets/images/定位.png';
const Popupcontent=styled.div`
    position:absolute;
    height:100vh;
    width:100vw;
    background-color:rgba(0,0,0,0.1);
    transform: translateY(-92%);
    z-index:99;
    .father{
        position:absolute;
        top:39px;
        right:22px;
        >span{
            position:absolute;
            right:-2px;
            top:-2px;
            display:block;
            /* width:0.2rem; */
            border-top:0.2rem solid transparent;
            border-left:0.2rem solid transparent;
            border-right:0.2rem solid transparent;
            border-bottom:0.3rem solid white;
        }
        .content{
            width:3rem;
            position:absolute;
            top:16px;
            right:-12px;
            background-color:white;
            .item{
                padding:0.15rem 0.3rem;
                align-content :center;
                height:0.7rem;
                font-size:0;
                .text{
                    /* display:flex; */
                    /* margin-top:-2rem; */
                    /* height:0.7rem; */
                    /* line-height:0.7rem; */
                    font-size:0.34rem;
                    /* background-color:gray; */
                }
                .img{
                    display:inline-block;
                    margin-right:0.15rem;
                    height:0.55rem;
                    width:0.55rem;
                    background-color:pink;
                    transform:translateY(20%)
                }
                span:first-child{
                    display:inline-block;
                    /* background-color:gray; */
                    width:20px;
                    font-size:0.36rem;


                }
            }
            .item:nth-child(n+2){
                border-top:0.001rem solid gray;
            }
        }

    }
`;

const ServerPopup=(props)=>{
    const {display}=props;
    const {handleOnclick}=props;

    console.log("props",props);


    return(
        
        <Popupcontent onClick={()=>{handleOnclick()}} 
        style={display?{}:{display:"none"}} >
            <div className="father">
                <span></span>
                <div className="content">
                    <div className="item">
                        <div className="img iconfont">
                         &#xe759;
                            {/* <img src={location} alt="" width="100%"/> */}
                        </div> 
                        <span className="text">消息</span>
                    </div>
                    <div className="item">
                        <div className="img">
                                {/* <img src={location} alt="" width="100%"/> */}
                        </div> 
                        <span className="text">我的订单</span>
                    </div>
                    <div className="item">
                        <div className="img">
                                {/* <img src={location} alt="" width="100%"/> */}
                        </div> 
                        <span className="text">我的收藏</span>
                    </div>
                    <div className="item">
                        <div className="img">
                                {/* <img src={location} alt="" width="100%"/> */}
                        </div> 
                        <span className="text">帮助中心</span>
                    </div>
                    <div className="item">
                        <div className="img">
                                {/* <img src={location} alt="" width="100%"/> */}
                        </div> 
                        <span className="text">发布服务</span>
                    </div>
                    <div className="item">
                        <div className="img">
                                {/* <img src={location} alt="" width="100%"/> */}
                        </div> 
                        <span className="text">扫一扫</span>
                    </div>
                   

                </div>
            </div>
        </Popupcontent>
    )
}
export default ServerPopup