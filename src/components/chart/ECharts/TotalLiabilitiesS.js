import React from 'react'
import ReactEcharts from 'echarts-for-react'

const TotalLiabilitiesS = () => {
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
            x:'10px',
            backgroundColor:'#fff',
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            series: [
                {
                    name:'负债总额',
                    type:'pie',
                    radius: ['40%', '60%'],
                    center: ['20%', '50%'],
                    color:['#019a62','#e6ebef'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'负债总额 '},
                        {value:160, name:''},

                    ]
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
            <div className="parent" style={{position:'relative'}} >
                {/*  <label> Chart With event <strong> onEvents </strong>: (Click the chart, and watch the console)</label>*/}
                <ReactEcharts
                    option={getOtion()}
                    style={{ height: 150 }}
                    onChartReady={onChartReady}
                    /*  onEvents={onEvents}*/
                />
                <div style={{ width:'55%',height:'150px',display: 'flex', flexWrap: 'wrap', alignContent: 'space-around',position:'absolute',top:'0',right:'3%'}}>
                    <div style={{ flexBasis: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <span>负债总额</span>
                        <span><span style={{color:'#fea256',fontWeight:'bold'}}>699865.48</span>万元</span>
                    </div>
                    <div style={{ flexBasis: '100%', display: 'flex', justifyContent: 'space-between'}}>
                        <span>比昨天：<span style={{color:'#fea256'}}>0.5%↑</span></span>
                        <span>比上月：0.2↓</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TotalLiabilitiesS
