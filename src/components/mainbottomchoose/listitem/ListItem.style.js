import styled from 'styled-components';

export const List = styled.div `
    height:3rem;
    margin-bottom:0.157rem;
    display:flex;
    text-decoration:row;
    box-sizing:border-box;
    padding:0.35rem;
    background:white;
    .ListItem-img{
        flex:1;
        border-radius:1px;
        .ListItem-content__img{
            /* margin: 0 auto; */
            width:47%;
            height:100%;
            border-radius:9px;
            overflow:hidden;
            &>img{
                width:100%;
            }
        }
       
    }
  
`;
export const TextContent = styled.div `
    
    position:relative;
    height:100%;
    .ListItem-title{
        padding-right:0.3rem;
        box-sizing:border-box;

        width:6rem;
        font-size:0.38rem;
        font-family: PingFangSC-medium;
        font-weight:700;
        color:black;
    }
    .ListItem-label{
        position:absolute;
        bottom:0.1rem;
        color:#9a9a9a;
    }
`