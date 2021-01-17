import React, { Component } from 'react'
import Files from 'react-files'

import {
    TextField,
    Button
} from '@material-ui/core';

export default class SubmitConfig extends Component {
    constructor() {
        super();
        this.state = {
          jsonFile: {},
          type:'',
          projectID:'',
          private_key_id:'',
          privatekey:'',
          client_id:'',
          auth_uri:'',
          token_uri:'',
          email:'',
          auth_provider_x509_cert_url:'',
          client_x509_cert_url:''
        };
        
        this.onChangePK = this.onChangePK.bind(this);
        this.onChangePID = this.onChangePID.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangePKID = this.onChangePKID.bind(this);
        this.onChangeCID = this.onChangeCID.bind(this);
        this.onChangeAuthURI = this.onChangeAuthURI.bind(this);
        this.onChangeTokenURI = this.onChangeTokenURI.bind(this);
        this.onChangeCertURL = this.onChangeCertURL.bind(this);
        this.onChangeClientCertURL = this.onChangeClientCertURL.bind(this);

        this.setSessionData =this.setSessionData.bind(this);

        this.fileReader = new FileReader();
      
        this.fileReader.onload = (event) => {
            try{
                this.setState({ 
                    jsonFile: JSON.parse(event.target.result),
                    type:JSON.parse(event.target.result).type,
                    projectID:JSON.parse(event.target.result).project_id,
                    private_key_id:JSON.parse(event.target.result).private_key_id,
                    privatekey:JSON.parse(event.target.result).private_key,
                    client_id:JSON.parse(event.target.result).client_id,
                    auth_uri:JSON.parse(event.target.result).auth_uri,
                    token_uri:JSON.parse(event.target.result).token_uri,
                    email:JSON.parse(event.target.result).client_email,
                    auth_provider_x509_cert_url:JSON.parse(event.target.result).auth_provider_x509_cert_url,
                    client_x509_cert_url:JSON.parse(event.target.result).client_x509_cert_url
              }, () => {
                  //console.log(this.state.jsonFile);
                });
            }catch(err){
                alert('Error accessing Key file. Please check the format');
            }
        };
      }
    
      onChangePID(e){
        this.setState({
            projectID:e.target.value
        });
      }
      
      onChangePK(e){
        this.setState({
            privatekey:e.target.value
        });
      }
      
      onChangeEmail(e){
        this.setState({
            email:e.target.value
        }); 
      }

      onChangeType(e){
        this.setState({
            type:e.target.value
        }); 
      }

      onChangePKID(e){
        this.setState({
            private_key_id:e.target.value
        }); 
      }

      onChangeCID(e){
        this.setState({
            client_id:e.target.value
        }); 
      }

      onChangeAuthURI(e){
        this.setState({
            auth_uri:e.target.value
        }); 
      }

      onChangeTokenURI(e){
        this.setState({
            token_uri:e.target.value
        }); 
      }

      onChangeCertURL(e){
        this.setState({
            auth_provider_x509_cert_url:e.target.value
        }); 
      }

      onChangeClientCertURL(e){
        this.setState({
            client_x509_cert_url:e.target.value
        }); 
      }

      setSessionData(){
            if( this.state.type
                && this.state.projectID
                && this.state.private_key_id
                && this.state.privatekey
                && this.state.email
                && this.state.client_id
                && this.state.auth_uri
                && this.state.token_uri
                && this.state.auth_provider_x509_cert_url
                && this.state.client_x509_cert_url){
                    
                window.sessionStorage.setItem("type", this.state.type);
                window.sessionStorage.setItem("project_id", this.state.projectID);
                window.sessionStorage.setItem("private_key_id", this.state.private_key_id);
                window.sessionStorage.setItem("private_key", this.state.privatekey);
                window.sessionStorage.setItem("client_email", this.state.email);
                window.sessionStorage.setItem("client_id", this.state.client_id);
                window.sessionStorage.setItem("auth_uri", this.state.auth_uri);
                window.sessionStorage.setItem("token_uri", this.state.token_uri);
                window.sessionStorage.setItem("auth_provider_x509_cert_url", this.state.auth_provider_x509_cert_url);
                window.sessionStorage.setItem("client_x509_cert_url", this.state.client_x509_cert_url);

                this.props.onSubmit();
            }else
                alert('Some data is missing. Please re-check.');
      }

      render() {
      
          return (
             <div className="files">
               {
                   (!this.state.projectID 
                    || !this.state.email 
                    || !this.state.type
                    || !this.state.private_key_id
                    || !this.state.privatekey
                    || !this.state.client_id
                    || !this.state.auth_uri
                    || !this.state.token_uri
                    || !this.state.auth_provider_x509_cert_url
                    || !this.state.client_x509_cert_url
                    ) &&
                   <Files
                        accepts={['.json']}
                        multiple={false}
                        onChange={file => {
                            this.fileReader.readAsText(file[0]);
                        }}
                    >
                        Drop your DialogFlow API Key file here...
                    </Files>
               }
               
               <div className="form-group">
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Type'}
                            variant={'outlined'}
                            value={this.state.type}
                            onChange={this.onChangeType}
                            fullWidth
                        />
                    </div>
                   <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Project ID'}
                            variant={'outlined'}
                            value={this.state.projectID}
                            onChange={this.onChangePID}
                            fullWidth
                        />
                    </div>
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Private Key ID'}
                            variant={'outlined'}
                            value={this.state.private_key_id}
                            onChange={this.onChangePKID}
                            fullWidth
                        />
                    </div>
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Private Key'}
                            variant={'outlined'}
                            value={this.state.privatekey}
                            onChange={this.onChangePK}
                            fullWidth
                        />
                    </div>
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Email'}
                            variant={'outlined'}
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            fullWidth
                        />
                    </div>
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Client ID'}
                            variant={'outlined'}
                            value={this.state.client_id}
                            onChange={this.onChangeCID}
                            fullWidth
                        />
                    </div>
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Auth URI'}
                            variant={'outlined'}
                            value={this.state.auth_uri}
                            onChange={this.onChangeAuthURI}
                            fullWidth
                        />
                    </div>
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Token URI'}
                            variant={'outlined'}
                            value={this.state.token_uri}
                            onChange={this.onChangeTokenURI}
                            fullWidth
                        />
                    </div>
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Auth Certificate URL'}
                            variant={'outlined'}
                            value={this.state.auth_provider_x509_cert_url}
                            onChange={this.onChangeCertURL}
                            fullWidth
                        />
                    </div>
                    <div style={{marginTop:'1%'}}>
                        <TextField
                            label={'Client Certificate URL'}
                            variant={'outlined'}
                            value={this.state.client_x509_cert_url}
                            onChange={this.onChangeClientCertURL}
                            fullWidth
                        />
                    </div>
                </div>
                <Button variant="contained" color="primary" onClick={()=>{this.setSessionData()}}>
                Submit
                </Button>
             </div>
          );
      }
}
