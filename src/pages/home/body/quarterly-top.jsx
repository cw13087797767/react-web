import React from 'react';
import top1 from '../../../assets/icons/top1.png';
import top2 from '../../../assets/icons/top2.png';
import top3 from '../../../assets/icons/top3.png';
export default class QuarterlyTop extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            topList:[
                {
                    name:'张三',
                    count:9,
                    util:'单',
                    time: 2,
                    timeUtil:'min'
                },
                {
                    name:'李四',
                    count:7,
                    util:'单',
                    time: 4,
                    timeUtil:'min'
                },
                {
                    name:'王五',
                    count:7,
                    util:'单',
                    time: 5,
                    timeUtil:'min'
                }
            ]
        }
    }

    render(){
        const tops = [top1,top2,top3]
        return(
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">优秀员工季度榜</p>
                <div className="home-body-child-detail-container-body">
                    <div className="quarterly-top-body">
                        <ul>
                            <li>
                                <span>Top3</span>
                                <span>姓名</span>
                                <span>完成单数</span>
                                <span>平均处理时间</span>
                            </li>
                            {
                                this.state.topList.map((item,index) =>
                                    <li key={index}>
                                        <span><img src={tops[index]}/></span>
                                        <span>{item.name}</span>
                                        <span><span className="yellow">{item.count}</span>{item.util}</span>
                                        <span><span className="yellow">{item.time}</span>{item.timeUtil}</span>
                                    </li>
                                )
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}