import React from 'react';
import { List, Drawer, NavBar, Icon } from 'antd-mobile';
import { Route, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import { connect } from 'react-redux';
import styles from './IndexPage/IndexPage.less';

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
export default class IndexPage_buckup extends React.Component {

  state = {
    open: false,
   /* title: routes.filter(v => v.path === this.props.location.pathname)[0].title||"",*/
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
        <NavBar className={styles.navbar} icon={<Icon type="ellipsis" />} onLeftClick={this.onOpenChange}>{this.state.title}</NavBar>
        <Drawer
          className={styles.drawer}
          style={{ minHeight: document.documentElement.clientHeight }}
          enableDragHandle
          sidebar={sidebar}
          sidebarStyle={{ width: '70%', background: 'rgb(245,245,249)', zIndex: 9 }}
          overlayStyle={{ zIndex: 8 }}
          open={this.state.open}
          onOpenChange={this.onOpenChange}
        >
          {routes.map(({ path, ...dynamics }, key) => (
            <Route
              key={key} exact path={path}
              component={dynamic({
                app, ...dynamics,
              })}
            />
          ))}
        </Drawer>
      </div>
    );
  }

}
