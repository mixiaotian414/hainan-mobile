/* global window */
/* global document */
/* global location */
import { routerRedux } from 'dva/router'
import { parse } from 'qs'
import { query, logout } from '../services/app'
import queryString from 'query-string'

export default {
  namespace: 'app',
  state: {
    user: {},
    permissions: {
      visit: [],
    },
    menu: [
      {
        id: 1,
        icon: 'laptop',
        name: 'Dashboard',
        router: '/dashboard',
      },
    ],
    locationPathname: '',
    locationQuery: {},
  },
  subscriptions: {

    setupHistory ({ dispatch, history }) {
      history.listen((location) => {
        dispatch({
          type: 'updateState',
          payload: {
            locationPathname: location.pathname,
            locationQuery: queryString.parse(location.search),
          },
        })
      })
    },

    setup ({ dispatch }) {
      dispatch({ type: 'query' })
    },

  },
  effects: {

    * query ({
      payload,
    }, { call, put, select }) {

        const response = yield call(query, payload)
        const { locationPathname } = yield select(_ => _.app)


        if (!response.success) {

            if (response.RSP_HEAD.TRAN_SUCCESS === '1' && response.RSP_BODY.user) {

                //正确获取到用户信息做以下处理
                const user = response.RSP_BODY.user

                yield put({
                    type: 'updateState',
                    payload: {
                        user,

                    },
                })
                if (location.pathname === '/loginInterface') {
                    yield put(routerRedux.push({
                        pathname: '/IndexPage',
                    }))
                }
            } else {
                //未登录转到用户我登录页面
                yield put(routerRedux.push({
                    pathname: '/loginInterface',
                    search: queryString.stringify({
                        from: locationPathname,
                    }),
                }))

            }

        } else if ( ['/loginInterface'].indexOf(locationPathname) < 0) {

        yield put(routerRedux.push({
          pathname: '/loginInterface',
          search: queryString.stringify({
            from: locationPathname,
          }),
        }))
      }
    },

    * logout ({
      payload,
    }, { call, put }) {
      const data = yield call(logout, parse(payload))
      if (data.success) {
        yield put({ type: 'query' })
      } else {
        throw (data)
      }
    },

  },
  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },






  },
}
