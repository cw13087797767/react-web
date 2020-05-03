import React from 'react'
import { Tag } from 'antd';
export default class ActiveDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
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
    }

    render(){
        return(
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">实时处理信息</p>
                <div className="home-body-child-detail-container-body">
                    <div className="active-detail-body">
                        <ul>
                            {
                                this.state.detailList.map((item,index) =>
                                    <li key={index}>
                                        <span>{item.time}</span>
                                        <span>{item.msg}</span>
                                        <span>{item.type}</span>
                                        <span>{item.userName}</span>
                                        <span>
                                            {item.state == 1 ? <Tag color="green">已完成</Tag> : <Tag color="gold">待接单</Tag>}
                                        </span>
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