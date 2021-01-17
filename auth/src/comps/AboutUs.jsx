import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Paper} from '@material-ui/core';
import {Style} from '../styles/styles';

import PulzLogo from '../assets/pulztecLogoCropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default class AboutUs extends Component {
    render() {
        return (
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
                            <Link to="/AboutUs" class="nav-item nav-link active" >ABOUT</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/ContactUs" class="nav-item nav-link" >CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div style={{marginTop:'10%'}} className="d-flex justify-content-center mt-2">
            <Paper elevation={3} className="col-md-6 mt-1 mb-1">
            <h3 style={Style.StyledFont}>ABOUT US</h3>
                <p style={{textAlign:"center",fontFamily:'Arial',fontSize:20}}>Pulztec is a technology innovation firm that specializes in application development and device engineering.</p>
                <br/>
                <p style={{textAlign:"center",fontFamily:'Arial',fontSize:20}}>We collaborate with businesses of all sizes to develop innovative, market-ready applications and devices that serve as cost effective solutions to industry specific problems and needs.</p>
                <br/>
                <p style={{textAlign:"center",fontFamily:'Arial',fontSize:20}}>Our creative team offers deep expertise in device engineering and software application development for a range of industries including consumer products, health and wellbeing, financial services, retail, communications and non-profit organizations.</p>
                <br/>
                <p style={{textAlign:"center",fontFamily:'Arial',fontSize:20}}>We believe in the power of people, their creativity and their ability to take action and bring about extraordinary changes.</p>
                <br/>
                <p style={{textAlign:"center",fontFamily:'Arial',fontSize:20}}>We initiate each project with in-depth conversations that explore your needs and goals, working in constant collaboration from concept through implementation</p>
                <br/>
                <p style={{textAlign:"center",fontFamily:'Arial',fontSize:20}}>Pulztec was founded by Kumar Navaratnam.</p>
            </Paper>
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
