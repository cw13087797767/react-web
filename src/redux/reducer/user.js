let userInfo = {
    userName: '', //姓名
    userAccount: '', //登录账号
}

const userReducer = (state = userInfo, action = {}) => {
    switch (action.type) {
        case 'USERLOGIN':
            return Object.assign({},state,action.userInfo)

        default:
            return userInfo;
    }
}

export default userReducer