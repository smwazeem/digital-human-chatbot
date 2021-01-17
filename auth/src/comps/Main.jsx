import React, { Component } from 'react';
import {Route,BrowserRouter as Router} from 'react-router-dom';

import RegisterComp from './Register';
import LoginComp from './Login';
import Landing from './Landing';
import CustomBotComp from './Custom_Bot/ChatWindow';
import DemoBotComp from './Demo_Bot/ChatWindow';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';

export default class Main extends Component {
    render() {
        return (
            <Router>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/SignUp" component={RegisterComp}/>
                    <Route exact path="/SignIn" component={LoginComp}/>
                    <Route exact path="/Bot/Custom" component={CustomBotComp}/>
                    <Route exact path="/Bot/Demo" component={DemoBotComp}/>
                    <Route exact path="/AboutUs" component={AboutUs}/>
                    <Route exact path="/ContactUs" component={ContactUs}/>
            </Router>
        )
    }
}
