import React from 'react';
import './App.css';
import MessageList from './messageList';
import Modal from './modal';

class App extends React.Component{
  
  showModal(){
    let modal=document.getElementsByClassName("modal");
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <p className="title">share<span id="add" onClick={()=>this.showModal()}>+</span></p>
          <Modal/>
        </header>
        <div className="messages">
          <MessageList/>
        </div>
      </div>
    )
  }
}

export default App;
