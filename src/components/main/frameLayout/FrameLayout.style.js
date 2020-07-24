import styled from "styled-components";

export const Frame = styled.div `
    width:100%;
    background-color: #fff;
    margin-top: .2778rem /* 30/108 */;
    margin-bottom: .2778rem /* 30/108 */;
    border-radius:10px;
    box-sizing:border-box;
    & .frame-top{
        padding: .5093rem /* 55/108 */ .3056rem /* 33/108 */ .3241rem /* 35/108 */ .3056rem /* 33/108 */;
        border-bottom:1px solid #ececec;
    }
`

export const FrameSale = styled.div `
        display:flex;
        justify-content:flex-start;
        align-items: center;
        line-height:.4352rem;

    & .frame-sale__title{
        width: 1.8rem /* 182/108 */;
        font-family:PingFangSC-medium;
        font-weight: bold;
        color: #292D33;
        font-size: .4259rem /* 46/108 */;
    }
    & .frame-sale__hot{
        width: 1.5rem /* 176/108 */;
        border-radius: 30px;
        background-image: linear-gradient(to right, #fe684a , #ff2822);
        font-size: .2778rem /* 30/108 */;
        display:flex;
        justify-content:flex-start;
        align-items: center;
        border:1px solid #fe4e4b;
    }
        & .logo{
            background-color: #fff;
            border-radius:50%;
        }
        & .text{
            color:#fff;
            margin:0 2px;
        }
`

export const FrameAd = styled.div `
    height: 4.9259rem /* 532/108 */;
    margin-top:.2222rem /* 24/108 */;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    & .frame-ad__box{
        width: 4.2037rem /* 454/108 */;
        height: 2.3796rem /* 257/108 */;
        border-radius:10px;
    }
        & .frame-ad__img{
            width:100%;
            height:100%;
        }
`

export const FrameImgView = styled.div `
    display:flex;
    justify-content:space-between;
    padding-top:.5278rem /* 57/108 */;
    box-sizing:border-box;
        & .frame-imgView__title{
            height:.3981rem /* 43/108 */;
            font-size: .3981rem /* 43/108 */;
            font-family: PingFangSC-medium;
            font-weight: bold;
            color: #292D33;
            line-height:.3981rem /* 43/108 */;
        }
        & .frame-imgView__box{
            width: 1.9444rem /* 210/108 */;
            height: 2.4074rem /* 260/108 */;
            margin-top:.2685rem /* 29/108 */;
        }
            & .imgView-name{
                width:100%;
                height:100%;
            }

`

export const More = styled.div `
        display:flex;
        padding: 0 0 .537rem /* 58/108 */ .3056rem /* 33/108 */;
    & .more-left{
            width: 1.75rem /* 189/108 */;
            font-family: PingFangSC-medium;
            font-weight: bold;
            color: #292D33;
            margin-right:0.4rem;
    }
       & .more-left__service{
            height: .4167rem /* 45/108 */;
            font-size:.4167rem /* 45/108 */;
            padding-top: .4352rem /* 47/108 */;
       } 
       & .more-left__check{
            height: .4352rem /* 47/108 */;
            font-size:.2593rem /* 28/108 */;
            margin-top: .2222rem /* 24/108 */;
            color:#e66c6a;
            border:1px solid #e66c6a;
            border-radius:20px;
            text-align:center;
        } 
        & .more-left__slogan{
            height: .2407rem /* 26/108 */;
            font-size:.2407rem /* 26/108 */;
            padding-top: .8056rem /* 87/108 */;
            color:#878e94;
        } 
    & .more-right{
        width: 7.1574rem /* 773/108 */;
        display:flex;
        overflow-x: scroll;
    }
        & .more-right__box{
            margin-top: .3426rem /* 37/108 */;
            border-radius:10px;
            margin-right:10px;
        } 
            & .more-right__img{
                width: 1.4907rem /* 161/108 */;
                height: 1.6944rem /* 183/108 */;
            } 
                & .img{
                    width:100%;
                    height:100%;
                } 
        & .more-right__text{
            margin-top: .2315rem /* 25/108 */;
        } 

`