import React from 'react';
import BarChart from './charts/bar-chart/bar-chart'
export default class QuarterlyEarnings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chartsData: {
                'x': [
                    '01',
                    '02',
                    '03',
                    '04',
                    '05',
                    '06',
                    '07',
                    '08',
                    '09',
                    '10',
                    '11',
                    '12',
                ],
                'y': [
                    1.6,
                    1.7,
                    1.8,
                    1.9,
                    2,
                    2.1,
                    2.1,
                    2.2,
                    2.3,
                    2.4,
                    2.5,
                    2.6,
                ]
            },
            util: '亿元',
        }
    }

    render() {
        return (
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">
                    季度效益
                </p>
                <div className="home-body-child-detail-container-body">
                    <BarChart chartsData={this.state.chartsData} util={this.state.util}/>
                </div>
            </div>
        )
    }
}