import React, {Component} from 'react';
import './App.css';
import Chatter from './components/ChatInput/ChatInput';
import Conversations from './components/ChatSelect/ChatSelect'

class App extends Component {
  state = {
    conversations : [
                    {name: 'Person 1'}, 
                    {name: 'Person 2'}, 
                    {name: 'Person 3'}
    ]
  }
  whatHappened = (event) => {
    console.log(this.state.conversations)
  }
  
  
  render () {
    const convPerson = this.state.conversations.map((person, index) => {
      return (<div><p key={index} id={index}>{person.name}</p></div>
  )})
      
    return (
      
      <div className="container">
        <div className='row'>
          <div className='col-4'>
            <Conversations>
              <button onClick={(event) => this.whatHappened(event)}>Show me the console!</button>
              {convPerson}
            </Conversations>
          </div>
          <div className='col-8'>
            <Chatter>
              <p>Here is where the messages will be displayed</p>
              <p>Here is where the messages will be displayed</p>
              <p>Here is where the messages will be displayed</p>
              <p>Here is where the messages will be displayed</p>
            </Chatter>
          </div>
        </div>
      </div>
    );
  } 
}
  

export default App;
