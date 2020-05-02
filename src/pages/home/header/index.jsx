import React from 'react'
import HomeHeaderTime from './time/index'
import HomeHeaderUserState from './userState/index'
export default class HomeHeader extends React.Component {
    render() {
        return (
            <div className="header-container">
                <div className="header-container-Side">
                    <HomeHeaderTime />
                </div>
                <div className="header-container-title">
                    大数据可视化
                    </div>
                <div className="header-container-Side">
                    <HomeHeaderUserState />
                </div>
            </div>
        )
    }
}