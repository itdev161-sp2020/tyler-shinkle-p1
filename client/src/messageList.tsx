//This pulls all documents from our cluster and turns them into
//html elements or 'components'
import React from 'react';
import axios from 'axios';
import Message from './Message';

export default class MessageList extends React.Component{
    state={
        messages: Array<Message>()
    }

    componentDidMount(){
        axios.get(`http://localhost:5000/messages`)
            .then(res =>{
                console.log(res);
                this.setState({messages:res.data});
            });
        }

    render(){
        return(
            <ul>
                {this.state.messages.map(message => <div key={message.id}>{message.message}</div>)}
            </ul>
        )
    }
}