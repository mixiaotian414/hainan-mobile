import React from 'react'
import ReactEcharts from 'echarts-for-react'

const DepositTrend = () => {
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
                x:'15px',
                y:'10px',
                text: '存款趋势',

            },
            legend: {
                data:['存款','取款'],
                right:'18px',
                top:'32px'
            },
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top:'70px',
                left: '4%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    boundaryGap : false,
                    data : ['4-24','4-25','4-26','4-27','4-28','4-29','4-30']
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'存款',
                    type:'line',
                    hoverAnimation:true,
                    areaStyle: {normal:{color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(22,110,183,.8)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255,255,255,.3)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }}},
                    itemStyle:{
                        normal:{
                            color:'#166eb7',
                            borderColor:'#166eb7'
                        }
                    },
                    data:[120, 220, 101, 110, 90, 230, 55],

                },
                {
                    name:'取款',
                    type:'line',
                    areaStyle: {normal:{color: {
                        type: 'linear',
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                            offset: 0, color: 'rgba(1,154,98,.8)' // 0% 处的颜色
                        }, {
                            offset: 1, color: 'rgba(255,255,255,.3)' // 100% 处的颜色
                        }],
                        globalCoord: false // 缺省为 false
                    }}},
                    itemStyle:{
                        normal:{
                            color:'#019a62',
                            borderColor:'#019a62'
                        }
                    },
                    data:[100, 182, 191, 234, 100, 330, 310]
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

export default DepositTrend
