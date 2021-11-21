import React from "react";

class GetMessage extends React.Component {
  state = {
      Messages: []
  }

  componentDidMount() {
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({"partition_key1":2})
    };
    fetch("https://769qg6p65h.execute-api.ap-northeast-1.amazonaws.com/dbread",requestOptions)
    .then(response=> response.json())
    .then(result =>{
      console.log(result)
      this.setState({Messages:result.body})
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.Messages.map((Message, i) => {
            console.log(this.state.Messages)
            return <li key={i}>{Message.sort_key}</li>;
          })}
        </ul>
      </div>
    )
  }
}

export default GetMessage;