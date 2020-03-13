import React from 'react';

export default class Modal extends React.Component{
   // create a state object with a msg key / value pair
    state={
        msg: ''
    }
    
    //when this function is called it modifies our states msg value
    onChange = (e:any) =>{
        this.setState({[e.target.name]:e.target.value});
    }

    //this posts our states msg value to our API
    postData(msg:String){
        fetch('http://localhost:5000/api/messages',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "message":msg
            })
        })
    }

    //render a form where the with relevant event handlers
    render(){
        return(
            <div className="modal">
                <p>Share something!</p>
                <form id="addMessage">
                    <textarea id="messageBox" name="msg" onChange={this.onChange}/>
                    <button id="submit" onClick={()=>{this.postData(this.state.msg)}}>SUBMIT</button>
                    <button id="exit">EXIT</button>
                </form>
            </div>
   
        )
    }

}