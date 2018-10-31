import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import { WhiteSpace } from 'antd-mobile';
import { connect } from 'react-redux';
import { NavBar, Icon } from 'antd-mobile';
import { Grid } from 'antd-mobile';
import { Route, routerRedux } from 'dva/router';
import styles from '../themes/index.less';
const Mock = require('mockjs')


@connect()
export default class App extends React.Component {
  state = {
    data: ['u9'],
    imgHeight: 315,
  }
  // componentDidMount() {
  //   // simulate img loading
  //   setTimeout(() => {
  //     this.setState({
  //       data: ['u9', 'u12'],
  //     });
  //   }, 100);
  // }

  onNavigate = (path) => {

    this.props.dispatch(routerRedux.push(path));
  };
  render() {
   /* const data = Array.from(new Array(4)).map((_val, i) => ({
    /!*  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',*!/
      icon:require('../assets/u1.png')
    /!* text: `name${i}`,*!/
    }));*/
    const data = [ {icon:require('../assets/r1.png'),text:"驾驶舱"},
                    {icon:require('../assets/r2.png'),text:"专题分析"},
                    {icon:require('../assets/r3.png'),text:"我的收藏"},
                    {icon:require('../assets/r4.png'),text:"每月关注"},
    ];

    const Dates = Mock.mock({
      'sales|8': [
        {
          'name|+1': 2008,
          'Clothes|200-500': 1,
          'Food|180-400': 1,
          'Electronics|300-550': 1,
        },
      ],})
   /* console.log(Dates,"mockdate")*/
    const data1 = Array.from(new Array(4)).map(() => ({
      icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
    }));

    return (
      <div style={{backgroundColor:'#f0f0f0'}}>

        <NavBar

          style={{background:"none",position: "absolute", top: 0, left: 0, zIndex: 10}}
          icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/loginInterface"));}}
        /*  rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />,
          ]}*/
        > </NavBar>

        <Carousel
          autoplay={true}
          infinite
        /*  beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={index => console.log('slide to', index)}*/
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                 src={require('../assets/'+val+'.png')}
               //src={`https://zos.alipayobjects.com/rmsportal/${val}.png`}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>

        <WhiteSpace size="lg" />
          <WingBlank>
             <Grid  columnNum={2} data={data} square={true}
               hasLine={true}
               itemStyle={{ backgroundColor:'#ffffff',borderRadius:"10px",margin:"8px 5px" }}
               // className={styles.am-grid}
               onClick={
                 (el: Object, index: number)=>{
                   if(index===0){
                     this.onNavigate('/cockPit')
                   }
                   else if(index===1){
                     this.onNavigate('/specificAnalysis')
                   }
                   else if(index===2){
                     this.onNavigate('/myFavorite')
                   }
                   else if(index===3){
                     this.onNavigate('/monthlyClose')
                   }

                   /* this.onNavigate('/ChartWithEventComponent')*/
                 }
               }
        />
          </WingBlank>

      </div>
    );
  }
}
