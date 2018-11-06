import React from 'react'
import ReactEcharts from 'echarts-for-react'

const TotalLiabilities = () => {
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
            backgroundColor:'#fff',
            title:{
                text: '负债总额',
                x:'15px',
                y:'10px'
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['4-24', '4-25', '4-26', '4-27', '4-28', '4-29', '4-30']
            },
            yAxis: {
                type: 'value'
            },
            grid: {
                left: '1%',
                right: '5%',
                bottom: '8%',
                containLabel: true
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line',
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
            }]
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
                <div style={{position:'absolute',top:'15px',right:'20px',zIndex:'10',textAlign:'right'}}>
                    <div><span style={{color:'#fea256'}}>45,623</span>万元</div>
                    <div style={{color:'#fea256',marginTop:'10px'}}>0.5%↑</div>
                </div>
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
export default TotalLiabilities
