import React from 'react';
import BarChart from './charts/bar-chart/bar-chart'
import homeApi from '../../../api/homeApi'
import axios from 'axios'
export default class QuarterlyEarnings extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chartsData: {},
            util: '',
        }
    }

    componentDidMount(){
        this.getQuarterlyEarnings()
    }

    getQuarterlyEarnings = () =>{
        homeApi.getQuarterlyEarning(2020).then(res =>{
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
                    季度效益
                </p>
                <div className="home-body-child-detail-container-body">
                    <BarChart chartsData={this.state.chartsData} util={this.state.util}/>
                </div>
            </div>
        )
    }
}