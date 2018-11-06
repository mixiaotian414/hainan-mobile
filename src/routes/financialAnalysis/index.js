import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import { Tabs, Badge } from 'antd-mobile';
import OperatingMargin from "../../components/chart/ECharts/OperatingMargin";
import OperatingMarginLine from "../../components/chart/ECharts/OperatingMarginLine";
import { Grid } from 'antd-mobile';
import PopoverBar from "../../components/PopoverBar";
import Tables from "../../components/Tables";
import PlaceHolder from "../../components/PlaceHolder";
import MapChartComponent from "../../components/chart/ECharts/MapChartComponent";
import TransparentBar3DComPonent from "../../components/chart/ECharts/TransparentBar3DComPonent";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()

export default class FinancialAnalysis extends React.Component {
  state = {
    date: now,
    open: false,
  };

  render() {


    const { app } = this.props;
    const tabs = [
          { title: <Badge text={'3'}>盈利能力</Badge> },
          { title: <Badge text={'今日(20)'}>偿债能力</Badge> },
          { title: <Badge dot>运营能力</Badge> },
          { title: <Badge dot>发展能力</Badge> },
    ];
    return (
        <div style={{overflowY:'hidden'}}>
          <div  style={{position:'fixed',zIndex:'5',width:'100%',top:'0',right:'0'}}>
              <NavBar
                  mode="light"
                  icon={<Icon type="left" />}
                  onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/specificAnalysis"));}}
              >财务分析</NavBar>
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
              <Tabs tabs={tabs}
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
              >
                  <div style={{  backgroundColor: '#fff',height:document.documentElement.offsetHeight}}>
                      <WhiteSpace size="lg" />
                      <OperatingMargin />
                      <WhiteSpace size="lg" />
                      <OperatingMarginLine />

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
        <WhiteSpace size="lg" />
      </div>
    );
  }

}
