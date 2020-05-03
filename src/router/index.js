import React from 'react'
import {Route, Switch, Redirect,BrowserRouter} from 'react-router-dom'
import Home from '../pages/home/index'
export default class RouteConfig extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact><h1>hello world</h1></Route>
                    <Route path="/home" component={Home}/>
                </Switch>
            </BrowserRouter>
        )
    }
}