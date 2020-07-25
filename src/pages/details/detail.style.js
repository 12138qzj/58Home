import styled from 'styled-components';

export const Rotation = styled.div `

    width: 9.388rem /* 1014/108 */;
    height: 2.6944rem /* 291/108 */;
    overflow: hidden;
    font-size: 0;
    border-radius: 10px;
    .swiper-container{
        --swiper-pagination-color: #fdb3a9;/* 两种都可以 */
        .rotationChart-img{
        display: inline-block;
        height: 2.6944rem /* 291/108 */;

        }
    }
`;

export const Title = styled.div `
    height:3.5rem;
    background-color:pink;
    
    .price{
        margin-left:0.4rem;
        font-size:0.35rem;
        font-weight:700;
        /* font-family:S */
        color:#f3403e;
        &>span{
            font-size:0.8rem
        }
    }
    .type{
        margin-left:0.4rem;
        font-weight:1000;
    }
    .describe{
        margin-left:0.4rem;
        color:#878d96;

    }
    .tabs{
        height:1rem;
        align-items:center;
        background-color:#fbfbfb;
        margin-top:0.35rem;
        &>span{
            line-height:1rem;
            margin:0 0.3rem;
        }
        span:first-child{
            margin-left:0.4rem;
        }
    }

`;


// .rotation-box{
//     width: 9.388rem /* 1014/108 */;
//     height: 2.6944rem /* 291/108 */;
//     overflow: hidden;
//     font-size: 0;
//     border-radius: 10px;
// }