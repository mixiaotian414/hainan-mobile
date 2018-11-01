import React from 'react'
import ReactEcharts from 'echarts-for-react'

const AnalysisOfAssetsAndLiabilities = () => {
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
            tooltip : {
                trigger: 'axis',
                axisPointer : {
                    type : 'shadow'
                }
            },
            color:['#166eb7','#019a62','#5dd39e'],
            barWidth: null,
            grid: {
                left: '1%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
            xAxis:  {
                type: 'value'
            },
            yAxis: {
                type: 'category',
                data: ['存款', '承诺汇票','贷款']
            },
            series: [
                {
                    name: '存款',
                    type: 'bar',
                    stack: '总量',
                    areaStyle: {normal:{color:'#166eb7'}},
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [320, 302,0]
                },
                {
                    name: '承诺汇票',
                    type: 'bar',
                    stack: '总量',
                    areaStyle: {normal:{color:'#019a62'}},
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [120, 130,0]
                },
                {
                    name: '贷款',
                    type: 'bar',
                    stack: '总量',
                    areaStyle: {normal:{color:'#5dd39e'}},
                    label: {
                        normal: {
                            show: true,
                            position: 'insideRight'
                        }
                    },
                    data: [0,0,120]
                },
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
            <div className="parent"  style={{position:'relative'}}>
                {/*  <label> Chart With event <strong> onEvents </strong>: (Click the chart, and watch the console)</label>*/}
                <div style={{position:'absolute',top:'10px',right:'20px',zIndex:'2'}}>单位 万元</div>
                <ReactEcharts
                    option={getOtion()}
                    style={{ height: 300 }}
                    onChartReady={onChartReady}
                />
            </div>
        </div>
    )
}

export default AnalysisOfAssetsAndLiabilities
