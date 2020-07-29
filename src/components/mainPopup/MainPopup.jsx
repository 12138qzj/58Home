import React from 'react';
import styled from 'styled-components'
import location from '../../assets/images/定位.png';
const Popupcontent=styled.div`
    position:absolute;
    height:100vh;
    width:100vw;
    background-color:rgba(0,0,0,0.1);
    transform: translateY(-90%);
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
                align-content :center;
                padding:0.1rem 0.3rem;
                font-size:0;
                .text{
                    display:inline-block;
                    margin-top:-2rem;
                    /* height:0.7rem; */
                    font-size:0.36rem;
                    background-color:gray;
                }
                span:first-child{
                    display:inline-block;
                    background-color:gray;
                    width:20px;
                    font-size:0.36rem;


                }
            }
            .item:first-child{
                border-bottom:1px solid gray;
            }
        }

    }
`;

const MainPopup=(props)=>{

    return(
        <Popupcontent>
            <div className="father">
                <span></span>
                <div className="content">
                    <div className="item">
                    <span>
                        <img src={location} alt="" width="100%"/>
                    </span> 
                    <span className="text">帮助中心</span>
                    </div>
                    <div className="item">
                    <span>
                    <img src={location} alt="" width="100%"/>
                        </span> <span className="text">扫一扫</span>
                    </div>
                   

                </div>
            </div>
        </Popupcontent>
    )
}
export default MainPopup