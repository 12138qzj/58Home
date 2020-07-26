import styled from 'styled-components';

export const Bottomwarp = styled.div `

    position:fixed;
    width:100%;
    bottom:0;
    height:1.5rem;
    background-color:white;

    display:flex;
    z-index:99;
    .xq-button{
        background-image: linear-gradient(135deg,#ff7b5a,#ff4d4c);
        color: #fff;
        font: .5rem PingFangSC-Medium;
        width: 100%;
        height: 100%;
        border:0;
        box-sizing: border-box;
        text-align: center;
        text-decoration: none;
        border-radius: 4px;
        outline: 0 none;
        border: 0;
        overflow: inherit;

    }
    .kefu-img{
        /* display:flex; */
        text-decoration:center; 
        width:2.5rem;
        height:0.7rem;
        /* background-color:green; */
        font-size:0;
        &>img{
            width:35%;
            margin: 3px 0.63rem;
            /* background-position-x:-50%; */
            /* height:10%; */
        }
        .img-text{
            display:flex;
            justify-content:center;           
            font-size:0.43rem;
            font-family: PingFangSC-Regular,PingFang SC;
            font-weight: 400;
            /* background-color:yellow; */
        }
    }
`;