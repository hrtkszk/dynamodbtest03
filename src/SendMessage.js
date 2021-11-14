import './Message.css';
import React from 'react';
import Button from './Button';

class SendMessage extends React.Component {
    state = {
      message: ''
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
        body: JSON.stringify({"partition_key1":this.state.message,"partition_key2":"2"})
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