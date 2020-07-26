import React, { memo,useState,useRef,useEffect } from 'react';
import {connect} from 'react-redux';
import '../../../api/mock.js';
import ContentCompont from './contentcomponent/ContentCompoent';
import * as FunActionTypes from '../store/actionCreators'
import  './servercontent.css';
function  ServerContentHSS (props) {
    const {serverdata}=props
    const [activeIndex,setActiveIndex]=useState(0);

    //监听函数点事件
    const handleTabClick=(e)=>{

        console.log(e);
        console.log(e.target);
        console.log(e.target.getAttribute("data-lefttab"));
    
        const  activeIndex=e.target.getAttribute("data-index")
        console.log("activeIndex",activeIndex);
        setActiveIndex(parseInt(activeIndex))
        const ltab=e.target.getAttribute("data-lefttab")
        const rtab=document.querySelector(`[data-righttab="${ltab}"]`)
        
        rtab.scrollIntoView({
          behavior:'smooth'
        })
    }

    let ranges=[];
    const ref=useRef();
    let base=0;

    //数据初始化

    const initdata=()=>{
        if(!serverdata.length){
            // console.log("第一次进入");
            props.getServerLeftRightData();
        }
    }
    const initScroll=()=>{
        const tabDetail=ref.current;
        const tabs=tabDetail.querySelectorAll(`[data-righttab]`)
        for(let tab of tabs){
        let h=tab.getBoundingClientRect().height;
        let newH=base+h;
        ranges.push([base,newH])
        base=newH;
        }

    function onScroll(e){
        const scrollTop=tabDetail.scrollTop;
        const index = ranges.findIndex(range=>scrollTop>=range[0]&&scrollTop<range[1])
        setActiveIndex(index)

    }
    tabDetail.addEventListener('touchstart',()=>{
        tabDetail.addEventListener('touchmove',onScroll)

    })

    tabDetail.addEventListener('touchend',()=>{
        tabDetail.removeEventListener('touchmove',onScroll);

    })
    }
    //effect 将在每轮渲染结束后执行
    useEffect(()=>{
        initdata();
        initScroll();
     
    },[])
   
    
        return ( 
            <div className="server">
                <div className="left">
                    <ul >
                        {
                            !serverdata?"":
                            serverdata.map((item,index)=>{
                                return (
                                    // <a href={item.anchor} key={index} >
                                        <li key={index}
                                        data-index={index}
                                        data-lefttab={item.item}
                                        onClick={handleTabClick}
                                        className={activeIndex===index?"active":""}
                                        >
                                            <span 
                                             data-index={index}
                                             data-lefttab={item.item}>
                                                {item.item}
                                            </span>                                         
                                        </li>
                                )                              
                            })
                        }
                    </ul>
                </div>
                <div className="right"  ref={ref}>
                <ul>
                    {
                        !serverdata?"":
                        serverdata.map((item,index)=>{
                            return (
                                <li key={index}
                                    data-righttab={item.item}>
                                    <img src={item.item_imgsrc} alt="" className="right-top__img"/>
                                    <span>
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
// }
 
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

export default connect(mapStateToProps,mapDispatchToProps)(memo(ServerContentHSS));