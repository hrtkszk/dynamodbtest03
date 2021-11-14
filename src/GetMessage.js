import React from "react";
import Button from './Button';

class GetMessage extends React.Component {
  state = {
    receivedMessages: ''
  }

  seeMsg = () => {
    const requestOptions ={
      method: 'GET',
      headers:{'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'}
    };
      fetch('https://769qg6p65h.execute-api.ap-northeast-1.amazonaws.com/dbread?partition_key1=1', requestOptions)
      .then((response)=> response.json())
      .then((responseJson) =>{
        console.log(responseJson)
      })
  }

  render() {
    return (
      <div>
        <Button
          title="SeeMessage"
          onClick={this.seeMsg}
        />
        {this.state.receivedMessages}
      </div>
    )
  }
}

export default GetMessage;