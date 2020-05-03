import React from 'react';
import { setOption } from './line-chart-option';
import "../charts.less"
const Echarts = require("echarts");
export default class LineChart extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            chart: null,
            timer:null
        }
    }

    componentDidMount() {
        this.initChart()
        window.addEventListener("resize",()=>{
            this.chartResize()
        })
    }

    componentDidUpdate(preProps){
        if (preProps.util !== this.props.util || JSON.stringify(preProps.chartsData) !== JSON.stringify(this.props.chartsData)) {
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
        let chartId = document.querySelector('#LineChart')
        if (JSON.stringify(this.props.chartsData) !=='{}') {            
            let option = setOption(this.props.chartsData, this.props.util)
            let chart = Echarts.init(chartId)
            chart.setOption(option)
            this.setState({
                chart: chart
            })
        }
    }
    render() {
        return (
            <div id="LineChart" className="bar-chart"></div>
        )
    }
}