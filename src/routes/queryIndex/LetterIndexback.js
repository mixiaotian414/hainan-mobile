import React from 'react';
import { province } from 'antd-mobile-demo-data';
import { StickyContainer, Sticky } from 'react-sticky';
import { ListView, List, SearchBar,Radio,Checkbox} from 'antd-mobile';
import request  from '../../utils/request'
import _ from 'lodash'
const CheckboxItem = Checkbox.CheckboxItem;
import style from './LetterIndex.less'
import { connect } from 'react-redux';
const { Item } = List;

function genData(ds, provinceData) {
    const dataBlob = {};
    const sectionIDs = [];
    const rowIDs = [];
    Object.keys(provinceData).forEach((item, index) => {
        sectionIDs.push(item);
        dataBlob[item] = item;
        rowIDs[index] = [];

        provinceData[item].forEach((jj) => {
            rowIDs[index].push(jj.value);
            dataBlob[jj.value] = jj.label;
        });
    });
    return ds.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs);
}
export default class LetterIndex extends React.Component {
    constructor(props) {

        super(props);
        const getSectionData = (dataBlob, sectionID) => dataBlob[sectionID];
        const getRowData = (dataBlob, sectionID, rowID) => dataBlob[rowID];

        const dataSource = new ListView.DataSource({
            getRowData,
            getSectionHeaderData: getSectionData,
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        this.state = {
            inputValue: '',
            dataSource,
            isLoading: true,
            height: document.documentElement.clientHeight  ,
            checkValue:[]
        };
    }

    componentDidMount() {
        const hei = document.documentElement.clientHeight;
        // simulate initial Ajax

        this.firstfetch()

        setTimeout(() => {
            this.setState({
                dataSource: genData(this.state.dataSource, province),
                isLoading: false,
                height: hei,
            });
        }, 600);
    }

    firstfetch = ( ) => {
        this.promise = request({
            url:"/gateway/indexDemo.json",
            method: 'post',
            data: {
                orgId:'',
                appId:''
            },
        }).then((result) => {
            if (result.RSP_HEAD.TRAN_SUCCESS!=='1') {
                return
            }
            /*const queryData = result.RSP_BODY.LIST*/

            console.log(result,"result")

            this.setState({
                /*          dataSource: genData(this.state.dataSource, province),
                          isLoading: false,*/
            });

        })
    }

    onSearch = (val) => {
        const pd = { ...province };
        Object.keys(pd).forEach((item) => {
            /* const arr = pd[item].filter(jj => jj.spell.toLocaleLowerCase().indexOf(val) > -1);*/
            const arr = pd[item].filter(jj => jj.label.indexOf(val) > -1);
            if (!arr.length) {
                delete pd[item];
            } else {
                pd[item] = arr;
            }
        });
        this.setState({
            inputValue: val,
            dataSource: genData(this.state.dataSource, pd),
        });
    }



    render() {
        let checkValue=this.state.checkValue
        return (<div style={{  position: 'relative',top:'60px' }}>
            <div style={{width:'100%',position:'fixed',top:'60px',right:'0',zIndex:'5'}}>
                <SearchBar
                    value={this.state.inputValue}
                    placeholder="拼音检索"
                    onChange={this.onSearch}
                    onClear={() => { console.log('onClear'); }}
                    /*   onCancel={() => { this.onSearch("") }}*/
                    onCancel={() => {

                    }}
                />
            </div>
            <ListView.IndexedList
                ref={el => this.lv = el}
                dataSource={this.state.dataSource}
                className="am-list sticky-list"
                /*useBodyScroll*/
                style={{
                    height: this.state.height,
                    marginTop:'44px',
                    overflow: 'auto',
                }}
                renderSectionWrapper={sectionID => (
                    <StickyContainer
                        key={`s_${sectionID}_c`}
                        className="sticky-container"
                        style={{ zIndex: 4 }}
                    />
                )}
                renderSectionHeader={sectionData => (
                    <Sticky >
                        {({
                              style,
                          }) => (
                            <div
                                className="sticky"
                                style={{
                                    ...style,
                                    top:"100px",
                                    zIndex: 3,
                                    /*  backgroundColor: sectionData.charCodeAt(0) % 2 ? '#5890ff' : '#F8591A',  */
                                    backgroundColor: '#efeff4',
                                    color: 'black',
                                }}
                            >{sectionData}</div>
                        )}
                    </Sticky>
                )}

                /*       renderFooter={() =>
                           <div></div>
                       }*/
                renderRow={(rowData,sectionID, rowID) => (
                    <div>
                        {/*<Item>{rowData}</Item>*/}
                        <CheckboxItem key={rowID}
                                      onChange={(e) => {
                                          if (e.target.checked){
                                              checkValue.push(rowID)
                                          }else {
                                              _.pull(checkValue,rowID)
                                          }
                                          this.props._onChange(checkValue)
                                          console.log(checkValue,rowData,sectionID, rowID)
                                      }
                                      }>
                            {rowData}
                        </CheckboxItem>
                    </div>
                )}
                quickSearchBarStyle={{
                    top: 85,
                }}
                delayTime={10}
                delayActivityIndicator={<div style={{ padding: 25, textAlign: 'center' }}>rendering...</div>}
            />
        </div>);
    }
}