import React ,{useRef} from 'react';
import styled from 'styled-components'
// import location from '../../assets/images/定位.png';
const Popupcontent = styled.div`
    position: fixed ;
    top:0rem;
    height:101vh;
    width:100vw;
    background-color:rgba(0,0,0,0.6);
    /* transform: translateY(-1.189rem) ; */
    overflow:hidden;
    color:white;
    z-index:99;
    
   
`;

const Popupcontentwarp = styled.div`
    width: 100%;
    height:10rem;
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 0 .24rem;
    .popupbox-container{
        width: 9.5rem;
        height:100%;
        background: white;
        border-radius: .16rem .16rem 0 0;
        .popupbox-header{
            height: 1.5rem;
            display: flex;
            justify-content: space-between;
            line-height: 1rem;
            width: 100%;
            padding: 0 .32rem;
            position: relative;
            box-sizing: border-box;
            .popupbox-header-title{
                color: #040818;
                height: 1.7rem;
                font-size: .5rem;
                font-family: PingFangSC-Medium,PingFang SC;
                font-weight: 700;
                line-height: 1.5rem;
                background-color:white;
            }
            .popupbox-header-close {
                color:black;
                line-height: 1.5rem;
                font-size:.5rem;
            }

        }
    }
    .dj-button-primary {
        flex: 1;
        background-image: linear-gradient(135deg,#ff7b5a,#ff4d4c);
        color: #fff;
        font: .32rem PingFangSC-Medium;
        width: 85%;
        height: 1.3rem;
        box-sizing: border-box;
        text-align: center;
        text-decoration: none;
        border-radius: 4px;
        outline: 0 none;
        border: 0;
        overflow: inherit;
        padding: 0;
        user-select: none;
        position: relative;
        top:-2rem;
        margin:0 0.5rem;
        font-size:0.4rem;
    }
`;
const PopupboxContent = styled.div`
    .cl-service-area__content{
        .cl-service-area__content-item{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 .32rem;
            height: 1.7rem;
            color: #040818;
            overflow: hidden;
            background-color:white;
            border-bottom:0.01rem solid #f8f9fa;
            .cl-service-area__content-item--left{
                margin: 0;
                padding: 0;
                border: 0;
                font-size: 100%;
                font: inherit;
                vertical-align: baseline;
                box-sizing: border-box;
                .cl-service-area__content-item__label{
                    display:inline-block;
                    font-size: .5rem;
                    font-family: PingFangSC-Medium,PingFang SC;
                    font-weight: 700;
                    margin-right: .12rem;
                }
                .cl-service-area__content-item__price{
                    display:inline-block;
                    font-size: .38rem;
                }
            }
            .cl-service-area__content-item__num{
                display:inline-block;
                
                /* height:0.4rem; */
                background-color:pink;
                >input{
                    font-size:0.36rem;
                    width:1rem;
                    height:2rem;
                    border:0;
                }
            }
            .cl-service-area__content-item__unit {

                display:inline-block;
                font-size: .38rem;
            }
        }
    
        
    }

`;


const SpecificationsPopup = (props) => {
    const {display}=props;
    const {handleOnclickBack,handleOnclickComfirm}=props;
    const arearef = useRef();
    const numref = useRef();

    return (
        <Popupcontent style={display?{}:{display:"none"}} >
            <Popupcontentwarp>
                <div className="popupbox-container">
                    <div className="popupbox-header">
                        <div  className="popupbox-header-title">请选择服务规格</div>
                        <div  className="popupbox-header-close iconfont"
                        onClick={()=>{handleOnclickBack()}}
                        >
                            &#xe640;
                        </div>
                    </div>
                    <PopupboxContent>
                            <div className="cl-service-area__content">
                                <div className="cl-service-area__content-item">
                                    <div className="cl-service-area__content-item--left">
                                        <div className="cl-service-area__content-item__label">服务面积</div>
                                        <div className="cl-service-area__content-item__price">(¥14/平米)</div>
                                    </div>
                                    <div className="cl-service-area__content-item--right">
                                        <div className="cl-service-area__content-item__num">
                                            <input type="text"  placeholder="10-80" ref={arearef}/>
                                        </div>
                                        <div className="cl-service-area__content-item__unit">平米</div>
                                    </div>
                                </div>
                                <div className="cl-service-area__content-item">
                                    <div className="cl-service-area__content-item--left">
                                        <div className="cl-service-area__content-item__label">纱窗</div>
                                        <div className="cl-service-area__content-item__price">(¥10/个)</div>
                                    </div>
                                    <div className="cl-service-area__content-item--right">
                                        <div className="cl-service-area__content-item__num">
                                            <input type="text"  placeholder="0-12" ref={numref}/>
                                        </div>
                                        <div className="cl-service-area__content-item__unit">个</div>
                                    </div>
                                </div>
                            </div>
                        </PopupboxContent>
                </div>
                <button className="dj-button dj-button-primary dj-button-large" onClick={()=>{
                    handleOnclickComfirm(`擦玻璃(${arearef.current.value}平米)`,`纱窗(${numref.current.value}个)`)
                    }}>
                    <span className="button-text">
                      确定
                    </span>
                </button>
            </Popupcontentwarp>
        </Popupcontent>
    )
}
export default SpecificationsPopup