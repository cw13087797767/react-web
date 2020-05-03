import React from 'react';
import LineChart from './charts/line-chart/line-chart'
import homeApi from '../../../api/homeApi'
import dayjs from 'dayjs'
export default class DataAverge extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chartsData: {},
            util: ''
        }
    }

    componentDidMount() {
        homeApi.getDataAverage(dayjs().format("YYYY-MM")).then(res => {
            if (res.data.code == 1) {
                this.setState({
                    chartsData:res.data.data.chartsData,
                    util:res.data.data.util
                })
            }
        })
    }

    render() {
        return (
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">
                    来电与建单统计
                </p>
                <div className="home-body-child-detail-container-body">
                    <LineChart chartsData={this.state.chartsData} util={this.state.util} />
                </div>
            </div>
        )
    }
}