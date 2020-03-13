//main component for our front end...
import React from 'react';
import './App.css';
import MessageList from './messageList';

class App extends React.Component{
  
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <p className="title">share<span id="add">+</span></p>
        </header>
        <div className="messages">
          <MessageList/>
        </div>
      </div>
    )
  }
}

export default App;
