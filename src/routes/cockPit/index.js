import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import PopoverBar from "../../components/PopoverBar";
import DepositTrend from "../../components/chart/ECharts/DepositTrend";
import Rental from "../../components/chart/ECharts/Rental";
import PlaceHolder from "../../components/PlaceHolder";
import TotalAssetsS from "../../components/chart/ECharts/TotalAssetsS";
import TotalLiabilitiesS from "../../components/chart/ECharts/TotalLiabilitiesS";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class CookPit extends React.Component {
  state = {
    date: now,
    open: false,
  };

  render() {
    const { app } = this.props;
    return (
      <div style={{height:document.documentElement.offsetHeight}}>
          <div  style={{position:'fixed',zIndex:'5',width:'100%',top:'0',right:'0'}}>
              <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  style={{position:'relative',zIndex:'10'}}
                  onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
              >驾驶舱</NavBar>
              <DatePicker
                  mode="date"
                  title="日期选择"
                  extra="Optional"
                  value={this.state.date}
                  itemStyle={{backgroundColor:'#f0f0f0'}}
                  onChange={date => this.setState({ date })}
              >
                  <List.Item arrow="horizontal"> </List.Item>
              </DatePicker>
          </div>
          <div style={{marginTop:'104px'}}>
              <TotalAssetsS/>
              <TotalLiabilitiesS/>
              <WhiteSpace size="lg" />
              <DepositTrend/>
              <WhiteSpace size="lg" />
              <Rental/>
              <WhiteSpace size="lg" />
          </div>




      </div>
    );
  }

}
