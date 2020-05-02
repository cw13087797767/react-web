import React from 'react'
import PieChart from './charts/pie-chart/pie-chart'
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
        let chartDataList = [
            [
                {name:'已核查',value:6},
                {name:'待核查',value:13}
            ],
            [
                { name: '已接电话', value: 8 },
                { name: '未接电话', value: 2 },
                { name: '已处理问题', value: 5 },
                { name: '未处理问题', value: 1 },
                { name: '其他', value: 3 },
            ]
        ]
        this.setState({
            chartDataList
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