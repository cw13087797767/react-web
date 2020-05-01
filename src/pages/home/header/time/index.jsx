import React from 'react'
import "./index.less"
import dayjs from 'dayjs'
const weekdays = [
    '星期天',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
]
export default class HomeHeaderTime extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            today: '2020年05月01日',
            weekDay: '星期五',
            currentTime: '21:41:38',
        }
    }
    componentDidMount() {
        setInterval(() => {
            let today = dayjs().format("YYYY年MM月DD日")
            let weekDay = weekdays[dayjs().format("d")]
            let currentTime = dayjs().format("HH:mm:ss")
            this.setState({
                today,
                weekDay,
                currentTime
            })
        }, 1000);
    }

    render() {
        return (
            <div className="time-container">
                <span>{this.state.today}</span>
                <span>{this.state.weekDay}</span>
                <span>{this.state.currentTime}</span>
            </div>
        )
    }
}