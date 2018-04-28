import React, { Component } from 'react';
import FunctionalButton from '../../basic_components/functional_button'
import ClassButton from '../../basic_components/class_button'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FunctionalButton title="Functional" action={() => { console.log('test funct') }} />
        <ClassButton title="Class" action={() => { console.log('test class') }} />
      </div>
    );
  }
}

export default App;
