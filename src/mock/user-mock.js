import Mock from 'mockjs'

export default Mock.mock(/react\/web\/api\/user\/login/,{
    code:1,
    data:{
        status:1,
        userName:'终端管理员',
        userAccount:'admin'
    }
})