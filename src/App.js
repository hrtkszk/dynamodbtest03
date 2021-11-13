import './App.css';
import React from 'react';
import Button from './Button'

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Send Message</h1>
          <Button
            title="Send Message"
            onClick={sendMsg}
          />
        </header>
      </div>
    )
  }
}

function sendMsg() {
  const requestOptions ={
    method: 'POST',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify({"partition_key1":"1","partition_key2":"2"})
  };
  fetch("https://skbwb0u423.execute-api.ap-northeast-1.amazonaws.com/dev_amp_db",requestOptions)
  .then((response)=> response.json())
  .then((responseJson) =>{
    console.log(responseJson)
  })
}

export default App;
