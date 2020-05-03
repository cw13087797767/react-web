import React from 'react'

export default class SystemNotice extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            notice:{
                title:'管理平台使用通知',
                content:'各位使用人员，本平台基于 react + react-router + redux + antd + echarts 搭建的一个前端项目。意在学习前端技术，丰富个人知识体系，拓展前端知识。该项目持续优化中。。。',
                time:'2020-05-01'
            }
        }
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