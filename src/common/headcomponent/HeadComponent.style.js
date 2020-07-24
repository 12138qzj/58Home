import styled from 'styled-components';
export const Head = styled.div `
    position:fixed;
    display:flex;
    justify-content:space-between;
    align-items:center;
    /* flex- */
    top:0;
    width:100%;
    height:1.189rem;
    background-color:pink;

    .leftimg{
        &>img{
            width:0.7rem;
            margin-left:0.6rem;

        }
    }
    .rightimg{
        &>img{
            width:0.7rem;
            margin-right:0.6rem;

        }
    }
`;