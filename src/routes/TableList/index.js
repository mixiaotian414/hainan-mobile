import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import PopoverBar from "../../components/PopoverBar";
import Tables from "../../components/Tables";
import PlaceHolder from "../../components/PlaceHolder";
import MapChartComponent from "../../components/chart/ECharts/MapChartComponent";
import TransparentBar3DComPonent from "../../components/chart/ECharts/TransparentBar3DComPonent";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class TableList extends React.Component {
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
          rightContent={
            <PopoverBar/>
           }
        >驾驶舱</NavBar>
        <DatePicker
          mode="date"
          title="日期选择"
          extra="Optional"
          value={this.state.date}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal">三亚分行</List.Item>
        </DatePicker>
        <WhiteSpace   />
        <PlaceHolder title="电子银行信息总览"/>
        <Tables/>
        <WhiteSpace   />
        <PlaceHolder title="地图"/>
        <WingBlank> <MapChartComponent/></WingBlank>
      {/*  <PlaceHolder title="3D视图"/>
        <WingBlank> <TransparentBar3DComPonent/></WingBlank>
*/}

      </div>
    );
  }

}
