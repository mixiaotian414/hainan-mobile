import React from 'react';
import {  NavBar, Icon ,Flex,WhiteSpace} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import DepositTrend from "../../components/chart/ECharts/DepositTrend";
import style from "./index.less";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const PlaceHolder = ({ className = '', ...restProps }) => (
    <div className={`${className} placeholder`} {...restProps}>Block</div>
);
@connect()
export default class Magic extends React.Component {
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
        >魔术狮</NavBar>
          <WhiteSpace size="lg" />
          <div className={style.topTip}>
                  <span >1296.96</span>
          </div>
          <WhiteSpace size="lg" />
          <div className={style.listTable}>
          <Flex justify="between">
              <span>比上日</span>
              <span className={style.num}>1.61▲</span>
              <span className={style.num}>0.13%</span>
          </Flex> <Flex justify="between">
              <span>比上月</span>
              <span className={style.num}>1.61▲</span>
              <span className={style.num}>0.13%</span>
          </Flex> <Flex justify="between">
              <span>比年初</span>
              <span className={style.num}>1.61▲</span>
              <span className={style.num}>0.13%</span>
          </Flex> <Flex justify="between">
              <span>比同期</span>
              <span className={style.num}>1.61▲</span>
              <span className={style.num}>0.13%</span>
          </Flex>
          </div>
        <WhiteSpace size="lg" />

          <DepositTrend/>
      </div>
    );
  }

}
