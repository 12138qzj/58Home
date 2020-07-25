import React, { useState, useEffect, memo ,useRef} from 'react';
import {connect} from 'react-redux'
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";
import HeadComponent from '../../common/headcomponent/HeadComponent';
import DetailBottom from '../../common/detailbottom/DetailBottom';
import Detailhead from '../../common/detailhead/Detailhead';
import StorageUtils from '../../Utils/storageUtis/StorageUtils'

import * as FunActionTypes from './store/actionCreators'

// ../../../Data/mainData/index
import { rotationImg } from '../../Data/mainData/index'
import { Rotation, Title, Discount, Fromwarp } from './detail.style.js'

const Detail = (props) => {


    const {orderdata}=props;
    const {getinitorderData,addorderData}=props;
    const handleback = () => {

    }
    // =null;
    new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 1000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
        }
    })
    const address=useRef();
    const size=useRef();
    const time=useRef();

    const handleclick=(e)=>{
        e.preventDefault()
        console.log("提交数据",time.current.value);

        onAddOrder(address.current.value,size.current.value,time.current.value)

        
    }
    const onAddOrder=(Dadr,Dsize,Dtime)=>{
        if(Dadr&&Dsize&&Dtime) {
            let data=StorageUtils.getUserorder();
            // data?
            let newdata=data?(data+";"+`{address:'${Dadr}',size:'${Dsize}',time:'${Dtime}'}`):(`{address:'${Dadr}',size:'${Dsize}',time:'${Dtime}'}`)
            StorageUtils.saveUserorder(newdata)
            addorderData(newdata);
        } 
    }

    // const [orderdata,setorderdata] =useState([])
    useEffect(()=>{
        if(!orderdata.length){
            getinitorderData();
        }
    },[])
    return (
        <>
            <HeadComponent title="擦玻璃" handleback={() => { handleback() }} />
            <div>
                <Rotation>

                    <div className="swiper-container">
                        <div className="swiper-wrapper ">
                            {
                                rotationImg.map((item, index) => {
                                    return (
                                        <div className="swiper-slide" key={index}>
                                            <a href={item.linkUrl} >
                                                <img className='rotationChart-img' src={item.picUrl} alt="" width="100%" height="100%" />
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </Rotation>

            </div>

            <Title>
                <div className="price">
                    ￥ <span>14</span>.00/平起
                </div>
                <div className="type">
                    擦玻璃
                </div>
                <div className="describe">
                    <span>双面精细擦窗，服务有标准，清洁看得见</span>
                </div>
                <div className="tabs">
                    <span className="icon-shezhi iconfont">
                        &#xe618;随时预约
                    </span>
                    <span className="icon-shezhi iconfont">
                        &#xe618;专业清洗工具
                    </span>
                    <span className="icon-shezhi iconfont">
                        &#xe618;阿姨专业培训
                    </span>
                </div>
            </Title>
            <Discount>
                <div className="icon">优惠</div>
                <div className="text">7.5折优惠券</div>
                <button>
                    <span>立即领取</span>
                </button>
            </Discount>
            <Fromwarp>
                {/* <iframe name="targetIfr" style={{ display: "none" }}></iframe> */}
                <form id="Form1" action="" className="form">
                    <div className="forminput">
                        <label>地址</label><input ref={address} type="text" name="addres" id="" placeholder="请选择服务地址"/>
                    </div>
                    <div className="forminput">
                        
                        <label>规格</label><input ref={size} type="text" name="size" id="" placeholder="请选择服务规则"/>
                    </div> 
                    <div className="forminput">
                        <label>时间</label><input  ref={time} type="text" name="time" id="" placeholder="请选择待服务时间"/>
                    </div>
                    <DetailBottom handleclick={handleclick}/>
                </form>
            </Fromwarp>
            {/* {orderdata.map((item)=>{
                return (
                    <div >
                        {item.time}
                    </div>
                )
            })} */}

            <Detailhead style={{display:"none"}}>
                
            </Detailhead>
            

        </>

    )
}

// Detail.mySwiper= memo(()=>{
//     return new Swiper('.swiper-container', {
//         loop: true,
//         autoplay: {
//             delay: 1000,
//         },
//         pagination: {
//             el: '.swiper-pagination'
//         }
//     })
// })

function mapStateToProps(state){
    return {
        orderdata:state.order.orderdata
    }

}
function mapDispatchToProps(dispatch){
    return{
        getinitorderData(){
            dispatch(FunActionTypes.initorderData())
        },
        addorderData(data){
            dispatch(FunActionTypes.addorderData(data))
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(memo(Detail));