import React, {Component} from 'react';
import './App.css';
import Chatter from './components/ChatInput/ChatInput';
import Conversations from './components/ChatSelect/ChatSelect'

class App extends Component {
  state = {
    conversations : [
                    {name: 'Person 1', 
                    messages: [
                       {msg:'Hello, Person 1', sender: 'You'}, {msg:'Hi there', sender:'Person 1'}
                    ]}, 

                    {name: 'Person 2', 
                    messages: [
                       {msg:'Hello, Person 2', sender: 'You'}, {msg:'Hello', sender: 'Person 2'}
                    ]}, 

                    {name: 'Person 3', 
                    messages: [
                      {msg:'Hello, Person 3', sender: 'You'},  {msg:'Hola', sender: 'Person 3'}
                    ]}
    ],
    currentConversation : 'Person 1',
    currentSpeaker : 'You',
    currentMsg: ''
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
    const currMsg = this.state.currentMsg
    const conversations = this.state.conversations;
    const msgArray = conversations.map((messages) => {
      if (messages.name === this.state.currentConversation) {
        console.log(messages)      }
    })
     chatSelect.push(this.state.currentMsg)
     console.log(msgArray.value);
     this.setState({chatSelect : msgArray})

    
  }
        
  
  setMsg = (event) => {
    let msgCollect = {msg: event.target.value, sender: this.state.currentSpeaker}
    console.log(msgCollect)
    this.setState({currentMsg : msgCollect})
  }

  sendMsg = (event) => {
    const conversations = this.state.conversations;
    const msgArray = conversations.map((convo) => {
      if (convo.name === this.state.currentConversation) {
        convo.messages.push(this.state.currentMsg)
        
      }
    })
    this.setState({messages : msgArray})
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
      const speaker = 'Send as ' + this.state.currentSpeaker

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
            <Chatter suggestion= {speaker} setMsg= {(msg) => this.setMsg(msg)} doThing={(event) => this.sendMsg(event)}>
              {dispMsgs}
            </Chatter>
          </div>
        </div>
      </div>
    );
  } 
}
  

export default App;
