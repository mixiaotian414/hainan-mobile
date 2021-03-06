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


    [`POST /gateway/magiclist.json`] (req, res) {
        const query = req.body.indexArray
    /*    console.log(query,'query')*/
        res.status(200).json({
            RSP_HEAD:{TRAN_SUCCESS:'1'},
            RSP_BODY:{
                LIST:[
                    {num:1520.63,value1:'1.61▲',percent1:'0.16%',value2:'1.84▲',percent2:'0.06%',value3:'1.55▲',percent3:'0.19%',value4:'1.33▲',percent4:'0.25%'},
                ],
                RESCODE:"1",
                RESMESSAGE:"获取数据错误",},
        })
    },
}
