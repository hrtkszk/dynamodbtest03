import './Test.css';
import React from 'react';

class Test extends React.Component {
    state = {
        Messages: [{sort_key:"a"}]
    }
    onClick = () => {
        console.log(this.state.Messages)
        var new_message = this.state.Messages.concat({sort_key:"a"});
        this.setState({Messages:new_message});  // カウントを1増やした
        //console.log(this.state.count);  // 1増えた値が表示されてほしい（でも増える前の値が出る）
    }
    componentDidMount() {

    }

    messagesInHTML = this.state.Messages.map((Message, i) => {
        console.log(this.state.Messages)
        return <li key={i}>{Message.sort_key}</li>;
      })

    render(){
        return (
        <div className="App">
            <div className="App-header">
                Test
                <button onClick={this.onClick}>メッセージ行追加</button>
                <ul>
                    {this.state.Messages.map((Message, i) => {
                        console.log(this.state.Messages)
                        return <li key={i}>{Message.sort_key}</li>;
                    })}
                </ul>
                {console.log(this.state.Messages)}
            </div>
        </div>
        )
    }
}

export default Test;