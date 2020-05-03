import React from 'react'

export default class HistoryRecord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            HistoryData:[
                {name:'累计来电数量',value:51452},
                {name:'累计电话解决量',value:51412},
                {name:'累计创建工单',value:11324},
                {name:'累计已完成工单',value:7351},
                {name:'累计客户投诉量',value:129},
                {name:'历史单日最高量',value:6615},
            ]
        }
    }

    render(){
        return(
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">历史统计</p>
                <div className="home-body-child-detail-container-body">
                    <div className="month-record-body">
                        <ul>
                            {
                                this.state.HistoryData.map((item,index) =>
                                    <li key={index}>
                                        <span>{item.name} ：</span>
                                        <span>{item.value}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}