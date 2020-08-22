import React  from 'react'
import {Head} from './HeadComponent.style.js';
// import add from '../../assets/images/加号.png';


const HeadComponent=(props)=>{
    const {title}=props;
    const {handleback}=props;
    return(
        <Head>
            <div className="leftimg iconfont" onClick={handleback}>
                &#xe670;
                {/* <img src={add} alt=""/> */}
            </div>
            <span>{title}</span>
            <div className=" share">
                <div className=" iconfont righticon">
                    &#xe600;
                </div>
                {/* <img src={add} alt=""/> */}
            </div>
        </Head>
    )
}
export default HeadComponent;