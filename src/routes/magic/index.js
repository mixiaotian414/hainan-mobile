import React from 'react';
import {  NavBar, Icon ,Flex,WhiteSpace} from 'antd-mobile';
import request  from '../../utils/request'
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
      data:{}
  };
    componentDidMount(){
        const { app,location } = this.props;
        const query  =location.query;
        console.log(query,'query')
        this.fetch(query)

    }

    fetch = (value) => {
        this.promise = request({
            url:"/gateway/magiclist.json",
            method: 'post',
            data: {
                indexArray:value,
            },
        }).then((result) => {
            if (result.RSP_HEAD.TRAN_SUCCESS!=='1') {
                return
            }
            const list = result.RSP_BODY.LIST

            console.log(list,"list")

            this.setState({
                data:list[0]
            });

        })
    }

    render() {

        const data =this.state.data;

    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() =>{
              this.props.history.go(-1);
              this.props.dispatch(
                  routerRedux.push({
                          // pathname:'/addAttention',
                          query:""
                      }
                  )
              );}
          }
        >魔术狮</NavBar>
          <WhiteSpace size="lg" />
          {

          }<div className={style.topTip}>
                  <span >{data.num}</span>
          </div>
          <WhiteSpace size="lg" />
          <div className={style.listTable}>
          <Flex justify="between">
              <span>比上日</span>
              <span className={style.num}>{data.value1}</span>
              <span className={style.num}>{data.percent1}</span>
          </Flex> <Flex justify="between">
              <span>比上月</span>
              <span className={style.num}>{data.value2}</span>
              <span className={style.num}>{data.percent2}</span>
          </Flex> <Flex justify="between">
              <span>比年初</span>
              <span className={style.num}>{data.value3}</span>
              <span className={style.num}>{data.percent3}</span>
          </Flex> <Flex justify="between">
              <span>比同期</span>
              <span className={style.num}>{data.value4}</span>
              <span className={style.num}>{data.percent4}</span>
          </Flex>
          </div>
        <WhiteSpace size="lg" />

          <DepositTrend/>
      </div>
    );
  }

}
