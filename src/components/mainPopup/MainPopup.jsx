import React from 'react';
import styled from 'styled-components'
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
                padding:0.2rem ;
                font-size:0;
                .text{
                    font-size:0.38rem;
                }
            }
            .item:first-child{
                border-bottom:1px solid #dadedc;
            }
        }

    }
`;

const MainPopup=(props)=>{
    const {display}=props;
    const {handleOnclick}=props;


    return(

        <Popupcontent onClick={()=>{
            handleOnclick()
        }} style={display?{}:{display:"none"}}>
            <div className="father">
            <span></span>
                <div className="content">
                    <div className="item">
                    <span className="text iconfont">&#xe622; &nbsp; 帮助中心</span>
                    </div>
                    <div className="item">
                    <span className="text iconfont">&#xe641; &nbsp; 扫一扫</span>
                    </div>
                </div>
            </div>
        </Popupcontent>
    )
}
export default MainPopup