import React, {Component} from 'react';
import './App.css';
import Chatter from './components/ChatInput/ChatInput';
import Conversations from './components/ChatSelect/ChatSelect'

class App extends Component {
  state = {}

  render () {
    return (
      <div className="container">
        <div className='row'>
          <div className='col-4'>
            <Conversations/>
          </div>
          <div className='col-8'>
            <Chatter />
          </div>
        </div>
      </div>
    );
  } 
}
  

export default App;
