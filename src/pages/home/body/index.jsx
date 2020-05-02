import React from 'react';
import QuarterlyEarnings from './quarterlyEarnings'
import RecordToday from './record-today'
import DataRecord from './data-record'
import DataAverge from './data-averge'
import MonthRecord from './month-record'
import QuarterlyTop from './quarterly-top'
export default class HomeBody extends React.Component {
    render(){
        return(
            <div className="home-body">
                <div className="home-body-top">
                    <div className="home-body-top-body">
                        <div className="home-body-top-body-middle">
                            <QuarterlyEarnings />
                        </div>
                        <div className="home-body-top-body-large">
                            <DataRecord />
                        </div>
                        <div className="home-body-top-body-middle">
                            <RecordToday />
                        </div>
                    </div>
                    <div className="home-body-top-body">
                        <div className="home-body-top-body-middle">
                            <QuarterlyTop />
                        </div>
                        <div className="home-body-top-body-large">
                            <DataAverge />
                        </div>
                        <div className="home-body-top-body-middle">
                            <MonthRecord />
                        </div>
                    </div>
                </div>
                <div className="home-body-bottom">
                    <div className="home-body-bottom-normal"></div>
                    <div className="home-body-bottom-normal"></div>
                    <div className="home-body-bottom-normal"></div>
                </div>
            </div>
        )
    }
}