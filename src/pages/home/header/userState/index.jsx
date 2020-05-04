import React from 'react'
import { UserOutlined, LogoutOutlined } from '@ant-design/icons'
import { Tooltip,Modal } from 'antd';
import { connect } from 'react-redux'
class HomeHeaderUserState extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal:false
        }
    }

    logOut = () => {
        this.setState({
            showModal: true
        })
    }

    handleOk = () => {
        this.props.set_userInfo({
            userAccount:'',
            userName:''
        })
        this.setState({
            showModal:false
        })
    }

    handleCancel = () => {
        this.setState({
            showModal:false
        })
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
                        <LogoutOutlined onClick={this.logOut} rotate={270} className="user-state-icon" />
                    </Tooltip>
                </p>
                <Modal
                    title="退出当前登录"
                    visible={this.state.showModal}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    okText="确认"
                    cancelText="取消"
                >
                    <p>确认退出当前登录的 {this.props.userReducer.userAccount} 账号吗？</p>
                </Modal>
            </div>
        )
    }
}

const mapStateToProps = store => {
    return store
}

const mapDispatchToProps = dispatch => {
    return {
        set_userInfo:userInfo => {
            dispatch({
                type:'USERLOGIN',
                userInfo
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeHeaderUserState)