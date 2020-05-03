import React from 'react'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd';
import { connect } from 'react-redux'
class HomeHeaderUserState extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.userReducer)
        return (
            <div className="user-state">
                <p>
                    <Tooltip placement="bottom" title={'当前登录账号为：' + this.props.userReducer.userAccount}>
                        <UserOutlined className="user-state-icon" />
                        <span className="username">{this.props.userReducer.userName}</span>
                    </Tooltip>
                    <Tooltip placement="bottom" title="退出当前登录">
                        <LogoutOutlined rotate={270} className="user-state-icon" />
                    </Tooltip>
                </p>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return store
}

export default connect(mapStateToProps)(HomeHeaderUserState)