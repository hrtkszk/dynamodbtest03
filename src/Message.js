import './Message.css';
import React from 'react';
import SendMessage from './SendMessage';
import GetMessage from './GetMessage';

class Message extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <GetMessage />
        </div>
        <SendMessage />
      </div>
    )
  }
}

        // (document).ready(function()
        // $.get("", function(result1){
        //     var history = JSON.parse(result1.body);
        //     for (var i in history.Items){
        //         var item_list = JSON.stringify(history.Items[i]);
        //         var vol = JSON.parse(item_list);
        //         if (myID == vol.ID_Message){
        //             var h = '<div class="mycomment"><p>' + vol.ID_Message + '</p></div>' + vol.Time;
        //          else {
        //             var h = '<div class="balloon6"><div class="faceicon">★</div><div class="chatting"><div class="says"><p>' + vol.ID_Message + '</p></div></div></div>' + vol.Time;
        //         ;
        //         $("#testoutput2").append(h);
        //     ;
        // )

export default Message;