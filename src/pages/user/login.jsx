import React from 'react'
import "./index.less"
import { Input, message, Button } from 'antd'
import userApi from '../../api/user'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userAccount: '',
            userPwd: '',
            isLogin: false
        }
    }

    handleClick = () => {
        if (this.state.isLogin) {
            return
        }
        if (!this.state.userAccount) {
            message.warning('您还未输入账号');
            return false
        }
        if (!this.state.userPwd) {
            message.warning('您还未输入密码');
            return false
        }
        this.setState({
            isLogin: true
        })
        let params = {
            userAccount: this.state.userAccount,
            userPwd: this.state.userPwd
        }
        userApi.login(params).then(res => {
            if (res.data.code === 1 && res.data.data.status === 1) {
                this.setState({
                    isLogin: !this.state.isLogin
                })
                let userInfo = {
                    userName:res.data.data.userName,
                    userAccount:this.state.userAccount
                }
                this.props.set_userInfo(userInfo)
                this.props.history.push('/home')
            } else {
                this.setState({
                    isLogin: !this.state.isLogin
                })
                message.warning("您输入的账号或密码不对，请重新输入")
            }
        }).catch(err => {
            this.setState({
                isLogin: !this.state.isLogin
            })
            message.warning("您输入的账号或密码不对，请重新输入")
        })

    }

    handleInputAccount = e => {
        this.setState({
            userAccount: e.target.value
        })
    }

    handleInputPwd = e => {
        this.setState({
            userPwd: e.target.value
        })
    }

    render() {
        return (
            <div className="login">
                <div className="login-body">
                    <div className="login-body-item">
                        <Input
                            disabled={this.state.isLogin}
                            value={this.state.userAccount}
                            onChange={this.handleInputAccount}
                            placeholder="支持QQ号/手机号码/邮箱" />
                    </div>
                    <div className="login-body-item">
                        <Input.Password
                            disabled={this.state.isLogin}
                            value={this.state.userPwd}
                            onChange={this.handleInputPwd}
                            placeholder="密码" />
                    </div>
                    <div className="login-body-item">
                        <Button block size="large" loading={this.state.isLogin} onClick={this.handleClick}>登 录</Button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        set_userInfo: userInfo => {
            dispatch({
                type: 'USERLOGIN',
                userInfo
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Login)
