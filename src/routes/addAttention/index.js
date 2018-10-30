import React from 'react';
import { List,  NavBar, Icon ,WhiteSpace,Button,Toast} from 'antd-mobile';

import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import PlaceHolder from "../../components/PlaceHolder";
import style from "./index.less";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const Item = List.Item;
const Brief = Item.Brief;
@connect()
export default class AddAttention extends React.Component {
  state = {
    date: now,
    open: false,
  };

  render() {
    const { app,location } = this.props;
      const query  =location.query;
      console.log(query,'query')
    return (
      <div className='attention'>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
        >添加关注</NavBar>

          <List   className="my-list" style={{height: document.documentElement.clientHeight -130,    overflowY: 'auto'}}>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item  onClick={()=>{
                  this.props.dispatch(
                      routerRedux.push({
                              pathname:'/magic',
                              query:""
                          }
                      )
                  );}
              }
                  extra={ <img
                  src={require('../../assets/p29.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>表内存款 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p30.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>储蓄存款 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p31.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>对公贷款 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p32.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>负债总额 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p32.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>负债总额 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p32.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>负债总额 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p32.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>负债总额 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p32.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>负债总额 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p32.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>负债总额 <Brief>1269.96亿元</Brief></Item>
              <WhiteSpace size="lg" className={style.wspColor} />
              <Item extra={ <img
                  src={require('../../assets/p32.png')}
                  alt=""
                  style={{ verticalAlign: 'top' }}
              />}>负债总额 <Brief>1269.96亿元</Brief></Item>

          </List>

          <Button type="ghost" className="am-button-borderfix"
                  style={{ margin: '15px auto',width:'80%'  }}
                  onClick={()=>{
                      Toast.success('添加关注成功！',2);
                  }}
          ><img
              src={require('../../assets/p33.png')}
              alt=""
              style={{ width:'18px',margin: '0px 5px -1px' }}
          />添加关注</Button>
      </div>
    );
  }

}
