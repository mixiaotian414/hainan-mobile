import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import { Grid } from 'antd-mobile';
import PopoverBar from "../../components/PopoverBar";
import Tables from "../../components/Tables";
import PlaceHolder from "../../components/PlaceHolder";
import MapChartComponent from "../../components/chart/ECharts/MapChartComponent";
import TransparentBar3DComPonent from "../../components/chart/ECharts/TransparentBar3DComPonent";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class VentureAnalysis extends React.Component {
  state = {
    date: now,
    open: false,
  };

  render() {


    const { app } = this.props;
    return (
      <div>
          <div  style={{position:'fixed',zIndex:'5',width:'100%',top:'0',right:'0'}}>
              <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/specificAnalysis"));}}
              >风险分析</NavBar>
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
          </div>
          <div style={{marginTop:'104px'}}>

          </div>
      </div>
    );
  }

}
