import React from 'react';
import { TabBar } from 'antd-mobile';
import { connect } from 'react-redux';
import  App from '../components/App';
import  QueryIndex from '../routes/queryIndex/';

import home from './../assets/home.png';
import homeChoose from './../assets/homeChoose.png';
import targetmanagement from './../assets/target management.png';
import targetmanagementChoose from './../assets/target managementChoose.png';
import my from './../assets/my.png';
import myChoose from './../assets/myChoose.png';

@connect(({ counter }) => ({ counter }))
export default class TabBarExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',//home,queryIndex
      hidden: false,
      fullScreen: true,
    };
  }

  renderContent(pageText) {
    return (
      <div style={{ backgroundColor: '#f0f0f0', height: '100%', textAlign: 'center' }}>
        <div style={{ paddingTop: 60 }}>Clicked “{pageText}” tab， show “{pageText}” information</div>
        <a style={{ display: 'block', marginTop: 40, marginBottom: 20, color: '#108ee9' }}
           onClick={(e) => {
             e.preventDefault();
             this.setState({
               hidden: !this.state.hidden,
             });
           }}
        >
          Click to show/hide tab-bar
        </a>
        <a style={{ display: 'block', marginBottom: 600, color: '#108ee9' }}
           onClick={(e) => {
             e.preventDefault();
             this.setState({
               fullScreen: !this.state.fullScreen,
             });
           }}
        >
          Click to switch fullscreen
        </a>
      </div>
    );
  }
  renderMain(pageText) {
      if(pageText==='home'){
    return (
      <div style={{ backgroundColor: '#f0f0f0', height: '100%', textAlign: 'center' }}>
        <App></App>
      </div>
    );}else if(pageText==='queryIndex'){
          return (
              <div style={{ backgroundColor: '#f0f0f0', height: '100%', textAlign: 'center' }}>
                  <QueryIndex disabled={this.state.selectedTab==="queryIndex"?true:false}></QueryIndex>
              </div>
          )
      }
  }

  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar

          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"

          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="home"
            icon={
              <div style={{
                width: '22px',
                height: '22px',
              /*  background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'*/
                background: 'url('+home+') center center /  21px 21px no-repeat'
              }}
              />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
     /*  background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'*/
              background: 'url('+homeChoose+') center center /  21px 21px no-repeat'

            }}
            />
            }
            selected={this.state.selectedTab === 'home'}
            badge={1}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
            data-seed="logId"
          >
            {this.renderMain('home')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url('+targetmanagement+') center center /  21px 21px no-repeat' }}

              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url('+targetmanagementChoose+') center center /  21px 21px no-repeat' }}
              />
            }
            title="指标管理"
            key="target management"
            badge={'new'}
            selected={this.state.selectedTab === 'queryIndex'}
            onPress={() => {
              this.setState({
                selectedTab: 'queryIndex',
              });
            }}
            data-seed="logId1"
          >
              {this.renderMain('queryIndex')}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url('+my+') center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background:'url('+myChoose+') center center /  21px 21px no-repeat' }}
              />
            }
            title="我的"
            key="my"
            dot
            selected={this.state.selectedTab === 'blackTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'blackTab',
              });
            }}
          >
              {this.renderMain('home')}
          </TabBar.Item>

        </TabBar>
      </div>
    );
  }
}
