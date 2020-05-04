import React from 'react'
import {Route, Switch, Redirect,BrowserRouter} from 'react-router-dom'
import Home from '../pages/home/index'
import Login from '../pages/user/login'
import {connect} from 'react-redux'
class RouteConfig extends React.Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact>
                        {this.props.userReducer.userAccount ? <Redirect to="/home"/> :<Redirect to="/login"/>}
                    </Route>
                    <Route path="/home">
                        {this.props.userReducer.userAccount ? <Home /> :<Redirect to="/login"/>}
                    </Route>
                    <Route path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
const mapStateToprops = state => {
    return state
}

export default connect(mapStateToprops)(RouteConfig)