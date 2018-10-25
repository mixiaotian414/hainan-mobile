import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import {    Card } from 'antd-mobile'

import {    Sales } from './components'
import styles from './index.less'

const bodyStyle = {
  bodyStyle: {
    height: 432,
    background: '#fff',
  },
}

function Dashboard ({ dashboard, loading }) {
  const {
    sales
  } = dashboard


  return (
    <Page loading={loading.models.dashboard && sales.length === 0} className={styles.dashboard}>

          <Card bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <Sales data={sales} />
          </Card>

{/*
              <Card bordered={false}
                className={styles.weather}
                bodyStyle={{
                  padding: 0,
                  height: 204,
                  background: color.blue,
                }}
              >
                <Weather {...weather} loading={loading.effects['dashboard/queryWeather']} />
              </Card>

              <Card bordered={false}
                className={styles.quote}
                bodyStyle={{
                  padding: 0,
                  height: 204,
                  background: color.peach,
                }}
              >
                <Quote {...quote} />
              </Card>



          <Card bordered={false} {...bodyStyle}>
            <RecentSales data={recentSales} />
          </Card>

          <Card bordered={false} {...bodyStyle}>
            <Comments data={comments} />
          </Card>


          <Card bordered={false}
            bodyStyle={{
              padding: '24px 36px 24px 0',
            }}
          >
            <Completed data={completed} />
          </Card>

          <Card bordered={false} {...bodyStyle}>
            <Browser data={browser} />
          </Card>

          <Card bordered={false} {...bodyStyle}>
            <Cpu {...cpu} />
          </Card>

          <Card bordered={false} bodyStyle={{ ...bodyStyle.bodyStyle, padding: 0 }}>
            <User {...user} />
          </Card>*/}

    </Page>
  )
}

Dashboard.propTypes = {
  dashboard: PropTypes.object,
  loading: PropTypes.object,
}

export default connect(({ dashboard, loading }) => ({ dashboard, loading }))(Dashboard)
