import React from 'react'
import homeApi from '../../../api/homeApi'
export default class HistoryRecord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            HistoryData:[]
        }
    }

    componentDidMount(){
        homeApi.getHistoryRecord().then(res => {
            if (res.data.code == 1) {
                this.setState({
                    HistoryData:res.data.data.HistoryData
                })
            }
        })
    }

    render(){
        return(
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">历史统计</p>
                <div className="home-body-child-detail-container-body">
                    <div className="month-record-body">
                        <ul>
                            {
                                this.state.HistoryData.map((item,index) =>
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