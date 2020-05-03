import React from 'react'
import PieChart from './charts/pie-chart/pie-chart'
import homeApi from '../../../api/homeApi'
import dayjs from 'dayjs'
export default class RecordToday extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chartDataList: []
        }
    }

    componentDidMount() {
        this.getChartDataList()
    }

    getChartDataList = () => {
        homeApi.getRecordToday(dayjs().format("YYYY-MM-DD")).then(res => {
            
            if ( res.data.code == 1) {
                this.setState({
                    chartDataList:res.data.data.chartDataList
                })
            }
        })
    }

    render() {
        let renderList = this.state.chartDataList.map((item,index) => 
            <div key={index} className="piechart">
                <PieChart charId={'piechart'+(index + 1 + '')} chartData={item}/>
            </div>
        )
        return (
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">今日统计</p>
                <div className="home-body-child-detail-container-body record-today-main">
                    {renderList}
                </div>
            </div>
        )
    }
}