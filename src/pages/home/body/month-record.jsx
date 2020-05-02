import React from 'react'

export default class MonthRecord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
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
    }

    render(){
        return(
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">本月统计</p>
                <div className="home-body-child-detail-container-body">
                    <div className="month-record-body">
                        <ul>
                            {
                                this.state.monthData.map((item,index) =>
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