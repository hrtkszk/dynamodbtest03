import './Message.css';
import React from 'react';
import Button from './Button';

class SendMessage extends React.Component {
    state = {
      message: '',
      image:'aaa'
    }
    onChange = (key, value) => {
      //this.props.updateErrorMessage(null)
      this.setState({
        [key]: value
      })
    }
    sendMsg = () => {
      const requestOptions ={
        method: 'POST',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify({"id":"aaaa","sendTo":"bbbb","message":this.state.message,"image":this.state.image})
      };
      fetch("https://skbwb0u423.execute-api.ap-northeast-1.amazonaws.com/dev_amp_db",requestOptions)
      .then((response)=> response.json())
      .then((responseJson) =>{
        console.log(responseJson)
      })
    }
    render() {
        return (
        <div className="App">
            <footer className="App-footer">
                <input
                    onChange={evt => this.onChange('message', evt.target.value)}
                    className="input"
                    placeholder='メッセージ'
                />
                <Button
                    title="Send"
                    onClick={this.sendMsg}
                />
            </footer>



        </div>
        )
    }
}

export default SendMessage;