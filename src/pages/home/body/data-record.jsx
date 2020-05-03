import React from 'react'
import homeApi from '../../../api/homeApi'
export default class DataRecord extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            accurateData:[],
            averageData:[]
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData = () => {
        homeApi.getDataRecord(2020).then(res => {
            if (res.data.code == 1) {
                this.setState({
                    accurateData:res.data.data.accurateData,
                    averageData:res.data.data.averageData,
                })
            }
        })
    }

    render(){
        return(
            <div className="home-body-child-detail-container">
                <p className="home-body-child-detail-container-title">数据统计</p>
                <div className="home-body-child-detail-container-body data-record-body">
                    <div className="data-record-row">
                        {
                            this.state.accurateData.map((item,index) =>
                                <div key={index} className="data-record-row-col">
                                    <p>{item.name}</p>
                                    <p className={item.type == 1? "blue bigNum" :'yellow bigNum'}>{item.value}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className="data-record-row">
                        {
                            this.state.averageData.map((item,index) =>
                                <div key={index} className="data-record-row-col">
                                    <p className="blue bigNum">{item.value}<span className="util">{item.util}</span></p>
                                    <p>{item.name}</p>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        )
    }
}