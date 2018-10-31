import React from 'react';
import { List,  NavBar, Icon ,WhiteSpace,Button,Toast} from 'antd-mobile';
import request  from '../../utils/request'
import {  routerRedux } from 'dva/router';
import { connect } from 'react-redux';
import PlaceHolder from "../../components/PlaceHolder";
import style from "./index.less";
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const Item = List.Item;
const Brief = Item.Brief;
@connect()
export default class AddAttention extends React.Component {
  state = {
    date: now,
    open: false,
      list:[],
  };

  componentDidMount(){
      const { app,location } = this.props;
      const query  =location.query;
      console.log(query,'query')
      this.fetch(query)

  }

    fetch = (value) => {
        this.promise = request({
            url:"/gateway/indexList.json",
            method: 'post',
            data: {
                indexArray:value,
            },
        }).then((result) => {
            if (result.RSP_HEAD.TRAN_SUCCESS!=='1') {
                return
            }
            const list = result.RSP_BODY.LIST

            console.log(list,"list")

            this.setState({
              list
            });

        })
    }

  render() {

      const list =this.state.list

    return (
      <div className='attention'>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
        >添加关注</NavBar>

          <List   className="my-list" style={{height: document.documentElement.clientHeight -130,    overflowY: 'auto'}}>
              {list.map((data,index)=>(
                  <div>
                  <WhiteSpace size="lg" className={style.wspColor} />
                  <Item  onClick={()=>{
                      this.props.dispatch(
                          routerRedux.push({
                                  pathname:'/magic',
                                  query:data
                              }
                          )
                      );}
              }
                  extra={ <img
                      src={require('../../assets/p29.png')}
                      alt=""
                      style={{ verticalAlign: 'top' }}
                  />}>{data.text} <Brief>{data.value}</Brief></Item>
                  </div>
              ))}

          </List>

          <Button type="ghost" className="am-button-borderfix"
                  style={{ margin: '15px auto',width:'80%'  }}
                  onClick={()=>{
                      Toast.success('添加关注成功！',2);
                  }}
          ><img
              src={require('../../assets/p33.png')}
              alt=""
              style={{ width:'18px',margin: '0px 5px -1px' }}
          />添加关注</Button>
      </div>
    );
  }

}
