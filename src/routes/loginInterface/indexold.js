import React from 'react';
import {  NavBar, Icon ,Flex,WhiteSpace,WingBlank,Button} from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import Hurdle from './hurdle';
import logo from '../../assets/hainan-logo.png';
import id from '../../assets/id.png';
import pd from '../../assets/pd.png';
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
@connect(({ login }) => ({ login }))
class loginInterface extends React.Component {
    state = {
        date: now,
        open: false,
    };
    render() {
        const { app } = this.props;
        const { login, form } = this.props;
        const { getFieldProps } = form;
        return (
            <div style={{backgroundColor:'#fff',height:'100vh'}} className='login'>
                <NavBar
                    mode="light"
                 /*   icon={<Icon type="left" />}
                    onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}*/
                    rightContent={[
                        <div style={{color:'#666'}}>我要注册</div>
                    ]}
                > </NavBar>
                <WhiteSpace size="lg" />
                <Flex style={{height:'16em'}} justify="center" >
                    <div style={{background: 'url('+logo+') no-repeat',height:'12em',width:'12em',backgroundSize:'cover' }}/>
                </Flex>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <div className='loginface'>
                        <List>
                            <InputItem
                                {...getFieldProps('Identification')}
                                placeholder="请输入账号"
                                clear
                            >
                                <div style={{ backgroundImage: 'url('+id+')', backgroundSize: 'cover', height: '28px', width: '22px' }} />
                            </InputItem>
                            <InputItem
                                {...getFieldProps('Password')}
                                type="password"
                                placeholder="请输入密码"
                                clear
                            >
                                <div style={{ backgroundImage: 'url('+pd+')', backgroundSize: 'cover', height: '28px', width: '22px' }} />
                            </InputItem>
                        </List>
                    </div>
                </WingBlank>
                <WhiteSpace size="lg" />
                <WingBlank>
                    <Button type="primary" onClick={()=>{this.props.dispatch(routerRedux.push('/IndexPage'));}}>安全登录</Button><WhiteSpace />
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
export default createForm()(loginInterface);