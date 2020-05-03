import React from 'react'
import "../charts.less"
import {setOption} from './pie-chart-option'
const Echarts = require("echarts")

export default class PieChart extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            chart:null,
            timer:null
        }
    }

    componentDidMount(){
        this.initChart()
        window.addEventListener("resize",()=>{
            this.chartResize()
        })
    }

    componentDidUpdate(preProps){
        if (preProps.charId !== this.props.charId || preProps.chartData !== this.props.chartData) {
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
        let chartId = this.refs[this.props.charId]
        let chart = Echarts.init(chartId)
        let legendArr = []
        this.props.chartData.map(item => {
            legendArr.push(item.name)
        })
        let option = setOption(this.props.chartData,legendArr)
        chart.setOption(option)
        this.setState({
            chart
        })
    }

    render(){
        return (
            <div className="pie-chart" id={this.props.charId} ref={this.props.charId}></div>
        )
    }
}