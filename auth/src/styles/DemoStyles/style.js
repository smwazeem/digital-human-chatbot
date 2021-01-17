import sendersAv from '../../assets/img_avatar.png';
import receiversAv from '../../assets/botimg.jpg';
import sendBtn from '../../assets/sendBtn.png';
import micBtn from '../../assets/micBtn.png';

const chatBoxHeight = 400;
const chatBoxwidth = 315;

export const style = {
    iframe: {
        WebkitTransform: 'scale(0.8)',
        MozTransform:'scale(0.8)',
        top:0,
        marginTop: 10,
        height: 400,
        width: 400,
        border: '1px solid white',
        borderRadius: '50%',
        backgroundColor:'#FFFFFF'
    },
    particles: {
        //backgroundImage: 'linear-gradient(to bottom, black,red, black)',
        // backgroundImage:'linear-gradient(to right bottom, #030c8c, #82ffa1)',
        backgroundImage:'linear-gradient(to right bottom, #0055B3, #80499C, #FD2F34)',
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: -1,
    },
    chatBtn: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        marginBottom:5,
        backgroundImage: `url(${sendBtn})`,
        backgroundSize: 'cover',
        border: '1px solid black',
        borderRadius: 50,
    },
    disabledButton: {
        backgroundColor: 'red'
    }, micBtn: {
        width: 40,
        height: 40,
        marginRight: 10,
        marginLeft: 10,
        marginBottom:5,
        backgroundSize: 'contain',
        backgroundImage: `url(${micBtn})`,
        border: '1px solid black',
        borderRadius: 50,
    },
    chatWindow: {
        marginTop:'5%',
        marginLeft:20,
        backgroundColor: 'white',
        backgroundSize: 'cover',
        opacity: 0.8,
        border: '2px solid white',
        width: chatBoxwidth + 60,
        borderRadius: 5,
    },
    chatBox: {
        borderRadius: 5,
        height: chatBoxHeight,
        width: chatBoxwidth + 50,
        overflowY: 'scroll',
        opacity: 1,
    },
    textInput: {
        fontFamiliy:'Work Sans',
        boxShadow: '1px 3px 1px #9E9E9E',
        border: '1px solid white',
        borderRadius: 5,
        marginTop: 5,
        width: chatBoxwidth - 75,

    },
    sendersAvatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 10,
        backgroundImage: `url(${sendersAv})`,
        backgroundSize: 'cover',
        border: '1px solid black',
        borderRadius: 50,
    },
    receiversAvatar: {
        width: 50,
        height: 50,
        marginRight: 10,
        marginLeft: 10,
        backgroundImage: `url(${receiversAv})`,
        backgroundSize: 'cover',
        border: '1px solid black',
        borderRadius: 50,
    },
    sendersMsg: {
        backgroundColor: 'black',
        opacity: 0.7,
        width: chatBoxwidth - 50,
        color: 'white',
        borderRadius: 5,
        border: '2px solid blue',
        marginLeft: 50,
        marginTop: 10,
        marginBottom: 10,
    },
    receiversMsg: {
        backgroundColor: 'black',
        opacity: 0.7,
        width: chatBoxwidth - 50,
        color: 'white',
        borderRadius: 5,
        border: '2px solid orange',
        marginRight: 50,
        marginTop: 10,
        marginBottom: 10,
    },
    inputBox: {
        position:'absolute',
        bottom:10,
        left:5,
    },
    inputBoxURL: {
        position:'absolute',
        bottom:50,
        left:5,
    },
};
