import React from 'react';
import { Router, Route, Switch,Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  const routes = [{
    path: '/IndexPage',
    component: () => import('./routes/IndexPage'),
  } ,{
    path: '/echartList',
    component: () => import('./routes/echartList/'),
  },{
    path: '/tableList',
    component: () => import('./routes/TableList/'),
  },{
    path: '/cockPit',
    component: () => import('./routes/cockPit/'),
  },{
    path: '/specificAnalysis',
    component: () => import('./routes/specificAnalysis/')
  },{
    path: '/myFavorite',
    component: () => import('./routes/myFavorite/')
  },{
    path: '/monthlyClose',
    component: () => import('./routes/monthlyClose/')
  },{
    path: '/assetloadAnalysis',
    component: () => import('./routes/assetloadAnalysis/')
  },{
    path: '/depositAnalysis',
    component: () => import('./routes/depositAnalysis/')
  },{
    path: '/ventureAnalysis',
    component: () => import('./routes/ventureAnalysis/')
  },{
    path: '/financialAnalysis',
    component: () => import('./routes/financialAnalysis/')
  }];
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/IndexPage" />)} />
        {routes.map(({ path, ...dynamics }, key) => (
          <Route
            exact
            key={key} path={path}
            component={dynamic({
              app, ...dynamics,
            })}
          />
        ))}
      </Switch>
    </Router>
  );
}

export default RouterConfig;
