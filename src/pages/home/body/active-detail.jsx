import React from 'react'
import { Tag } from 'antd'
import homeApi from '../../../api/homeApi'
import dayjs from 'dayjs'
export default class ActiveDetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            detailList:[]
        }
    }

    componentDidMount(){
        homeApi.getActiveDetail(dayjs().format("YYYY-MM-DD")).then(res => {
            if (res.data.code == 1) {
                this.setState({
                    detailList:res.data.data.detailList
                })
            }
        })
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