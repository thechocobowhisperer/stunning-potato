import React, {Component} from 'react';
import './App.css';
import Chatter from './components/ChatInput/ChatInput';
import Conversations from './components/ChatSelect/ChatSelect'

class App extends Component {
  state = {
    conversations : [
                    {name: 'Person 1', isActive: true, messages: [
                       'Hello Person 1', 'Hi there'
                    ]}, 

                    {name: 'Person 2', isActive: false, messages: [
                       'Hello Person 2', 'Hello'
                    ]}, 

                    {name: 'Person 3', isActive: false, messages: [
                      'Hello Person 3',  'Hola'
                    ]}
    ]
  }
  whatHappened = (event) => {
    const convName = this.state.conversations.map((conv, index) => {
      return (<p key={index} id={index}>{conv.name}</p>
  )})
    const dispMsgs = this.state.conversations.map((conv) => {return (
      conv.messages.map((msgs, index)=>{
        if (conv.isActive) {
          return <p key={index} id={conv.name}>{msgs}</p>
        }
        })
      
    )})

    console.log(dispMsgs)
  }
  
  
  render () {
    const convName = this.state.conversations.map((conv, index) => {
      return (<p key={index} id={index}>{conv.name}</p>
  )})
  const dispMsgs = this.state.conversations.map((conv) => {return (
    conv.messages.map((msgs, index)=>{
      if (conv.isActive) {
        return <p key={index} id={conv.name}>{msgs}</p>
      }
      })
    
  )})
    return (
      
      <div className="container">
        <div className='row'>
          <div className='col-4'>
            <Conversations>
              <button onClick={(event) => this.whatHappened(event)}>Show me the console!</button>
              <h2>
                Direct Messages
              </h2>
              {convName}
            </Conversations>
          </div>
          <div className='col-8'>
            <Chatter>
              {dispMsgs}
            </Chatter>
          </div>
        </div>
      </div>
    );
  } 
}
  

export default App;
