import React, {Component} from 'react';
import './App.css';
import Chatter from './components/ChatInput/ChatInput';
import Conversations from './components/ChatSelect/ChatSelect'

class App extends Component {
  state = {
    conversations : [
                    {name: 'Person 1', 
                    isActive: true, 
                    messages: [
                       {msg:'Hello, Person 1', sender: 'You'}, {msg:'Hi there', sender:'Person 1'}
                    ]}, 

                    {name: 'Person 2', 
                    isActive: false, 
                    messages: [
                       {msg:'Hello, Person 2', sender: 'You'}, {msg:'Hello', sender: 'Person 2'}
                    ]}, 

                    {name: 'Person 3', 
                    isActive: false, 
                    messages: [
                      {msg:'Hello, Person 3', sender: 'You'},  {msg:'Hola', sender: 'Person 3'}
                    ]}
    ],
    currentConversation : 'Person 1'
  }
  whatHappened = (event) => {
    const convSelect = this.state.conversations
    const chatSelect = convSelect[0].messages
    const sendSelect = chatSelect[0].sender
    const msgSelect = chatSelect[0].msg
    const dispMsgs = this.state.conversations.map((conv) => {return (
      conv.messages.map((msgs, index)=>{
        if (conv.isActive) {
          return <p key={index} id={conv.name}>{msgs.sender} : {msgs.msg}</p>
        }

       })
     
    )})

    console.log(this.state.conversations.map((conv, index) => {
      return (<p key={index} id={index} onClick={() => this.setState({currentConversation : this.conv.name})}>{conv.name}</p>
  )}));
  }
        
  
  sendMsg = (event) => {
    let message = []
    console.log()
    this.setState({conversations : message})
  }
  render () {
    const convName = this.state.conversations.map((conv, index) => {
      return (<p key={index} id={index} onClick={() => this.setState({currentConversation : conv.name})}>{conv.name}</p>
  )})
  const dispMsgs = this.state.conversations.map((conv) => {return (
     conv.messages.map((msgs, index)=>{
      if (conv.name === this.state.currentConversation) {
         return <p key={index} id={conv.name}>{msgs.sender} : {msgs.msg}</p>
      }
      })
    
  )})
    return (
      
      <div className="container">
        <div className='row'>
          <div className='col-4'>
            <Conversations>
              {<button onClick={(event) => this.whatHappened(event)}>Show me the console!</button> }
              <h2>
                Direct Messages
              </h2>
              {convName}
            </Conversations>
          </div>
          <div className='col-8'>
            <Chatter suggestion='Send as X'>
              {dispMsgs}
            </Chatter>
          </div>
        </div>
      </div>
    );
  } 
}
  

export default App;
