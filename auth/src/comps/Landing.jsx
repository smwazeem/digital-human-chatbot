import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import LandingVideo from '../assets/video/landing.mp4';
import SamplePhoto from '../assets/video/interaction.jpg';
import PulzLogo from '../assets/pulztecLogoCropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default class Landing extends Component {
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark ">
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
                            <Link to="/ContactUs" class="nav-item nav-link" >CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className={"row col-12 mt-5"}>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                            <div style={{position:'absolute',left:'10%',top:'10%',zIndex:-1,height:'75%',width:'75%',backgroundColor:'rgba(0,0,0,0.2)'}}/>
                            <div style={{position:'absolute',right:'10%',top:'5%',zIndex:-1,height:'75%',width:'75%',backgroundColor:'rgba(0,0,0,0.2)'}}/>
                            <video style={{backgroundColor:'white'}} autoPlay loop height={'75%'} width={'75%'}>
                                <source src={LandingVideo}/>
                            </video>
                    </div>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                        <div className={"container text-light"}>
                            <h1 style={{fontFamily:'Arial,Maven Pro',fontWeight:'bold',fontSize:'4vw',marginTop:'15%'}}>CONNECT YOUR DIALOGFLOW BOT TO OUR 'REAL' DIGITAL HUMAN</h1>
                        </div>
                    </div>
            </div>
            <div className={"row col-12 mt-5"}>
                    <div className={"col-md-6"}>
                        <div className="row justify-content-center">
                        <Button onClick={()=>{this.props.history.push("/Bot/Demo")}} color="danger" style={{height:80,width:'50%',border:'1px solid white',fontSize:'1.5vw',fontWeight:'bold'}}>TRY OUR BOT</Button>
                        </div>
                        <div className="row mt-4 justify-content-center">
                            <div className="text-light col-10">
                                <p style={{fontFamily:'Arial,Maven Pro',marginTop:'2%',fontSize:'1.5vw'}}>Have a spoken realtime conversation with our Digital Human (Powered by a DialogFlow bot).</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-6"}>
                        <div className="row justify-content-center">
                        <Button onClick={()=>{this.props.history.push("/SignUp")}} color="danger" style={{height:80,width:'50%',border:'1px solid white',fontSize:'1.5vw',fontWeight:'bold'}}>CONNECT YOUR BOT</Button>
                        </div>
                        <div className="row mt-4 justify-content-center">
                            <div className="text-light col-10">
                                <p style={{fontFamily:'Arial,Maven Pro',marginTop:'2%',fontSize:'1.5vw'}}>Connect your DialogFlow chatbot to our Digital Human and experience a live interaction.</p>
                            </div>
                        </div> 
                    </div>
            </div>
            <div className={"d-flex mt-5 justify-content-center"}>
            <hr style={{color:'white',border:'1px solid white',width:'80%'}}/>
            </div>
            <div id="about" className={"row col-12 mt-5"}>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                            <div className="ml-4 container text-light">
                                <h2 style={{fontFamily:'Arial,Maven Pro',fontWeight:'bold',fontSize:'2.5vw'}}>ABOUT</h2>
                                <p style={{fontFamily:'Arial,Maven Pro',marginTop:'2%',fontSize:'1.5vw'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div> 
                    </div>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                        <div style={{position:'absolute',right:'10%',top:'5%',zIndex:-1,height:'100%',width:'75%',backgroundColor:'rgba(0,0,0,0.2)'}}/>
                        <img style={{borderRadius:4}} alt={''} src={SamplePhoto} height={'100%'} width={'75%'}/> 
                    </div>
            </div>
            <div className={"d-flex mt-5 justify-content-center"}>
            <hr style={{color:'white',border:'1px solid white',width:'80%'}}/>
            </div>
            <div id="about" className={"row col-12 mt-5"}>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                            <div className="ml-4 container text-light">
                                <h2 style={{fontFamily:'Arial,Maven Pro',fontWeight:'bold',fontSize:'2.5vw'}}>TECHNOLOGY</h2>
                                <p style={{fontFamily:'Arial,Maven Pro',marginTop:'2%',fontSize:'1.5vw'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div> 
                    </div>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                        
                        <div style={{position:'absolute',right:'10%',top:'5%',zIndex:-1,height:'100%',width:'75%',backgroundColor:'rgba(0,0,0,0.2)'}}/>
                        <img style={{borderRadius:4}} alt={''} src={SamplePhoto} height={'100%'} width={'75%'}/> 
                    </div>
            </div>
            <div className={"d-flex mt-5 justify-content-center"}>
            <hr style={{color:'white',border:'1px solid white',width:'80%'}}/>
            </div>
            <div id="about" className={"row col-12 mt-5"}>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                            <div className="ml-4 container text-light">
                                <h2 style={{fontFamily:'Arial,Maven Pro',fontWeight:'bold',fontSize:'2.5vw'}}>SOLUTIONS</h2>
                                <p style={{fontFamily:'Arial,Maven Pro',marginTop:'2%',fontSize:'1.5vw'}}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                            </div> 
                    </div>
                    <div className={"col-md-6 d-flex justify-content-center"}>
                        
                        <div style={{position:'absolute',right:'10%',top:'5%',zIndex:-1,height:'100%',width:'75%',backgroundColor:'rgba(0,0,0,0.2)'}}/>
                        <img style={{borderRadius:4}} alt={''} src={SamplePhoto} height={'100%'} width={'75%'}/> 
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
