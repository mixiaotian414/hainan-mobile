import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import PlaceHolder from "../../components/PlaceHolder";
import DepositTrend from "../../components/chart/ECharts/DepositTrend";
import style from "./index.less";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class TrendAnalysis extends React.Component {
  state = {
    date: now,
    open: false,
  };

  render() {
    const { app } = this.props;
    return (
      <div className='trendAnalysis'>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
        >趋势分析</NavBar>
          <WhiteSpace size="lg" />
          <div style={{display:'flex',width:"100%",backgroundColor:'rgb(255, 255, 255)'}}>
              <div className={style.contet}>
                  <span >备付金率</span>
              </div>
              <div  className={style.contet}>
                  <span>比去年同期</span></div>
              <div className={style.contet}>
                  <span>比上月</span></div>

          </div>
        <WhiteSpace size="lg" />
          <PlaceHolder title="环比趋势（2018）"/>
          <DepositTrend/>
          <WhiteSpace size="lg" />
          <PlaceHolder title="同比趋势（2014-2018）"/>
          <DepositTrend/>
      </div>
    );
  }

}
