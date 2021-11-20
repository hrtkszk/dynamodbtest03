import React from "react";

class GetMessage extends React.Component {
  state = {
      receivedMessages: '',
      Messages: [
        {sort_key: 9, secondary_local01: "2021-11-14 15:04:45.971405+09:00", partition_key: 2},
        {sort_key: 10, partition_key: 2}
      ]
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
      this.setState({receivedMessages:result.body})
      console.log(this.state.receivedMessages)
      console.log(this.state.Messages)
    })

  }

  render() {
    
    return (
      <div>

      </div>
    )
  }
}

export default GetMessage;