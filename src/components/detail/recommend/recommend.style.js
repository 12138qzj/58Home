import styled from 'styled-components'

export const RecommendList = styled.div `
    
    display:flex;

    height:10rem;
    width:100%;
    background-color:white;
    box-sizing:border-box;
    flex-flow:wrap;
    justify-content:space-around; 
    padding: 0 .24rem .28rem;
    margin-bottom:3rem;
    
`;

export const RecommendListItem = styled.div `

    /* flex:1; */
    width: 4.45rem;
    min-width: 4.58rem;

    min-height: 4.58rem;
    box-shadow: 0 0 0.1rem 0 rgba(0,0,0,.06);
    border-radius: .15rem;
    margin-bottom: .12rem;
    padding-bottom: .12rem;
    font-size:0;
    overflow: hidden;
    &>img{
        display: block;
        font-size: 0;
        width: 100%;
        min-height: 2.07rem;
    }
    .recommend-list-card__title{
        min-height: .62rem;
        line-height: .62rem;
        font-size: .39rem;
        margin: .16rem .14rem 0;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 700;
        color: #1e1e27;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .recommend-list-card__describe{
        font-size: .3rem;
        margin: .04rem 0 .14rem .14rem;
        font-family: PingFangSC-Regular,PingFang SC;
        font-weight: 400;
        color: #a8a8af;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .recommend-list-card__price{

        height: .42rem;
        line-height: .42rem;
        font-size: .39rem;
        display: flex;
        margin: .02rem .14rem 0;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 700;
        color: #ff4d4c;
    }
`;