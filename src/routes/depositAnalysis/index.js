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
      <div style={{overflowY:'hidden'}}>
        <div  style={{position:'fixed',zIndex:'5',width:'100%',top:'0',right:'0'}}>
          <NavBar
              mode="light"
              icon={<Icon type="left" />}
              onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/specificAnalysis"));}}
          >存贷分析</NavBar>
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
          <AnalysisOfTheSavingsAndLoan />
          <WhiteSpace size="lg" />
          <Deposits/>
          <LoansMade/>
        </div>
      </div>
    );
  }

}
