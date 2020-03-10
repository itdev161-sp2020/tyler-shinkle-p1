import React from 'react';

export default class Modal extends React.Component{
    render(){
        return(
            <div className="modal">
                <p>Share something!</p>
                <form action="post">
                    <input type="text" id="messageBox"/>
                </form>
            </div>
   
        )
    }

}