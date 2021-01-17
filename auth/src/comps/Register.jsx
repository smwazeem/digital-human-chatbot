import React, { Component } from 'react'
import {Input,Label,Button,Alert} from 'reactstrap';
import axios from 'axios';
import {Style} from '../styles/styles';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import {AppConfig} from '../config/config';

import PulzLogo from '../assets/pulztecLogoCropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

import voiceInput from '../assets/video/voiceInput.mp4';
import dropFile from '../assets/video/dropfile.mp4';

export default class Register extends Component {

    constructor(props){
        super(props);
        this.state={
            Name:'',
            Email:'',
            Password:'',
            Confirm_Password:'',
            Organization:'',
            Phone:'',
            Error:{
                shown:false,
                message:''
            },
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeConfirmPass = this.onChangeConfirmPass.bind(this);
        this.onChangeOrganization =this.onChangeOrganization.bind(this);
        this.onChangePhone =this.onChangePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.showErrorMessage = this.showErrorMessage.bind(this);
        this.hideErrorMessage = this.hideErrorMessage.bind(this);
    }

    onChangeName(e){
        this.setState({
            Name:e.target.value
        });
    }
  
    onChangeEmail(e){
        this.setState({
            Email:e.target.value
        });
    }

    onChangePassword(e){
        this.setState({
            Password:e.target.value
        });
    }

    onChangeConfirmPass(e){
        this.setState({
            Confirm_Password:e.target.value
        });
    }

    onChangeOrganization(e){
        this.setState({
            Organization:e.target.value
        });
    }

    onChangePhone(e){
        this.setState({
            Phone:e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        
        if(this.state.Name
            &&this.state.Organization
                &&this.state.Phone
                    &&this.state.Password
                        &&this.state.Email){
                            
            if(this.state.Password === this.state.Confirm_Password){
                let UserObject={
                    Name:this.state.Name,
                    Organization:this.state.Organization,
                    Email:this.state.Email,
                    Password:this.state.Password,
                    Phone:this.state.Phone
                }
                axios.post(AppConfig.devServer+AppConfig.uris[0]+AppConfig.uris[6],UserObject).then((res)=>{
                    alert('Registration Complete.You have been given a trial of 24 hours. Please Login');
                    this.props.history.push("/SignIn");
                }).catch((err)=>{
                    let Response_Body=err.response.data;
                   this.showErrorMessage('Error occured while Signing Up. More details: '+Response_Body.payload.message);
                });
            }else{
                this.showErrorMessage('Your Passwords doesn\'t match. Check again.');
            }
        }else
            this.showErrorMessage('Please fill all the fields');

    }

    showErrorMessage(msg){
        this.setState({
            Error:{
                shown:true,
                message:msg
            }
        },this.hideErrorMessage());
    }
    
    hideErrorMessage(){
        setTimeout(()=>{
            this.setState({
                Error:{
                    shown:false,
                    message:''
                }
            });
        },10000);
    }

    render() {
        return (
            <div>
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
                                <Link to="/SignUp" class="nav-item nav-link active" >CONNECT YOUR BOT</Link>
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
                <div style={{marginTop:'10%'}} className="mt-2 ">
                <div style={{marginLeft:'1.5%'}}>
                    <h2 style={{fontFamily:'Arial,Maven Pro',fontWeight:'bold',fontSize:'2.5vw',color:'white'}}>REGISTER</h2>
                    <p style={{color:'white'}}>Registered users please <Link style={{color:'white'}} to={'/SignIn'}><u>Log In</u></Link></p>
                    <p style={{color:'white'}}>Please register to connect and demo your own DialogFlow bot with our Digital Human.</p>
                    <p style={{color:'white'}}>This is a free trial, all we ask in return is your feedback.</p>
                    <p style={{color:'white'}}>For more details on how this will work please <HashLink style={{color:'white'}} to={'/#about'}><u>Click here</u></HashLink>.</p>
                </div>
                <div className="form col-9 text-light">
                        <div className="form-group" >
                            <div className="col-md-7">
                                <Label style={Style.StyledFont}>Name</Label>
                            </div>
                            <div className="col-md-7">
                                <Input type="text" placeholder={"John Smith"} onChange={this.onChangeName} value={this.state.Name} style={{height:50}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-7">
                                <Label style={Style.StyledFont}>Email</Label>
                            </div>
                            <div className="col-md-7">
                                <Input type="email" placeholder={"j.smith@mail.com"} onChange={this.onChangeEmail} value={this.state.Email} style={{height:50}}/>
                            </div>
                        </div>
                        <div className="form-group" >
                            <div className="col-md-7">
                                <Label style={Style.StyledFont}>Password</Label>
                            </div>
                            <div className="col-md-7">
                                <Input type="password" placeholder={"********"} onChange={this.onChangePassword} value={this.state.Password} style={{height:50}}/>
                            </div>
                        </div>
                        <div className="form-group" >
                            <div className="col-md-7">
                                <Label style={Style.StyledFont}>Confirm Password</Label>
                            </div>
                            <div className="col-md-7">
                                <Input type="password" placeholder={"********"} onChange={this.onChangeConfirmPass} value={this.state.Confirm_Password} style={{height:50}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-7">
                                <Label style={Style.StyledFont}>Organization</Label>
                            </div>
                            <div className="col-md-7">
                                <Input type="text" placeholder={"My Organization"} onChange={this.onChangeOrganization} value={this.state.Organization} style={{height:50}}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-md-7">
                                <Label  style={Style.StyledFont}>Phone</Label>
                            </div>
                            <div className="col-md-7">
                                <Input type="number" placeholder={"07XXXXXXXX"} onChange={this.onChangePhone} value={this.state.Phone} style={{height:50}}/>
                            </div>
                        </div>
                       {
                           this.state.Error.shown && 
                           <div className="form-group">
                                <div className="col-md-7">
                                     <Alert color={'danger'}>{this.state.Error.message}</Alert>
                                </div>
                           </div>
                       }
                        <div className="form-group">
                            <div className="col-md-4">
                                <Button color={"danger"} style={{height:50,width:'50%',fontWeight:'bold'}} onClick={this.onSubmit}>Sign Up</Button>
                            </div>
                        </div>
                </div>
                </div>
                <div className={"d-flex mt-5 justify-content-center"}>
                    <hr style={{color:'white',border:'1px solid white',width:'85%'}}/>
                </div>
                <div className={"col-9"}>
                    <div style={{marginLeft:'12%'}}>
                        <div className={"row"}>
                            <h3 style={{textAlign:'left',fontFamily:'Nunito,Arial',color:'white',fontWeight:'bold'}}>FOLLOWING REGISTRATION</h3>
                        </div>
                        <div className={"row text-light"}>
                            <p style={{textAlign:'left',fontFamily:'Arial'}}>Once you submit your registration request...</p>
                        </div>
                        <div className={"row text-light"}>
                            <p style={{textAlign:'left',fontFamily:'Arial'}}>1. You will have immediate access to connect your Dialogflow chatbot to our Digital Human for a period of 24 hours.</p>
                        </div>
                        <div className={"row text-light"}>
                            <p style={{textAlign:'left',fontFamily:'Arial'}}>2. You will need the following information to connect your Dialogflow bot to our Digital Human:</p>
                        </div>
                        <div style={{marginLeft:'20px'}} className={"text-light"}>
                            <div className={"row text-light"}>
                                <p style={{textAlign:'left',fontFamily:'Arial'}}>a. The API Key file for your DialogFlow bot in JSON format. (YourKeyFile.json)</p>
                            </div>
                            <div className={"row text-light"}>
                                <p style={{textAlign:'left',fontFamily:'Arial'}}>(Instructions on how to create an API key file can be found here: <a target="_blank" rel="noopener noreferrer" style={{color:'white'}} href={"https://dialogflow.com/docs/reference/v2-auth-setup"}><u>Getting the Service Account key - Google DialogFlow Documents</u></a>)</p>
                            </div>
                            <div className={"row text-light"}>
                                <p style={{textAlign:'left',fontFamily:'Arial'}}>b. Drag and drop the API Key File to connect. (See Instructions below)</p>
                            </div>
                        </div>
                        <div className={"row text-light"}>
                            <p style={{textAlign:'left',fontFamily:'Arial'}}>3. Please note that when you log out, your Dialogflow chatbot credentials will be deleted from our system. To re-connect, you will have to re-enter the credentials listed in 2 above.</p>
                        </div>
                        <div className={"row text-light"}>
                            <p style={{textAlign:'left',fontFamily:'Arial'}}>4. If you require more time past the 24 hours test period, please email us at <a style={{color:'white'}} href={"mailto:support@pulztec.com"}><u>support@pulztec.com</u></a></p>
                        </div>
                    </div>
                </div>
                <div className={"d-flex mt-2 justify-content-center"}>
                    <hr style={{color:'white',border:'1px solid white',width:'85%'}}/>
                </div>
                <div className={"col-9"}>
                    <div style={{marginLeft:'12%'}}>
                        <div className={"row"}>
                            <h3 style={{textAlign:'left',fontFamily:'Nunito,Arial',color:'white',fontWeight:'bold'}}>INSTRUCTIONS TO CONNECT</h3>
                        </div>
                        <div className={"row text-light mt-3"}>
                            <p style={{textAlign:'left',fontFamily:'Arial'}}>
                            <p style={{fontWeight:'bold'}}>Step 1:</p>
                                <ul>
                                    <li>Create your Dialogflow API Key-File and drop it into the Chatbot Details Window.</li>
                                    <li>The Key-File will populate all the detail fields and will connect your Dialogflow chatbot with the Digital Human.</li>
                                    <li>(To create your Dialogflow Key-File, step-by-step instructions can be found here:  <a target="_blank" rel="noopener noreferrer" style={{color:'white'}} href={"https://dialogflow.com/docs/reference/v2-auth-setup"}><u>Getting the Service Account key - Google DialogFlow Documents</u></a>)</li>
                                    <li>Click Submit.</li>
                                </ul>
                            </p>
                        </div>
                        <div className={"col-12 d-flex justify-content-center"}>
                           
                            <div style={{position:'absolute',right:'11%',top:'5%',zIndex:-1,height:'100%',width:'70%',backgroundColor:'rgba(0,0,0,0.2)'}}/>
                            <video style={{backgroundColor:'white'}} autoPlay loop height={'75%'} width={'75%'}>
                                <source src={dropFile}/>
                            </video>
                        </div>
                        <div className={"row text-light mt-5"}>
                            <p style={{textAlign:'left',fontFamily:'Arial'}}>
                            <p style={{fontWeight:'bold'}}>Step 2:</p>
                                <ul>
                                    <li>Avatar will greet you with a  spoken welcome message.</li>
                                    <li>Click the microphone button on the Chat Window to speak and interact with the Digital Human Bot or click the text field to type and interact.
                                    </li>
                                </ul>
                            </p>
                        </div>
                        <div className={"col-12 d-flex justify-content-center"}>
                            
                            <div style={{position:'absolute',right:'11%',top:'5%',zIndex:-1,height:'100%',width:'70%',backgroundColor:'rgba(0,0,0,0.2)'}}/>
                            <video style={{backgroundColor:'white'}} autoPlay loop height={'75%'} width={'75%'}>
                                <source src={voiceInput}/>
                            </video>
                        </div>
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
