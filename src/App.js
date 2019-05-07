import React, {Component} from 'react';
import './App.css';
import Chatter from './components/ChatInput/ChatInput';

class App extends Component {
  state = {}

  render () {
    return (
      <div className="container">
        <p>Text</p>
        <Chatter />
      </div>
    );
  } 
}
  

export default App;
