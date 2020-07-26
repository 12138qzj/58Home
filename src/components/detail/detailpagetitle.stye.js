import styled from 'styled-components'

export const DetailPageTitle = styled.div `
    border-radius: .12rem;
    margin:0.35rem 0;
    width: 100%;
    background: #fff;
    .detail-title{
        position: relative;
        text-align: center;
        height: 1.01rem;
        padding: .32rem 0 .24rem;
        span{
            background: #fff;
            position: relative;
            top: 24%;
            z-index: 4;
            padding: 0 .32rem;
            color: #040818;
            font-size: .44rem;
            font-family: PingFangSC-Medium,PingFang SC;
            font-weight: 700;
        }
        
    }
    .detail-title:before{
        content: "";
        display: block;
        width: 7.48rem;
        height: 1px;
        background: #e4e7eb;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: .05rem 0 0 -3.74rem;
        -webkit-transform: scale(.5);
        transform: scale(.5);
    }
    /* .detail-img{
        &>img{
            width:100%;
        }
    } */
    
    
`;