import React from 'react'
import homeApi from '../../../api/homeApi'
export default class SystemNotice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notice:{}
        }
    }

    componentDidMount(){
        homeApi.getSystemNotice().then(res => {
            if (res.data.code == 1) {
                this.setState({
                    notice:res.data.data.notice
                })
            }
        })
    }

    render(){
        return(
            <div className="home-body-child-detail-container">
            <p className="home-body-child-detail-container-title">系统公告</p>
            <div className="home-body-child-detail-container-body">
                <div className="system-notice-body">
                    <p className="system-notice-body-title">{this.state.notice.title}</p>
                    <p className="system-notice-body-content">{this.state.notice.content}</p>
                    <p className="system-notice-body-time">发布时间：{this.state.notice.time}</p>
                </div>
            </div>
        </div>
        )
    }
}