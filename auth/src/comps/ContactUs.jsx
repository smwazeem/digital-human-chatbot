import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Paper} from '@material-ui/core';
import {Style} from '../styles/styles';

import PulzLogo from '../assets/pulztecLogoCropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default class ContactUs extends Component {
    render() {
        return (
            <div >
            <div style={{height:'100vh'}}>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="d-flex flex-grow-1">
                    <span class="w-100 d-lg-none d-block"></span>
                    <Link to="/" class="navbar-brand d-none d-lg-inline-block" style={{fontWeight:'bold',letterSpacing:'-0.1em'}}>DIGITALHUMANBOT</Link>
                    <div class="w-100 text-right">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
                <div class="collapse navbar-collapse flex-grow-1 text-right" id="myNavbar">
                    <ul class="navbar-nav ml-auto flex-nowrap">
                        <li class="nav-item mx-1">
                            <Link to="/Bot/Demo" class="nav-item nav-link" >DEMO</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/SignUp" class="nav-item nav-link" >CONNECT YOUR BOT</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/SignIn" class="nav-item nav-link" >LOGIN</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/AboutUs" class="nav-item nav-link" >ABOUT</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ContactUs" class="nav-item nav-link active" >CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{marginTop:'8%'}} className="d-flex justify-content-center">
            <Paper elevation={3} className="col-md-6 mt-1 mb-1">
            <h3 style={Style.StyledFont}>CONTACT US</h3>
            <div className={"col-12 row mt-5"}>
                <div className={"col-md-6"}>
                    <h2 style={{fontFamily: 'Abel,Arial',color:'#0055B3'}}>USA OFFICE New York</h2>
                    <h3 style={{fontFamily: 'Abel,Arial',color:'grey'}}>
                    300 East 40th Street, 23B<br/>
                    New York, NY 10016<br/>
                    USA<br/>
                    Phone: +1 646 330 5025<br/>
                    </h3>
                </div>
                <div className={"col-md-6"}>
                <h2 style={{fontFamily: 'Abel,Arial',color:'#0055B3'}}>SRI LANKA OFFICE Colombo</h2>
                    <h3 style={{fontFamily: 'Abel,Arial',color:'grey'}}>
                    79/10 Kannangara Mawatha<br/>
                    Colombo 7<br/>
                    Sri Lanka<br/>
                    Phone: +94 11 266 5100<br/>
                    </h3>
                </div>
            </div>
            </Paper>
            </div>
            </div>
            <div class="mt-5 pt-5 pb-5 footer bg-dark text-light">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-xs-12 about-company">
                        <h4>About Us</h4>
                        <img alt={'Pulztec Logo'} src={PulzLogo} width={'50%'}/> 
                        <p class="pr-5 text-white-50">Pulztec is a technology innovation firm that specializes in application development and device engineering. </p>
                        </div>
                        <div class="col-lg-3 col-xs-12 links">
                        <h4 class="mt-lg-0 mt-sm-3">Quick Links</h4>
                            <ul class="m-0 p-0">
                            <li> <Link style={{color:'white'}} to="/AboutUs">About</Link></li>
                            <li> <Link style={{color:'white'}} to="/ContactUs">Contact</Link></li>                                                                     
                            </ul>
                        </div>
                        <div class="col-lg-4 col-xs-12 location">
                        <h4 class="mt-lg-0 mt-sm-4">Location</h4>
                        <p>79/10, CWW Kannangara Mawatha, Colombo 07.</p>
                        <p class="mb-0"><FontAwesomeIcon icon={faPhone} color='white'/> (+94) 112-665100</p>
                        <p><FontAwesomeIcon icon={faEnvelope} color='white'/> support@pulztec.com</p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col copyright">
                        <p style={{textAlign:'center'}} class=""><small class="text-white-50">Copyright © 2020 Property of Pulz technologies, All rights reserved.</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
