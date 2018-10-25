import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import PopoverBar from "../../components/PopoverBar";
import DepositTrend from "../../components/chart/ECharts/DepositTrend";
import Rental from "../../components/chart/ECharts/Rental";
import PlaceHolder from "../../components/PlaceHolder";
import MapChartComponent from "../../components/chart/ECharts/MapChartComponent";
import TransparentBar3DComPonent from "../../components/chart/ECharts/TransparentBar3DComPonent";
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
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
        >驾驶舱</NavBar>
        <DatePicker
          mode="date"
          title="Select Date"
          extra="Optional"
          value={this.state.date}
          itemStyle={{backgroundColor:'#f0f0f0'}}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal"> </List.Item>
        </DatePicker>
        <DepositTrend/>
        <WhiteSpace size="lg" />
        <Rental/>
        <WhiteSpace size="lg" />
         <MapChartComponent/>
        {/*  <PlaceHolder title="3D视图"/>
        <WingBlank> <TransparentBar3DComPonent/></WingBlank>
*/}

      </div>
    );
  }

}
