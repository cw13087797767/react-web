import Mock from 'mockjs'

export default [
    // 季度效益
    Mock.mock(/react\/web\/api\/home\/quarterly\/earning/, {
        code: 1,
        data: {
            chartsData: {
                'x': [
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                ],
                'y': [
                    1.6,
                    1.7,
                    1.8,
                    1.9,
                    2,
                    2.1,
                    2.1,
                    2.2,
                    2.3,
                    2.4,
                    2.5,
                    2.6,
                ]
            },
            util: '亿元',
        }
    }),
    // 数据统计
    Mock.mock(/react\/web\/api\/home\/data\/record/, {
        code: 1,
        data: {
            accurateData: [{
                    name: '今日来电',
                    value: 32,
                    type: 1
                },
                {
                    name: '今日建单',
                    value: 6,
                    type: 1
                },
                {
                    name: '待完成',
                    value: 2,
                    type: 2
                },
                {
                    name: '今日完成',
                    value: 12,
                    type: 1
                }
            ],
            averageData: [{
                    name: '电话建单率',
                    value: 74,
                    util: '%'
                },
                {
                    name: '工单完成率',
                    value: 90,
                    util: '%'
                },
                {
                    name: '平均处理时长',
                    value: 2,
                    util: 'min'
                },
            ],
        }
    }),
    // 今日统计
    Mock.mock(/react\/web\/api\/home\/record\/today/, {
        code: 1,
        data: {
            chartDataList: [
                [{
                        name: '已核查',
                        value: 6
                    },
                    {
                        name: '待核查',
                        value: 13
                    }
                ],
                [{
                        name: '已接电话',
                        value: 8
                    },
                    {
                        name: '未接电话',
                        value: 2
                    },
                    {
                        name: '已处理问题',
                        value: 5
                    },
                    {
                        name: '未处理问题',
                        value: 1
                    },
                    {
                        name: '其他',
                        value: 3
                    },
                ]
            ]
        }
    }),
    // 优秀员工季度榜
    Mock.mock(/react\/web\/api\/home\/quarterly\/top/, {
        code: 1,
        data: {
            topList: [{
                    name: '张三',
                    count: 9,
                    util: '单',
                    time: 2,
                    timeUtil: 'min'
                },
                {
                    name: '李四',
                    count: 7,
                    util: '单',
                    time: 4,
                    timeUtil: 'min'
                },
                {
                    name: '王五',
                    count: 7,
                    util: '单',
                    time: 5,
                    timeUtil: 'min'
                }
            ]
        }
    }),
    // 优秀员工季度榜
    Mock.mock(/react\/web\/api\/home\/data\/average/, {
        code: 1,
        data: {
            chartsData: {
                'x': [
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                ],
                'y': [
                    [
                        0,
                        29,
                        51,
                        79,
                        38,
                        26,
                        42,
                        66,
                        18,
                        0
                    ],
                    [
                        0,
                        15,
                        28,
                        56,
                        18,
                        7,
                        35,
                        64,
                        13,
                        0
                    ]
                ]
            },
            util: '个',
        }
    }),
    // 本月统计
    Mock.mock(/react\/web\/api\/home\/month\/record/, {
        code: 1,
        data: {
            monthData:[
                {name:'来电数量',value:5142},
                {name:'电话解决量',value:5142},
                {name:'创建工单',value:1324},
                {name:'已完成工单',value:351},
                {name:'单日最高量',value:665},
                {name:'客户投诉量',value:12},
                {name:'次月目标客户量',value:8848},
            ]
        }
    }),
    // 系统公告
    Mock.mock(/react\/web\/api\/home\/system\/notice/, {
        code: 1,
        data: {
            notice:{
                title:'管理平台使用通知',
                content:'各位使用人员，本平台基于 react + react-router + redux + antd + echarts 搭建的一个前端项目。意在学习前端技术，丰富个人知识体系，拓展前端知识。该项目持续优化中。。。',
                time:'2020-05-01'
            }
        }
    }),
    // 实时处理信息
    Mock.mock(/react\/web\/api\/home\/active\/detail/, {
        code: 1,
        data: {
            detailList:[
                {
                    time:'12:00',
                    type:'其他故障',
                    userName:'张三',
                    state:1,
                    msg:'长安街103号/建单项目二'
                },
                {
                    time:'12:00',
                    type:'其他故障',
                    userName:'张三',
                    state:0,
                    msg:'长安街103号/建单项目二'
                },
                {
                    time:'12:00',
                    type:'其他故障',
                    userName:'张三',
                    state:1,
                    msg:'长安街103号/建单项目二'
                },
                {
                    time:'12:00',
                    type:'其他故障',
                    userName:'张三',
                    state:1,
                    msg:'长安街103号/建单项目二'
                },
                {
                    time:'12:00',
                    type:'其他故障',
                    userName:'张三',
                    state:0,
                    msg:'长安街103号/建单项目二'
                },
                {
                    time:'12:00',
                    type:'其他故障',
                    userName:'张三',
                    state:0,
                    msg:'长安街103号/建单项目二'
                }
            ]
        }
    }),
    // 实时处理信息
    Mock.mock(/react\/web\/api\/home\/history\/record/, {
        code: 1,
        data: {
            HistoryData:[
                {name:'累计来电数量',value:51452},
                {name:'累计电话解决量',value:51412},
                {name:'累计创建工单',value:11324},
                {name:'累计已完成工单',value:7351},
                {name:'累计客户投诉量',value:129},
                {name:'历史单日最高量',value:6615},
            ]
        }
    }),
]