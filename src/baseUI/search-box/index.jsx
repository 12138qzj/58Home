import React, {useRef, useState, useEffect, useMemo} from 'react';
import styled from 'styled-components';
// import style from '../../assets/global-style';
import { debounce } from './../../api/utils';
import imgSearch from '../../assets/images/搜索.png';

const SearchBoxstyle = styled.div `
    position: fixed;
    top: 0;
    width: 100%;
    display: flex;
    padding: .1759rem/* 19/108 */;
    height: .815rem/* 88/108 */;
    background-color: white;
    .server-search-input {
        position: relative;
        /* height: 0.9629rem; */
        height: .81rem/* 77/108 */
        ;
        width: 8.38rem/* 905/108 */
        ;
        background-color: #f5f6fa;
        border-radius: 30px;
        .server-search-place {
            position: absolute;
            width: 8.1944rem/* 885/108 */
            ;
            
            padding: .093rem/* 10/108 */
            ;
            display: flex;
            line-height: .4167rem;
            font-size: 0;
            .server-search-border {
                /* display: inline-block; */
                width: .6759rem/* 73/108 */
                ;
                height: .3704rem/* 40/108 */
                ;
                margin-left: .222rem/* 24/108 */
                ;
                padding-top: .18rem/* 8/108 */
                ;
                .server-search-img {
                    width: 0.3703rem;
                    /*  height: 0.3703rem; */
                }
            }
        }
        input {
            border: none;
            height: .715rem/* 55/108 */;
            width:6.74rem;
            color: #848c99;
            background-color: #f5f6fa;
            font-size: 0.3rem !important;
        }
        .icon-delete{
          margin-top:0.1rem;
          color:gray;
        }
      }
    .button{
      width: 1.3rem;
      height: .9rem;
      line-height: .9rem;
      text-align: center;
      font-size: .37rem;
      color: #e5484a;
    }
`;

const SearchBox = (props) => {
  const queryRef = useRef();
  const [query, setQuery] = useState('');

  // //接受父级传过来的搜索内容
  const { newQuery } = props;
  // //handleQuery 是执行函数 被封装在节流中
  const { handleQuery } = props;

  let handleQueryDebounce = useMemo(() => {
    //返回一个接受参数的函数 
    return debounce(handleQuery, 500);
  }, [handleQuery]);

  useEffect(() => {
    //当点击搜索图标 进入这个页面  将焦点获取到输入框
    queryRef.current.focus();
  }, []);

  useEffect(() => {
    //传入参数 执行返回的函数
    handleQueryDebounce(query);
    // eslint-disable-next-line 
    //当这个依赖改变的时候执行此函数
  }, [query]);

  useEffect(() => {
    let curQuery = query;
    //判断现在输入框中的内容是否与现在点击的内容是否一样 
    if(newQuery !== query){
      //不一样的时候使用点击的内容
      curQuery = newQuery;
      //将点击的内容覆盖输入框里面的内容
      queryRef.current.value = newQuery;
    }
    setQuery(curQuery);
    // eslint-disable-next-line
    //当父组件传过来值   改变则执行此函数
  }, [newQuery]);

  const handleChange = (e) => {
    //获取输入框的值
    let val = e.currentTarget.value
    //存储输入框的值（state）
    setQuery(val);
  };

  const clearQuery = () => {
    // 清空state中的值
    setQuery('');
    //清空输入框
    queryRef.current.value = '';
    //输入框获取焦点
    queryRef.current.focus();
  }
  
  const displayStyle = query ? {display: 'block'}: {display: 'none'};

  return (
    <>
     <SearchBoxstyle>
        <div className="server-search-input">
            <div className="server-search-place">
                <p className='server-search-border'>
                    <img className='server-search-img' src={imgSearch}></img>
                </p>
                <input type="text" placeholder='擦玻璃' style={{fontSize:"11px"}} ref={queryRef} onChange={handleChange}/> 
                <i className="iconfont icon-delete" onClick={clearQuery} style={displayStyle}>&#xe640;</i>
            </div>
        </div>
        <div className="button" onClick={() => props.back()}>取消</div>
      </SearchBoxstyle>
      
    </>
   
    // <SearchBoxWrapper>
    //   <i className="iconfont icon-back" onClick={() => props.back()}>&#xe655;</i>
    //   <input ref={queryRef} className="box" placeholder="搜索歌曲、歌手、专辑" onChange={handleChange}/>
    //   <i className="iconfont icon-delete" onClick={clearQuery} style={displayStyle}>&#xe600;</i>
    // </SearchBoxWrapper>
  )
};

export default React.memo(SearchBox);