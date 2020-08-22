import styled from 'styled-components';

export const Rotation = styled.div `

    width: 100% /* 1014/108 */;
    height: 8.333rem /* 900/108 */;
    overflow: hidden;
    font-size: 0;
    z-index:2;
    padding:0;

    /* border-radius: 10px; */
    .swiper-container{
        z-index:2;
        width:100%;

        /* --swiper-pagination-color: #fdb3a9;两种都可以 */
        .swiper-slide{
            z-index:2;
            &>img{
                display: inline-block;
                width:100%;
                /* height: 2.6944rem 291/108; */
            z-index:2;

            }
        }
        
    }
    
`;


export const Lable = styled.div `
        /* margin-top:3rem; */
        float:left;
        right:10px;
        height:30px;
        width:30px;
        background-color:red;
        z-index:999;
`;
export const Title = styled.div `
    height:3.5rem;
    background-color:white;
    border-radius:0 0 0.3rem 0.3rem;
    overflow:hidden;
    
    .price{
        margin-left:0.4rem;
        font-size:0.35rem;
        font-weight:700;
        /* font-family:S */
        color:#f3403e;
        &>span{
            font-size:0.8rem;
        }
    }
    .type{
        margin-left:0.4rem;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight:700;
        font-size:0.4rem;   }
    .describe{
        margin-left:0.4rem;
        font-family: PingFangSC-Regular,PingFang SC;
        color:#878d96;

    }
    .tabs{
        height:1rem;
        align-items:center;
        background-color:#fbfbfb;
        margin-top:0.3rem;
        &>span{
            line-height:1rem;
            margin:0 0.3rem;
            font-family: PingFangSC-Regular,PingFang SC;
            font-size:0.35rem;
        }
        span:first-child{
            margin-left:0.4rem;
        }
    }

`;

export const Discount = styled.div `
    position: relative;
    height:1.6rem;
    margin:  0.35rem 0;
    background-color:white;
    display:flex;
    align-items:center ;
    .icon{
        position: absolute;
        left:0.4rem;
        font-size:0.29rem;
        color: #f33f3e;
        padding: 0 .08rem;
        border-radius: .04rem;
        background: rgba(243,63,62,.2);
    }
    .text{
        position: absolute;
        left:1.5rem;
       
        font-size:0.38rem;


    }
    &>button{
        position: absolute;
        left:7.4rem;

        text-align: center;
        text-decoration: none;
        border-radius: 4px;
        outline: 0 none;
        border: 0;
        user-select: none;
        overflow: inherit;
        /* align-items:flex-end; */
        font: .28rem PingFangSC-Regular;
        padding: 0 .24rem;
        height:0.8rem;
        background-color:white;
        border:1px solid rgba(202, 206, 206,0.9);
        &>span{
            font-size:0.35rem;
        }

    }
`;

export const Fromwarp = styled.div `
    height:4rem;
    background-color:white;
    .form{
      display:flex;
      flex-direction:column; 
      height:100%; 
      .forminput{
            flex:1;
            display:flex;

          /* height:1rem; */
          /* width:1rem; */
          /* background-color:green; */
          /* height:33.33%; */
          &>input{
              flex:1;

              height:100%;
              font-size:0.38rem;
              border:0;
              /* border-top:1px solid gray; */
          }
          input:first-child{
            border-top:0;
          }
          &>label{
              margin: 0.3rem;  
              font-weight: 700; 
              font-size: 0.35rem;  
            }
      }
    }

`;

export const ImgIndex = styled.div `
position: absolute;
/* top:-10px; */
display:flex;

align-items:center;
left:8rem;
transform:translateY(-1rem);
width:1rem;
height:0.5rem;
background-color:rgba(0,0,0,0.3);
padding:0.05rem 0.2rem;
border-radius: 0.5rem;
color:white;
z-index:9;
`;