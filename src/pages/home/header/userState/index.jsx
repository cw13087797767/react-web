import React from 'react'
import {UserOutlined,LogoutOutlined} from '@ant-design/icons'
import "./index.less";
import { Tooltip } from 'antd';
export default class HomeHeaderUserState extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            userInfo:{
                userName:"管理员"
            }
        }
    }

    render(){
        return(
            <div className="user-state">
                <p>
                    <Tooltip placement="bottom" title={this.state.userInfo.userName}>
                        <UserOutlined className="user-state-icon" />
                        <span className="username">{this.state.userInfo.userName}</span>
                    </Tooltip>
                    <Tooltip placement="bottom" title="退出当前登录">
                        <LogoutOutlined rotate={270} className="user-state-icon" />
                    </Tooltip>
                </p>
            </div>
        )
    }
}