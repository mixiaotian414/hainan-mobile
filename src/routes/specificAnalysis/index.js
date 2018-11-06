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
export default class SpecificAnalysis extends React.Component {
  state = {
    date: now,
    open: false,
  };
  onNavigate = (path) => {

    this.props.dispatch(routerRedux.push(path));
  };
  render() {
    const data = [ {icon:require('../../assets/s1.png'),text:"资产负债分析"},
      {icon:require('../../assets/s2.png'),text:"存贷分析"},
      {icon:require('../../assets/s3.png'),text:"风险分析"},
      {icon:require('../../assets/s4.png'),text:"财务分析"},
    ];

    const { app } = this.props;

    return (
      <div style={{overflowY:'hidden',height:document.documentElement.offsetHeight}}>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          style={{position:'fixed',zIndex:'5',width:'100%',top:'0',right:'0'}}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
        >专题分析</NavBar>
        <div style={{marginTop:'60px'}}>
          <WhiteSpace size="lg" />
          <WingBlank>
            <Grid  columnNum={2} data={data} square={true}
                   hasLine={true}
                   itemStyle={{ backgroundColor:'#ffffff',borderRadius:"10px",margin:"8px 5px" }}
                /*className="not-square-grid"*/
                   onClick={
                       (el: Object, index: number)=>{
                           if(index===0){
                               this.onNavigate('/assetloadAnalysis')
                           }
                           else if(index===1){
                               this.onNavigate('/depositAnalysis')
                           }
                           else if(index===2){
                               this.onNavigate('/ventureAnalysis')
                           }
                           else if(index===3){
                               this.onNavigate('/financialAnalysis')
                           }

                           /* this.onNavigate('/ChartWithEventComponent')*/
                       }
                   }
            />
          </WingBlank>
        </div>



      </div>
    );
  }

}
