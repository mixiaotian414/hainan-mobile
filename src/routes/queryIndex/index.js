import React from 'react';
import { NavBar, Icon,Button ,Flex } from 'antd-mobile';

import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import LetterIndex from "./LetterIndex";

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class QueryIndex extends React.Component {
  state = {
    date: now,
    open: false,

  };

  render() {
    const { app } = this.props;
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
        >指标查询</NavBar>
         <LetterIndex/>
          <div style={{display:"flex"}}>
          <Button  style={{width:'50%'}} onClick={()=>{location.reload()}}>重置</Button>
          <Button type="primary" style={{width:'50%' }}>确认</Button>
          </div>
      </div>
    );
  }

}
