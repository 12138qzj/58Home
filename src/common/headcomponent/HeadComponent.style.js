import styled from 'styled-components';
export const Head = styled.div `
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items:center;
    top:0;
    width:100%;
    height:1.189rem;
    font-size:0.4rem;
    background-color:white;
    font-family: PingFangSC-Medium,PingFang SC;
    z-index:99;
    .leftimg{
        width:0.7rem;
        margin-left:0.6rem;
    }
    .share{
        width:0.7rem;
        margin-right:0.6rem;
        padding:1px;
        border:1px solid #d6d7d7;
        border-radius:50%;
        .righticon{
            margin-left:0.14rem;
        }
    }

`;