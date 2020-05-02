import React from 'react'

export default class DataRecord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            accurateData:[
                {name:'今日来电',value:32,type:1},
                {name:'今日建单',value:6,type:1},
                {name:'待完成',value:2,type:2},
                {name:'今日完成',value:12,type:1}
            ],
            averageData:[
                {name:'电话建单率',value:74,util:'%'},
                {name:'工单完成率',value:90,util:'%'},
                {name:'平均处理时长',value:2,util:'min'},
            ]
        }
    }

    render(){
        return(
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">数据统计</p>
                <div className="home-body-child-detail-container-body data-record-body">
                    <div className="data-record-row">
                        {
                            this.state.accurateData.map((item,index) =>
                                <div key={index} className="data-record-row-col">
                                    <p>{item.name}</p>
                                    <p className={item.type == 1? "blue bigNum" :'yellow bigNum'}>{item.value}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="data-record-row">
                        {
                            this.state.averageData.map((item,index) =>
                                <div key={index} className="data-record-row-col">
                                    <p className="blue bigNum">{item.value}<span className="util">{item.util}</span></p>
                                    <p>{item.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}