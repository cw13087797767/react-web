import React from 'react';
import { setOption } from './bar-chart-option';
import "../charts.less"
const Echarts = require("echarts");
export default class BarChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chart: null,
            timer:null
        }
    }

    componentDidMount() {
        window.addEventListener("resize",()=>{
            this.chartResize()
        })
    }

    componentDidUpdate(prevProps){
        if (prevProps.chartsData !== this.props.chartsData || this.props.util !== this.props.util) {
            this.initChart()
        }
    }

    chartResize = () => {
        if (this.state.timer) {
            clearTimeout(this.state.timer)
            this.setState({
                timer:null
            })
        }
        this.setState({
            timer:setTimeout(() => {
                this.state.chart.resize()
                this.setState({
                    timer:null
                })
            }, 50)
        })
    }

    initChart = () => {
        let chartId = document.querySelector('#barChart')
        let option = setOption(this.props.chartsData, this.props.util)
        let chart = Echarts.init(chartId)
        chart.setOption(option)
        this.setState({
            chart: chart
        })
    }
    render() {
        return (
            <div id="barChart" className="bar-chart"></div>
        )
    }
}