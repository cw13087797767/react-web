import React from 'react'
import homeApi from '../../../api/homeApi'
import dayjs from 'dayjs'

export default class MonthRecord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            monthData:[]
        }
    }

    componentDidMount(){
        homeApi.getMonthRecord(dayjs().format('YYYY-MM')).then(res => {
            if (res.data.code == 1) {
                this.setState({
                    monthData:res.data.data.monthData
                })
            }
        })
    }

    render(){
        return(
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">本月统计</p>
                <div className="home-body-child-detail-container-body">
                    <div className="month-record-body">
                        <ul>
                            {
                                this.state.monthData.map((item,index) =>
                                    <li key={index}>
                                        <span>{item.name} ：</span>
                                        <span>{item.value}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}