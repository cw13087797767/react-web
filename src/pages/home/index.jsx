import React from 'react';
import "./index.less";
import HomeHeader from './header/index'
import HomeBody from './body/index'
export default class Home extends React.Component {
    render(){
        return(
            <div className="home">
                <HomeHeader />
                <HomeBody />
            </div>
        )
    }
}