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
      console.log(query,'query');
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
          style={{position:'fixed',top:'0',left:'0',zIndex:'5',width:'100%',height:'60px'}}
          onLeftClick={() =>{ this.props.dispatch(routerRedux.push("/IndexPage"));}}
        >添加关注</NavBar>
          <div style={{marginTop:'60px',zIndex:'5',height: 'auto',overflowY:'auto'}}>
              <List   className="my-list" style={{width:'100%'}}>
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
              <div style={{height:'77px',backgroundColor: 'rgb(240, 240, 240)'}}/>
              </List>
          </div>

          <div style={{position:'fixed',width:'100%',height:'77px',bottom:'0',right:'0',zIndex:'5',backgroundColor: 'rgb(240, 240, 240)'}}>
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

      </div>
    );
  }

}
