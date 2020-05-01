import React from 'react';
import "./index.less";
import HomeHeader from './header/index'
export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <div className="home-header">
                    <HomeHeader />
                </div>
                <div className="home-body">
                    <div className="home-body-top">
                        <div className="home-body-top-body">
                            <div className="home-body-top-body-middle"></div>
                            <div className="home-body-top-body-large"></div>
                            <div className="home-body-top-body-middle"></div>
                        </div>
                        <div className="home-body-top-body">
                            <div className="home-body-top-body-middle"></div>
                            <div className="home-body-top-body-large"></div>
                            <div className="home-body-top-body-middle"></div>
                        </div>
                    </div>
                    <div className="home-body-bottom">
                        <div className="home-body-bottom-normal"></div>
                        <div className="home-body-bottom-normal"></div>
                        <div className="home-body-bottom-normal"></div>
                    </div>
                </div>
            </div>
        )
    }
}