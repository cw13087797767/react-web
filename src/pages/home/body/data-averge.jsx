import React from 'react';
import LineChart from './charts/line-chart/line-chart'
export default class DataAverge extends React.Component {
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
                ],
                'y': [
                    [
                        0,
                        29,
                        51,
                        79,
                        38,
                        26,
                        42,
                        66,
                        18,
                        0
                    ],
                    [
                        0,
                        15,
                        28,
                        56,
                        18,
                        7,
                        35,
                        64,
                        13,
                        0
                    ]
                ]
            },
            util: '个',
        }
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