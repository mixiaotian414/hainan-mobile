import React from 'react';
import {  NavBar, Icon ,Flex,WhiteSpace,WingBlank,Button} from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import Hurdle from './hurdle';
import logo from '../../assets/hainan-logo.png';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()

export default class loginInterface extends React.Component {
    state = {
        date: now,
        open: false,
    };
    render() {
        const { app } = this.props;
        return (
            <div style={{backgroundColor:'#fff',height:'100vh'}}>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
                    rightContent={[
                        <div style={{color:'#666'}}>我要注册</div>
                    ]}
                > </NavBar>
                <WhiteSpace size="lg" />
                <Flex style={{height:'16em'}} justify="center" >
                    <div style={{background: 'url('+logo+') no-repeat',height:'12em',width:'12em',backgroundSize:'cover' }}/>
                </Flex>
                <WhiteSpace size="lg" />
                <Hurdle/>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <Button type="primary">安全登录</Button><WhiteSpace />
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <Flex justify="between">
                        <div>动态密码登录</div>
                        <div>忘记密码？</div>
                    </Flex>
                </WingBlank>
            </div>
                );
    }
}
