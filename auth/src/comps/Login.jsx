import React, { Component } from 'react'
import {Form,Input,Label,Button,Alert} from 'reactstrap';
import {Paper} from '@material-ui/core';
import {Style} from '../styles/styles';
import {Link} from 'react-router-dom';
import {AppConfig} from '../config/config'; 
import axios from 'axios';

import PulzLogo from '../assets/pulztecLogoCropped.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPhone,faEnvelope} from '@fortawesome/free-solid-svg-icons'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            Password:'',
            Email:'',
            Error:{
                shown:false,
                message:''
            },
        }
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.showErrorMessage = this.showErrorMessage.bind(this);
        this.hideErrorMessage = this.hideErrorMessage.bind(this);
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

    onSubmit(e){
        e.preventDefault();
        if(this.state.Email && this.state.Password){
            let User = {
                Email:this.state.Email,
                Password:this.state.Password
            }
            axios.defaults.withCredentials=true;
            axios.post(AppConfig.devServer+AppConfig.uris[0]+AppConfig.uris[5],User).then((res)=>{ 
                if(res.data.TrialUser){
                    this.props.history.push({
                        pathname: '/Bot/Custom',
                        state: { isTrialUser:true }
                    });
                }else{
                this.props.history.push({
                        pathname: '/Bot/Custom',
                        state: { isTrialUser:false }
                    });
                }

            }).catch((err)=>{
                if(err.response){
                    let Error_Response = err.response.data;
                    this.showErrorMessage(Error_Response.payload.message);
                }else{
                    console.log(err);
                    this.showErrorMessage('Error occured while connecting to the server.');  
                }
                             
            })
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
                                <Link to="/SignIn" class="nav-item nav-link active" >LOGIN</Link>
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
                <div style={{marginTop:'8%'}} className="d-flex justify-content-center ">
                <Paper elevation={3} className="col-md-6 mt-1 mb-1" >
                <h3 style={{fontFamily:'Nunito,Arial',textAlign:'center',fontWeight:'bold'}}>LOGIN</h3>
                <div className="form" style={{marginTop:'20px'}}>
                    <Form>
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-md-4">
                                <Label style={Style.StyledFont}>Email</Label>
                            </div>
                            <div className="col-md-4">
                                <Input type="text" placeholder={"j.smith@mail.com"} onChange={this.onChangeEmail} value={this.state.Email}/>
                            </div>
                        </div>
                        <div className="form-group d-flex justify-content-center" >
                            <div className="col-md-4">
                                <Label style={Style.StyledFont}>Password</Label>
                            </div>
                            <div className="col-md-4">
                                <Input type="password" placeholder={"*********"} onChange={this.onChangePassword} value={this.state.Password}/>
                            </div>
                        </div>
                        {
                           this.state.Error.shown && 
                           <div className="form-group d-flex justify-content-center">
                                <div className="col-md-7">
                                     <Alert color={'danger'}>{this.state.Error.message}</Alert>
                                </div>
                           </div>
                       }
                        <div className="form-group d-flex justify-content-center">
                            <div className="col-md-4">
                                <Button type="submit" color={"primary"} onClick={this.onSubmit}>Sign In</Button>
                            </div>
                        </div>
                    </Form>
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
