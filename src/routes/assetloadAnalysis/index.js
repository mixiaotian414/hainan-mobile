import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import { Tabs,Badge } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import PopoverBar from "../../components/PopoverBar";
import Tables from "../../components/Tables";
import PlaceHolder from "../../components/PlaceHolder";
import AnalysisOfAssetsAndLiabilities from "../../components/chart/ECharts/AnalysisOfAssetsAndLiabilities";
import TrendsInCorporateLending from "../../components/chart/ECharts/TrendsInCorporateLending";
import styles from './index.less';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const tabs = [
    { title: <Badge text={'3'}>金额趋势</Badge> },
    { title: <Badge text={'今日(20)'}>增长率趋势</Badge> },
];
@connect()
export default class AssetloadAnalysis extends React.Component {
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
        >资产负债分析</NavBar>
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
        <AnalysisOfAssetsAndLiabilities />
        <WhiteSpace size="lg" />

          <div>
              <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
              >
                  <div style={{  backgroundColor: '#fff' }}>
                      <TrendsInCorporateLending />
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                      Content of second tab
                  </div>
              </Tabs>
          </div>
      </div>
    );
  }

}
