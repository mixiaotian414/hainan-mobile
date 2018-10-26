import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import { Grid } from 'antd-mobile';
import PopoverBar from "../../components/PopoverBar";
import Tables from "../../components/Tables";
import PlaceHolder from "../../components/PlaceHolder";
import AnalysisOfTheSavingsAndLoan from "../../components/chart/ECharts/AnalysisOfTheSavingsAndLoan";
import Deposits from "../../components/chart/ECharts/Deposits";
import LoansMade from "../../components/chart/ECharts/LoansMade";
import styles from './index.less';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class DepositAnalysis extends React.Component {
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
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/specificAnalysis"));}}
        >存贷分析</NavBar>
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
          <AnalysisOfTheSavingsAndLoan />
          <WhiteSpace size="lg" />
          <Deposits/>
          <LoansMade/>





      </div>
    );
  }

}
