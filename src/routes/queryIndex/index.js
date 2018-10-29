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
      checkValue:[]
  };

  render() {
      const lprops={
          _onChange:(value)=>{
              this.setState({checkValue:value})
              console.log("props",value)
          },
          onfresh:()=>{
              this.setState({checkValue:[]})
          }
      }


    const { app,disabled } = this.props;
    const { checkValue} = this.state;
    return (
      <div style={{display:disabled?"":"none"}}>
        <NavBar
          mode="light"
       /*   icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}*/
        >指标查询</NavBar>
         <LetterIndex {...lprops}/>
          <div style={{display:"flex"}}>
          <Button  style={{width:'50%'}} onClick={()=>{location.reload()}}>重置</Button>
          <Button type="primary" style={{width:'50%' }}
                  onClick={
                    ()=>{
                        this.props.dispatch(
                            routerRedux.push({
                                pathname:'/addAttention',
                                query:checkValue
                                }
                            )
                        );}

                    }>确认</Button>
          </div>
      </div>
    );
  }

}
