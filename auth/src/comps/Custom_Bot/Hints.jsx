import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';

export default class Hints extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            hint: '',
            hints: ["You can ask questions from me", "Or type your question", "Click the button and start"]
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount(){
        this.updateWindowDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }
    updateWindowDimensions() {
        if(window.innerWidth>2000){
          document.getElementById('hint').style.position='absolute';
          document.getElementById('hint').style.WebkitTransform='scale(1.8)';
        }else{
            document.getElementById('hint').style.position='';
            document.getElementById('hint').style.WebkitTransform='scale(1)';
        }
      }
    render() {
        return (
            <div id="hint" style={{ paddingTop:'10%',margin:'auto',paddingLeft:'30%'}}>
                <div style={{ fontWeight: 'bold', float: 'left', fontSize: 30, fontFamily: 'Raleway', color: 'white' }}>
                    {"Welcome | "}
                </div>
                <div style={{ float: 'left', marginLeft: 5 }}>
                    <div style={{ textAlign: 'left', fontSize: 30, fontFamily: 'Raleway', color: 'white' }} >
                    <Typewriter
                        options={{
                            strings: this.state.hints,
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </div>
                </div>
            </div>
        )
    }
}
