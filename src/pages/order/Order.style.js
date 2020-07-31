import styled from "styled-components";

export const OrderTab = styled.div`
    font-family: PingFangSC-Regular;
    height: 1.5648rem /* 169/108 */;
    margin-top:-44px;
    padding: 0 .463rem /* 50/108 */ 0 .3704rem /* 40/108 */;
    display:flex;
    justify-content:space-between;
    align-items: center;
    box-sizing:border-box;
    /* font-weight:bold; */
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
  }
  & .order-tab__title{
    font-size: .4815rem /* 52/108 */;
  }
  & .order-tab__right{
    font-size: .3796rem /* 41/108 */;
  }
`;
export const OrderType = styled.div`
    display:flex;
    flex-direction: row;
    height: 1.1667rem /* 126/108 */;
    justify-content:space-around;
    background-color: #fff;
    a{
      line-height:1.1019rem /* 119/108 */;
      margin: 0 10px;
      text-align: center;
      flex: 1;
      font-weight: 540;
      font-size: 14px;
      &.selected{
            span{
                display:inline-block;
                height:1.1019rem /* 119/108 */;
                font-weight:540;
                border-bottom: .0648rem /* 7/108 */ solid #e6454a;
            }
        }
    }
`;
export const TypeItem = styled.div`
    font-family: PingFangSC-Medium;
`;
export const OrderAd = styled.div`
  height: 1.0926rem /* 118/108 */;
  background-color:#fbf1c2;
  color:#846545;
  font-size: .3796rem /* 41/108 */;
  padding:0 .4352rem /* 47/108 */;
  line-height:1.0926rem /* 118/108 */;
  margin-bottom: .287rem /* 31/108 */;
`;
export const BlankOrder = styled.div`
    width: 100%;
    padding-top: 75px;
    text-align: center;
    display:flex;
    flex-direction:column;
    align-items: center;
    & .blank_img{
      width: 150px;
      height: 150px;
      vertical-align: middle;
      background-color: inherit;
      margin-bottom: 15px;
    }
    &.blank_text{
      font-size: .463rem /* 50/108 */;
    }
    & .blank_button{
      width: 4.2222rem /* 456/108 */;
      height: 1.2315rem /* 133/108 */;
      color:#e6454a;
      border:1px solid #e6454a;
      border-radius:30px;
      font-size: .4444rem /* 48/108 */;
      font-weight:560;
      line-height:1.2315rem;
      margin-top:.6574rem /* 71/108 */;
    }
`
export const OrderBox = styled.div`
    margin-bottom: 10px;
    background: #fff;
    & .order-title{
        font-family: PingFangSC-Regular;
        position: relative;
    }
      & .order-title__box{
        flex-direction: row;
        display: flex;
        align-items: center;
        margin: 0 15px;
        line-height: 47.5px;
        justify-content: space-between;
      }
        & .shop-info{
          height: 47.5px;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
          & .shop-icon{
            display: inline-block;
            width: 20px;
            height: 20px;
            vertical-align: middle;
            background-size: cover;
            margin-right: 6px;
            background-image: url('data:image/png;base64,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');
        
          }
          & .title{
            vertical-align: middle;
            font-size: 14px;
            color: #292d33;
            max-width: 190px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            display: inline-block;
          }
        & .status{
          font-size: 14px;
          color: #e6454a;
          float: right;
          font-weight: 600;
          font-family: PingFangSC-Medium;
        }

      & .shop-info{
        padding-top: 11.5px;
      }
        & .shop-box{
          padding: 0 15px 0 60px;
          height: 35px;
          width: 100%;
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          align-items: center;
          position: relative;
        }
          & .product-img{
            width: 35px;
            height: 35px;
            display: block;
            border-radius: 2px;
            position: absolute;
            left: 15px;
            top: 0;
            background-color: #fff;

          }
          & .product-info-box{
            height: 35px;
            font-size: 16px;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
          }         
            & .product-title{
              font-family: PingFangSC-Medium;
              font-size: 16px;
              line-height: 16px;
              color: #292d33;
              max-width: 100%;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }

        & #card-address{
          padding: 17px 15px 0;
        }
          & .info-box{
            font-family: PingFangSC-Regular;
            font-size: 14px;
            color: #292d33;
            line-height: 14px;
            padding-bottom: 15px;
          }
            & .overflow-ellipsis{
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            & .address{
              margin-top: 12px;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
      & #card-button:before {
          content: "";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 200%;
          height: 1px;
          background: #f1f2f6;
          -webkit-transform: scale(.5);
          transform: scale(.5);
          -webkit-transform-origin: 0 0;
          transform-origin: 0 0;
      }
      & #card-button{
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
          -webkit-tap-highlight-color: transparent;
      }
        & .btn-list{
          display: flex;
          align-items: center;
          justify-items:flex-end;
          height: 50px;
          flex-direction: row-reverse;
        }
        
          & .button{
            line-height: 29px;
            vertical-align: middle;
            padding-top: 1px;
            margin-left: 10px;
            font-size: 14px;
            color: #292d33;
            width: 75px;
            height: 29px;
            justify-content: center;
            font-family: PingFangSC-Regular;
            border:1px solid #565a5e;
            border-radius:5px;
            text-align:center;
            margin-right:10px;
          }
`
