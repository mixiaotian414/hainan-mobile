import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import { Tabs, Badge } from 'antd-mobile';
import PopoverBar from "../../components/PopoverBar";
import Tables from "../../components/Tables";
import PlaceHolder from "../../components/PlaceHolder";
import TotalAssets from "../../components/chart/ECharts/TotalAssets";
import TotalLiabilities from "../../components/chart/ECharts/TotalLiabilities";
import styles from './index.less';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class MonthlyClose extends React.Component {
  state = {
    date: now,
    open: false,
  };

  render() {
    const { app } = this.props;
    const tabs = [
          { title: <Badge text={'3'}>经营运行</Badge> },
          { title: <Badge text={'今日(20)'}>资产负债</Badge> },
          { title: <Badge dot>净息差统计</Badge> },
          { title: <Badge dot>收入支出</Badge> },
    ];
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
        >每月关注</NavBar>
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
              <div>
                  <Tabs tabs={tabs}
                        initialPage={0}
                        onChange={(tab, index) => { console.log('onChange', index, tab); }}
                        onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                  >
                      <div style={{  backgroundColor: '#fff' }}>
                          <WhiteSpace size="lg" />
                          <TotalAssets />
                          <WhiteSpace size="lg" />
                          <TotalLiabilities />


                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                          Content of second tab
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                          Content of third tab
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
                          Content of 4 tab
                      </div>
                  </Tabs>
              </div>
      </div>
    );
  }

}
