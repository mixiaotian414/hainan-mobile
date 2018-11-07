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



    [`POST /user/login.json`] (req, res) {
        const query = req.body
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
    [`POST /user.json`] (req, res) {
        const query = req.body
    /*    console.log(query,'query')*/
        res.status(200).json({
            RSP_HEAD:{TRAN_SUCCESS:'1'},
            RSP_BODY:{
                user:{name:'admin',role:'admin'},
                RESCODE:"1",
                RESMESSAGE:"获取数据错误",},
        })
    },
}
