import React from 'react';
import { List, Drawer, NavBar, Icon } from 'antd-mobile';
import  TabBarExample from '../components/TabBarExample';
import { Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import { connect } from 'react-redux';
import styles from './IndexPage.less';

const routes = [{
  path: '/',
  title: 'Todos',
  component: () => import('../components/TodoList'),
}, {
  path: '/counter',
  title: 'Counter',
  component: () => import('../components/Counter'),
}];

@connect()
export default class IndexPage extends React.Component {

  state = {
    open: false,
  /*  title: routes.filter(v => v.path === this.props.location.pathname)[0].title,*/
  };

  onOpenChange = () => {
    this.setState({ open: !this.state.open });
  };

  onNavigate = (path, title) => {
    this.setState({ open: false, title });
    this.props.dispatch(routerRedux.push(path));
  };

  render() {
    const { app } = this.props;
    const sidebar = (
      <List>
        <List.Item onClick={() => this.onNavigate('/', 'Todos')}>Todos</List.Item>
        <List.Item onClick={() => this.onNavigate('/counter', 'Counter')}>Counter</List.Item>
      </List>);
    return (
      <div>
       <TabBarExample />
      </div>
    );
  }

}
