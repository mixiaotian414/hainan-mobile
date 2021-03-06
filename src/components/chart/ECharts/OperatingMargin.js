import React from 'react'
import ReactEcharts from 'echarts-for-react'

const OperatingMargin = () => {
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
            tooltip : {
                formatter: "{a} <br/>{b} : {c}%"
            },
            grid:{
                width:'50%'
            },
            radius:'50%',
            series: [
                {
                    name: '营业利润率',
                    type: 'gauge',
                    detail: {
                        formatter:'{value}%',
                        color:'#555',
                        fontSize:'25',
                    },
                    data: [{value: 0}],
                    splitNumber:5,
                    axisLine:{
                        show:false,
                        lineStyle:{
                            color:[[0.5, '#f49d1f'],  [1, '#156db7']],
                            width:15,
                        },
                     },
                    splitLine:{
                        show:false,
                    },
                    axisTick:{
                      show:false,
                    },
                    pointer:{
                        length:'40%',
                    },
                    itemStyle:{
                        color:'#555555',
                    },

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
            <div className="parent"  style={{position:'relative',height:300,display:'flex',alignItems:'center'}}>
                {/*  <label> Chart With event <strong> onEvents </strong>: (Click the chart, and watch the console)</label>*/}
                <div style={{width:'60%',display:'inline-block'}}>
                    <ReactEcharts
                        option={getOtion()}
                        style={{ height: 300 }}
                        onChartReady={onChartReady}
                        /*  onEvents={onEvents}*/
                    />
                </div>
                <div style={{width:'25%',height: 100,display:'flex',alignContent:'space-around',flexWrap:'wrap' }}>
                    <div style={{flex:'1 0 auto',width:'100%'}}>营业利润率</div>
                    <div style={{flex:'1 0 auto',width:'100%'}}>同比<span style={{color:'#fea256'}}>0.5%↑</span></div>
                    <div style={{flex:'1 0 auto',width:'100%'}}>环比0.5%↓</div>
                </div>

                {/* <label> code below: </label>
        <pre>
          <code>{code}</code>
        </pre>*/}
            </div>
        </div>
    )
}

export default OperatingMargin
