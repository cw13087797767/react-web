import Http from './http'

const http = new Http()

// 季度效益
function getQuarterlyEarning(time) {
    let url = `/react/web/api/home/quarterly/earning?time=${time}`
    return http.axiosHttpGet(url)
}
// 数据统计
function getDataRecord(time) {
    let url = `/react/web/api/home/data/record?time=${time}`
    return http.axiosHttpGet(url)
}
// 今日统计
function getRecordToday(time) {
    let url = `/react/web/api/home/record/today?time=${time}`
    return http.axiosHttpGet(url)
}
// 优秀员工季度榜
function getQuarterlyTop(time) {
    let url = `/react/web/api/home/quarterly/top?time=${time}`
    return http.axiosHttpGet(url)
}
// 来电与建单统计
function getDataAverage(time) {
    let url = `/react/web/api/home/data/average?time=${time}`
    return http.axiosHttpGet(url)
}
// 本月统计
function getMonthRecord(time) {
    let url = `/react/web/api/home/month/record?time=${time}`
    return http.axiosHttpGet(url)
}
// 系统公告
function getSystemNotice() {
    let url = `/react/web/api/home/system/notice?`
    return http.axiosHttpGet(url)
}
// 实时处理信息
function getActiveDetail(time) {
    let url = `/react/web/api/home/active/detail?time=${time}`
    return http.axiosHttpGet(url)
}
// 历史统计
function getHistoryRecord() {
    let url = `/react/web/api/home/history/record?`
    return http.axiosHttpGet(url)
}

export default {
    getQuarterlyEarning,
    getDataRecord,
    getRecordToday,
    getQuarterlyTop,
    getDataAverage,
    getMonthRecord,
    getSystemNotice,
    getActiveDetail,
    getHistoryRecord
}