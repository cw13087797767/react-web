import React from 'react';
import QuarterlyEarnings from './quarterlyEarnings'
import RecordToday from './record-today'
import DataRecord from './data-record'
import DataAverge from './data-averge'
import MonthRecord from './month-record'
import QuarterlyTop from './quarterly-top'
import HistoryRecord from './history-record'
import SystemNotice from './system-notice'
import ActiveDetail from './active-detail'
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
                    <div className="home-body-bottom-normal">
                        <SystemNotice />
                    </div>
                    <div className="home-body-bottom-normal">
                        <ActiveDetail />
                    </div>
                    <div className="home-body-bottom-normal">
                        <HistoryRecord />
                    </div>
                </div>
            </div>
        )
    }
}