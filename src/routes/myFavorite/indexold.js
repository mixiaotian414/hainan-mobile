import React from 'react';
import { List, Drawer, NavBar, Icon ,WingBlank,WhiteSpace,Card} from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import PopoverBar from "../../components/PopoverBar";
import Tables from "../../components/Tables";
import PlaceHolder from "../../components/PlaceHolder";
import MapChartComponent from "../../components/chart/ECharts/MapChartComponent";
import TransparentBar3DComPonent from "../../components/chart/ECharts/TransparentBar3DComPonent";
import styles from './index.less';
import Demop from '../../assets/demo.png';

const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
@connect()
export default class MyFavorite extends React.Component {
    state = {
        date: now,
        open: false,
    };

    render() {
        const { app } = this.props;
        return (
            <div className='myFavorite'>
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
                    rightContent={[
                        <Icon key="0" type="check-circle-o" />
                    ]}
                >我的收藏</NavBar>
                <DatePicker
                    mode="date"
                    title="Select Date"
                    extra="Optional"
                    value={this.state.date}
                    itemStyle={{backgroundColor:'#f0f0f0'}}
                    onChange={date => this.setState({ date })}
                >
                    <List.Item arrow="horizontal"> </List.Item>
                </DatePicker>
                <div>
                    <Card full>
                        <Card.Body>
                            <div className={styles.topper}>
                                <div className={styles.title}>
                                    <div className={styles.name}>流动比率</div>
                                    <div className={styles.index}>指标值<span>0.63</span></div>
                                </div>
                                <div className={styles.content}><span></span>三亚分行——债偿能力指标</div>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.module}><div className={styles.trendAnalysis}> </div><span>趋势分析</span></div>
                                <div className={styles.module}><div className={styles.indexInterpretation}></div><span>指标解读</span></div>
                                <div className={styles.module}><div className={styles.cancelCollection}></div><span>取消收藏</span></div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <WhiteSpace size="lg" />
                <div>
                    <Card full>
                        <Card.Body>
                            <div className={styles.topper}>
                                <div className={styles.title}>
                                    <div className={styles.name}>流动比率</div>
                                    <div className={styles.index}>指标值<span>0.63</span></div>
                                </div>
                                <div className={styles.content}><span></span>三亚分行——债偿能力指标</div>
                            </div>
                            <div className={styles.bottom}>
                                <div className={styles.module}><div className={styles.trendAnalysis}> </div><span>趋势分析</span></div>
                                <div className={styles.module}><div className={styles.indexInterpretation}></div><span>指标解读</span></div>
                                <div className={styles.module}><div className={styles.cancelCollection}></div><span>取消收藏</span></div>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <WhiteSpace size="lg" />
            </div>
        );
    }

}
