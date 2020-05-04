let userReducerJSON = sessionStorage.getItem("userReducerJSON")
let userInfo = {}
userReducerJSON ? 
    userInfo = JSON.parse(userReducerJSON) 
    : userInfo = {
        userName: '', //姓名
        userAccount: '', //登录账号
    }

const userReducer = (state = userInfo, action = {}) => {
    switch (action.type) {
        case 'USERLOGIN':
            let option = {
                ...state,...action.userInfo
            }
            sessionStorage.setItem("userReducerJSON",JSON.stringify(option))
            return option

        default:
            return userInfo;
    }
}

export default userReducer