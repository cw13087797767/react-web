import axios from 'axios'
import baseUrl from './apiConfig'
export default class Http {
    axiosHttpGet(url) {
        let requestUrl = baseUrl + url
        console.log(requestUrl)
        return new Promise((resolve, reject) => {
            axios.get(requestUrl).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
    axiosHttpPost(url, parmas) {
        let requestUrl = baseUrl + url
        console.log(requestUrl)
        return new Promise((resolve, reject) => {
            axios.post(requestUrl, parmas).then(res => {
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}