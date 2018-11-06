import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import { Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import { connect } from 'react-redux';
import styles from '../IndexPage.less';
import ChartWithEventComponent from "../../components/chart/ECharts/ChartWithEventComponent";
import LineComponent from "../../components/chart/ECharts/LineComponent";
import PopoverBar from "../../components/PopoverBar";
import DynamicChartComponent from "../../components/chart/ECharts/DynamicChartComponent";
import PlaceHolder from "../../components/PlaceHolder";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class EchartList extends React.Component {

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
        <WhiteSpace  />

      </div>
    );
  }

}
