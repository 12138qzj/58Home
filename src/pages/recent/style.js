import styled from "styled-components";

export const RecentTab = styled.div`
    font-family: PingFangSC-Regular;
    height: 1.5648rem /* 169/108 */;
    margin-top:-44px;
    padding: 0 .463rem /* 50/108 */ 0 .3704rem /* 40/108 */;
    display:flex;
    justify-content:center;
    align-items: center;
    box-sizing:border-box;
    background-color: #fff;
  & .order-tab__icon{
    width: .7407rem /* 80/108 */;
    height: .7407rem /* 80/108 */;
    border: 1px solid #ced0d2;
    border-radius:50%;
    line-height:.7417rem;
    text-align:center;
    font-size:.3rem;
    font-weight:bold;
    position: absolute;
        left: .2778rem /* 30/108 */;
  }
  & .order-tab__title{
    font-size: 18px/* 52/108 */;
  }

`;

export const BlankRecent = styled.div`
      margin-top:80px;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items: center;
    .blank-recent__box{
      width:150px;
      height:150px;
      background-image:url('//static.djtest.cn/pt/project/trace/static/img/wjl@2x.41abcad.png');
      background-repeat: no-repeat;
      background-size: auto 100%;
      background-position: 50%;
    }
    .blank-recent__text{
      font-size:14px;
    }
`
