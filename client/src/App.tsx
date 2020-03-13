import React from 'react';
import './App.css';
import MessageList from './messageList';
import Modal from './modal';

class App extends React.Component{
  
  //set state with a show modal property
  state ={
    showModal: false
  }

  //this function will toggle our modals visibility
  stateChange = () =>{
    this.setState({
      showModal: !this.state.showModal
    })
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
          <p className="title">share<span id="add" onClick={()=>this.stateChange()}>+</span></p>
          <div id="modalContainer" className={this.state.showModal ? '' : 'hidden'}>
            <Modal/>
          </div>
        </header>
        <div className="messages">
          <p>Click on the '+' symbol to share a message with the world!</p>
          <MessageList/>
        </div>
      </div>
    )
  }
}

export default App;
