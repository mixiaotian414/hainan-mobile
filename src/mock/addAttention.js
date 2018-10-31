import lodash from 'lodash'
const qs = require('qs')
const Mock = require('mockjs')

let DataMock = Mock.mock({
  'data|150-180': [
    {
      DATE_ID:'@datetime',
      organCode:/^A[1][0][0][1]\d{4}$/,
      organName:/^机构\d{3}$/,
      indexNum:/^A[1][0][0][1]\d{4}$/,
      indexName:/^指标\d{3}$/,
      indexValue:/^[1234567]\d{4,8}\.\d{2}$/,
      changeValue:/^[1234567]\d{4,8}\.\d{2}$/,
      'key|+1':1,
    },
  ],
})
let database = lodash.cloneDeep(DataMock.data)


module.exports = {


  [`GET  /adjustIndex`] (req, res) {
    const { query } = req
    let { pageSize, page, ...other } = query
    pageSize = pageSize || 10
    page = page || 1

    let newData = database
    for (let key in other) {
      if ({}.hasOwnProperty.call(other, key)) {
        newData = newData.filter((item) => {
          if ({}.hasOwnProperty.call(item, key)) {
            if (key === 'address') {
              return other[key].every(iitem => item[key].indexOf(iitem) > -1)
            } else if (key === 'queryDate') {
              const start = new Date(other[key][0]).getTime()
              const end = new Date(other[key][1]).getTime()
              const now = new Date(item[key]).getTime()
              if (start && end) {
                return now >= start && now <= end
              }
              return true
            } else if (key === 'DATE_ID') {
              const start = new Date(other[key]).getTime()

              const now = new Date(item[key]).getTime()

              if (now === start) {
                return true
              }
              return false
            } else if (key==='dealstatus'){

              var i = other[key].length;
              if (i===0){
                return true
              }
              while (i--) {
                if ( parseInt(other[key][i],10)===parseInt(item[key],10)) {
                  return true;
                }
              }
              return false;
            }else if (key==='qudaonum'||key==='typenum'||key==='status'){
              if ( parseInt(other[key],10)===parseInt(item[key],10)||other[key]==="") {
                return true;
              }
              return false;
            }
            return String(item[key]).trim().indexOf(decodeURI(other[key]).trim()) > -1
          }
          return true
        })
      }
    }
    res.status(200).json({
      LIST: newData.slice((page - 1) * pageSize, page * pageSize),
      total: newData.length,
      RESCODE:"1",
      RESMESSAGE:"获取数据错误",
      PARAMS:{"paraCode":"200005"},
    })
  },


  [`POST /gateway/indexList.json`] (req, res) {
    const query = req.body.indexArray;
    console.log(query,'query');
      res.status(200).json({
          RSP_HEAD:{TRAN_SUCCESS:'1'},
          RSP_BODY:{
            LIST:[
                {index:1,value:1254.85,text:'表内存款'},
                {index:2,value:625.35,text:'储蓄存款'},
                {index:3,value:3577.85,text:'对公存款'},
                {index:4,value:654.32,text:'负债总额'},
                {index:5,value:13587.83,text:'表内存款'},
                {index:6,value:788.33,text:'表内存款'},
                {index:7,value:788.33,text:'表内存款'},
                {index:8,value:788.33,text:'表内存款'},
                {index:9,value:788.33,text:'表内存款'},
                {index:10,value:988.33,text:'表内存款'},
                ],
              RESCODE:"1",
              RESMESSAGE:"获取数据错误",},
      })
  },
}
