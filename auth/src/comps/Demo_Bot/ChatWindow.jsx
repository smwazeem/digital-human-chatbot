import React, { Component } from 'react';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Particles from 'react-particles-js';
import { style } from '../../styles/DemoStyles/style';
import { AppConfig } from '../../config/config'
import { makeRequest } from '../../config/req/req';
import { ImpulseSpinner } from "react-spinners-kit";

import receiversAv from '../../assets/botimg.jpg';
import sendersAv from '../../assets/img_avatar.png';
import logo from '../../assets/pulztecLogo.png';
import Webcam from "react-webcam";

const demo_landing ='/html/welcome.html';
const about_srilanka ='/html/About_SriLanka.html';
const SpeechRecognitionInst = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognitionInst()
const tk = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdGF0dXMiOiI1MDAiLCJuYW1lIjoiV2FkYWsgbmEgYm9jY2EsZGVidWcga2FsYWF0YSIsIm1lc3NhZ2UiOiJ0cnkga2FyYXBhbiBuYXNhIGhhY2sga2FyYW5uYSIsImlhdCI6MTUxNjIzOTAyMn0.J34btwwC-qq26RyKQMZZrktewfTRnviRavEsVNxEJgA";

recognition.continous = false
recognition.interimResults = true
recognition.lang = 'en-US'
var payl = '';
class ChatWindow extends Component {
  constructor(props) {
    super(props);

    payl = (AppConfig.url + pref.upr + "." + AppConfig.productname);
    this.state = {
      credentialsSet:false,
      width: 0,
      height: 0,
      token: '',
      URL: AppConfig.devServer+AppConfig.uris[1]+AppConfig.uris[4],
      message: '',
      partial: '',
      sendersList: ['Hello'],
      listening: false,
      receiversList: [],
      nullmsg: "Try asking something from me.",
      initmsg: "Hello! My name is Thanuja. For this DialogFlow demo, I can answer questions about myself, my technology and about the country I was created in. Please ask me a question. ",
      showPhoto: false,
    };
    payl = payl + pref.upo + ":" + (tk.length * 2 + 32) + AppConfig.path;
     this.toggleListen = this.toggleListen.bind(this);
    this.handleListen = this.handleListen.bind(this);
    this.injectJS = this.injectJS.bind(this);
    this.onChangeMsg = this.onChangeMsg.bind(this);
    this.onChangeToken = this.onChangeToken.bind(this);
    this.onChangeURL = this.onChangeURL.bind(this);
    this.captureImage = this.captureImage.bind(this);
    this.toggleShowPhoto = this.toggleShowPhoto.bind(this);
    this.msgRenderer = this.msgRenderer.bind(this);
    this.Submit = this.Submit.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    payl = payl + pref.name;
  }

  componentDidMount() {
    this.updateWindowDimensions();
    this.injectJS('hi');
    document.getElementById('content').src=demo_landing;
    window.addEventListener('resize', this.updateWindowDimensions);
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
    document.getElementById('aWin').src = payl;
    document.addEventListener("keydown", event => {

      if (event.keyCode === 123) {
        event.preventDefault();
      } else if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
        event.preventDefault();
      } else if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
        event.preventDefault();
      } else if (event.ctrlKey && event.shiftKey && event.keyCode === 67) {
        event.preventDefault();
      };
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    if (window.innerWidth > 2000) {
      document.getElementById('chatWindow').style.position = 'absolute';
      document.getElementById('chatWindow').style.bottom = '20%';
      document.getElementById('chatWindow').style.right = '10%';
      document.getElementById('chatWindow').style.WebkitTransform = 'scale(1.8)';
      document.getElementById('aWin').style.position = 'absolute';
      document.getElementById('aWin').style.top = '10%';
      document.getElementById('aWin').style.left = '10%';
      document.getElementById('aWin').style.WebkitTransform = 'scale(1.8)';
    } else {
      document.getElementById('chatWindow').style.position = '';
      document.getElementById('chatWindow').style.bottom = '0%';
      document.getElementById('chatWindow').style.right = '0%';
      document.getElementById('chatWindow').style.WebkitTransform = 'scale(1)';
      document.getElementById('aWin').style.position = '';
      document.getElementById('aWin').style.top = '0%';
      document.getElementById('aWin').style.left = '0%';
      document.getElementById('aWin').style.WebkitTransform = 'scale(1)';
    }
  }

  captureImage() {
    navigator.getMedia = (navigator.getUserMedia || // use the proper vendor prefix
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia);

    try {
      navigator.getMedia({ video: true }, () => {
        this.toggleShowPhoto();
      }, () => {
        alert('Seems like you don\'t have a webcam plugged-in');
      });
    } catch (Exception) {
      alert('Seems like you don\'t have a webcam plugged-in');
    }
  }

  toggleShowPhoto() {
    this.setState({
      showPhoto: !this.state.showPhoto
    });
  }

  toggleListen() {
    document.getElementById('submitBtn').style.opacity = 0.4;
    document.getElementById('micBtn').style.opacity = 0.4;
    this.setState({
      listening: true
    }, this.handleListen)
  }

  handleListen() {
    if (this.state.listening) {
      recognition.start()
      // recognition.onend = () => {
      //   console.log("...continue listening...")
      //   recognition.start()
      // }

    } else {
      recognition.stop();
      document.getElementById('submitBtn').style.opacity = 1;
      document.getElementById('micBtn').style.opacity = 1;
      recognition.onend = () => {

      }
    }

    recognition.onstart = () => {
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else {
          interimTranscript += transcript;
          this.setState({
            message: interimTranscript
          })
        }
      }

      const transcriptArr = finalTranscript.split(' ')

      recognition.onend = () => {
        document.getElementById('submitBtn').style.opacity = 1;
        document.getElementById('micBtn').style.opacity = 1;
        const finalText = transcriptArr.join(' ');
        this.setState({
          listening: false,
          message: finalText
        })
        this.Submit("", this.state.message);

      }
    }

    recognition.onerror = event => {
      this.setState({
        listening: false
      });
      document.getElementById('submitBtn').style.opacity = 1;
      document.getElementById('micBtn').style.opacity = 1;
    }

  }

  injectJS(word) {
    document.getElementById('aWin').contentWindow.postMessage(word,'*');
  }


  onChangeURL(e) {
    this.setState({
      URL: e.target.value
    });
  }

  onChangeToken(e) {
    this.setState({
      token: e.target.value
    })
  }

  Submit(e, msg) {
    if (e) {
      e.preventDefault();
    }
    this.msgRenderer(true, this.state.message);
    if (msg) {
      axios.post(this.state.URL, makeRequest(msg), { timeout: 10000}).then((res) => {
        //------------------------------------------------------------------------------------------------------------
        let Obj = res.data;
        let reply = Obj[0].queryResult.fulfillmentText;
        this.msgRenderer(false, reply);
        if(reply.includes("http")){
          let withoutURLStr=reply.split("http")[0];
          this.injectJS(withoutURLStr);
        }else
          this.injectJS(reply);
      }).catch((err) => {
        this.msgRenderer(false, err.toString());
        console.error(err);
      });
    } else if (this.state.message.length > 0) {
      axios.post(this.state.URL, makeRequest(this.state.message)).then((res) => {
        let Obj = res.data;
        let reply = Obj[0].queryResult.fulfillmentText;
        this.msgRenderer(false, reply);
        if(reply.includes("http")){
          let withoutURLStr=reply.split("http")[0];
          this.injectJS(withoutURLStr);
        }else
          this.injectJS(reply);
      }).catch((err) => {
        this.msgRenderer(false, err.toString());
        console.error(err);
      });
    } else {
      this.msgRenderer(false, this.state.nullmsg);
      this.injectJS(this.state.nullmsg);
    }
    this.setState({
      message: ''
    })
  }

  onChangeMsg(e) {
    this.setState({
      message: e.target.value
    });
  }
  msgRenderer(isSenders, message) {
    let chatbox = document.getElementById('chatBox');
    if (isSenders) {
      let mainContainer = document.createElement('div');
      mainContainer.setAttribute("class", "form-inline animated fadeInUp faster");
      let messageDiv = document.createElement('div');
      messageDiv.setAttribute('style', "width:200px;color:white;border-radius:5px;background-color:#7a7a7a;opacity:0.7;margin-left:75px;margin-top:10px;margin-bottom:10px;text-align:center;")
      let msg = document.createTextNode(message);
      messageDiv.appendChild(msg);
      let avatar = document.createElement('div');
      avatar.setAttribute('style', "width:50px;height:50px;margin-top:2px;margin-left:10px;background-image:url(" + sendersAv + ");background-size:cover;border-radius:50px;border:1px solid black");
      mainContainer.appendChild(messageDiv);
      mainContainer.appendChild(avatar);
      chatbox.appendChild(mainContainer);
    } else {
      if (message && message.includes("https")) {
        let urlArray = message.match(/\bhttps?:\/\/\S+/gi);
        let messageNoURL = message.replace(urlArray, '');
        let mainContainer = document.createElement('div');
        mainContainer.setAttribute("class", "form-inline animated fadeInUp faster");
        let messageDiv = document.createElement('div');
        messageDiv.setAttribute('style', "width:200px;color:white;border-radius:5px;background-color:black;opacity:0.7;margin-right:10px;margin-top:10px;margin-bottom:10px;text-align:center;")
        let msg = document.createTextNode(messageNoURL);
        let aTag = document.createElement('a');
        document.getElementById('content').src=urlArray[0];
        let aText = document.createTextNode(urlArray[0]);
        aTag.appendChild(aText);
        aTag.setAttribute('href', urlArray[0]);
        messageDiv.appendChild(msg);
        messageDiv.appendChild(aTag);
        let avatar = document.createElement('div');
        avatar.setAttribute('style', "width:50px;height:50px;margin-right:10px;margin-left:10px;background-image:url(" + receiversAv + ");border:1px solid black;background-size:cover;border-radius:50px;");
        mainContainer.appendChild(avatar);
        mainContainer.appendChild(messageDiv);
        chatbox.appendChild(mainContainer);
      } else if (message.includes("Sri Lanka")) {
        document.getElementById('content').src=about_srilanka;
        let mainContainer = document.createElement('div');
        mainContainer.setAttribute("class", "form-inline animated fadeInUp faster");
        let messageDiv = document.createElement('div');
        messageDiv.setAttribute('style', "width:200px;color:white;border-radius:5px;background-color:black;opacity:0.7;margin-right:65px;margin-top:10px;margin-bottom:10px;")
        let msg = document.createTextNode(message);
        messageDiv.appendChild(msg);
        let avatar = document.createElement('div');
        avatar.setAttribute('style', "width:50px;height:50px;margin-right:10px;margin-left:10px;background-image:url(" + receiversAv + ");border:1px solid black;background-size:cover;border-radius:50px;");
        mainContainer.appendChild(avatar);
        mainContainer.appendChild(messageDiv);
        chatbox.appendChild(mainContainer);
      } else {
        document.getElementById('content').src=demo_landing;
        let mainContainer = document.createElement('div');
        mainContainer.setAttribute("class", "form-inline animated fadeInUp faster");
        let messageDiv = document.createElement('div');
        messageDiv.setAttribute('style', "width:200px;color:white;border-radius:5px;background-color:black;opacity:0.7;margin-right:65px;margin-top:10px;margin-bottom:10px;text-align:center;")
        let msg = document.createTextNode(message);
        messageDiv.appendChild(msg);
        let avatar = document.createElement('div');
        avatar.setAttribute('style', "width:50px;height:50px;margin-right:10px;margin-left:10px;background-image:url(" + receiversAv + ");border:1px solid black;background-size:cover;border-radius:50px;");
        mainContainer.appendChild(avatar);
        mainContainer.appendChild(messageDiv);
        chatbox.appendChild(mainContainer);
      }
    }
    chatbox.scrollTop = chatbox.scrollHeight;
    this.setState({
      message: ''
    });
  }

  render() {

    return (
      <div>
        <Particles style={style.particles} params={particlesOptions} />
        <Modal isOpen={this.state.showPhoto} toggle={this.toggleShowPhoto} className={this.props.className}>
          <ModalHeader toggle={this.toggleShowPhoto}>Say cheeeeeeze..!</ModalHeader>
          <ModalBody>
            <Webcam style={{ maxWidth: '100%' }} />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggleShowPhoto}>Close</Button>
          </ModalFooter>
        </Modal>
        <div className="row">
       <div className="col-4">
       <div className="col-6">
          <iframe id={"aWin"} scrolling="no" allow={"autoplay"} onLoad={()=>{this.injectJS(this.state.initmsg)}} style={style.iframe} title="Hi, I'm Thanuja" width="300" height="500"></iframe>
        </div>         
        <div id={'chatWindow'} style={style.chatWindow}>
          <div style={{ marginLeft: 5 }} className="form-inline">
            <img alt="Avatar" style={{ width: '20%', height: '20%' }} src={logo} />
            <h5 style={{ marginTop: '1%', marginLeft: '1%' }}>Chat</h5>
          </div>
          <div style={{ backgroundColor: '#c9c9c9' }}>
            <form onSubmit={this.Submit}>
              <div style={style.chatBox} id={'chatBox'}>
              </div>
              <ImpulseSpinner
                size={30}
                frontColor={"#FFFFFF"}
                backColor={"#a1a1a1"}
                loading={this.state.listening}
              />
              <div className="form-inline" style={{ marginLeft: 5 }}>
                <input style={style.textInput} onChange={this.onChangeMsg} value={this.state.message} type="text" placeholder={"Ask me anything...!"} />
                <input disabled={this.state.listening} type="button" style={style.micBtn} id={'micBtn'} onClick={() => { this.toggleListen() }} />
                <button disabled={this.state.listening} type="submit" style={style.chatBtn} id={'submitBtn'} />
              </div>
            </form>
          </div>
        </div>
        </div>
        <div className="col-md-7 mt-2">
            <iframe id="content" title={'Web content loader'} className="rounded-lg" style={{width:'100%',height:'100%',backgroundColor:'#FFFFFF'}}>
            </iframe>
        </div>
        </div>
        <div className="d-flex justify-content-center" style={{ fontSize: 10, color: '#d9d9d9', opacity: 0.5, fontFamily: 'Maitree', bottom: 3, left: 0, right: 0 }}>
          {"Copyright © 2020 Property of Pulz technologies, All rights reserved."}
        </div>
      </div>
    );
  }
}
const pref = {
  upr: 'www',
  upo: '.com',
  name: 'DH'
};
const particlesOptions = {
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "grab"
      },
      onclick: {
        enable: true,
        mode: "push"
      },
    }
  },
  particles: {
    color: {
      value: ['#FFFFFF']
    },
    line_linked: {
      color: '#FFFFFF',
      opacity: 1
    },
    number: {
      value: 60
    }
  }
};

export default ChatWindow;
