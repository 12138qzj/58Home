import styled from 'styled-components';

export const Top = styled.div `
    /* display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding : 5px 10px; */
    background : white;
    height: 1.78rem;
    position:sticky;
    top:1.375rem;
    display:flex;
    flex-direction:row;
    justify-content:space-around;

    a{
      
      justify-content:center;
      /* &.selected{
          color:red;
          background:white;

        }    */
    }
      
`;

export const TopItem = styled.div `

.personal-info-card{

    /* background-color: #fff; */
    flex:1;
    width:2rem;
    justify-content:center;
    margin-top:0.46rem;

    .personal-info-num{
        font-weight: 700;
        font-size: 0.5rem;
        font-family: PingFangSC-medium;
        color: #040818; 
          
    }
    .personal-info-num-name{
        color:#9a9a9a;
        font-size: 0.3rem;
        font-family: PingFangSC-medium;
        font-weight: 400;
    }

}

`;