import React, { useState, useEffect,  useCallback } from 'react'
import Scroll from './../../baseUI/scroll/index';
import  {forceCheck} from 'react-lazyload';

import {  ShortcutWrapper, HotKey,List } from './style';
import SearchBox from '../../baseUI/search-box/index';
import { connect } from 'react-redux'
import * as actionTypes  from './store/actionCreators'

const Search = (props) => {

  const [query, setQuery] = useState('');
  console.log('1',props)

  const {
    hotList,
    //数据加载效果还未完成 值改变已经完成已经传过来了
    enterLoading, 
    searchList, 
  } = props

  const {
    getHotKeyWordsDispatch,
    changeEnterLoadingDispatch, 
    getSearchResultDispatch, 
  } = props

  useEffect(()=>{
    if(!hotList.length){
      getHotKeyWordsDispatch();
    }
  },[])
  const renderHotKey = () => {
    let list = hotList ? hotList: [];
    return (
      <ul>
        {
          list.map((item,index) => {
            // console.log("000000",item)
            return (
              // <li className="item" key={item.first} onClick={() => setQuery(item.first)}>
              //   <span>{item.first}</span>
              // </li>
              <li className="item" key={index} onClick={() => setQuery(item)}>
              <span>{item}</span>
            </li>
            )
          })
        }
      </ul>
    )
  };
  const renderSearchresult=()=>{
    let lists = searchList;
    console.log("searchList",searchList);
    //判断store中的数据是否存在 
    if(!lists || !lists.length) return;
    return (
      <List>
        {
          lists.map((item, index) => {
            return (
              <li key={index} onClick={() => props.history.push(`detail?data=${item}`)}>
                {item}
              </li>
            )
          })
        }
      </List>
    )
  }
  const handleQuery = (q) => {
    setQuery(q);
    if(!q) return;
    changeEnterLoadingDispatch(true);
    getSearchResultDispatch(q);
  }
  const searchBack = useCallback(() => {
    // setShow(false);
    props.history.goBack();
    // console.log(props)
  }, []);
  // console.log("加载",enterLoading);
    return (
      <>
        <SearchBox back={searchBack} newQuery={query} handleQuery={handleQuery}></SearchBox>

        <ShortcutWrapper show={!query}>
          <Scroll>
            <div>
              <HotKey>
                <h1 className="title">热门搜索</h1>
                {renderHotKey()}
              </HotKey>
              {/* <SearchHistory>
                <h1 className="title">
                  <span className="text">搜索历史</span>
                  <span className="clear">
                    <i className="iconfont">&#xe63d;</i>
                  </span>
                </h1>
                {renderHistoryList()}
              </SearchHistory> */}
            </div>
          </Scroll>
        </ShortcutWrapper>
        <ShortcutWrapper show={query}>
          {/* 将scroll里面的数据(图片)设计为懒加载 */}
          <Scroll onScorll={forceCheck}>
            <div>
              {renderSearchresult()}
            </div>
          </Scroll>
        </ShortcutWrapper>
    
      </>
      )
}

const mapStateToProps = (state) => ({
    hotList:state.search.hotList,
    enterLoading: state.search.enterLoading,
    // suggestList: immutableSuggestList, 
    // songsCount, 
    searchList: state.search.searchList
})

const mapDispatchToProps =(dispatch)=> {
  return{
    getHotKeyWordsDispatch() {
      dispatch(actionTypes.getHotKeyWords());
    },
    changeEnterLoadingDispatch(data) {
      dispatch(actionTypes.changeEnterLoading(data))
    },
  
    getSearchResultDispatch(id) {
      dispatch(actionTypes.getSearchList(id));
    }
  }
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
