import React from 'react'
import {Route, Switch, Redirect,BrowserRouter} from 'react-router-dom'
import Home from '../pages/home/index'
export default class RouteConfig extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}