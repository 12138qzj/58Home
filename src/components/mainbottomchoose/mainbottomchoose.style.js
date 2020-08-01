import styled from 'styled-components';

export const Top = styled.div `
    /* display:flex;
    flex-direction:row;
    justify-content: space-between;
    padding : 5px 10px; */
    background : white;
    height: 1.78rem;
    position:sticky;
    top:1.3rem;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    border-bottom:1px solid #ececec;
    z-index:9;
    a{
      justify-content:center;
      color:blue;
      &.selected{
          color:red;
          background:white;
          .personal-info-num{
                font-weight: 700;
                font-size: 0.4rem;
                font-family: PingFangSC-medium;
                color: #ff4d4c; 
                
            }
            .personal-info-num-name{
                display:inline;
                margin-left:0.1rem;
                padding:0.05rem 0.18rem;
                border-radius:0.25rem;
                color:white;
                font-size: 0.3rem;
                font-family: PingFangSC-medium;
                font-weight: 400;
                background-color:#ff4d4c;
            }
        }   
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
        font-size: 0.4rem;
        font-family: PingFangSC-medium;
        color: #040818; 
          
    }
    .personal-info-num-name{
        color:#9a9a9a;
        /* margin-left:0.25rem; */
        width:1.58rem;
        font-size: 0.3rem;
        font-family: PingFangSC-medium;
        font-weight: 400;
        /* background-color:pink; */
        &>span{
            margin: 0px auto;

        }
    }

}

`;