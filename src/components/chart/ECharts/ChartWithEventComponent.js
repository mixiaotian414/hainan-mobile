import React from 'react'
import ReactEcharts from 'echarts-for-react'

const ChartWithEventComponent = () => {
  const onChartReady = (echart) => {
    console.log('echart is ready', echart)
  }
  const onChartLegendselectchanged = (param, echart) => {
    console.log(param, echart)
  }
  const onChartClick = (param, echart) => {
    console.log(param, echart)
  }
  const getOtion = () => {
    const option = {
      backgroundColor:'#ffffff',
      title: {
        text: '',
      /*  subtext: '纯属虚构',*/
        x: 'center',
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
      },
      legend: {
        orient: 'horizontal',
        bottom: 'bottom',
        data: ['大额支付', '网上银行', '银联', '中间业务', '自助ATM机'],
      },
      series: [
        {
          name: '业务分析',
          type: 'pie',
         /* radius: '55%',*/
          radius: ['30%', '50%'],

          data: [
            { value: 335, name: '大额支付' },
            { value: 310, name: '网上银行' },
            { value: 234, name: '银联' },
            { value: 135, name: '中间业务' },
            { value: 1548, name: '自助ATM机' },
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    }
    return option
  }

  let onEvents = {
    click: onChartClick,
    legendselectchanged: onChartLegendselectchanged,
  }
  let code = 'let onEvents = {\n' +
                   "  'click': onChartClick,\n" +
                   "  'legendselectchanged': onChartLegendselectchanged\n" +
                   '}\n\n' +
                   '<ReactEcharts \n' +
                    '    option={getOtion()} \n' +
                    '    style={{height: 300}} \n' +
                    '    onChartReady={onChartReady} \n' +
                    '    onEvents={onEvents} />'

  return (
    <div className="examples">
      <div className="parent">
      {/*  <label> Chart With event <strong> onEvents </strong>: (Click the chart, and watch the console)</label>*/}
        <ReactEcharts
          option={getOtion()}
          style={{ height: 300 }}
          onChartReady={onChartReady}
          onEvents={onEvents}
        />
       {/* <label> code below: </label>
        <pre>
          <code>{code}</code>
        </pre>*/}
      </div>
    </div>
  )
}

export default ChartWithEventComponent
