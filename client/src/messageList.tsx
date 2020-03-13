//This pulls all documents from our cluster and turns them into
//html elements or 'components'
import React from 'react';
import axios from 'axios';
import Message from './Message';

export default class MessageList extends React.Component{
    //used for unique keys for each ul div
    count=0;

    //a state value to refer to our messages, of our
    //custom type message
    state={
        messages: Array<Message>()
    }

    //send a get request to our API, log to console
    //and set our states message property to the 
    //responses data
    componentDidMount(){
        axios.get(`http://localhost:5000/messages`)
            .then(res =>{
                console.log(res);
                this.setState({messages:res.data});
            });
        }

    //map our message data to div's within a ul.
    render(){
        return(
            <ul>
                {this.state.messages.map(message => <div key={this.count++}>{message.message}</div>)}
            </ul>
        )
    }
}