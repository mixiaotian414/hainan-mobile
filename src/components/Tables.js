import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

export default class Tables extends React.Component {

  render() {
    const
      data = [{
        name: 'POS清算金额',
        age: 616,
        name1: 888,
        name2: 500,
        name3: 400,
      }, {
        name: '电子交易替代率',
        age: 352,
        name1: 345,
        name2: 568,
        name3: 300,
      }, {
        name: '客户端手机银行',
        age: 818,
        name1: 800,
        name2: 666,
        name3: 608,
      },  ]
      const headerstyle={backgroundColor:"#51bec9",color:"#fff"}
    const
      columns = [{
          Header: '指标名称',
         headerStyle:headerstyle,
          accessor: 'name' // String-based value accessors!
        }, {
          Header: '本期数',
        headerStyle:headerstyle,
          accessor: 'age',
          style: {textAlign:"center"},
          Cell: props => <span  >{props.value}</span> // Custom cell components!
        },{
        Header: '上月数',
        headerStyle:headerstyle,
        style: {textAlign:"center"},
        accessor: 'name1' // String-based value accessors!

      },{
        Header: '年初数',
        headerStyle:headerstyle,
        style: {textAlign:"center"},
        accessor: 'name2' // String-based value accessors!
      }, {
        Header: '比年初',
        headerStyle:headerstyle,
        style: {textAlign:"center"},
        accessor: 'name3' // String-based value accessors!
      },

      ]
return(
  <div style={{backgroundColor:"#fff"}}>
        <ReactTable
      data={data}
      columns={columns}
      pageSizeOptions={[5]}
      showPagination= {false}
  showPaginationTop= {false}
  showPaginationBottom= {false}
  showPageSizeOptions={false}
      minRows="3"
    />
  </div>
    )
  }
}
