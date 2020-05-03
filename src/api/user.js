import Http from './http'

const http = new Http()

function login(parmas) {
    let url = `/react/web/api/user/login`;
    return http.axiosHttpPost(url,parmas)
}

export default {
    login
}