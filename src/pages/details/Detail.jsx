import React, { useState, useEffect, memo, useRef } from 'react';
import { connect } from 'react-redux'
import Swiper from 'swiper';
import "swiper/css/swiper.min.css";

//组件导入
import HeadComponent from '../../common/headcomponent/HeadComponent';
import DetailBottom from '../../common/detailbottom/DetailBottom';
import Detailhead from '../../common/detailhead/Detailhead';
import StorageUtils from '../../Utils/storageUtis/StorageUtils'
import DetailItemPage from '../../components/detail/detailitempage/DetailItemPage'

import Recommend from '../../components/detail/recommend/Recommend'

import SpecificationsPopup from '../../components/specificationsPopup/SpecificationsPopup';

import * as FunActionTypes from './store/actionCreators'
// ../../../Data/mainData/index
import { rotationImg } from '../../Data/mainData/index'

//资源导入
import {reqdetail} from '../../api/index'
import { Rotation,Lable, Title, Discount, Fromwarp } from './detail.style.js'

const Detail = (props) => {
    const [imgIndex,setimgIndex]=useState(0)
    const [detailtitle,setdetailtitle]=useState(null)
    const [detailprice,setdetailprice]=useState(0)
    // const [recentnum, setrecentnum ] = useState(0);

    // const {orderdata,reqparams}=props;
    // const {getinitorderData,addorderData, getrecentNumData}=props;
    // const handleback = () => {
    // }
    
    const [activeIndex, setActiveIndex]=useState(0)
    const [downDisplay, setdownDisplay]=useState(false)
    const {orderdata,reqparams}=props;
    const {getinitorderData,addorderData,setdetailData, getrecentNumData}=props;
    const handleback = (e) => {
        e.preventDefault();
        console.log("hist",props);
        props.history.goBack();
    }

    useEffect(()=>{
        
        console.log("详情页面数据props",props)
        console.log("详情页面数据propsid",decodeURIComponent(props.location.search.split("=")[1]))
        
        reqdetail(decodeURIComponent(props.location.search.split("=")[1])).then((res)=>{
            console.log("详情页面数据",res)
            if(res.data.success){
                setdetailtitle(res.data.data[0].title);
                setdetailprice(res.data.data[0].price);

            }

        })
    },[])
    // =null;
    const DetailSwiper= new Swiper('.swiper-container', {
        lazy: {
            loadPrevNext: true,
          },
        watchSlidesProgress : true,
        on: {
            progress: function (progress) {
                // console.log(".........",progress);
                if(Math.abs(progress)===0){
                    return;
                }
                    if(Number.isInteger(progress*2) ){
                        setimgIndex(Math.floor(progress*2))
                    }
                // setimgIndex(Math.floor(progress))
                }
            },
    })

    //  console.log("8888",DetailSwiper); 
    // DetailSwiper.slides[0].progress;
    const address=useRef();
    const size=useRef();
    const time=useRef();
    const type=0;
    const handleclick = (e) => {
        e.preventDefault()
        // console.log("提交数据", time.current.value);
        

        let Daddress=address.current.value;
        let Dsize=size.current.value;
        let Dtime=time.current.value;
        if(!Daddress){
            console.log("请输入地址！")
            return;
        }else if(!Dsize){
            handleonclickchange();
            return;
        }else if(!Dtime){
            console.log("请输入时间！")
            return;
        }
        
        let data={
            address:Daddress,
            size:Dsize,
            time:Dtime,
            title:detailtitle,
            price:detailprice
        }
        setdetailData(data);
        props.history.push(`/payment/${data}`)

        // onAddOrder(address.current.value, size.current.value, time.current.value, Math.floor(Math.random()*4))
    }

    const onAddOrder = (Dadr, Dsize, Dtime,Dtype) => {
        if (Dadr && Dsize && Dtime) {
            let data = StorageUtils.getUserorder();
            // data?
            let newdata = data ? (data + ";" + `{address:'${Dadr}',size:'${Dsize}',time:'${Dtime}',type:'${Dtype}'}`) : (`{address:'${Dadr}',size:'${Dsize}',time:'${Dtime}',type:'${Dtype}'}`)
            // 存到本地
            StorageUtils.saveUserorder(newdata)
            // 存到store
            addorderData(newdata);
        }
    }

    const onAddRecentNum = (num) => {
            // 存到本地
            StorageUtils.saveRecentNum(num);
            // 存到store
            addorderData(num);
    }

    // const [orderdata,setorderdata] =useState([])

    useEffect(() => {
        if (!orderdata.length) {
            getinitorderData();
        }
        getrecentNumData()
    },[])

    const handleonclickchange=()=>{
        setdownDisplay(!downDisplay);
    }
    const handleOnclickComfirm=(area,num)=>{
        // console.log("面积数量",area,num);
        // setspecifications(`${area} ${num}`)
        size.current.value=`${area} ${num}`;
        handleonclickchange()
    }
    const handleTabClick=(e)=>{
        const  activeIndex=e.target.getAttribute("data-index")
        setActiveIndex(parseInt(activeIndex));
        const ltab=e.target.getAttribute("data-ltab")
        const rtab=document.querySelector(`[data-rtab="${ltab}"]`)
        rtab.scrollIntoView({
          behavior:'smooth'
        })
      }
      let ranges=[];
      const ref=useRef();
      let base=0;
      useEffect(()=>{
        const tabDetail=ref.current;
        // console.log("tabDetail",tabDetail);

        const tabs=tabDetail.querySelectorAll(`[data-rtab]`)
        // console.log("tabs",tabs);
        for(let tab of tabs){
          let h=tab.clientHeight;
        // console.log("tabsH",h);
          let newH=base+h;
          ranges.push([base,newH])
          base=newH;
        }
        // console.log(object);
      function onScroll(e){

        const scrollTop=document.documentElement.scrollTop+300;
        const index = ranges.findIndex(range=>scrollTop>=range[0]&&scrollTop<range[1])
        // console.log("ref",ref.current.scrollTop,ref,e);

        setActiveIndex(index)   
      }
      tabDetail.addEventListener('touchstart',()=>{
        tabDetail.addEventListener('touchmove',onScroll)
    
      })
    
      tabDetail.addEventListener('touchend',()=>{
        tabDetail.removeEventListener('touchmove',onScroll);
    
      })
      },[])
    return (
        <>
            <SpecificationsPopup handleOnclickBack={handleonclickchange} handleOnclickComfirm={handleOnclickComfirm} display={downDisplay}/>
            <HeadComponent title={detailtitle} handleback={handleback} />
            <Detailhead index={activeIndex}  handleTabClick={handleTabClick}/>
            <div ref={ref}>

                <div data-rtab="商品">
                        <Rotation>
                            <div className="swiper-container">
                                <div className="swiper-wrapper ">
                                    <div className="swiper-slide">
                                        <img data-src="https://images.daojia.com/pic/commodity/online/9275c6db764bbe4cb4f83aa5a7dbdd39.png?x-oss-process=image/auto-orient,0/format,webp" data-index="0"  className="swiper-lazy"/>
                                        <div className="swiper-lazy-preloader"></div>
                                    </div>
                                    <div className="swiper-slide">
                                    
                                        <img data-src="https://images.daojia.com/pic/commodity/online/1a247a084e9d63fc0ba80cdc5612e998.png?x-oss-process=image/auto-orient,0/format,webp" data-index="1"  className="swiper-lazy"/>
                                    <div className="swiper-lazy-preloader"></div>
                                    </div>
                                    <div className="swiper-slide">
                                        <img data-src="https://images.daojia.com/pic/commodity/online/f67c550b6c0b42da7b40d5559bd80075.png?x-oss-process=image/auto-orient,0/format,webp" data-index="2"  className="swiper-lazy"/>
                                        <div className="swiper-lazy-preloader"></div>
                                    </div>
                                </div>
                            </div>
                            {/* <Lable>
                            fasfrag
                        </Lable> */}
                        </Rotation>
                    <p><span >{imgIndex}</span></p> 

                    <Title>
                        <div className="price">
                            ￥ <span>{detailprice}</span>.00/平起
                        </div>
                        <div className="type">
                            擦玻璃
                        </div>
                        <div className="describe">
                            <span>双面精细擦窗，服务有标准，清洁看得见</span>
                        </div>
                        <div className="tabs">
                            <span className="icon-shezhi iconfont">
                                &#xe785;随时预约
                            </span>
                            <span className="icon-shezhi iconfont">
                                &#xe785;专业清洗工具
                            </span>
                            <span className="icon-shezhi iconfont">
                                &#xe785;阿姨专业培训
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
                            <label>地址</label><input ref={address} type="text" name="addres" id="" placeholder="请选择服务地址" />
                        </div>
                        <div className="forminput">

                            <label>规格</label><input ref={size} type="text" name="size" id="" placeholder="请选择服务规则" onFocus={handleclick} />
                        </div>
                        <div className="forminput">
                            <label>时间</label><input ref={time} type="text" name="time" id="" placeholder="请选择待服务时间" />
                        </div>
                        
                        <DetailBottom handleclick={handleclick} />
                    </form>
                </Fromwarp>
                </div>
                <DetailItemPage  />
                <Recommend  />
            </div>

            
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

function mapStateToProps(state) {
    return {
        orderdata: state.order.orderdata,
        
    }

}
function mapDispatchToProps(dispatch) {
    return {
        getinitorderData() {
            dispatch(FunActionTypes.initorderData())
        },
        addorderData(data) {
            dispatch(FunActionTypes.addorderData(data))
        },

        setdetailData(data){
            dispatch(FunActionTypes.setorderdetailData(data))
        },
        getrecentNumData(){
            dispatch(FunActionTypes.getrecentNum())

        }

    }
}
export default connect(mapStateToProps, mapDispatchToProps) (memo(Detail))
