import './Message.css';
import React  from 'react';
import Button from './Button';

class SendMessage extends React.Component {
    state = {
      message: '',
      image:'noImage'
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
        this.setState({message:""})
      })
    }
    render() {
        return (
        <div className="App">
            <footer className="App-footer">
                <input
                  id="message"
                  onChange={evt => this.onChange('message', evt.target.value)}
                  className="input"
                  placeholder='メッセージ'
                />
                <Button
                  title="Send"
                  onClick={this.sendMsg}
                  //{...document.getElementByid('message').value = ''}
                />
            </footer>
        </div>
        )
    }
}

export default SendMessage;