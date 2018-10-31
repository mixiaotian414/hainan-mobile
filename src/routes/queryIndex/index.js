import React from 'react';
import { NavBar, Icon,Button ,SearchBar} from 'antd-mobile';

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
      <div style={{display:disabled?"":"none",position:'relative',height:document.documentElement.clientHeight -60+8}} className='queryIndex'>
        <NavBar
          mode="light"
          style={{position:'fixed',top:'0',left:'0',zIndex:'5',width:'100%'}}
       /*   icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}*/
        >指标查询</NavBar>
          <div style={{width:'100%',position:'fixed',top:'60px',right:'0',zIndex:'5'}}>
              <SearchBar
                  value={this.state.inputValue}
                  placeholder="Search"
                  onChange={this.onSearch}
                  onClear={() => { console.log('onClear'); }}
                  onCancel={() => { console.log('onCancel'); }}
              />
          </div>
         <LetterIndex {...lprops} />
          <div style={{display:"flex",width:'100%',position:'fixed',bottom:'49px',right:'0',zIndex:'5'}}>
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
