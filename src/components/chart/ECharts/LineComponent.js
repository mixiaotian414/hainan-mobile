import React from 'react'
import ReactEcharts from 'echarts-for-react'

const LineComponent = () => {
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
        text: ''
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data:['存款余额','存款日均']
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name:'存款余额',
          type:'line',
          stack: '总量',
          data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
          name:'存款日均',
          type:'line',
          stack: '总量',
          data:[820, 932, 901, 934, 1290, 1330, 1320]
        }
      ]
    };
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
        /*  onEvents={onEvents}*/
        />
       {/* <label> code below: </label>
        <pre>
          <code>{code}</code>
        </pre>*/}
      </div>
    </div>
  )
}

export default LineComponent
