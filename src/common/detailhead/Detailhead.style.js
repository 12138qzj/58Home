import styled from 'styled-components'

export const Detail = styled.div `
    position:fixed;
    top: 1.18rem;
    left: 0;
    right: 0;
    display:flex;
    justify-content:space-between;
    height:1.19rem;
    width:100%;
    background-color:white;
    z-index:6;
    &>li{
        list-style:none;
        text-align: center;
        line-height: 1.19rem;
        width:33.33%;
        font-family: PingFangSC-Medium,PingFang SC;
        font-weight: 700;
        font-size:0.41rem;
        color: #040818;
        span{
            

        }
    }
    .activeselected{
        &>span{
            /* background-color:pink; */
            padding-bottom:0.25rem;
            border-bottom:2px solid red;
        }
    }
`;